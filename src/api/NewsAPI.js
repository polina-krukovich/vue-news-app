const URL = 'https://newsapi.org/v2/';
const KEY = 'apiKey=8a109737ab0f48d3bb8f5f9c365479fc';

export const sourcesRequest = () => {
    return new Request(`${URL}sources?language=en&${KEY}`);
};

export const topNewsRequest = (page) => {
    return new Request(`${URL}top-headlines?language=en&pageSize=5&page=${page}&${KEY}`);
};

export const sourceNewsRequest = (source, page) => {
    return new Request(`${URL}everything?language=en&sources=${source}&pageSize=5&page=${page}&${KEY}`);
};

export const searchNewsRequest = (q, page) => {
    return new Request(`${URL}everything?language=en&q=${q}&pageSize=5&page=${page}&${KEY}`);
};
