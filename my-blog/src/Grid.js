import React, { useState } from 'react';
import Filter from './Filter';
import ImageCard from './ImageCard';
import './App.css';

const data = [
    {
        id: 1,
        category: 'Quality of Life',
        image: '/images/46-africa-life-expectancy.png',
        title: 'Africa Life Expectancy',
    },
    {
        id: 2,
        category: 'Society & Community',
        image: '/images/64-billions-more-internet-access.png',
        title: 'Billions More Internet Access',
    },
    {
        id: 3,
        category: 'Women & Girls',
        image: '/images/88-justice-for-rape.png',
        title: 'Justice for Rape Victims',
    },
    {
        id: 4,
        category: 'Clean Energy',
        image: '/images/255-geothermal-electricity.png',
        title: 'Geothermal Electricity',
    },
    {
        id: 5,
        category: 'Quality of Life',
        image: '/images/353-new-african-passport.png',
        title: 'New African Passport',
    },
    {
        id: 6,
        category: 'Society & Community',
        image: '/images/428-us-child-poverty.png',
        title: 'US Child Poverty',
    },
    {
        id: 7,
        category: 'Nature & Animals',
        image: '/images/441-land-protected.png',
        title: 'Land Protected',
    },
    {
        id: 8,
        category: 'Health',
        image: '/images/517-tuberculosis-deaths-falling.png',
        title: 'Tuberculosis Deaths Falling',
    },
    {
        id: 9,
        category: 'Clean Energy',
        image: '/images/576-us-renewables-pledges.png',
        title: 'US Renewables Pledges',
    },
    {
        id: 10,
        category: 'Health',
        image: '/images/1110-tb-curable.png',
        title: 'TB Curable',
    },
    {
        id: 11,
        category: 'Eco & Climate',
        image: '/images/1159-bee-friendly-insecticide.png',
        title: 'Bee-Friendly Insecticide',
    },
    {
        id: 12,
        category: 'Recycling & Waste Management', // Assuming this aligns with your categories
        image: '/images/1181-us-recycling.png',
        title: 'US Recycling Efforts',
    },
    {
        id: 13,
        category: 'Health', // Assuming this aligns with your categories
        image: '/images/1228-children-pneumonia.png',
        title: 'Children Pneumonia Awareness',
    },
];

function Grid() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory === 'All'
        ? data
        : data.filter(item => item.category === selectedCategory);

    return (
        <div className="grid-container">
            <div className="filter-grid">
                <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="image-grid">
                {filteredData.map(item => (
                    <ImageCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Grid;