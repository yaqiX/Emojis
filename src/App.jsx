import './App.css'
import { mainContext } from './context/MainProvider'; 
import MainProvider from './context/MainProvider'
import Emojis from './components/Emojis';
import ComplimentButton from './components/ComplimentButton';

function App() {
  return (
    <MainProvider>
      <h1>Mood</h1>
      <Emojis />
      <ComplimentButton />
    </MainProvider>
  )
}

export default App;
