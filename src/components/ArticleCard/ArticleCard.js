import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article, onEdit }) => {
    return (
        <div className="article-card">
            <h2>{article.title}</h2>
            <p className="article-content">{article.content}</p>
            <p className="article-author"><strong>{article.author}</strong></p>
            <button className="edit-button" onClick={() => onEdit(article)}>
                Editar
            </button>
        </div>
    );
};

export default ArticleCard;