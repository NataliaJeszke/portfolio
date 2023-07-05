import { PageWrapper } from "../components/page-wrapper";
import {ProjectsWrapper} from "../components/projects-wrapper";
import diff from "../lib/diff";
import { getReposGH } from "../lib/getReposGH";
import Project from "../project/project";
import style from "./projects.module.css";

interface ProjectsProps {
  projects: ProjectRecordGH[];
}

const Projects = async ({projects}:ProjectsProps) => {

  projects = await getReposGH();

  const filteredProjects = projects.filter(project => diff.indexOf(project.name) === -1);
  return (
    <PageWrapper className={undefined}>
      <h1>Projects</h1>
      <div className={style.projects_container}>
      {filteredProjects.map((project:ProjectRecordGH, i) => (
        <ProjectsWrapper key={project.id} className={undefined} i={i}>
          <Project project={project} />
        </ProjectsWrapper>
      ))}
      </div>    
    </PageWrapper>
  );
};

export default Projects;