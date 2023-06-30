import diff from "../lib/diff";
import getReposDB from "../lib/getReposDB";
import Project from "../project/project";
import style from "./projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

const Projects = async ({projects}:ProjectsProps) => {
  projects = await getReposDB();

  const filteredProjects = projects.filter(project => diff.indexOf(project.name) === -1);
  return (
    <div>
      <h1>Projects</h1>
      <div className={style.projects_container}>
      {filteredProjects.map((project:Project) => (
        <div key={project.id}>
          <Project project={project} />
        </div>
      ))}
      </div>    
    </div>
  );
};

export default Projects;