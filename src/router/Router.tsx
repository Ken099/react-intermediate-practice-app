import React from "react";
import { Route, Switch } from "react-router";

import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";
import { Login } from "../components/pages/login/Login";
import { homeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};