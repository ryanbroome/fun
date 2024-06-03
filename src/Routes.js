import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Homepage/Homepage";

import Portfolio from "./Portfolio";
import HtmlTagsDemo from "./HtmlTagsDemo";
import MoreHtmlTagsDemo from "./MoreHtmlTagsDemo";
import DemoForm from "./DemoForm";
import WeatherPage from "./WeatherPage";

import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/">
        <HomePage />
      </Route>

      <Route
        exact
        path="/htmltagsdemo">
        <HtmlTagsDemo />
      </Route>

      <Route
        exact
        path="/morehtmltagsdemo">
        <MoreHtmlTagsDemo />
      </Route>

      <Route
        exact
        path="/portfolio">
        <Portfolio />
      </Route>

      <Route
        exact
        path="/demoForm">
        <DemoForm />
      </Route>

      <Route
        exact
        path="/weather">
        <WeatherPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
