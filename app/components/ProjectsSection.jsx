"use client";
import React, { useState,useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Bistro-boss",
    description:
      "This Website react based project and implementation admin and user pannel also authenticated.",
    image: "/image/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/bistro-boss-client",
    previewUrl: "https://bistro-boss-64b8a.web.app/",
  },
  {
    id: 2,
    title: "Dream Job",
    description:
      "Job opportunities across various categories including.Get all the information you need about available job",
    image: "/image/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/get-job",
    previewUrl: "https://teal-frangollo-ce7336.netlify.app/",
  },
  {
    id: 3,
    title: "Toy Tinkerers",
    description:
      "Educational and entertaining toys for children.You can easily edit your toy-tinkers",
    image: "/image/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/toy-tinkers-client-site",
    previewUrl: "https://toy-tinkerers.web.app/",
  },
  {
    id: 4,
    title: "Dance Vibes",
    description:
      "This website is focused on Summer Tour and School.Instructors can add, update, and delete classes. And admin can deny these classes.",
    image: "/image/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/Dance-vibes",
    previewUrl: "https://dance-vibes-e5787.web.app/",
  },
  {
    id: 5,
    title: "Food Land",
    description:
      "Our platform celebrates the art of cooking and the joy of savoring delicious dishes.",
    image: "/image/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/foof-land-client-site",
    previewUrl: "https://foodland-for-ass-with-firebase.web.app/home",
  },
  {
    id: 6,
    title: "Ema-Jhon",
    description: "The website is an expansive online store offering a wide array of products, Moreover, the Add to Cart function allows users to gather selected items. ",
    image: "/image/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rafsanfaruk/ema-john-simple",
    previewUrl: "https://glittery-liger-cef2ad.netlify.app/",
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
    <section >
      <h2 className="text-center text-4xl font-bold text-white  mb-8 md:mb-12">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
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
