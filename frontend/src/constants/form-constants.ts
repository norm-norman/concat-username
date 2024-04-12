import { FormData } from '../utils/handleFormSubmission';

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';
const BIRTHYEAR = 'birthyear';
const FAVORITE_FRUIT = 'favoriteFruit';

export const initialFormData: FormData = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [BIRTHYEAR]: '',
  [FAVORITE_FRUIT]: '',
};

export const formInputProps = [
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
