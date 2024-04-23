import gitLogo from '../assets/github02.png';
import Input from '../components/Input';
import { Container } from './styles';

function App() {
  return (
    <Container Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
      <Input />
    </Container>
  );
}

export default App;

