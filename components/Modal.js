'use client';

export const Modal = ({ isOpen, onClose, children}) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900 z-500"
                    style={{ zIndex: 999 }}
                >
                    <div className="bg-white p-8 w-1/2">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};