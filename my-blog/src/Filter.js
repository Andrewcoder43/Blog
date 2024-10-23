import React from 'react';

const categories = ['All', 'Science', 'Technology', 'Environment', 'Health', 'Culture'];

function Filter({ onFilterChange }) {
    return (
        <select onChange={(e) => onFilterChange(e.target.value)}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

export default Filter;