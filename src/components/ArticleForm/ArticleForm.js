import React, { useState, useEffect } from 'react';
import './ArticleForm.css';

const ArticleForm = ({ onSubmit, currentArticle, clearCurrentArticle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (currentArticle) {
            setTitle(currentArticle.title);
            setContent(currentArticle.content);
            setAuthor(currentArticle.author);
        } else {
            setTitle('');
            setContent('');
            setAuthor('');
        }
    }, [currentArticle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: currentArticle?.id, title, content, author });
        setTitle('');
        setContent('');
        setAuthor('');
        clearCurrentArticle(); // Limpiar el artículo actual después de enviar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{currentArticle ? 'Edit Article' : 'Create Article'}</h2> {/* Título condicional */}
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <button type="submit">{currentArticle ? 'Update Article' : 'Create Article'}</button>
        </form>
    );
};

export default ArticleForm;