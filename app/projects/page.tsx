import { PageWrapper } from "../components/page-wrapper";
import { ProjectsWrapper } from "../components/projects-wrapper";
import diff from "../lib/diff";
import { getDescription } from "../lib/getDescription";
import { getReposGH } from "../lib/getReposGH";
import Project from "../project/project";
import style from "./projects.module.css";

interface ProjectsProps {
  projects: ProjectRecordGH[];
}

const Projects = async ({ projects }: ProjectsProps) => {
  projects = await getReposGH();

  const filteredProjects = projects.filter(
    (project) => diff.indexOf(project.name) === -1
  );


  return (
    <PageWrapper className={style.projects_wrapper}>
      <h1 className={style.h1}>Projects</h1>
      <div className={style.projects_container}>
        {filteredProjects.map(async (project: ProjectRecordGH, i) => {
          const x = await getDescription(project.name);
          return x.map(async (description: ProjectDescription) => {
            return (
              <ProjectsWrapper key={project.id} className={undefined} i={i}>
                <Project project={project} description={description} />
              </ProjectsWrapper>
            );
          });
        })}
      </div>
    </PageWrapper>
  );
};

export default Projects;
