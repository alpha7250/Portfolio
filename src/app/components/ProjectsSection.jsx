"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio",
    description:
      "A modern portfolio website showcasing skills, projects, and achievements. Built with cutting-edge web technologies for a responsive and interactive experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alpha7250/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tuneflow",
    description:
      "A full-featured music streaming platform that allows users to create playlists, explore music, and chat with friends in real time.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alpha7250/TuneFlow",
    previewUrl: "https://tuneflow-1.onrender.com/",
  },
  {
    id: 3,
    title: "CodeSync",
    description:
      "An advanced video-calling platform for technical interviews, featuring an in-browser code compiler supporting multiple languages.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alpha7250/CodeSync",
    previewUrl: "https://code-sync-five-mu.vercel.app/",
  },
  {
    id: 4,
    title: "Code-Craft",
    description:
      "A powerful web-based code editor with real-time execution, syntax highlighting, and customizable themes.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alpha7250/code-craft",
    previewUrl: "https://code-craft-gules.vercel.app/",
  },
  {
    id: 5,
    title: "Pokedex",
    description:
      "An interactive Pokémon explorer with a vast collection of 1,500+ Pokémon, featuring search, filtering, and user authentication.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/alpha7250/pokedex",
    previewUrl: "https://chimerical-salmiakki-43763f.netlify.app/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              descriptionClass="text-lg leading-relaxed text-gray-300 text-opacity-80 p-4 bg-gray-800 bg-opacity-50 rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
