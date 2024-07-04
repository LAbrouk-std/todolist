import React from 'react';
import Form from 'react-bootstrap/Form';

const numbers = Array.from({ length: 31 }, (_, i) => i + 1);

function Selection() {
  return (
    <>
      <Form.Select size="sm">
        <option value=""></option>
        {numbers.map((number) => (
        <option key={number} value={number}>{number}</option>
        ))}
      </Form.Select>
    </>
  );
}

export default Selection;
