const API_URL = 'http://localhost:8080/article';

export const fetchArticles = () => {
    return fetch(API_URL).then(response => response.json());
};

export const createArticle = (article) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    }).then(response => response.json());
};

export const updateArticle = (article) => {
    return fetch(`${API_URL}/${article.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    }).then(response => response.json());
};