import { getReposGH } from "../lib/getReposGH";
import Project from "../project/project";

const Projects = async () => {
  const projects = await getReposGH();
  console.log(projects);

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
