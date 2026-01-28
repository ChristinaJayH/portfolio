import "./modal.css";

export default function Modal({ children, onClose }) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close resume"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
