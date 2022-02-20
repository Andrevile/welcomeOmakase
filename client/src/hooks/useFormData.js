import { useState } from 'react';

const useFormData = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    changeHandler,
  };
};

export default useFormData;
