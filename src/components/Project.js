// Project portion of the React portfolio
import React from 'react';

function Project() {    
    return (
        <section className="container">
        <a id="projects" />
        <div className="title">Projects</div>
        <section className="grid-container">
            <div className="top-project">
            <a href="https://tenues0.github.io/JS_Weather_Dashboard/">
                <img src="https://tenues0.github.io/Portfolio/assets/weatherdash.png" alt="weather-dash-screenshot" /></a>
            <a href="https://github.com/tenues0/JS_Weather_Dashboard"><button className="button-text">Github Repo</button></a>
            <a href="https://tenues0.github.io/JS_Weather_Dashboard/"><button className="button2-text">Website Link</button></a>
            </div>
            <div className="grid-item">
            <a href="https://tenues0.github.io/JS_password_gen/">
                <img src="https://tenues0.github.io/Portfolio/assets/password_pic.png" alt="password-generator-screenshot" /></a>
            <a href="https://github.com/tenues0/JS_password_gen"><button className="button-text">Github Repo</button></a>
            <a href="https://tenues0.github.io/JS_password_gen/"><button className="button2-text">Website Link</button></a>
            </div>
            <div className="grid-item">
            <a href="https://tenues0.github.io/JS_Code_Quiz/">
                <img src="https://tenues0.github.io/Portfolio/assets/code_quiz.png" alt="code-quiz-screenshot" /></a>
            <a href="https://github.com/tenues0/JS_Code_Quiz"><button className="button-text">Github Repo</button></a>
            <a href="https://tenues0.github.io/JS_Code_Quiz/"><button className="button2-text">Website Link</button></a>
            </div>
            <div className="grid-item">
            <a href="https://dcast0607.github.io/Restaurant-Picker-Project/">
                <img src="https://tenues0.github.io/Portfolio/assets/restaurant.png" alt="restaurant-page-image" /></a>
            <a href="https://github.com/tenues0/Restaurant-Picker-Team-Project"><button className="button-text">Github Repo</button></a>
            <a href="https://dcast0607.github.io/Restaurant-Picker-Project/"><button className="button2-text">Website Link</button></a>
            </div>
            <div className="grid-item">
            <a href="https://moviemates-deployer.herokuapp.com/">
                <img src="https://tenues0.github.io/Portfolio/assets/moviemates.png" alt="movie-mates-screenshot" /></a>
            <a href="https://github.com/tenues0/movie_mates"><button className="button-text">Github Repo</button></a>
            <a href="https://moviemates-deployer.herokuapp.com/"><button className="button2-text">Website Link</button></a>
            </div>
        </section>
        </section>

    );
}

export default Project;