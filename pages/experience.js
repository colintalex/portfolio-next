import Skills from "../components/skills";
import WorkHistory from "../components/work_history";

export default function Experience() {
  return (
    <div>
      <div className="page-title">
        <h1>
          <span className="experience">|</span>
        </h1>
      </div>
      <Skills/>
      <WorkHistory/>
    </div>
  );
}
