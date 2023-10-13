import React, { useState, useEffect } from "react";

import { ButtonComponent } from "../Button";
import { ThComponent } from "../Th";
import { TableCellComponent } from "../TableCell";

import { TableComponentStyle } from "./index.style";
import { IPerson } from "../../../models";

type TableComponentProps = {
    person: IPerson[];
    openModal: () => void;
};

export const TableComponent: React.FC<TableComponentProps> = (props) => {
    const { person, openModal } = props;
    const [sortField, setSortField] = useState<keyof IPerson>('');
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [selectedPerson, setSelectedPerson] = useState<IPerson | null>(null);

    const handleSort = (field: keyof IPerson) => {
        setSortField(field);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    const sortedData = person.slice().sort((a, b) => {
        const sortOrderMultiplier = sortOrder === "asc" ? 1 : -1;
        if(a[sortField] < b[sortField]) {
            return -1 * sortOrderMultiplier;
        }
        if(a[sortField] > b[sortField]) {
            return 1 * sortOrderMultiplier;
        }
        return 0;
    });

    const handleEdit = (selectedPerson: IPerson) => {
        setSelectedPerson(selectedPerson);
        openModal();
        console.log(selectedPerson);
    };

    return (
        <TableComponentStyle>
            <table>
                <thead>
                    <th>No</th>
                    <ThComponent
                        handleSort={()=>handleSort('first_name')}
                        sortOrder={sortOrder}
                        sortField={sortField}
                        fieldName="first_name"
                    >
                        First Name
                    </ThComponent>
                    <ThComponent
                        handleSort={()=>handleSort('last_name')}
                        sortOrder={sortOrder}
                        sortField={sortField}
                        fieldName="last_name"
                    >
                        Last Name
                    </ThComponent>
                    <ThComponent
                        handleSort={()=>handleSort('email')}
                        sortOrder={sortOrder}
                        sortField={sortField}
                        fieldName="email"
                    >
                        Email
                    </ThComponent>
                    <ThComponent
                        handleSort={()=>handleSort('age')}
                        sortOrder={sortOrder}
                        sortField={sortField}
                        fieldName="age"
                    >
                        Age
                    </ThComponent>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        sortedData.map((row, index) => {
                            return (
                                <tr key={row.id}>
                                    <td>{index+1}</td>
                                    <TableCellComponent
                                        value={row.first_name}
                                    />
                                    <TableCellComponent
                                        value={row.last_name}
                                    />
                                    <TableCellComponent
                                        value={row.email}
                                    />
                                    <TableCellComponent
                                        value={row.age}
                                    />
                                    <td>
                                        <div className="div_align">
                                            <ButtonComponent
                                                type="submit"
                                                onClick={() => handleEdit(row)}
                                            >
                                                Edit
                                            </ButtonComponent>
                                            <ButtonComponent type="submit">Delete</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </TableComponentStyle>
    );
}