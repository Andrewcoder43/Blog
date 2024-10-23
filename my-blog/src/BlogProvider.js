import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const data = [
    {
        id: 1,
        category: 'Quality of Life',
        image: '/image/46-africa-life-expectancy.png',
        title: "The Rise of Vertical Gardens",
        author: "Andrew Hollas",
        post: "<p>Explore how vertical gardens are transforming urban spaces, providing fresh produce and improving air quality in cities.</p>",
        date: "2024-10-05",
    },
    {
        id: 2,
        category: 'Society & Community',
        image: '/image/64-billions-more-internet-access.png',
        title: "Solar-Powered Transportation Revolution",
        author: "Andrew Hollas",
        post: "<p>Discover the latest innovations in solar-powered vehicles and how they're reshaping the future of transportation.</p>",
        date: "2024-10-07",
    },
    {
        id: 3,
        category: 'Women & Girls',
        image: '/image/88-justice-for-rape.png',
        title: "The Future of Sustainable Architecture",
        author: "Andrew Hollas",
        post: "<p>Explore cutting-edge sustainable architecture practices that are redefining how we design and construct buildings.</p>",
        date: "2024-10-09",
    },
    {
        id: 4,
        category: 'Clean Energy',
        image: '/image/255-geothermal-electricity.png',
        title: "Innovations in Renewable Energy Storage",
        author: "Andrew Hollas",
        post: "<p>Discover the latest breakthroughs in renewable energy storage technologies.</p>",
        date: "2024-10-11",
    },
    {
        id: 5,
        category: 'Quality of Life',
        image: '/image/353-new-african-passport.png',
        title: "Urban Farming: The Future of Food Production",
        author: "Andrew Hollas",
        post: "<p>Learn how cities are embracing urban farming techniques to create sustainable, local food sources.</p>",
        date: "2024-10-13",
    },
    {
        id: 6,
        category: 'Society & Community',
        image: '/image/428-us-child-poverty.png',
        title: "The Rise of Eco-Friendly Fashion",
        author: "Andrew Hollas",
        post: "<p>Explore how the fashion industry is embracing sustainability and ethical practices.</p>",
        date: "2024-10-15",
    },
    {
        id: 7,
        category: 'Nature & Animals',
        image: '/image/441-land-protected.png',
        title: "Biomimicry: Nature-Inspired Innovation",
        author: "Andrew Hollas",
        post: "<p>Discover how scientists and engineers are looking to nature for inspiration in solving complex problems.</p>",
        date: "2024-10-17",
    },
    {
        id: 8,
        category: 'Health',
        image: '/image/517-tuberculosis-deaths-falling.png',
        title: "The Impact of AI on Sustainable Development",
        author: "Andrew Hollas",
        post: "<p>Explore how artificial intelligence is being leveraged to address global sustainability challenges.</p>",
        date: "2024-10-19",
    },
];

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setBlogs(data); // Use 'data' instead of 'mockBlogData'
            } catch (err) {
                console.error('Failed to fetch blogs:', err);
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []); // Add an empty dependency array

    return (
        <BlogContext.Provider value={{ blogs, loading, error }}>
            {children}
        </BlogContext.Provider>
    );
};