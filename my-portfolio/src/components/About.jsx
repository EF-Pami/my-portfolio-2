import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-darkblue text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-5">About Me</h2>
        <div className="max-w-xl mx-auto">
          <p className="mb-5">
            I hold a Bachelor's degree in Business Administration and Accounting and a Master's degree in Economics. My career began in Cameroon, where I worked as an accountant, and I further expanded my expertise by working as an accounting clerk and office worker in Norway. This diverse experience in the business and financial sectors has honed my attention to detail, organizational skills, and ability to meet deadlines with precision.
          </p>
          <hr className="border-t border-white mb-5" />
          <p className="mb-5">
            Recently, I transitioned into the world of front-end development, where I have completed my studies and acquired hands-on experience working on various school projects. I am proficient in modern frameworks and tools such as Bootstrap, TailwindCSS, and React, and I have a strong desire to further enhance my skill set by exploring cutting-edge technologies like AI and Machine Learning. My background in business and accounting complements my technical skills, enabling me to approach projects with a well-rounded and analytical mindset.
          </p>
          <hr className="border-t border-white mb-5" />
          <p>
            Outside of work, I am passionate about maintaining an active lifestyle, training in the gym, and enjoying outdoor activities. I am also a social and collaborative person, always eager to contribute to team efforts and open to feedback for continuous improvement. I believe that my combination of business acumen, technical proficiency, and enthusiasm for design makes me an asset to any team looking to bring innovative web design concepts to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
