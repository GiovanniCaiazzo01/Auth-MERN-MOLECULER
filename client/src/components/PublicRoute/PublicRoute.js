import React, { Component } from "react";
import { Route } from "react-router-dom";

const PublicRoute = (children) => {
  return <Route>{children}</Route>;
};

export default PublicRoute;
