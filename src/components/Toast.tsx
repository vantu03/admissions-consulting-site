import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

export const STATUS = {
  WARNING: "bg-amber-300 text-black",
  ALERT: "bg-sky-800 text-white",
  ERROR: "bg-red-500 text-white",
  SUCCESS: "bg-emerald-600 text-white",
};

export function ToastItem({
  id=Date.now(),
  title,
  content,
  time = 3000,
  status = STATUS.ALERT,
  onClose,
}: {
  id: number;
  title: string;
  content: string;
  time?: number;
  status?: string;
  onClose: (id: number) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => onClose(id), time);
    return () => clearTimeout(timer);
  }, [id, onClose, time]);

  return (
    <div
      ref={ref}
      className={`${status} relative p-4 px-6 rounded-xl shadow-xl pointer-events-auto animate-slide-in`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="text-lg">{content}</div>

      <button onClick={() => onClose(id)}>
        <MdClose className="absolute top-4 right-4 w-5 h-5 text-gray-300 hover:text-white" />
      </button>
    </div>
  );
}
