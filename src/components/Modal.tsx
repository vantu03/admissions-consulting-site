import { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { MdClose } from "react-icons/md";

export type ModalRef = {
    open: () => void;
    close: () => void;
};

type ModalProps = {
    title: string;
    children: React.ReactNode;
    maxWidth?: string;
};

const Modal = forwardRef<ModalRef, ModalProps>(({ title, children, maxWidth = "max-w-5xl" }, ref) => {

    const overflowRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    const handleTouch = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setIsOpen(false);
    }
};


    if (!isOpen) return null;

    return (
        <div 
            onClick={handleTouch}
            ref={overflowRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
        >
            <div ref={contentRef} className={`rounded-xl p-6 bg-white w-full ${maxWidth} h-full max-h-[80vh]`} >
                <div className="mb-6 text-stone-700 w-full h-full relative overflow-y-auto">
                    <h2 className="text-lg font-semibold leading-none tracking-tight text-black">{title}</h2>
                    <div className="mt-4">
                        {children}
                    </div>
                    <button
                        className="absolute top-0 right-4 text-gray-500 hover:text-gray-700"
                        onClick={() => setIsOpen(false)}
                    >
                        <MdClose className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Modal