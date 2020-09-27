import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';


interface IServerResponse{
  errors: string[],
  success: boolean
}
const AddMedicine = () => {
  const [serverResponse, setServerResponse] = useState<IServerResponse>({ errors:[] , success:false});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(Number);
  const [quantity, setQuantity] = useState(Number);
  const [expiryDate, setExpiryDate] = useState(Date);
  const [notes, setNotes] = useState("");



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
    ) //.then((res) => { return res.json(); })
      .then((data) => {  
        debugger;
        if(data.status == 200)
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
        <Form.Control type="text" placeholder="" onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicBrand">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder=""  onChange={e => setBrand(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder=""   onChange={e => setPrice(parseFloat(e.target.value))} />
      </Form.Group>

      <Form.Group controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder=""  onChange={e => setQuantity(parseInt(e.target.value))} />
      </Form.Group>

      <Form.Group controlId="formBasicExpiryDate">
        <Form.Label>ExpiryDate</Form.Label>
        <Form.Control type="date" placeholder=""   onChange={e => setExpiryDate(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicNotes">
        <Form.Label>Notes</Form.Label>
        <Form.Control type="text" placeholder="" onChange={e => setNotes(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
  </Button>
    </Form></>);
};

export default AddMedicine;