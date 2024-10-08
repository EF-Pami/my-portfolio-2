import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-12 bg-secondary text-white" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <p className="mb-4">Email: pamijoelpami@gmail.com</p>
        <p className="mb-4">Phone: +47 998 836 81</p>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/EF-Pami" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-primary transition duration-300" />
          </a>
          <a href="https://www.facebook.com/pami.joel.9" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-primary transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/ef-ll-pami-pami-04576624b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-primary transition duration-300" />
          </a>
          <a href="https://www.instagram.com/its_joelleo" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-primary transition duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
