// ProjectsSection.jsx
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NETFLIXGPT",
    description: "Netflix Clone Application, powered by the GPT-3.5-turbo API.",
    role: "Full Stack Engineer",
    image: "https://drive.google.com/uc?export=view&id=1oLApfgUfnJioZ0NQjXIlYRHs28vw8fOa", 
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/netflixgpt",
    previewUrl: "https://example.com/preview1",
  },
  {
    id: 2,
    title: "Food Delivery Website",
    description: "Application similar to UberEats to order food from restaurants.",
    role: "Frontend Developer",
    image: "https://drive.google.com/uc?export=view&id=1kMIU0z-SuOc25LnvZmVEmClOqLwparvO",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/speed_eats",
    previewUrl: "https://example.com/preview2",
  },
  {
    id: 3,
    title: "Code Editor",
    description: "Web-based editor for HTML, CSS and Javascript using React.js and CodeMirror.",
    role: "Frontend Developer",
    image: "https://drive.google.com/uc?export=view&id=1WadNskvXQKRLQ5UsKWdeVM28AyDu8mkq",
    tag: ["All", "Reat.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/Code_Editor",
    previewUrl: "https://example.com/preview3",
  },
  {
    id: 4,
    title: "Bug Hound",
    description: "Application to track and resolve bugs.",
    role: "Frontend Developer",
    image: "https://drive.google.com/uc?export=view&id=1-ZrG4CysTDS8sgpIaLpRHz4L_2pE5owS",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/av0907/React/tree/main/BugHound",
    previewUrl: "https://example.com/preview4",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">MY PROJECTS</h2>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              role={project.role}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
