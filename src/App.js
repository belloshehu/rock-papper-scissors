
import './App.css';
import Header from "./components/Header/Header"
import Play from './components/Play';
import SelectionList from './components/SelectionList';
import {useContext} from 'react'
import { Completion } from './components/Completion';
import { useGlobalContext } from './context';
import { FaHandsHelping } from 'react-icons/fa';

function App() {
  const first = useContext({}) // 
  const {round, isPlaying} = useGlobalContext()
  return (
    <div className="App">
      <h1 className='title'>Rock Papper Scissors</h1>
      {(round === 0 && !isPlaying) && <Completion />}
      <Header/>
      <SelectionList />
      <FaHandsHelping  className='help'/>
    </div>
  );
}

export default App;
