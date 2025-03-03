import './App.css';
import Calculator from './components/Calculator';
import ColorPicker from './components/ColorPicker';
import Counter from './components/counter';
import TodoList from './components/TodoList';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Counter/>
      <TodoList/>
      <Calculator/>
      <ColorPicker/>
    </>
  )
}

export default App
