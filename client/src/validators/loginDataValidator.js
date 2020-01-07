export function loginValidator(userData) {
  const errors = [];
  validateEmail(errors, userData.email);
  validatePassword(errors, userData.password);
  return errors;
}


const validateEmail = (errors, email) => {
  if (email === '') {
      errors.push({email: "Email can't be empty"});
  } else if (!email.includes('@')) {
      errors.push({email: 'Email must includes @'});
  }
}

const validatePassword = (errors, password) => {
  if (password === '') {
      errors.push({password: "Password can't be empty"});
  } else if (password.length < 6 || password.length > 15) {
      errors.push({password: 'Password must be 6 to 15 characters long'});
  }  else if (!/\d/.test(password)) {
      errors.push({password: 'Password must includes at least one number'});
  }  else if (!/\W/.test(password)) {
      errors.push({password: 'Password must includes at least one special character'}); 
  }   
}