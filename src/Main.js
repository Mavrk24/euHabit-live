import {React} from 'react';
import {Button} from '@material-ui/core';
import {Timer} from '../src/Timer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
export default function Main() {
  return (
    <div className="login-wrapper">
    <BrowserRouter>
    <Switch>
    <Route path="/timer">
          <Timer />
    </Route>
    </Switch>
    <Button><Link to="/timer">Start</Link></Button>
    </BrowserRouter>
    </div> )
  }
