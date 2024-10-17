import React from 'react';

const AboutPage = () => {
    return (
        <section className="about-section">
            <h1>About This Blog</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Welcome to our Solarpunk blog, where we explore two potential futures that humanity faces: the optimistic,
                        nature-embracing world of Solarpunk and the gritty, technology-dominated reality of Cyberpunk.
                    </p>
                    <p>
                        Our mission is to inspire and inform readers about the Solarpunk vision - a future where sustainability,
                        technology, and community harmoniously coexist. We delve into innovative solutions for a greener tomorrow,
                        showcasing how humanity can thrive in balance with nature while embracing eco-friendly technological advancements.
                    </p>
                </div>
                <div className="about-image">
                    <a href="https://github.com/Andrewcoder43" target="_blank" rel="noopener noreferrer">
                        <img src="image/profileA.png" alt="Andrew Hollas" className="profile-image" />
                    </a>
                </div>
            </div>
            <h2>Get Involved!</h2>
            <p>
                If you share our vision, we invite you to join us as a contributor. We welcome submissions from writers, artists, and
                activists who would like to share their ideas or stories with our audience. Please reach out to us at{' '}
                <a href="mailto:andyhollas67@gmail.com">andyhollas67@gmail.com</a> to discuss how you can participate.
            </p>
        </section>
    );
};


export default AboutPage;