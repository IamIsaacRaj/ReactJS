import './App.css';
import Calculator from './components/Calculator';
import ColorPicker from './components/ColorPicker';
import Counter from './components/counter';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';
import WeatherApp from './components/WeatherApp';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Greeting name = 'Raju'/>
      <WeatherApp/>
      <Counter/>
      <TodoList/>
      <Calculator/>
      <ColorPicker/>
    </>
  )
}

export default App
