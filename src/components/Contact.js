import React from 'react';

import resume from '../images/TheodoreAyoub.pdf';

function Contact() {
    return (
        <div>
        <section className="container">
            <a id="contact-me" />
            <div className="title">Contact Me</div>
            <ul>
            <li>315-939-9597</li>
            <li>theodore.ayoub@gmail.com</li>
            <li><a href="https://github.com/tenues0">Github</a></li>
            <li><a href="https://www.linkedin.com/in/theodore-ayoub-iii-07610922/">LinkedIn</a></li>
            </ul>
        </section>
        <section className="container">
            <a id="resume" />
            <div className="title">Resume</div>
            <ul>
            <li><a href={resume} target="_blank" rel="noreferrer">Resume Link</a></li>
            </ul>
        </section>
        </div>
    );
}

export default Contact;