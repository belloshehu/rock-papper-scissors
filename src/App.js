
import './App.css';
import Header from "./components/Header/Header"
import Play from './components/Play';
import SelectionList from './components/SelectionList';
import {useContext} from 'react'
import { Completion } from './components/Completion';
import { useGlobalContext } from './context';

function App() {
  const first = useContext({}) // 
  const {round, isPlaying} = useGlobalContext()
  return (
    <div className="App">
      <h1>Rock Papper Scissors</h1>
      {(round === 0 && !isPlaying) && <Completion />}
      <Header/>
      <SelectionList />
      <Play />
    </div>
  );
}

export default App;
