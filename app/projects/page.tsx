import { getReposGH } from "../lib/getReposGH";

const Projects = async () => {
  const projects = await getReposGH();
  console.log(projects);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <h2>{project.html_url}</h2>
          <h2>{project.homepage}</h2>
        </div>
      ))}
    </div>
  );
};

export default Projects;
