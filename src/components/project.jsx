import React from "react";
import grandmaimage from "../assets/grandma-image.png"

const Project = () => {
    const projects = [
        {
            title: "Nitya Naivedya",
            description: "E-commerce Website for Traditional Food Brand with Javascript and Tailwind CSS.",
            imageUrl: grandmaimage,
            projectUrl: "https://github.com/GGNIDHI/Nitya_Naivedya",
            Livesite: "https://gemini-nitya.netlify.app/"
        },
        
  
    ];

    return (
        <section id="projects" className="project-section">
            <div className="project-container">
                <h2 className="project-title">Freelancing Project</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-card-inner">
                                {/* FRONT SIDE */}
                                <div className="project-card-front">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    <h3 className="project-name">{project.title}</h3>
                                </div>

                                {/* BACK SIDE */}
                                <div className="project-card-back">
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-shareable-links">
                                        <a
                                            href={project.Livesite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            View Project
                                        </a>
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
