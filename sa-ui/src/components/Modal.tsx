import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../features/AppContext";

const Modal = () => {
  const { modal } = useContext(AppContext);
  const { closeModal, modalContent, isOpen } = modal;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: any) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) modalRef.current.focus();
  }, [isOpen]);

  return (
    <div
      className={`modal__overlay ${isOpen && "active"}`}
      tabIndex={0}
      ref={modalRef}
      onKeyDown={handleKeyPress}
    >
      <div className="modal__container">
        {modalContent}
        <div className="btn btn-danger" onClick={() => closeModal()}>
          Close
        </div>
      </div>
    </div>
  );
};

export { Modal };
