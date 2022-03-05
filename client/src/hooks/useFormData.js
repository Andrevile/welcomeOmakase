import { useState, useEffect } from 'react';

const useFormData = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(values);
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    changeHandler,
    setValues,
  };
};

export default useFormData;
