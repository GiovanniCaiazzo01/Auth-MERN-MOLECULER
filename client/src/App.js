import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PriveteRoute";
import { PrivateScreen } from "./components/screens/PrivateScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { RegisterScreen } from "./components/screens/RegisterScreen";
import { ForgotPasswordScreen } from "./components/screens/ForgotPasswordScreen";
import { ReetPasswordScreen } from "./components/screens/ReetPasswordScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route exact path="/resetpassword" component={ReetPasswordScreen} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
