import React from "react";

import "./App.css";
import { AppShell } from "@shiksha/common-lib";
import StudentPage from "pages/StudentPage";
import HomePage from "pages/HomePage";
import TeacherPage from "pages/TeacherPage";
function App() {
  const routes = [
    {
      moduleName: "module-template",
      path: "/",
      component: HomePage,
    },
    {
      moduleName: "module-template",
      path: "/studentpage",
      component: StudentPage,
    },
    {
      moduleName: "module-template",
      path: "/teacherpage",
      component: TeacherPage,
    },
  ];
  const LoginComponent = React.lazy(() => import("core/Login"));

  return <AppShell routes={routes} AuthComponent={LoginComponent} />;
}

export default App;