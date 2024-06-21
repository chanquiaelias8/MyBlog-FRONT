import React, { useState, useEffect } from 'react';
import ArticleForm from './components/ArticleForm/ArticleForm';
import ArticleList from './components/ArticleList/ArticleList';
import { fetchArticles, createArticle, updateArticle } from './services/Api';
import '../src/assets/styles/App.css';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [currentArticle, setCurrentArticle] = useState(null);

    useEffect(() => {
        fetchArticles().then(data => setArticles(data));
    }, []);

    const saveArticle = (article) => {
        if (article.id) {
            updateArticle(article).then(updatedArticle => {
                setArticles(articles.map(a => (a.id === updatedArticle.id ? updatedArticle : a)));
                setCurrentArticle(null);
            });
        } else {
            createArticle(article).then(newArticle => setArticles([...articles, newArticle]));
        }
    };

    const editArticle = (article) => {
        setCurrentArticle(article);
    };

    return (
        <div className="App">
            <h1>My Blog</h1>
            <ArticleForm 
                onSubmit={saveArticle} 
                currentArticle={currentArticle} 
                clearCurrentArticle={() => setCurrentArticle(null)}
            />
            <ArticleList 
                articles={articles} 
                onEdit={editArticle} 
            />
        </div>
    );
};

export default App;