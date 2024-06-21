import React from 'react';
import './ArticleList.css';
import ArticleCard from '../ArticleCard/ArticleCard.js';

const ArticleList = ({ articles, onEdit }) => {
    return (
        <div className="article-list">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default ArticleList;