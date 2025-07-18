'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { X } from 'lucide-react';

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className='fixed top-4 right-4 z-[99999] space-y-2'>
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`flex items-center justify-between gap-2 px-4 py-2 rounded-md shadow-md min-w-[240px] text-sm text-white
              ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}
              animate-slideIn
            `}
          >
            <span>{message}</span>
            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== id))
              }
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  );
}
