import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddTodos, useEditTodos } from "../Services/APIQuery/todo";

const CreatePopup = ({ isOpen, setIsOpen, selectedTask }) => {
  const { mutate: addMutate, isLoading, error } = useAddTodos(setIsOpen);
  const { mutate: editMutate } = useEditTodos(setIsOpen);

  if (!isOpen) return null;

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "At least 5 characters required"),
  });

  const handleSubmit = (values) => {
    if (isOpen === "Update") {
      editMutate({ id: selectedTask?.id, payload: values });
    } else {
      addMutate(values);
    }
  };

  return (
    <div className="w-full fixed bg-black/30 inset-0 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[50%] shadow-lg">
        <div className="flex flex-col gap-6">
          {/* Title */}
          <p className="text-[24px] font-medium">{isOpen} List</p>

          {/* ✅ Formik Form */}
          <Formik
            enableReinitialize
            initialValues={{
              title: selectedTask ? selectedTask.title : "",
              description: selectedTask ? selectedTask.description : "",
            }}
            validationSchema={validationSchema}
            // onSubmit={(values, { resetForm }) => {
            //   addMutate(values);
            //   // console.log("✅ Submitted Data:", values);
            //   // alert(`${isOpen} Successful!`);
            //   resetForm();
            //   setIsOpen(false);
            // }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              {/* Textarea */}
              {/* title */}
              <div>
                <label className="text-[18px] font-medium block mb-2">
                  Title<span className="text-[#D02F44]"> *</span>
                </label>

                <Field
                  name="title"
                  placeholder="Title"
                  className="text-[16px] font-medium w-full border border-[#E0E0E0] rounded-[5px] p-2 focus:outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/*Description  */}
              <div>
                <label className="text-[18px] font-medium block mb-2">
                  Description<span className="text-[#D02F44]"> *</span>
                </label>

                <Field
                  as="textarea"
                  name="description"
                  placeholder="Details"
                  rows={4}
                  className="text-[16px] font-medium w-full border border-[#E0E0E0] rounded-[5px] p-2 focus:outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-5 justify-end text-[18px] font-semibold mt-6">
                <button
                  type="submit"
                  className="border rounded-[15px] px-6 py-3 text-white bg-blue hover:bg-blue-700 cursor-pointer transition-all"
                >
                  {isOpen === "Create" ? "Submit" : "Update"}
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="border rounded-[15px] px-6 py-3 text-blue hover:bg-blue-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreatePopup;

//trial

// import React from "react";

// const CreatePopup = ({ isOpen, setIsOpen }) => {
//   return (
//     <>
//       <div className="w-full fixed bg-black/30 inset-0 flex justify-center items-center ">
//         <div className="bg-white rounded-xl p-6 w-[50%]">
//           <div className="flex flex-col gap-6">
//             <p className="text-[24px] font-medium">{isOpen} List</p>
//             <p className="text-[18px] font-medium block mb-2">
//               To-Do List<span className="text-[#D02F44]"> *</span>
//             </p>
//           </div>

//           <textarea
//             placeholder="Details"
//             rows={4}
//             className="text[16px] font-medium w-full border border-[#E0E0E0] rounded-[5px] p-0.5"
//           />

//           {/* buttons */}
//           <div className="flex gap-5 justify-end text-[18px] font-semibold mt-10">
//             <button className="border rounded-[15px] px-6 py-3 text-white bg-blue cursor-pointer">
//               {isOpen === "Create" ? "Submit" : "Update"}
//             </button>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="border rounded-[15px] px-6 py-3 text-blue "
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreatePopup;
