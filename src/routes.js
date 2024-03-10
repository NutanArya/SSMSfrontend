// routes.js
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/dashboard";

const routes = [
  {
    path: "/",
    component: LandingPage,
    key: "LandingPage",
  },

  {
    path: "/login",
    component: Login,
    key: "login",
  },
  {
    path: "/dashboard",
    component: Dashboard,
    key: "dashboard",
  },
];

export default routes;
