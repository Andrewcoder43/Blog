import React from 'react';

function ImageCard({ item }) {
    return (
        <div className="image-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
        </div>
    );
}

export default ImageCard;