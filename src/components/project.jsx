import React from "react";
 // Add a CSS file for styling this section

const Project = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio website built with React and Tailwind CSS.",
            imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
            projectUrl: "https://github.com/yourusername/portfolio",
        },
        {
            title: "E-commerce App",
            description: "An e-commerce platform with a shopping cart and payment gateway integration.",
            imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
            projectUrl: "https://github.com/yourusername/ecommerce-app",
        },
        {
            title: "Weather App",
            description: "A weather forecasting app using OpenWeatherMap API.",
            imageUrl: "https://via.placeholder.com/300x200", // Replace with your project image URL
            projectUrl: "https://github.com/yourusername/weather-app",
        },
    ];

    return (
        <section id="projects" className="project-section">
            <div className="project-container">
                <h2 className="project-title">Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img
                                src={project.imageUrl}
                                alt={`${project.title} screenshot`}
                                className="project-image"
                            />
                            <div className="project-content">
                                <h3 className="project-name">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;