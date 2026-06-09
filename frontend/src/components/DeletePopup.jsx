
import React from "react";
import deleteItem from "../assets/images/deleteItem.png";

const DeletePopup = ({ isDeleteOpen, setIsDeleteOpen,handleDelete }) => {
  if (!isDeleteOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-[420px] py-10 px-8 text-center shadow-lg flex flex-col items-center gap-6">
        
        {/* Trash Icon */}
        <img src={deleteItem} alt="Delete icon" className="w-16 h-16" />

        {/* Message */}
        <p className="text-gray-800 text-[18px] font-medium">
          Are you sure you want to delete selected contacts?
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button 
           onClick={handleDelete}
           className="bg-[#0078D4] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#006CBE] transition-all"
          >
            Delete
          </button>
          <button
            onClick={() => setIsDeleteOpen(false)}
            className="border border-[#0078D4] text-[#0078D4] px-8 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;





// import React from "react";
// import deleteItem from "../assets/images/deleteItem.png";

// const DeletePopup = ({ isDeleteOpen, setIsDeleteOpen, onConfirmDelete, taskName }) => {
//   if (!isDeleteOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
//       <div className="bg-white rounded-2xl w-[420px] py-10 px-8 text-center shadow-lg flex flex-col items-center gap-6">
        
//         {/* Trash Icon */}
//         <img src={deleteItem} alt="Delete icon" className="w-16 h-16" />

//         {/* Message */}
//         <p className="text-gray-800 text-[18px] font-medium leading-relaxed">
//           Are you sure you want to delete 
//           <span className="text-[#D02F44] font-semibold"> "{taskName}"</span>?
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-4">
//           <button
//             onClick={() => {
//               onConfirmDelete(); // 🔹 Calls parent delete function
//               setIsDeleteOpen(false); // Close popup
//             }}
//             className="bg-[#D02F44] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#B82A3B] transition-all"
//           >
//             Delete
//           </button>

//           <button
//             onClick={() => setIsDeleteOpen(false)}
//             className="border border-[#0078D4] text-[#0078D4] px-8 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeletePopup;
