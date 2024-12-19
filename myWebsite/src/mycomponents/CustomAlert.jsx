/* eslint-disable react/prop-types */
import { useState } from "react";

function CustomAlert(props) {
  const { message } = props;
  const [isOpen, setIsOpen] = useState("block");

  //   const openDialog = () => setIsOpen("block");
  const closeDialog = () => setIsOpen("hidden");

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeDialog();
        }
      }}
      className={`${isOpen} fixed top-0 left-0 z-50 bg-slate-300 bg-opacity-40 h-screen w-screen flex justify-center items-center`}
    >
      <div className={`h-fit w-fit p-10 bg-white`}>
        <p>{message}</p>
        <button
          onClick={closeDialog}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default CustomAlert;
