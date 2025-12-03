import { createContext, useContext, useState } from "react";
import { ToastItem, STATUS } from "./components/Toast";

type ToastData = {
  id: number;
  title: string;
  content: string;
  time?: number;
  status?: string;
};

const ToastContext = createContext<(data: ToastData) => void>(() => {});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  function addToast(data: ToastData) {
    setToasts((prev) => [...prev, data]);
  }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}

      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-4">
        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
