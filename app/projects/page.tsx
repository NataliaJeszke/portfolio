import getReposDB from "../lib/getReposDB";
import Project from "../project/project";
import style from "./projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects = async ({projects}:ProjectsProps) => {
  projects = await getReposDB()
  return (
    <div>
      <h1>Projects</h1>
      <div className={style.projects_container}>
      {projects.map((project:Project) => (
        <div key={project.id}>
          <Project project={project} />
        </div>
      ))}
      </div>    
    </div>
  );
};

export default Projects;