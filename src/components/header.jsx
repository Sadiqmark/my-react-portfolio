import reactLogo from '../assets/react.svg';
// import resume from '/changedSadiqkhan_Resume.pdf';
import viteLogo from '/vite.svg'
import { useState,useEffect,useCallback } from 'react';


const Header = ()=>{
    const[open,setOpen]=useState(false)
    
    
    return(
        <>
        <section>
            <div className='header-container'>
                <div className="header">
                <div className="header-name">
                    <a href="/">
                        <div className="header-name-logo">
                            <span>Sadiq Khan</span>
                        </div>
                    </a>
                </div>
                <nav className="header-nav">
                    <ul className={"header-ul-web"}>
                        <a href="#home" className="header-link">
                            <li className="header-li">
                                <span>Home</span>
                            </li>
                        </a>
                        <a href="#about" className="header-link">
                            <li className="header-li">
                                <span>About</span></li>
                        </a>
                        <a href="#experience" className="header-link">
                            <li className="header-li">
                                <span>Experience</span>
                            </li>
                        </a>
                        <a href="#skills" className="header-link">
                            <li className="header-li">
                                <span>Skills</span>
                            </li>
                        </a>
                        <a href="#contact" className="header-link">
                            <li className="header-li">
                                <span>Contact</span>
                            </li>          
                        </a>
                    </ul>
                </nav>
                <div className={"toggle-web"}>
                    <a className='resume-button' href='/PM_SadiqKhan_Resume copy.pdf' target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
                <div className='hamburger-menu'>
                    <button className="hamburger-button" onClick={()=>setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>

                    </button>


                </div>
                <div className={open ? 'mobile-menu-panel open' : 'mobile-menu-panel' }>
                    <button className="hamburger-button-close" onClick={()=>setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <nav>
                        <ul className="header-ul-mobile">
                            {/* your nav links here */}
                            <a href="/" className="header-link" onClick={()=>setOpen(!open)}>
                                <li className="header-li">
                                    <span>Home</span>
                                </li>
                            </a>
                            <a href="#about" className="header-link" onClick={()=>setOpen(!open)}> 
                                <li className="header-li">
                                    <span>About</span></li>
                            </a>
                            <a href="#experience" className="header-link" onClick={()=>setOpen(!open)}>
                                <li className="header-li">
                                    <span>Experience</span>
                                </li>
                            </a>
                            <a href="#skills" className="header-link" onClick={()=>setOpen(!open)}>
                                <li className="header-li">
                                    <span>Skills</span>
                                </li>
                            </a>
                            <a href="#contact" className="header-link" onClick={()=>setOpen(!open)}>
                                <li className="header-li">
                                    <span>Contact</span>
                                </li>          
                            </a>
                        </ul>
                    </nav>
                    <div className="toggle-mobile" >
                        <a className='resume-button' href='/PM_SadiqKhan_Resume copy.pdf' target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(!open)}>
                            Resume
                        </a>
                    </div>
                </div>

                </div>
                <div className="Header_title">
                <h1 className="Header_title_h1"> 
                    <span className='Header_title_h1_name'>
                        P M Sadiq Khan
                    </span>
                    <p className="Header_title_h1_span">Frontend Developer</p>
                    
                </h1>
                <div className="Header_skills">
                    <div className="Header_skills_logo_container">
                        <div className="Header_skills_logo">
                            <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="React" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg"/>
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind css" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="Jest" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt="Rest API" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="React" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" alt="JS"/>
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tabler-icons_brand-nextjs.svg/640px-Tabler-icons_brand-nextjs.svg.png" alt="Nextjs" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" alt="Typescript" />

                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="Jest" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt="Rest API" />
                        </div>
                        <div className="Header_skills_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/640px-GraphQL_Logo.svg.png" alt="Graphql" />

                        </div>

                        

                    </div>
                </div>
                </div>
            </div>



        </section>

            
        </>
    )
}
export default Header;