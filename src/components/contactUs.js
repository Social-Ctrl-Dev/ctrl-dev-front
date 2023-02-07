import React, { useState } from 'react';
import { Image, Button, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClick = () => {
    axios.post('https://1wtouivta5.execute-api.us-east-1.amazonaws.com/default/twilio-ads', {
      phone_number: phoneNumber
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <>
      <Image src="" alt="Logo" />
      <p>Texto</p>
      <Form>
        <FormControl
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={handleChange}
        />
      </Form>
      <Button onClick={handleClick}>Send</Button>
    </>
  );
};

export default ContactUs; 