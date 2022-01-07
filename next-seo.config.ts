const props = () => {
    const title = 'Find-A-Hobby';
    const description = 'Find-A-Hobby is a web app that helps users discover new hobbies to enjoy in their leisure time.'
    const url = 'https://find-a-hobby.vercel.app/';
    const metaTags = [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }, {
            name: 'author',
            content: 'Lauren Singbush'
        }
    ];
    const linkTags = [
        {
            rel: 'icon',
            href: '/favicon.ico'
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180'
        },
        {
            rel: 'icon',
            href: 'favicon-32x32.png',
            sizes: '32x32'
        },
        {
            rel: 'icon',
            href: 'favicon-16x16.png',
            sizes: '16x16'
        }
    ];
    return {
        additionalMetaTags: metaTags,
        additionalLinkTags: linkTags,
        title: title,
        description: description,
        canonical: url,
        openGraph: {
            type: 'website',
            url: 'https://find-a-hobby.vercel.app/',
            site_name: 'Find-A-Hobby',
            description: description
        }
    };
};

export default props;
