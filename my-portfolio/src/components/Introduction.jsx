import React from 'react';
import mypic from "../assets/images/Profile-image.jpg";

const Introduction = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-[#152737] text-white">
      {/* Replace with your actual profile image */}
      <img 
        src={mypic} 
        alt="Profile" 
        className="w-32 h-32 rounded-full mb-6" 
      />
      <h1 className="text-4xl font-bold">Hi, I'm EF II PAMI-PAMI 👋</h1>
      <p className="text-xl mt-4">
        A Front-End Developer specializing in <span className="text-blue-500">React</span> and <span className="text-blue-500">Tailwind CSS</span>.
      </p>
      <p className="text-lg mt-2 max-w-lg">
        I create modern, responsive, and visually appealing web applications. With a passion for clean code and intuitive user experiences, I aim to bring innovative ideas to life. Let’s build something great together!
      </p>
    </section>
  );
};

export default Introduction;
