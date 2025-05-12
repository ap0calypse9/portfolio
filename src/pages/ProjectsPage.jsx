// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from "react";
import { getProjects } from "../api/getProjects";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet";
const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    
    <div className="project-wrapper">
    <div className="projects-page">
      <h1 className="projects-title"><b>My Projects</b></h1>
      <Helmet>
  <title>Projects | ap0calypse</title>
</Helmet>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsPage;
