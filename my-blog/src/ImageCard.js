// src/ImageCard.js
import React from 'react';

function ImageCard({ item, onClick }) {
    return (
        <div className="image-card" onClick={onClick}>
            <img src={item.image} alt={item.category} />
            {/* Optionally remove title or add it back if needed */}
        </div>
    );
}

export default ImageCard;