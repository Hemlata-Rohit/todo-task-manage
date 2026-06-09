import React from "react";
import Header from "../components/Header";
import TodoTask from "../components/TodoTask";
import Footer from "../components/Footer";

const TodoNavigation = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center bg-skyblue">
        <Header />
        <TodoTask />
        <Footer />
      </div>
    </>
  );
};

export default TodoNavigation;
