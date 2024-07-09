import useOutsideClick from "../hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Modal({ open, onClose, title, children}) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-white bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-2xl transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-b-gray-400 pb-2 mb-6">
            <p className="text-slate-800 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <XMarkIcon className="w-5 h-5 text-rose-700" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
