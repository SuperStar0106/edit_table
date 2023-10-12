import { useEffect } from "react";
import { TableView } from "../../components/view";

import { IPerson } from "../../models";
// import mock data
import { mockData } from "../../const";


export const TableContainer = () => {
    return <TableView
                data={mockData}
            />;
}