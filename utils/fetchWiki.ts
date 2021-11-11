/**
 *  Fetch all data from MediaWiki API
 */
import pLimit from 'p-limit';
import fs from 'fs';
import { wikiFilters } from './generic-wiki-icons';

export interface CategoryDetails {
    id: number;
    name: string;
    type: string;
};

export interface Category extends CategoryDetails {
    hobbies: Hobby[];
};

interface HobbyDetails {
    id: number;
    categoryId: number;
    title: string;
    urlTitle: string;
};

interface HobbyDescription {
    summary: string;
    history: string;
    imageUrl: string;
};

export interface Hobby extends HobbyDetails, HobbyDescription {};


// assigns a type to indoor/outdoor categories
const getType = (id: number) => {
    let type = '';
    if (id === 5 || id === 6) {
        type = 'Collection hobbies';
    } else if (id === 8 || id === 9) {
        type = 'Competitive hobbies';
    } else if (id === 11 || id === 12) {
        type = 'Observation hobbies';
    };
    return type;
};

// assigns a unique index to each hobby
const getIndex = (function(n) {
    return function() {
        n++;
        return n;
    };
}(-1));

// Fetch hobby categories
export async function getCategories() {
    const categories: CategoryDetails[] = [];
     const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/mobile-sections/List_of_hobbies', options);
        const resJSON = await res.json() as any;
        const sections = resJSON.lead.sections.filter((section: {id: number, line: string}) => ![0, 13, 14].includes(section.id));
        for (let section of sections) {
            categories.push({
                id: section.id,
                name: section.line,
                type: getType(section.id)
            });
        };
        fs.writeFileSync('./prisma/data/categories.json', JSON.stringify(categories, null, 2));
        return categories;
    } catch (error) {
        console.error(error);
    };
};

// Fetch all hobbies
export async function getHobbyDetails() {
    const hobbies: HobbyDetails[] = [];
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch('https://en.wikipedia.org/api/rest_v1/page/mobile-sections/List_of_hobbies', options);
        const resJSON = await res.json() as any;
        const sections = resJSON.remaining.sections.filter((section: {id: number, text: string}) => ![0, 4, 7, 10, 13, 14].includes(section.id));
        for (let section of sections) {
            const matchedHobbies = section.text.match(/href="\/wiki([\s\S]*?)"\stitle=([\s\S]*?)a>/g);
            for (let hobby of matchedHobbies) {
                let hobbyTitle: string = hobby.slice(hobby.indexOf('>') + 1, hobby.indexOf('<')).replace(/&amp;/g, '&');
                hobbyTitle = hobbyTitle[0].toUpperCase() + hobbyTitle.slice(1);
                let url: string = hobby.split('"')[1].slice(6);
                if (url.includes('_')) {
                    url = url.replace(/_[a-zA-Z]/g, str => str.toLowerCase());
                };
                hobbies.push({
                    id: getIndex(), 
                    categoryId: section.id, 
                    title: hobbyTitle,
                    urlTitle: url
                });
            };
        };
        return hobbies;
    } catch (error) {
        console.error(error);
    };
};

// Fetch summary of each hobby
async function getSummary(hobby: HobbyDetails) {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch(`http://en.wikipedia.org/w/api.php?format=json&formatversion=2&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=${hobby.urlTitle}&redirects=`, options);
        const resJSON = await res.json() as any;
        const pages = resJSON.query.pages;
        for (let page of pages) {
            return page.extract;
        };
    } catch (error) {
        console.error(error);
    };
};

// Fetch history of each hobby
async function getHistory(hobby: HobbyDetails) {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch(`http://en.wikipedia.org/w/api.php?format=json&formatversion=2&action=query&prop=extracts&exlimit=max&explaintext&titles=${hobby.urlTitle}&redirects=`, options);
        const resJSON = await res.json() as any;
        const pages = resJSON.query.pages;
        for (let page of pages) {
            const history = page.extract.match(/(?<===\sHistory\s==)[\s\S]*?(?=\n\n\n==\s)/);
            return history ? history[0] : '';
        };
    } catch (error) {
        console.error(error);
    };
};

// Fetch image of each hobby
async function getImage(hobby: HobbyDetails)  {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch(`http://en.wikipedia.org/w/api.php?action=query&titles=${hobby.urlTitle}&prop=images|pageimages&format=json&formatversion=2&pithumbsize=300&redirects`, options);
        const resJSON = await res.json() as any;
        const pages = resJSON.query.pages;
        let imageUrl: string = '';
        for (let page of pages) {
            if (page.thumbnail) {
                imageUrl = page.thumbnail.source;
            } else if (page.images) {
                const filteredImages = page.images.filter((img: {ns: number, title: string}) => 
                    !wikiFilters.some(filter => img.title.toLowerCase().includes(filter.toLowerCase()))
                );
                if (filteredImages && filteredImages[0]?.title) {
                    imageUrl = await getImageUrl(filteredImages[0].title);
                };
            };
            return imageUrl;
        };
    } catch (error) {
        console.error(error);
    };
};

// Fetch image url for hobbies that don't return a thumbnail image
export async function getImageUrl(imageTitle: string) {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
    };
    try {
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${imageTitle}&prop=imageinfo&iiprop=url&format=json&formatversion=2`, options);
        const resJSON = await res.json() as any;
        const pages = resJSON.query.pages;
        for (let page of pages) {
            return page.imageinfo[0]?.url ? page.imageinfo[0].url : '';
        };
    } catch (error) {
        console.error(error);
    };
};

async function getHobby(hobby: HobbyDetails) {
    const image = await getImage(hobby);
    const summary = await getSummary(hobby);
    const history = await getHistory(hobby);
    const hobbyData: Hobby = {
        id: hobby.id,
        categoryId: hobby.categoryId,
        title: hobby.title,
        urlTitle: hobby.urlTitle,
        summary: summary,
        history: history,
        imageUrl: image || ''
    };
    return hobbyData;
};

// Add image, summary, and history to each hobby
export async function getHobbies(hobbies: HobbyDetails[]) {
    try {
        const limit = pLimit(3);
        const promises = hobbies.map((hobby) => {
            return limit(() => getHobby(hobby));
        });
        const result = await Promise.all(promises);
        fs.writeFileSync('./prisma/data/hobbies.json', JSON.stringify(result, null, 2));
        return result;
    } catch (error) {
        console.error(error);
    };
};



