import { Route, Switch } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import Users from "../pages/Users/index";
import { CreateUser } from "../pages/Users/create";

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/users/create' component={CreateUser} />
    </Switch>
  );
}