import React, { useState } from 'react';
   import axios from 'axios';
   import SimpleReactValidator from 'simple-react-validator';
   import { db } from './firebaseConfig';
   import { collection, addDoc } from 'firebase/firestore';

   const ProjectForm = ({ onAddProject }) => {
     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const validator = new SimpleReactValidator();

     const handleSubmit = async (e) => {
       e.preventDefault();
       if (validator.allValid()) {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
         const additionalData = response.data;

         const newProject = { name, description, additionalData };
         await addDoc(collection(db, 'projects'), newProject);
         onAddProject(newProject);
         setName('');
         setDescription('');
       } else {
         validator.showMessages();
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <div>
           <label>Nombre del Proyecto:</label>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
           {validator.message('name', name, 'required')}
         </div>
         <div>
           <label>Descripción:</label>
           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
           {validator.message('description', description, 'required|min:10')}
         </div>
         <button type="submit">Agregar Proyecto</button>
       </form>
     );
   };

   export default ProjectForm;