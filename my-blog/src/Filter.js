// src/Filter.js
import React from 'react';
import './App.css';

const categories = [
    'All', // Adding 'All' as a category for resetting
    'Quality of Life',
    'Society & Community',
    'Women & Girls',
    'Clean Energy',
    'Nature & Animals',
    'Health',
    'Conflict & Crime',
    'Misc'
];

function Filter({ selectedCategory, onFilterChange }) {
    return (
        <div className="filter-container">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => {
                        // Toggle logic: if the selected category is clicked again, set it to null
                        onFilterChange(selectedCategory === category ? null : category);
                    }}
                    className={selectedCategory === category ? 'active' : ''} // Optional: Add active class for styling
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Filter;