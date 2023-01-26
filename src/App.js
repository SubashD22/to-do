import './App.css';
import TodoApp from './TodoApp';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>TO-DO</title>
      </Helmet>
      <TodoApp/>
    </div>
  );
}

export default App;
