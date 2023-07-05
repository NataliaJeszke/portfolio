import style from "./project.module.css";

interface ProjectProps {
  project: ProjectRecordGH;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div
    className={style.project_container}
    >
      <div>
        {/* <h4>Title</h4> */}
        <h3 className="font-bold">{project.name}</h3>
      </div>
      <div>
        <h3>Technologies</h3>
        <h5 className="font-semibold">{project.technologies}</h5>
      </div>
      <div>
        <h3>Language</h3>
        <h5 className="font-semibold">{project.language}</h5>
      </div>
      <div>
        <h3>Description</h3>
        <p>{project.description}</p>
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
