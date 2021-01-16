import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Form = (props) => {
  const [data, setData] = useState({
    title: '',
    body: '',
  });

  const change = (event) => {
    setData(data => ({...data, [event.target.name]: event.target.value}));
  };

  const submit = (e) => {
    e.preventDefault();
    props.onSubmit(data);
  };

  return (
    <form onSubmit={submit} className="form">
      <div className={'item'}>
        <label className="label">Name:</label>
        <input
          name={'title'}
          value={data.title}
          className={'input'}
          placeholder={'Title'}
          onChange={change}
        />
      </div>
      <div className={'item'}>
        <label className="label">Body:</label>
        <textarea
          name={'body'}
          value={data.body}
          className={'input'}
          placeholder={'Body'}
          onChange={change}
        />
      </div>
      <button type="submit" className="submit">Submit</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;