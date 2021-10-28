import { useState } from "react";

const validation = {
  email: {
    regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: "Digite um email valído",
  },
};


const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Digite um valor");
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
    } else {
      setError(null);
      return true;
    }
  };

  
  const onChange = ({ target }) => {
    if(error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
