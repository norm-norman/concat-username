import { FormData } from '../types';

interface ResultShape {
  valid: boolean;
  errors: string[];
}

export function handleInputValidation(data: FormData): ResultShape {
  // grab data
  const { firstName, lastName, favoriteFruit, birthyear } = data;

  // initialize return variables
  const errors = [];
  let valid = true;

  // first name error
  if (firstName === null || firstName === undefined || firstName === '') {
    valid = false;
    errors.push('firstName');
  }

  // last name error
  if (lastName === null || lastName === undefined || lastName === '') {
    valid = false;
    errors.push('lastName');
  }

  // favorite fruit error
  if (
    favoriteFruit === null ||
    favoriteFruit === undefined ||
    favoriteFruit === ''
  ) {
    valid = false;
    errors.push('favoriteFruit');
  }

  // birthyear error
  if (birthyear === null || birthyear === undefined || birthyear <= 0) {
    valid = false;
    errors.push('birthyear');
  }

  return { valid, errors };
}
