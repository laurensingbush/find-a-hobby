import fs from 'fs';
import {getHobbyDetails, getHobbies, getCategories} from '../fetchWiki';

const main = async () => {
    const categories = await getCategories();
    const hobbyDetails = await getHobbyDetails();
    const hobbies = await getHobbies(hobbyDetails ?? []);
 
    fs.writeFileSync('./categories.json', JSON.stringify(categories, null, 2));
    fs.writeFileSync('./hobbies.json', JSON.stringify(hobbies, null, 2));
};

main().then(() => console.log('Done.'));

