
import './App.css';
import Header from "./components/Header/Header"
import Play from './components/Play';
import SelectionList from './components/SelectionList';
import {useContext} from 'react'

function App() {
  const first = useContext({}) // 
  return (
    <div className="App">
      <h1>Rock Papper Scissors</h1>
      <Header/>
      <SelectionList />
      <Play />
    </div>
  );
}

export default App;
