import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Simple from './Components/Simple';

function App() {

  return (
    <div className="App">   
        <Simple />
        <ItemListContainer name="En construccion"/>
        <ItemCount stock="15" initial="1"/> 
    </div>
  );
}

export default App;
