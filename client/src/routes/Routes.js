import React from "react";
const Main = React.lazy(() => import("../container/Main"));

export const routes = [{ id: 0, path: "/", component: Main }];
