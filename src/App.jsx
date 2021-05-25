import { Counter } from "./features/counter/Counter";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
