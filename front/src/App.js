import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api'
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get('repositories')
    .then( 
      response => setRepositories(response.data)
    )
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      "url": "https://github.com/mesquitadev",
      "title": `Victor Mesquita - ${Date.now()}`,
      "techs": ["Node", "PHP", "REACTJS"]
    });
    const repository = response.data;
    setRepositories([...repositories, repository])
  } 

  return (
    <>
      <Header/>
      <ul>
        { 
          repositories.map(repository => (<li key={repository.id}>{repository.title}</li>))
        }
      </ul>
      <button type="button" onClick={handleAddRepository}> Adicionar Repositorio</button>     
    </>
  )
}

export default App;