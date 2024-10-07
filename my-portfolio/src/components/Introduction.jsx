import React from 'react';
import mypic from "../assets/images/Profile-image.jpg";

const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left py-16 px-10 mt-20 md:mt-32 bg-darkblue text-white">
      {/* Profile Image */}
      <img 
        src={mypic} 
        alt="Profile" 
        className="w-32 h-32 rounded-full mb-6 md:mb-0 md:w-48 md:h-48 md:mr-8 lg:w-56 lg:h-56" 
      />

      {/* Text Content */}
      <div className="flex flex-col justify-center max-w-lg md:max-w-[60rem]">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm EF II PAMI-PAMI 👋</h1>
        <p className="text-xl mb-4">
          A Front-End Developer specializing in <span className="text-blue-500">React</span> and <span className="text-blue-500">Tailwind CSS</span>.
        </p>
        <p className="text-lg">
          I create modern, responsive, and visually appealing web applications. With a passion for clean code and intuitive user experiences, I aim to bring innovative ideas to life. Let’s build something great together!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
