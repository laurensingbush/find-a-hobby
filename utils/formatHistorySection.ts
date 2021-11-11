export default function formatHistorySection(history: string) {
    if (history.includes('===')) {
        const historySection: {heading: string, level: number, content?: string}[] = [];
        const sections = history.split('\n\n\n');
        for (let index = 1; index < sections.length; index++) {
            const headingLevel = sections[index].indexOf(' ');
            const section = sections[index].split('='.repeat(headingLevel));
            historySection.push({
                heading: section[1]?.trim(),
                level: headingLevel,
                content: section[2]?.slice(section[2].search(/[a-z/A-Z]/))
            });
        };
        return historySection;
    } else {
        return history.slice(history.search(/[a-z/A-Z]/));
    };
};