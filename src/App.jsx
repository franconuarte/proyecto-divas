import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <header class="header">
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Divas'} />
      </div>
    </header>
  );
}

export default App;
