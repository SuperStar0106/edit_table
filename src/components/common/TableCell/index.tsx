import React, { useState, useRef, useEffect } from "react";

import { TableCellComponentStyle } from "./index.style";
import { InputComponent } from "../Input";

type TableCellComponentProps = {
    value: string | number;
};

export const TableCellComponent: React.FC<TableCellComponentProps> = (props) => {
    let { value } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [isSorted, setIsSorted] = useState(false);
    const cellRef = useRef<HTMLTableDataCellElement>(null);

    const handleSort = () => {
        setIsSorted(!isSorted);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cellRef.current && !cellRef.current.contains(event.target as Node)) {
                setIsClick(false);
                setIsEditing(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsClick(true);
    }

    const handleDoubleClick = () => {
        setIsEditing(true);
        setIsClick(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    const handleCellBlur = () => {
        setIsClick(false);
    };

    return (
        <TableCellComponentStyle
            ref={cellRef}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            clicking={isClick}
            onBlur={handleCellBlur}
            className={isSorted ? "sorted": ""}
        >
            {isEditing ? (
                <InputComponent
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    inputSize="regular"
                />
            ) : (
                inputValue
            )}
        </TableCellComponentStyle>
    );
};