import React, { useState } from 'react';
import { FormData, handleFormSubmission } from '../utils/handleFormSubmission';

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';
const BIRTHYEAR = 'birthyear';
const FAVORITE_FRUIT = 'favoriteFruit';

const initialFormData: FormData = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [BIRTHYEAR]: '',
  [FAVORITE_FRUIT]: '',
};

const formInputProps = [
  {
    inputSlug: FIRST_NAME,
    type: 'text',
    placeholder: 'First Name',
  },
  {
    inputSlug: LAST_NAME,
    type: 'text',
    placeholder: 'Last Name',
  },
  {
    inputSlug: BIRTHYEAR,
    type: 'date',
    placeholder: '',
  },
  {
    inputSlug: FAVORITE_FRUIT,
    type: 'text',
    placeholder: 'Favorite Fruit',
  },
];

const Form = () => {
  // init states
  const [username, setUsername] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(['']);

  const handleOnChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    // reset username
    setUsername('');

    // update formData
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Welcome to the username generator</h2>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault(); // prevent reload
          const target = e.target as typeof e.target & {
            // define shape of inputs
            firstName: { value: string };
            lastName: { value: string };
            favoriteFruit: { value: string };
            birthyear: { value: string };
          };

          // remove year from birthday string - if none then this is just an empty string
          const birthdayString = target.birthyear.value;
          const birthyear = birthdayString.split('-')[0];

          // shape form data
          const formData = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            favoriteFruit: target.favoriteFruit.value,
            birthyear: birthyear,
          };

          // then call the handler to make props cleaner
          handleFormSubmission({
            formData,
            initialFormData,
            setUsername,
            setFormData,
            setErrors,
          });
        }}
      >
        <div className="Form-Group">
          {formInputProps.map(({ inputSlug, type, placeholder }) => {
            return (
              <input
                key={inputSlug}
                className={
                  errors.includes(inputSlug) ? 'Form-Item invalid' : 'Form-Item'
                }
                name={inputSlug}
                type={type}
                placeholder={placeholder}
                value={formData[inputSlug] || ''}
                onChange={handleOnChange}
              />
            );
          })}
          <input className="Form-Item Form-Submit-Button" type="submit" />
        </div>
      </form>
      {errors.length > 0 && errors[0] !== '' && (
        <h6>Please fix the errors in the form.</h6>
      )}
      {username && <h6>Your username is: {username}</h6>}
    </div>
  );
};

export default Form;
