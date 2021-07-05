//import logo from "./logo.svg";
import "./App.css";
import Button from "./component/Button";
import Result from "./component/Result";
import Header from "./component/Header";
function App() {
  return (
    <div className="calculator-body">
      <Header />
      <Result />
      <Button />
    </div>
  );
}

export default App;
