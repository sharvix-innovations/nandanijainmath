import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import { publicRoutes } from "./Router.link";

const RouterApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.link} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default RouterApp;
