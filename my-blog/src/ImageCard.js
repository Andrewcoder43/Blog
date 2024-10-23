import React from 'react';

function ImageCard({ item }) {
    return (
        <div className="grid-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
        </div>
    );
}

export default ImageCard;