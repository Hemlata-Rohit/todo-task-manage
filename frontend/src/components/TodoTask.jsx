import React, { useState } from "react";
import updateIcon from "../assets/icon/updateIcon.svg";
import deleteIcon from "../assets/icon/deleteIcon.svg";
import plusIcon from "../assets/icon/plusIcon.svg";
import CreatePopup from "./CreatePopup";
import DeletePopup from "./DeletePopup";
import { usedeleteTodos, useGetTodos } from "../Services/APIQuery/todo";

const TodoTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const { data: todoData, isLoading, error } = useGetTodos();
  const { mutate: deleteMutate } = usedeleteTodos(setIsDeleteOpen);

  // console.log(todoData?.data)

  // const tasks = [
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 2,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 3,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 4,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 5,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 6,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 7,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  //   {
  //     id: 8,
  //     text: "Lorem ipsum dolor sit amet consectetur. Egestas sed purus rhoncus non. Risus amet fermentum hac amet. Curabitur quis justo commodo adipiscing. Hendrerit est pulvinar in at.",
  //   },
  // ];

  const handleDelete = () => {
    console.log("---------------------------")
    selectedTask && deleteMutate(selectedTask);
  };

  return (
    <>
      <div
        className="p-8 bg-white min-h-screen w-11/12 shadow-2xl shadow-[#13173D14];
]"
      >
        {/* Title and Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => {
              setIsOpen("Create");
              setSelectedTask(null);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700"
          >
            <span className="text-[18px] font-semibold flex gap[8px]">
              <img src={plusIcon}></img>Create Task
            </span>
          </button>
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {todoData?.data?.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-xl shadow-sm odd:bg-lightblue even:bg-lightpurple transition hover:shadow-md`}
            >
              <label className="pl-2 text-lg text-gray-900 mb-4">
                {task.title}
              </label>
              <p className="border-l-4 border-blue-500 pl-2  text-sm text-gray-700 mb-4">
                {task.description}
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setIsOpen("Update");
                    setSelectedTask(task);
                  }}
                  className="bg-black text-white p-2 rounded-full"
                >
                  <img src={updateIcon}></img>
                </button>

                <button
                  onClick={() => {
                    setSelectedTask(task.id);
                    setIsDeleteOpen(true);
                  }}
                  className="bg-black text-white p-2 rounded-full"
                >
                  <img src={deleteIcon}></img>
                </button>
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <CreatePopup
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedTask={selectedTask}
          />
        )}

        {isDeleteOpen && (
          <DeletePopup
            isDeleteOpen={isDeleteOpen}
            setIsDeleteOpen={setIsDeleteOpen}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default TodoTask;
