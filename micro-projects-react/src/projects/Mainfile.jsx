import React from "react";
import Project1 from "./project1/project1.component.jsx";
import Project2 from "./project2/project2.component.jsx";
import Project3 from "./project3/project3.component.jsx";
import Project4 from "./project4/project4.component.jsx";
import Project5 from "./project5/project5.component.jsx";
import { Counter } from "../features/counter/Counter";
function Mainfile() {
  return (
    <>
      <Project1 name="Caesar" />
      <Project2 />
      <Project3 />
      <Counter />
      <Project4 />
      <Project5 />
    </>
  );
}

export default Mainfile;
