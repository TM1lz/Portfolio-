import style from "./Skills.module.css";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiCisco , SiMysql} from "react-icons/si";

function Skills() {
  return (
    <section className={style.skillsSection}>
      <h2>🛠️ Ferramentas & Tecnologias</h2>
      <div className={style.skillsGrid}>
        <div className={style.skill}><FaReact /> <span>React</span></div>
        <div className={style.skill}><FaNodeJs /> <span>Node.js</span></div>
        <div className={style.skill}><SiExpress /> <span>Express</span></div>
        <div className={style.skill}><FaCss3Alt /> <span>CSS Modules</span></div>
        <div className={style.skill}><SiJavascript /> <span>JavaScript</span></div>
        <div className={style.skill}><SiMongodb /> <span>MongoDB</span></div>
        <div className={style.skill}><FaGithub /> <span>GitHub</span></div>
        <div className={style.skill}><FaHtml5 /> <span>HTML5</span></div>
        <div className={style.skill}><SiCisco /> <span>Cisco</span></div>
        <div className={style.skill}><SiMysql /> <span>MySQL</span></div>
      </div>
    </section>
  );
}

export default Skills;
