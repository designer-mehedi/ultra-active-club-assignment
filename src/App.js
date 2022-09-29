import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Questions></Questions>
    </div>
  );
}

export default App;
