export const getTruncatedAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(address.length - 3)}`;
};

export const getTruncatedTitle = (title) => {
    return title.length > 15 ? `${title.slice(0, 20)}...` : title;
};

export const getCurrentDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();

    return `${day}.${month}.${year}`;
};

export const parseCandidates = (candidates) => {
    const parsedCandidates = [];

    candidates.forEach(item => {
        parsedCandidates.push({
            id: Date.now() + Math.random(),
            name: item[0],
            votes: parseInt(item[1]._hex)
        });
    });

    return parsedCandidates;
};
