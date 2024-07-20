import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skill';
import Blog from './Blog';
import Contact from './Contact';  // Import Contact component

const Home = () => {
  return (
    <div>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.2f47c78fe98cf5a9b9bb65252f5f0c71?rik=M2KlGVLBPgPS0Q&pid=ImgRaw&r=0)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6 mx-4 md:mx-0">
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <h3 className="text-2xl font-semibold mb-4">I'm Mansoor Ahmad, a React Front-End Developer</h3>
            <p className="text-lg mb-6">
              Passionate about creating interactive and user-friendly web applications, I specialize in building modern front-end solutions using React and related technologies. I focus on delivering high-quality, scalable, and maintainable code to solve real-world problems.
            </p>
            <a href="/contact" className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />  {/* Include Contact component */}
    </div>
  );
};

export default Home;
