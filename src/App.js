
import './App.css';
import Header from "./components/Header/Header"
import SelectionList from './components/SelectionList';

function App() {
  return (
    <div className="App">
      <h1>Rock Papper Scissors</h1>
      <Header/>
      <SelectionList />
    </div>
  );
}

export default App;
