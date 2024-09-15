import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './App.css'; 

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id); // Update the active section state
  };

  return (
    <div className="page-container">
      <div className="left-section">
  <div className="left-content">
    <div className="intro-text">
      <h1>Hello, I'm Dev</h1>
      <h2>A Software Engineer & Game Developer.</h2>
    </div>
    <nav className="fixed-nav-links">
      <button
        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        onClick={() => scrollToSection('about')}
      >
        About Me
      </button>
      <button
        className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => scrollToSection('experience')}
      >
        Experience
      </button>
      <button
        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </button>
    </nav>
  </div>
  <div className="social-icons">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} />
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} />
    </a>
  </div>
</div>

      <div className="right-section">
        {/* Fixed Navigation Links */}

        <div className="content-container">
          <section id="about" className="content-section">

            <p>My passion for video games began at a young age, exploring early Nintendo games. This early fascination with gaming led me to discover more as I began to start modifying my Minecraft games, which eventually led me to delve deeper into the world of software development. After high school, I decided to turn my hobby into a career by studying how software works in a more structured way. I earned my Associate's degree in Computer Science from Tidewater Community College, which laid a solid foundation in programming principles. My journey continued at Old Dominion University, where I completed a Bachelor's degree in Game Studies and Design. This educational path helped me refine my skills and expand my knowledge in game development and programming. Today, I am a versatile programmer with experience across various languages and development environments. While I have expertise in multiple areas, my primary focus remains on game development, where I strive to create engaging and immersive experiences.</p>
          </section>

          <section id="experience" className="content-section">

            <div className="job">
              <h2>Unity Software Developer (T2)</h2>
              <p>2024 - Present</p>
              <p>As a key Unity software developer at CACI, I play a pivotal role in the development of high-fidelity training simulations for the U.S. Navy under Department of Defense contracts. With security clearance, I lead the creation of immersive, cutting-edge simulation experiences, collaborating closely with stakeholders to ensure each project meets rigorous standards for both technical precision and security protocols.</p>
            </div>
            <div className="job">
              <h2>Undergrad/Graduate Research Assistant</h2>
              <p>2021 - 2022</p>
              <p>Developed a high-quality, educationl, virtual reality app for a local school, helping teach students about the different careers in the maritime and ship building industry. Worked with a a small cross functional team of 3D artists and animators to acheive deadlines while tackling the systems and tools, leading development on the back end. </p>
            </div>
            <div className="job">
              <h2>Student at Old Dominion University</h2>
              <p>2021 - 2023</p>
              <p>I specialized in game design and development, focusing on game mechanics, interactive media, and immersive technology, while mastering tools and techniques for creating engaging digital experiences.</p>
            </div>
            <div className="job">
              <h2>Student at Tide Water Community College</h2>
              <p>20210 - 2021</p>
              <p>I developed a strong foundation in programming, algorithms, and software development, gaining essential skills in problem-solving and computational thinking. </p>
            </div>
          </section>

          <section id="projects" className="content-section">

            <div className="project">
              <h2>Jarvis Jr. (Voice Assistant)</h2>
              <p> A personal voice assistant I started to develop with the goal of creating a better "Siri". This is my favorite creation and has now turned into a much differnt project as I am now fine tuning my open AI tool into a fully functional development assistant. </p>
            </div>
            <div className="project">
              <h2>Portfolio Website</h2>
              <p>This website was designed and developed by me, for me, to showcase my skills and projects.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
