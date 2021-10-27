import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "../pages/_layout/default";

export default function RouteWithSubRoutes({component: Component, title, ...rest}) {
  return (
    <Route {...rest} render={props=>(
        <DefaultLayout title={title}>
            <Component {...props} />
        </DefaultLayout>
    )}/>
    )
  }