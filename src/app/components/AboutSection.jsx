"use client";

import React from 'react';
import Image from 'next/image';

// Each section component can be split further if needed
const AboutMe = () => (
  <div className="text-white py-8 px-4 sm:py-16 xl:px-16"  >
    <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
      <Image src="https://drive.google.com/uc?export=view&id=1Qs9Cw3MT3w1Db6Va8zTnLoyZn4-jee7y" alt="About Me Image" width={500} height={500} priority />
      <div>
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#074368' }}>About Me</h2>
        <p className="text-lg" style={{ color: 'white' }}>
        🌟 Hey! I{'\''}m Aditya Vishnu Oruganti, your expert web application developer and digital innovator. From designing responsive interfaces to engineering robust back-end solutions, I specialize in transforming ideas into dynamic, user-friendly web experiences. Whether I{'\''}m optimizing performance for seamless interactions or integrating cutting-edge technologies to enhance functionality, I combine technical prowess with creative vision to build web applications that engage, inspire, and deliver exceptional results. 🚀🤖✨
        </p>
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section>
      <AboutMe />
      {/* <Skills />
      <Education />
      <Certifications /> */}
    </section>
  );
};

export default AboutSection;