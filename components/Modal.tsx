import React, { useEffect, useState, useImperativeHandle, forwardRef, useCallback } from 'react';
import { useBoolean } from '../lib/hooks/useBoolean';
import { createPortal } from 'react-dom';
import { BsXCircle } from 'react-icons/bs';

export type ModalHandle = {
    openModal: () => void;
    closeModal: () => void;
};

type Props = {
    ref: React.RefObject<HTMLElement> | null;
    className: string;
    children: React.ReactNode;
};

const Modal = forwardRef<ModalHandle, Props>(({ children, className}, ref) => {
    const [isMounted, setIsMounted] = useState(false);
    const [modalDisplay, openModal, closeModal] = useBoolean(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    // expose methods
    useImperativeHandle(ref, () => ({
        openModal: () => openModal(),
        closeModal: () => closeModal()
    }));

    // close modal by ESC key
    const handleEscape = useCallback(e => {
        if (e.keycode === 27) closeModal();
    }, [closeModal]);

    useEffect(() => {
        if (modalDisplay) {
            document.addEventListener('keydown', handleEscape, false);
        }
        return () => {
            document.removeEventListener('keydown', handleEscape, false);
        }
    }, [modalDisplay, handleEscape]);

    return isMounted && modalDisplay 
        ? createPortal(
            <div className={`modal-container-${className}`} onClick={closeModal}>
                <div className={`modal-${className}`} onClick={(e) => e.stopPropagation()}>
                    <button className={`modal-btn-${className}`} onClick={closeModal} aria-label='close modal' >
                        <BsXCircle />
                    </button>
                    {children}
                </div>
            </div>, document.getElementById('modal-root') as HTMLElement)
        : null
});

Modal.displayName = 'Modal';
export default Modal;
