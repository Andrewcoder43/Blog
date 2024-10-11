import React from 'react';

const About = () => {
    return (
        <div className="about-section">
            <h1>About</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Welcome to our Solarpunk Blog, where we explore two potential futures that humanity faces: the optimistic, nature-embracing world of Solarpunk and the gritty, tech-dominated reality of Cyberpunk. </p>
                    <p>
                        Our mission is to inspire and inform readers about the Solarpunk vision - a future where sustainability, technology, and community harmoniously coexist. We delve into innovative solutions for a greener tomorrow, showcasing how humanity can thrive in balance with nature while embracing eco-friendly technological advancements.
                    </p>
                </div>
                <div className="about-image">
                    <a href="https://github.com/Andrewcoder43" target="_blank" rel="noopener noreferrer">
                        <img src="image/profileA.png" alt="A" className="profile-image" />
                    </a>
                </div>
            </div>
            <h2>Get Involved!</h2>
            <p>
                We welcome contributions from writers, artists, and activists who share our vision. If you have ideas or stories
                you'd like to share, please reach out to us at <a href="mailto:andyhollas67@gmail.com">andyhollas67@gmail.com</a>.
            </p>
        </div>
    );
};

export default About;