
import './App.css';
import Header from "./components/Header/Header"
import Play from './components/Play';
import SelectionList from './components/SelectionList';
import {useContext} from 'react'
import { Completion } from './components/Completion';
import { useGlobalContext } from './context';
import { FaHandsHelping } from 'react-icons/fa';
import { Help } from './components/Help';

function App() {
  const first = useContext({}) // 
  const {round, isPlaying, setShowHelp, showHelp} = useGlobalContext()
  const showModal = () =>{
    setShowHelp(true)
  }
  return (
    <div className="App">
      <h1 className='title'>Rock Papper Scissors</h1>
      {(round === 0 && !isPlaying) && <Completion />}
      <Header/>
      <SelectionList />
      {showHelp && <Help />}
      <button className='help' onClick={showModal}>help</button>
    </div>
  );
}

export default App;
