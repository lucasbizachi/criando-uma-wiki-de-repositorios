import gitLogo from '../assets/github02.png';
import { Container } from './styles';

function App() {
  return (
    <Container Container>
      <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
    </Container>
  );
}

export default App;

