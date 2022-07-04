import "./app.css";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app">
      <Login canLogin={false} />
    </div>
  );
};

export default App;
