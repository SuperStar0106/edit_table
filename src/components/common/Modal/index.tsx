import React from "react";

import { ModalComponentStyle } from "./index.style";

type ModalComponentProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({
    children,
    isOpen,
    onClose,
}) => {

    if(!isOpen) {
        return null;
    }

    return (
        <ModalComponentStyle>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={onClose}>&times;</span>
                        <h2>Input personal data</h2>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </ModalComponentStyle>
    );
};