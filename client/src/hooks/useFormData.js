import { useState, useEffect } from 'react';

const useFormData = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    console.log(values);
  }, []);

  return {
    values,
    changeHandler,
  };
};

export default useFormData;
