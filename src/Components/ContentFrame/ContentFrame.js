import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Orders } from "./../Orders/Orders";
import { Escrow } from "./../Escrow/Escrow";
import { TeamDir } from "./../TeamDir/TeamDir";

export const ContentFrame = () => (
  <>
    <Switch>
      <Route exact path="/orders" component={Orders} />
      <Route path="/admin">
        <Switch>
          <Route path="/admin/users" component={TeamDir} />
          <Route exact path="/admin/escrow" component={Escrow} />
        </Switch>
      </Route>
      <Redirect to="/orders" />
    </Switch>
  </>
);
