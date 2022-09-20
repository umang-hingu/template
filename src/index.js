import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import AboutUs from "views/Dashboard/AboutUs";


const token = localStorage.getItem('token')
ReactDOM.render(
  
  <HashRouter>
    <Switch>
   
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/about-us`} component={AboutUs} />
    {token ?<Redirect from={`/`} to='/admin/dashboard' />: ( <Redirect from={`/`} to='/auth/signin' />)
    }
   
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
