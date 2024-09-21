import React from 'react';
import { FaPython, FaDocker, FaGit, FaAws } from 'react-icons/fa';
import { SiR, SiMicrosoftsqlserver, SiPowerbi, SiTableau, SiMicrosoftazure, SiDatabricks, SiSnowflake } from 'react-icons/si';
import { AiOutlineRobot } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import './assets/Miscelaneous.css';

const TechIcons = () => {
  const techStack = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'R', icon: <SiR /> },
    { name: 'SQL', icon: <SiMicrosoftsqlserver /> },
    { name: 'ChatGPT', icon: <AiOutlineRobot /> },
    { name: 'Power BI', icon: <SiPowerbi /> },
    { name: 'Tableau', icon: <SiTableau /> },
    { name: 'Excel', icon: <GrMysql /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Databricks', icon: <SiDatabricks /> },
    { name: 'Snowflake', icon: <SiSnowflake /> },
    { name: 'Azure', icon: <SiMicrosoftazure /> },
    { name: 'Git', icon: <FaGit /> },
  ];

  return (
    <div className="tech-icons-container">
      <div className="tech-icons-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-icon">
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIcons;
