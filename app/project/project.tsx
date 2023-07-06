import style from "./project.module.css";

interface ProjectProps {
  project: ProjectRecordGH;
  description: ProjectDescription;

}

export default function Project({ project, description}: ProjectProps) {
  return (
    <div className={style.project_container}>
      <div>
        <h2 className="font-bold">{project.name}</h2>
      </div>
      <div>
        <h3>Technologies</h3>
        <h5 className="font-semibold">
          {description.technologies}
        </h5>
      </div>
      <div>
        <h3>Language</h3>
        <h5 className="font-semibold">{project.language}</h5>
      </div>
      <div>
        <h3>Description</h3>
        <p>
          {description.description}
        </p>
      </div>
      <div>
        <h3>GitHub</h3>
        <p>{project.html_url}</p>
      </div>
      <div>
        <h3>Live Deployment</h3>
        <p>{project.homepage}</p>
      </div>
    </div>
  );
}
