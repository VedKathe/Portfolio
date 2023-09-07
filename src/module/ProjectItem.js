import React from 'react';
import * as ReactIcons from 'react-icons/si';
import * as ReactIcons2 from 'react-icons/fa'
console.log(typeof(ReactIcons)+" this")
ReactIcons = Object.assign(ReactIcons,ReactIcons2)


function ProjectItem(props) {
  const { title, description, techIcons , onClick, } = props;
  const sentence = description.split('. ');

  return (
    <div className="file" >
      
      <img alt='' src="https://via.placeholder.com/500" className={`file_img`} ></img> 
    
      <div className="item_text">
        <p className="file_name" onClick={onClick} >{title}</p>
        
        {sentence.map((sentence, index) => (
           <p className="file_desc" key={index}>{sentence}</p>
         
      ))}
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
