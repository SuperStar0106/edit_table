import React, { useState } from "react";

import { TableViewSytle } from "./index.style";
import { TableComponent } from "../../common/Table";

import { IPerson } from "../../../models";
import {
     ButtonComponent,
     ModalComponent,
} from '../../common';

type TableViewProps = {
     data: IPerson[];
};

export const TableView: React.FC<TableViewProps> = (props) => {
     const { data } = props;

     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
          setIsModalOpen(true);
     };

     const closeModel = () => {
          setIsModalOpen(false);
     };

     return (
          <TableViewSytle>
               <ButtonComponent type="submit" onClick={openModal}>Add New</ButtonComponent>
               <ModalComponent 
                    isOpen={isModalOpen}
                    onClose={closeModel}
               >
                    asdf
               </ModalComponent>
               <TableComponent
                    person={data}
               />
          </TableViewSytle>
     );
}