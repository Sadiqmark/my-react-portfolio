

const About = () =>{
    

    return(
        <>
            
            <section id="about-page">
            <div className="about-us-container">
            <div className="about-us">
                <div className="about-us-title">
                    <h1 className="about-us-title-h1">About Me</h1>
                </div>
                <div className="about-us-content">
                    <div className="about-us-content-title">
                        <p className="about-us-title-name">Hi, I'm Khan.</p>
                        <p className="about-us-title-subintro">Code. Camera. Curiosity</p>


                    </div>
                    <div className="about-us-content-intro">
                        <p>
                            I'm a Software Engineering Analyst at Accenture with expertise in React.js, Python, JavaScript.As an Application Developer, I design, develop, and maintain efficient software applications that align with business needs. By day, I architect seamless, secure, and visually engaging user interfaces with React, Python, and modern web technologies. By weekend, I'm a photographer believing that code and photography both need an eye for detail.
                        </p>
                        <p>
                            Every site I build is a frame, every feature a story. Let’s use technology not just to solve problems, but to capture imaginations. Let's build what others haven't imagined yet. Ready to code, create, and innovate together?
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-us-experience">
                <div className="about-us-experience-content">
                    <div className="about-us-contact">
                        <button className="about-us-contact-link">
                            <a href="/contact" className="about-us-contact-button">
                                <span className="about-us-contact-wave"></span>
                                <span className="about-us-contact-label">Contact Me</span>
                            </a>
                        </button>

                    </div>
                    <div className="about-us-experience-info">
                        <div className="about-us-job-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-5 h-5 mt-1 text-primary group-hover:scale-110 transition-transform"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                            <div className="about-us-job-title">
                                <h3 className="about-us-job-currentposition">Current Position</h3>
                                <p className="about-us-job-currentposition-title">Software Engineering Analyst</p>
                            </div>
                        </div>
                        <div className="about-us-job-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 mt-1 text-primary group-hover:scale-110 transition-transform"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <div className="about-us-location-info">
                                <h3 className="about-us-job-location-title">Location</h3>
                                <p className="about-us-job-location-name-title">Bengaluru, Karnataka, India</p>

                            </div>
                               
                        </div>
                        <div className="about-us-job-email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 mt-1 text-primary group-hover:scale-110 transition-transform"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <div className="about-us-job-email-info">
                                <h3 className="about-us-job-email-title">Email</h3>  
                                <a href="mailto:pmsadiqkhan08@gmail.com" className="about-us-job-email-name">
                                    pmsadiqkhan08@gmail.com
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            </div>

            </section>

            



        </>
    )
}
export default About;