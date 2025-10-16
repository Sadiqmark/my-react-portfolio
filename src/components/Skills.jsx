import React from "react";
 // Add a CSS file for styling this section

const Skills = () => {
    const skills = [
        { name: "JavaScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" ,alt:"JS"},
        { name: "React", imageUrl: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"},
        { name: "Nextjs", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tabler-icons_brand-nextjs.svg/640px-Tabler-icons_brand-nextjs.svg.png", alt:"Nextjs" },
        { name: "Typescript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png", alt:"Typescript"}, 
        { name: "HTML", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", alt:"HTML" },
        { name: "Tailwind", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" , alt:"Tailwind css"},

        { name: "JEST", imageUrl: "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" , alt:"Jest"},
        { name: "Python", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" , alt:"Python"},
        { name: "Git", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" , alt:"Git"},
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <img src={skill.imageUrl} alt={`${skill.name} logo`} className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;