import React from 'react';
import Form from 'react-bootstrap/Form';

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 10 }, (_, i) => 2025 + i);

function Selection() {
  return (
    <>
      <Form.Select size="sm">
        <option value=""></option>
        {days.map((day) => (
        <option key={day} value={day}>{day}</option>
        ))}
      </Form.Select>
      <Form.Select size="sm">
        <option value=""></option>
        {months.map((month) => (
        <option key={month} value={month}>{month}</option>
        ))}
      </Form.Select>
      <Form.Select size="sm">
        <option value=""></option>
        {years.map((year) => (
        <option key={year} value={year}>{year}</option>
        ))}
      </Form.Select>
    </>
  );
}

export default Selection;
