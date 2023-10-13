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
     const [firstName, setFirstName] = useState(defaultValues.first_name);
     const [lastName, setLastName] = useState(defaultValues.last_name);
     const [email, setEmail] = useState(defaultValues.email);
     const [age, setAge] = useState(defaultValues.age);

     const { register, handleSubmit, formState: { errors, isValid }, setValue, getValues, watch } = useForm<IPerson>({
          resolver: yupResolver(schema),
          defaultValues: defaultValues
     });

     useEffect(() => {
          console.log(isValid);
     }, [isValid]);

     const openModal = () => {
          setIsModalOpen(true);
     };

     const closeModel = () => {
          setIsModalOpen(false);
     };

     return (
          <TableViewSytle>
               <ButtonComponent 
                    type="submit" 
                    onClick={openModal}
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
                                   error={!!errors.first_name}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Last Name"
                                   name="last_name"
                                   register={register}
                                   error={!!errors.last_name}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Email"
                                   name="email"
                                   register={register}
                                   error={!!errors.email}
                              />
                         </div>
                         <div className="modal-input-margin">
                              <InputComponent
                                   label="Input Age"
                                   name="age"
                                   register={register}
                                   error={!!errors.age}
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