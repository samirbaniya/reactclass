import { useRef } from "react";
function FormDemo() {
  const dialogvar = useRef(null);
  const openModal = () => {
    dialogvar.current.showModal();
  };
  const closeModal = () => {
    dialogvar.current.close();
  };
  return (
    <div>
      <button onClick={openModal}>Open</button>
      <dialog ref={dialogvar}>
        <div>My name is ...</div>
        <button onClick={closeModal}>Close</button>
      </dialog>
    </div>
  );
}

export default FormDemo;
