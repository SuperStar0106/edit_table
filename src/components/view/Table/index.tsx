import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

import { TableViewSytle } from "./index.style";
import { TableComponent } from "../../common/Table";

import { IPerson } from "../../../models";
import {
     ButtonComponent,
     ModalComponent,
     InputComponent,
} from '../../common';

type TableViewProps = {
     data: IPerson[];
};

const defaultValues: IPerson = {
     first_name: "",
     last_name: "",
     email: "",
     age: 0,
};

const schema = Yup.object().shape({
     first_name: Yup.string().required(),
     last_name: Yup.string().required(),
     email: Yup.string().email().required(),
     age: Yup.number().required(),
});

export const TableView: React.FC<TableViewProps> = (props) => {
     const { data } = props;

     const [isModalOpen, setIsModalOpen] = useState(false);
     const [editingRow, setEditingRow] = useState<IPerson | null>(null);
     const [firstName, setFirstName] = useState<string>(defaultValues.first_name);
     const [lastName, setLastName] = useState<string>(defaultValues.last_name);
     const [email, setEmail] = useState<string>(defaultValues.email);
     const [age, setAge] = useState<number>(defaultValues.age);

     const { register, handleSubmit, formState: { errors, isValid }, setValue, getValues, watch } = useForm<Pick<IPerson, 'first_name' | 'last_name' | 'email' | 'age'>>({
          resolver: yupResolver(schema),
          // defaultValues: defaultValues
     });

     useEffect(() => {
          setFirstName(editingRow ? editingRow.first_name : '');
          setLastName(editingRow ? editingRow.last_name : '');
          setEmail(editingRow ? editingRow.email : '');
          setAge(editingRow ? editingRow.age : 0);
          console.log('editingRow: ', editingRow);
          console.log('isValid: ', isValid);
     }, [editingRow, isValid]);

     const openModal = (row: IPerson | null) => {
          setEditingRow(row);
          setIsModalOpen(true);
     };

     const closeModel = () => {
          setIsModalOpen(false);
     };

     const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(e.target.value);
     };

     const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(e.target.value);
     };

     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
     };

     const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setAge(Number(e.target.value));
     };

     return (
          <TableViewSytle>
               <ButtonComponent 
                    type="submit" 
                    onClick={() => openModal(defaultValues)}
               >
                    Add New
               </ButtonComponent>
               <ModalComponent 
                    isOpen={isModalOpen}
                    onClose={closeModel}
               >
                    <form>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input First Name"
                                   name="first_name"
                                   register={register}
                                   // error={!!errors.first_name}
                                   value={firstName ? firstName : ''}
                                   onChange={handleFirstNameChange}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Last Name"
                                   name="last_name"
                                   register={register}
                                   error={!!errors.last_name}
                                   value={lastName ? lastName : ''}
                                   onChange={handleLastNameChange}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Email"
                                   name="email"
                                   register={register}
                                   error={!!errors.email}
                                   value={email ? email : ''}
                                   onChange={handleEmailChange}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Age"
                                   name="age"
                                   register={register}
                                   error={!!errors.age}
                                   value={age ? age : 0}
                                   onChange={handleAgeChange}
                              />
                         </div>
                        <div className="button-container">
                            <ButtonComponent
                                type="submit"
                                className="button row-gap-1rem"
                                sx={{ fontSize: '1.2rem' }}
                                disabled={!isValid}
                            >
                                <h4>Submit</h4>
                            </ButtonComponent>
                        </div>
                    </form>
               </ModalComponent>
               <TableComponent
                    person={data}
                    openModal={openModal}
               />
          </TableViewSytle>
     );
}