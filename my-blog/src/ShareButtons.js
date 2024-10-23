import React from 'react';
import { FaLink, FaFacebook, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

const ShareButtons = ({ url, title }) => {
    const copyToClipboard = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    };

    return (
        <div className="share-buttons">
            <h3>Share This Article</h3>
            <div className="share-icons">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, no-script-url */}
                <a href="javascript:void(0)" onClick={copyToClipboard} aria-label="Copy link">
                    <FaLink style={{ color: '#1DA1F2' }} />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <FaFacebook style={{ color: '#1877F2' }} />
                </a>
                <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=&description=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest">
                    <FaPinterest style={{ color: '#E60023' }} />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                    <FaXTwitter style={{ color: '#000000' }} />
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`} aria-label="Share via Email">
                    <MdEmail style={{ color: '#000000', backgroundColor: '#D3D3D3', borderRadius: '50%', padding: '2px' }} />
                </a>
            </div>
        </div>
    );
};

export default ShareButtons;