import React, { createContext, useState, useEffect } from 'react';

// Create the BlogContext
export const BlogContext = createContext();

// Sample data for blogs
const data = [
    {
        id: 1,
        category: 'Quality of Life',
        image: '/image/46-africa-life-expectancy.png',
        title: "Africa Life expectancy",
        author: "Andrew Hollas",
        post: "<p>Life expectancy in Africa has seen significant improvements over the past two decades, largely attributed to enhanced healthcare access and economic growth.</p>",
        date: "2024-10-05",
    },
    {
        id: 2,
        category: 'Society & Community',
        image: '/image/64-billions-more-internet-access.png',
        title: "Billions more internet access",
        author: "Andrew Hollas",
        post: "<p>Discover the latest innovations in expanding internet access to underserved communities. Recent federal initiatives aim to bridge the digital divide, providing nearly $1 billion in funding specifically for enhancing broadband infrastructure on Tribal Lands. </p>",
        date: "2024-10-07",
    },
    {
        id: 3,
        category: 'Women & Girls',
        image: '/image/88-justice-for-rape.png',
        title: "Justice for rapes",
        author: "Andrew Hollas",
        post: "<p>Justice for rape survivors remains a pressing issue, as many face significant barriers within the legal system. The current framework often prioritizes the credibility of victims over the accountability of perpetrators, leading to a culture of disbelief and stigma. Advocacy for reform is essential to create a justice system that truly supports survivors and holds offenders accountable.</p>",
        date: "2024-10-09",
    },
    {
        id: 4,
        category: 'Clean Energy',
        image: '/image/255-geothermal-electricity.png',
        title: "Geothermal electricity",
        author: "Andrew Hollas",
        post: "<p>Geothermal electricity is a sustainable energy solution that harnesses the Earth's natural heat, providing a reliable power source. This technology not only reduces greenhouse gas emissions but also contributes to energy independence and security. As investments in geothermal infrastructure increase, it has the potential to play a crucial role in the transition to renewable energy sources.</p>",
        date: "2024-10-11",
    },
    {
        id: 5,
        category: 'Quality of Life',
        image: '/image/353-new-african-passport.png',
        title: "New  African Passport",
        author: "Andrew Hollas",
        post: "<p>The New African Passport initiative aims to enhance mobility across the continent, fostering greater economic integration and cultural exchange. By simplifying travel regulations, it encourages trade and tourism, ultimately benefiting local economies. This passport symbolizes a commitment to unity and collaboration among African nations, paving the way for a more connected future.</p>",
        date: "2024-10-13",
    },
    {
        id: 6,
        category: 'Society & Community',
        image: '/image/428-us-child-poverty.png',
        title: "Us child poverty",
        author: "Andrew Hollas",
        post: "<p>Addressing child poverty requires comprehensive strategies that encompass education, healthcare, and family support systems. Recent studies highlight the long-term impacts of poverty on children's development, emphasizing the need for immediate action to break the cycle. Community engagement and policy reform are vital in creating sustainable solutions that uplift families and ensure every child has access to opportunities.</p>",
        date: "2024-10-15",
    },
    {
        id: 7,
        category: 'Nature & Animals',
        image: '/image/441-land-protected.png',
        title: "Land protected",
        author: "Andrew Hollas",
        post: "<p>Protecting land is crucial for maintaining biodiversity and combating climate change, as healthy ecosystems provide essential services to humanity. Conservation efforts must be prioritized to safeguard natural habitats from urbanization and industrial development. By implementing effective land management practices, we can ensure that future generations inherit a thriving planet.</p>",
        date: "2024-10-17",
    },
    {
        id: 8,
        category: 'Health',
        image: '/image/517-tuberculosis-deaths-falling.png',
        title: "Tuberculosis deaths falling",
        author: "Andrew Hollas",
        post: "<p>The decline in tuberculosis deaths is a significant public health achievement, reflecting improvements in diagnosis and treatment strategies. Continued investment in healthcare infrastructure and education is necessary to sustain this progress and combat emerging drug-resistant strains. Global collaboration is essential to ensure that all populations have access to effective TB prevention and care.</p>",
        date: "2024-10-19",
    },
];

// Create the BlogProvider component
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
                setBlogs(data); // Set the blogs data
            } catch (err) {
                console.error('Failed to fetch blogs:', err);
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <BlogContext.Provider value={{ blogs, loading, error }}>
            {children}
        </BlogContext.Provider>
    );
};