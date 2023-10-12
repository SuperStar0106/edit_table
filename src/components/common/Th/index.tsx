import React, { useState } from 'react';

import { ThComponentStyle } from './index.style';

import { IPerson } from '../../../models';

type ThComponentProps = {
    children: React.ReactNode;
    handleSort: () => void;
    sortOrder: 'asc' | 'desc';
    sortField: keyof IPerson;
    fieldName: string;
};

export const ThComponent: React.FC<ThComponentProps> = ({ children, ...props }) => {
    const { handleSort, sortOrder, sortField, fieldName } = props;
    const [isSorted, setIsSorted] = useState<boolean | undefined>();

    const handleClick = () => {
        handleSort();
        setIsSorted(!isSorted);
    };

    return  <ThComponentStyle
                onClick={handleClick}
                isSorted={isSorted}
            >
                <div className='th_align'>
                    <div>{children}</div>
                    <div style={{ cursor: 'pointer' }}>
                        {sortField === fieldName && sortOrder === "asc" ? (
                            <span>&uarr;</span>
                        ) : (
                            <span>&darr;</span>
                        )}
                    </div>
                </div>
            </ThComponentStyle>;
};