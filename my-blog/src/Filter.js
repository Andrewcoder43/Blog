import React from 'react';
import './App.css';

const categories = ['All', 'Science', 'Technology', 'Environment', 'Health', 'Culture'];

function Filter({ onFilterChange }) {
    return (
        <div className="filter-container">
            {categories.map(category => (
                <button
                    key={category}
                    className="filter-button"
                    onClick={() => onFilterChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default Filter;