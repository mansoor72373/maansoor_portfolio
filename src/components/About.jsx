import React from 'react';
import Skill from './Skill';

const About = () => {
  return (
    <section className="p-6 mt-20 bg-gray-100">
      
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
          <img 
            src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/407902958_1057628128897855_7121833409007660380_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BuqOVABQBo4Q7kNvgFGVrH1&_nc_ht=scontent.fisb6-1.fna&oh=00_AYAHLrgNjAWGDT-dcECT3bZIYuFnzV0kWkWxiD1SPoZQmQ&oe=66A071F3" 
            alt="Profile" 
            className="rounded-full shadow-lg transform hover:scale-105 h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 transition-transform duration-300"
          />
        </div>
        
        <div className="md:w-2/3 md:pl-6">
        <h2 className="text-3xl sm:text-3xl font-semibold text-gray-700 mb-4">About Me</h2>
      
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Hello! I'm Mansoor Ahmad, a passionate React front-end developer with a knack for creating engaging and user-friendly web applications. With a strong background in JavaScript and experience in various modern web technologies, I strive to build performant and accessible applications.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Background</h3>
          <p className="text-gray-700 mb-6">
            I have a Bachelor's degree in Computer Science from CECOS University and have been working in the web development field for 1 year. During my career, I've had the opportunity to work on numerous projects, ranging from small business websites to large-scale web applications. I have also completed a Python (Angular + React) course from NAVTTC, which has further honed my skills in modern web technologies.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Skill skill="JavaScript" level="91%" />
            <Skill skill="React.js" level="85%" />
            <Skill skill="HTML/CSS" level="95%" />
            <Skill skill="Tailwind CSS" level="80%" />
            <Skill skill="Redux" level="75%" />
            <Skill skill="Git" level="85%" />
            {/* Add more skills as needed */}
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-8 mb-4">Interests</h3>
          <p className="text-gray-700 mb-4">
            When I'm not coding, I enjoy playing e-games, cricket, and hiking in the mountains. I also love to explore the latest web development trends, contribute to open-source projects, and write blog posts about my experiences in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
