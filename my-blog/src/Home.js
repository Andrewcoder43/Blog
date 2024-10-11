import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// Sample data for trending articles and latest posts
const trendingArticles = [
    {
        id: 1,
        title: "The Rise of Vertical Gardens",
        image: "image/beach.jpg",
        author: "Andrew Hollas",
        post: "Explore how vertical gardens are transforming urban spaces, providing fresh produce and improving air quality in cities.",
        date: "2024-10-05"
        },
        {
        id: 2,
        title: "Solar-Powered Transportation Revolution",
        image: "image/beach.jpg",
        author: "Andrew Hollas",
        post: "Discover the latest innovations in solar-powered vehicles and how they're reshaping the future of transportation.",
        date: "2024-10-07"
        },
        {
        id: 3,
        title: "Eco-Friendly Architecture Innovations",
        image: "image/beach.jpg",
        author: "Andrew Hollas",
        post: "Learn about cutting-edge sustainable architecture practices that are redefining how we design and construct buildings.",
        date: "2024-10-08"
        },
        {
        id: 4,
        title: "Community-Led Renewable Energy Projects",
        image: "image/beach.jpg",
        author: "Andrew Hollas",
        post: "See how local communities are taking charge of their energy future with innovative renewable energy initiatives.",
        date: "2024-10-09"
        }        
];

const latestPosts = [
    {
        id: 5,
        title: "The Future of Sustainable Fashion",
        image: "image/beach.jpg",
        category: "Eco-Fashion",
        post: "Explore the latest trends in sustainable fashion, from recycled materials to ethical production practices.",
        date: "2024-10-10"
    },
    {
        id: 6,
        title: "Breakthrough in Algae-Based Biofuels",
        image: "image/beach.jpg",
        category: "Alternative Energy",
        post: "Read about the recent advancements in algae-based biofuels and their potential to revolutionize the energy sector.",
        date: "2024-10-09"
    },
    {
        id: 7,
        title: "Urban Farming: Rooftop Revolution",
        image: "image/beach.jpg",
        category: "Urban Agriculture",
        post: "Discover how cities are utilizing rooftop spaces to create thriving urban farms and increase food security.",
        date: "2024-10-08"
    },
    {
        id: 8,
        title: "The Rise of Eco-Tourism",
        image: "image/beach.jpg",
        category: "Sustainable Travel",
        post: "Learn about the growing trend of eco-tourism and how it's promoting environmental conservation and cultural preservation.",
        date: "2024-10-07"
    },
];



const Home = () => {
    return (
        <div className="home-container">
            <section className="trending-section">
                <h2>Trending</h2>
                <div className="trending-articles">
                    {trendingArticles.map(article => (
                        <div key={article.id} className="trending-article">
                            <img src={article.image} alt={article.title} />
                            <h3>{article.title}</h3>
                            <p className="article-info">
                                <span className="category">{article.category}</span>
                                <span className="author">{article.author}</span>
                                <span className="separator"> - </span> {/* Added separator here */}
                                <span className="date">{article.date}</span>
                            </p>
                            <Link to={`/blog/${article.id}`}>Read More</Link>
                        </div>
                    ))}
                </div>
            </section>
    
            <section className="latest-posts-section">
                <h2>Latest Posts</h2>
                <div className="latest-posts">
                    {latestPosts.map(post => (
                        <div key={post.id} className="latest-post">
                            <img src={post.image} alt={post.title} />
                            <div className="post-content">
                                <h3>{post.title}</h3>
                                <p className="post-info">
                                    <span className="category">{post.category}</span>
                                    <span className="date">Published on: {post.date}</span>
                                </p>
                                <Link to={`/blog/${post.id}`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
    
    

export default Home;