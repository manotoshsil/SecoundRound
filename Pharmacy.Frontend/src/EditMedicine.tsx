import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import { IMedicine } from './MedicineTable';

interface IServerResponse{
    errors: string[],
    success: boolean
  };
  export const EditMedicine = (prop: IMedicine) => {
    const [serverResponse, setServerResponse] = useState<IServerResponse>({ errors:[] , success:false});
    const [name, setName] = useState(prop.fullName);
    const [brand, setBrand] = useState(prop.brand);
    const [price, setPrice] = useState(prop.price);
    const [quantity, setQuantity] = useState(prop.quantity);
    const [expiryDate, setExpiryDate] = useState(prop.expiryDate);
    const [notes, setNotes] = useState(prop.notes);
  
  
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      fetch('https://localhost:5001/api/v1/MedicineStock', {
        method: 'POST',
        body: JSON.stringify({"fullName": name,"brand": brand ,"price": price,
        "quantity": quantity, "expiryDate": expiryDate,
        "notes": notes}),
        headers: {
          'Content-Type': 'application/json'
        },
      }
      ).then((res) => { return res.json(); })
        .then((data) => {  
          debugger;
          if(data.status == "200")
          setServerResponse({errors:[] , success: true});
          else 
          setServerResponse({errors:[""] , success: false});
         });
    };
   
    return (<>
      <div className="form-group">
        &nbsp;
  </div>
      <div className="form-group">
        &nbsp;
  </div>
  
      <Form style={{ width: '60%', margin: 'auto' }}>
        {serverResponse.errors.length > 0  ? <Form.Group controlId="formBasicErrorsFromServer">
          <Form.Label ><h2 style={{color: 'red'}}>Errors</h2></Form.Label> </Form.Group> 
          :<></>}
  
  {serverResponse.success  ? <Form.Group controlId="formBasicErrorsFromServer">
          <Form.Label ><h2 style={{color: 'green'}}>Success!</h2></Form.Label> </Form.Group> 
          :<></>}
  
        <Form.Group controlId="formBasicTitle">
          <Form.Label ><h2>Add Medicine</h2></Form.Label>
  
        </Form.Group>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="" value={prop.fullName as string} onChange={e => setName(e.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formBasicBrand">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="" value={prop.brand as string}  onChange={e => setBrand(e.target.value)} />
        </Form.Group>
  
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="" value={prop.price as number}  onChange={e => setPrice(parseFloat(e.target.value))} />
        </Form.Group>
  
        <Form.Group controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="" value={prop.quantity as number} onChange={e => setQuantity(parseInt(e.target.value))} />
        </Form.Group>
  
        <Form.Group controlId="formBasicExpiryDate">
          <Form.Label>ExpiryDate</Form.Label>
          <Form.Control type="date" placeholder=""   onChange={e => setExpiryDate(new Date(e.target.value))} />
        </Form.Group>
  
        <Form.Group controlId="formBasicNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="text" placeholder=""  value={prop.notes as string} onChange={e => setNotes(e.target.value)}/>
        </Form.Group>
  
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
    </Button>
      </Form></>);
  };