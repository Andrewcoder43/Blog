import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Filter from './Filter';
import ImageCard from './ImageCard';
import './App.css';

const data = [
    {
        id: 1,
        category: 'Quality of Life',
        image: '/image/46-africa-life-expectancy.png',
    },
    {
        id: 2,
        category: 'Society & Community',
        image: '/image/64-billions-more-internet-access.png',
    },
    {
        id: 3,
        category: 'Women & Girls',
        image: '/image/88-justice-for-rape.png',
    },
    {
        id: 4,
        category: 'Clean Energy',
        image: '/image/255-geothermal-electricity.png',
    },
    {
        id: 5,
        category: 'Quality of Life',
        image: '/image/353-new-african-passport.png',
    },
    {
        id: 6,
        category: 'Society & Community',
        image: '/image/428-us-child-poverty.png',
    },
    {
        id: 7,
        category: 'Nature & Animals',
        image: '/image/441-land-protected.png',
    },
    {
        id: 8,
        category: 'Health',
        image: '/image/517-tuberculosis-deaths-falling.png',
    },
    {
        id: 9,
        category: 'Clean Energy',
        image: '/image/576-us-renewables-pledges.png',
    },
    {
        id: 10,
        category: 'Health',
        image: '/image/1110-tb-curable.png',
    },
    {
        id: 11,
        category: 'Misc', // Changed from Eco & Climate to Misc
        image: '/image/1159-bee-friendly-insecticide.png',
    },
    {
        id: 12,
        category: 'Misc', // Changed from Recycling & Waste Management to Misc
        image: '/image/1181-us-recycling.png',
    },
    {
        id: 13,
        category: 'Health', // This is acceptable
        image: '/image/1228-children-pneumonia.png',
    },
];

function Grid() {
    const [selectedCategory, setSelectedCategory] = useState(null); // Start with no selection
    const navigate = useNavigate(); // Initialize navigate

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = !selectedCategory || selectedCategory === 'All'
        ? data
        : data.filter(item => item.category === selectedCategory);

    const handleImageClick = (id) => {
        navigate(`/blog/${id}`); // Navigate to the blog article using the ID
    };

    return (
        <div className="grid-container">
            <div className="filter-grid">
                <Filter selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
            </div>
            <div className="image-grid">
                {filteredData.map(item => (
                    <ImageCard
                        key={item.id}
                        item={item}
                        onClick={() => handleImageClick(item.id)} // Directly navigate on click
                    />
                ))}
            </div>
        </div>
    );
}

export default Grid;