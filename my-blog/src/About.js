import React from 'react';

const About = () => {
    return (
        <div className="about-section">
            <h1>About This Blog</h1>
            <p>
                Welcome to our Solarpunk Blog! Here, we explore the intersection of sustainability, technology, and community.
                Our mission is to inspire and inform readers about innovative solutions for a greener future.
            </p>
            <p>
                We believe in the power of collective action and creativity to address the pressing challenges of our time.
                Through articles, DIY projects, and discussions, we aim to foster a sense of hope and possibility in building
                a better world for ourselves and future generations.
            </p>
            <h2>Meet the Team</h2>
            <ul>
                <li><strong>Jane Doe</strong> - Founder & Editor</li>
                <li><strong>John Smith</strong> - Content Writer & Researcher</li>
                <li><strong>Alice Johnson</strong> - Community Engagement Coordinator</li>
            </ul>
            <h2>Get Involved!</h2>
            <p>
                We welcome contributions from writers, artists, and activists who share our vision. If you have ideas or stories
                you'd like to share, please reach out to us at <a href="mailto:contact@solarpunkblog.com">contact@solarpunkblog.com</a>.
            </p>
        </div>
    );
};

export default About;