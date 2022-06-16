import React from "react";
import DataTable from "react-data-table-component";
import Fakedata from '../Fakedata.js';

function Datatable(props) {
    const donnees=Fakedata();
    
    console.log(donnees);
    console.log(Object.values(donnees[1]));

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Position',
            selector: row => row.position,
            sortable: true,
        },
        {
            name: 'Office',
            selector: row => row.office,
            sortable: true,
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
        },
        {
            name: 'Start date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Salary',
            selector: row => row.salary,
            sortable: true,
        },
    ];
    
const data = donnees

    return (
        <DataTable  
            //title="DataTable Example"
            columns={columns}
            data={data}
            defaultSortField="name"            
            pagination
            //subHeader
            //subHeaderComponent={subHeaderComponent}
        />
    );
};

export default Datatable;