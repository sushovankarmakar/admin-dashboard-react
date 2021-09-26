import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topBar/TopBar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
