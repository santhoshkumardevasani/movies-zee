import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Title', headerName: 'Title', width: 150 },
  { field: 'Distributor', headerName: 'Distributor', width: 250 },
  { field: 'Creative_Type', headerName: 'Creative Type', width: 250 },
  { field: 'Major_Genre', headerName: 'Major Genre', width: 250 },
  { field: 'Release_Date', headerName: 'Release Date', width: 250 }
  
];


export default function MoviesListGrid(props) {
    console.log("Props====>",props);
    const [selection, setSelection] = useState("");
  return (
    <div style={{ height: 400, width: '100%', marginTop:10 }}>
      <DataGrid 
      rows={props.moviesData} 
      columns={columns} 
      pageSize={5} 
      checkboxSelection 
      onSelectionChange={(newSelection) => {
        setSelection(newSelection.rows);
    }}
      
      />
    </div>
  );
}
