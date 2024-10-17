import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

const mockBlogData = [
    {
        id: 1,
        title: "The Rise of Vertical Gardens",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Explore how vertical gardens are transforming urban spaces, providing fresh produce and improving air quality in cities.</p><p>Vertical gardens are revolutionizing urban spaces by transforming barren walls and unused vertical surfaces into lush, productive green areas. These innovative installations are addressing multiple challenges faced by modern cities while providing numerous benefits to urban dwellers.</p>",
        date: "2024-10-05",
        category: "Environment",
    },
    {
        id: 2,
        title: "Solar-Powered Transportation Revolution",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Discover the latest innovations in solar-powered vehicles and how they're reshaping the future of transportation.</p><p>Solar-powered transportation is gaining momentum as a sustainable alternative to traditional fossil fuel-based vehicles. From cars to buses and even planes, solar technology is being integrated into various modes of transport, promising a cleaner and more energy-efficient future.</p>",
        date: "2024-10-07",
        category: "Technology",
    },
    {
        id: 3,
        title: "The Future of Sustainable Architecture",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Explore cutting-edge sustainable architecture practices that are redefining how we design and construct buildings.</p><p>From green roofs to passive solar design, architects are embracing innovative techniques to create buildings that are not only aesthetically pleasing but also environmentally responsible and energy-efficient.</p>",
        date: "2024-10-09",
        category: "Architecture",
    },
    {
        id: 4,
        title: "Innovations in Renewable Energy Storage",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Discover the latest breakthroughs in renewable energy storage technologies.</p><p>As we transition to cleaner energy sources, efficient storage solutions are becoming increasingly crucial. From advanced batteries to innovative thermal storage systems, these technologies are paving the way for a more sustainable and reliable energy future.</p>",
        date: "2024-10-11",
        category: "Technology",
    },
    {
        id: 5,
        title: "Urban Farming: The Future of Food Production",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Learn how cities are embracing urban farming techniques to create sustainable, local food sources.</p><p>Urban farming is transforming cityscapes, turning rooftops, vacant lots, and even vertical spaces into productive agricultural areas. This movement is not only providing fresh, local produce but also fostering community engagement and improving urban biodiversity.</p>",
        date: "2024-10-13",
        category: "Agriculture",
    },
    {
        id: 6,
        title: "The Rise of Eco-Friendly Fashion",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Explore how the fashion industry is embracing sustainability and ethical practices.</p><p>From recycled materials to zero-waste designs, fashion brands are increasingly focusing on reducing their environmental impact. This shift is not only changing how clothes are made but also influencing consumer behavior and promoting a more sustainable lifestyle.</p>",
        date: "2024-10-15",
        category: "Fashion",
    },
    {
        id: 7,
        title: "Biomimicry: Nature-Inspired Innovation",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Discover how scientists and engineers are looking to nature for inspiration in solving complex problems.</p><p>Biomimicry is an approach to innovation that seeks sustainable solutions by emulating nature's time-tested patterns and strategies. From more efficient wind turbines inspired by humpback whale fins to self-cleaning surfaces modeled after lotus leaves, biomimicry is driving innovation across various fields.</p>",
        date: "2024-10-17",
        category: "Science",
    },
    {
        id: 8,
        title: "The Impact of AI on Sustainable Development",
        image: `${process.env.PUBLIC_URL}/image/beach.jpg`,
        author: "Andrew Hollas",
        post: "<p>Explore how artificial intelligence is being leveraged to address global sustainability challenges.</p><p>From optimizing renewable energy systems to predicting climate change impacts, AI is proving to be a powerful tool in the fight against environmental degradation. This technology is helping us make more informed decisions and develop innovative solutions for a sustainable future.</p>",
        date: "2024-10-19",
        category: "Technology",
    },
];
// ... add more blog posts as needed

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
                setBlogs(mockBlogData);
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