import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {EditMedicine} from './EditMedicine';
export interface IMedicine {
  id: Number,
  fullName: String,
  brand: String,
  price: Number,
  quantity: Number,
  expiryDate: Date,
  notes: String
};







export const MedicineTable = () => {
  const [data, setData] = useState<IMedicine[]>([]);
  const [show, setShow] = useState(false);
  const [underEditRow, setUnderEditRow] =useState<IMedicine>();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgFormatter =(cell:any,row:IMedicine) => {
    return  <a href="#" onClick={(e) => {
     setUnderEditRow(row);
      handleShow();
      }}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </a>;
  }
  
  useEffect(() => {
    fetch('https://localhost:5001/api/v1/MedicineStock/all', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      },
    }
    ).then((res) => { return res.json(); })
      .then((data) => { return setData(data); });
  }, []);

  let rowClassNameFormat = (row: IMedicine, rowIdx: Number) =>{
    // row is whole row object
    // rowIdx is index of row
    if(row.expiryDate < new Date(new Date().getTime()+(10*24*60*60*1000)))
     return 'red-row';

    if (row.quantity < 10)
     return 'yellow-row';

     return '';
  
  }


  return (
    <div style={{width:'80%', margin: 'auto'}}>
      {data.length > 0 ? <BootstrapTable data={data}  trClassName={rowClassNameFormat} bordered={ false } pagination={ true }>
        <TableHeaderColumn isKey dataField='id' hidden={true}>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='fullName' filter={ { type: 'TextFilter', delay: 0 } }>Full Name</TableHeaderColumn>
        <TableHeaderColumn dataField='brand'>Brand</TableHeaderColumn>
        <TableHeaderColumn dataField='price'> Price</TableHeaderColumn>
        <TableHeaderColumn dataField='quantity' >Quantity</TableHeaderColumn>
        <TableHeaderColumn dataField='expiryDate'>ExpiryDate</TableHeaderColumn>
        <TableHeaderColumn dataField='notes'  hidden={true}>Notes</TableHeaderColumn>
        <TableHeaderColumn dataField='edit' dataFormat={ imgFormatter}>Edit</TableHeaderColumn>
      </BootstrapTable> : <></>}
     {underEditRow !== undefined ? <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditMedicine id={underEditRow!.id}
        fullName={underEditRow!.fullName} brand={underEditRow!.brand}
        price={underEditRow!.price} quantity={underEditRow!.quantity} expiryDate={underEditRow!.expiryDate} 
        notes={underEditRow!.notes} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>: <></>}
    </div>
  );
};


