import React, { useState, useEffect } from 'react';
   import ProjectForm from './ProjectForm';
   import ProjectList from './ProjectList';
   import { db } from './firebaseConfig';
   import { collection, getDocs } from 'firebase/firestore';

   const App = () => {
     const [projects, setProjects] = useState([]);
     const [showForm, setShowForm] = useState(false);

     useEffect(() => {
       const fetchProjects = async () => {
         const querySnapshot = await getDocs(collection(db, 'projects'));
         const projectsData = querySnapshot.docs.map(doc => doc.data());
         setProjects(projectsData);
       };

       fetchProjects();
     }, []);

     const handleAddProject = (project) => {
       setProjects([...projects, project]);
     };

     return (
       <div>
         <button onClick={() => setShowForm(!showForm)}>
           {showForm ? 'Ocultar Formulario' : 'Agregar Proyecto'}
         </button>
         {showForm && <ProjectForm onAddProject={handleAddProject} />}
         <ProjectList projects={projects} />
       </div>
     );
   };

   export default App;
