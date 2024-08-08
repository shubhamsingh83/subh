// src/utils/validation.js

export const isNumeric = (value) => {
    return !isNaN(value);
  };
  
  export const isRequired = (value) => {
    return value.trim() !== '';
  };
  
  export const validateCell = (value, validationRules) => {
    return validationRules.every((rule) => {
      switch (rule) {
        case 'numeric':
          return isNumeric(value);
        case 'required':
          return isRequired(value);
        default:
          return true;
      }
    });
  };
  