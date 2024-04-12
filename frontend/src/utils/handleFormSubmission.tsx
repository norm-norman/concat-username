import axios from 'axios';

// Response Interfaces

interface ValidationResponse {
  valid: boolean;
  errors: string[];
}

interface GenerationResponse {
  username: string;
}

// Props Interface
interface SubmissionHandlerProps {
  formData: FormData;
  initialFormData: FormData;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface FormData {
  [string: string]: string;
}

export const handleFormSubmission = ({
  formData,
  initialFormData,
  setUsername,
  setFormData,
  setErrors,
}: SubmissionHandlerProps) => {
  const validateOptions = {
    method: 'GET',
    url: 'http://localhost:5050/validate',
    params: formData,
  };

  // One or Two Step Process:
  // 1. Validate the data on the server - could do this on the client as well
  // 2. If the data is validated successfully generate the username

  axios
    .request(validateOptions)
    .then(function ({ data }: { data: ValidationResponse }) {
      console.log(data);
      if (data.valid) {
        // update the url and reuse everything else
        const generateOptions = {
          ...validateOptions,
          url: 'http://localhost:5050/generate',
        };

        axios
          .request(generateOptions)
          .then(function ({ data }: { data: GenerationResponse }) {
            console.log(data);
            setErrors(['']);
            setUsername(data.username);
            setFormData(initialFormData);
          });
      } else {
        setErrors(data.errors);
        setUsername('');
      }
    });
};
