import React from 'react';
import * as ReactIcons from 'react-icons/si';
import img from ".././temp.jpg"

function ProjectItem(props) {
  const { title, description, techIcons, imageName } = props;

  return (
    <div className="file" >
      
      <img src=".././temp.jpg" className={`file_img`} ></img> 
      <div className="item_text">
        <p className="file_name">{title}</p>
        <p className="file_desc">{description}</p>
        <div className="temp">
          { 
          techIcons.map((iconName, index) => {
            const Icon = ReactIcons[iconName];
            return <Icon key={index} className="tech_icon" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
