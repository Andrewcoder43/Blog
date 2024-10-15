import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './BlogProvider';

const SimilarArticles = ({ currentBlogId }) => {
    const { blogs } = useContext(BlogContext);

    // Function to get similar articles
    const getSimilarArticles = () => {
        return blogs
            .filter(blog => blog.id !== currentBlogId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
    };

    const similarArticles = getSimilarArticles();

    return (
        <section className="similar-articles">
            <h2>Similar Articles</h2>
            <div className="similar-articles-grid">
                {similarArticles.map(article => (
                    <div key={article.id} className="similar-article">
                        <Link to={`/blog/${article.id}`}>
                            <img src={article.image} alt={article.title} className="similar-article-image" />
                            <h3>{article.title}</h3>
                        </Link>
                        <p>{article.author} - {article.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SimilarArticles;