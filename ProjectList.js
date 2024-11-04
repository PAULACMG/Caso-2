import React from 'react';

   const ProjectList = ({ projects }) => {
     if (projects.length === 0) {
       return <p>No hay proyectos</p>;
     }

     return (
       <React.Fragment>
         <ul>
           {projects.map((project, index) => (
             <li key={index}>
               <h3>{project.name}</h3>
               <p>{project.description}</p>
               <p>Datos adicionales: {JSON.stringify(project.additionalData)}</p>
             </li>
           ))}
         </ul>
       </React.Fragment>
     );
   };

   export default ProjectList;