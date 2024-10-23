import React, { useState } from 'react';
import Filter from './Filter';
import ImageCard from './ImageCard';
import './App.css';


const data = [
    {
        id: 1,
        category: 'Science',
        image: 'https://informationisbeautiful.net/images/beautifulnews/science1.jpg',
        title: 'Amazing Science Fact 1',
    },
    {
        id: 2,
        category: 'Technology',
        image: 'https://informationisbeautiful.net/images/beautifulnews/tech1.jpg',
        title: 'Innovative Tech Development',
    },
    {
        id: 3,
        category: 'Environment',
        image: 'https://informationisbeautiful.net/images/beautifulnews/environment1.jpg',
        title: 'Environmental Breakthrough',
    },
    {
        id: 4,
        category: 'Health',
        image: 'https://informationisbeautiful.net/images/beautifulnews/health1.jpg',
        title: 'Health Discovery',
    },
    {
        id: 5,
        category: 'Culture',
        image: 'https://informationisbeautiful.net/images/beautifulnews/culture1.jpg',
        title: 'Cultural Insight',
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
        <div>
            <Filter onFilterChange={handleFilterChange} />
            <div className="grid">
                {filteredData.map(item => (
                    <ImageCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Grid;