import Form from 'react-bootstrap/Form';



function SelectBasicExample({handleChange}) {
    
  return (
    <Form.Select onChange={handleChange} aria-label="Default select example">
      <option>Open this select menu</option>
          <option value="favorite">favorite</option>
      <option value="images">images</option>
    </Form.Select>
  );
}

export default SelectBasicExample;