import React, { useState, useEffect } from "react";
import api from './services/api'
import "./styles.css";

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

  async function handleRemoveRepository(id) {
    setRepositories(repositories.filter(item => item.id !== id));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { 
          repositories.map(repository => (
            <div key= {repository.id}>
              <li>{repository.title}</li>
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </div>
          )
        )}
       
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
