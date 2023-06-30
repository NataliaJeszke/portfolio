import getReposDB from "../lib/getReposDB";
import Project from "../project/project";

interface ProjectsProps {
  projects: Project[];
}

const Projects = async ({projects}:ProjectsProps) => {
  projects = await getReposDB()
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project:Project) => (
        <div key={project.id}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;