import gitLogo from '../assets/github02.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { api } from '../services/api';
import { useState } from 'react';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const[repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
      return
      }
      
    }
    alert('Repositório não encontrado')

  }

  return (
    <Container Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;

