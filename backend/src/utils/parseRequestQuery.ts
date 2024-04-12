import { Request } from 'express';
import { FormData } from '../types';

export function parseRequestQuery(req: Request): FormData {
  const formData = {
    firstName: (req.query as { firstName: string }).firstName,
    lastName: (req.query as { lastName: string }).lastName,
    favoriteFruit: (req.query as { favoriteFruit: string }).favoriteFruit,
    birthyear: <number>(req.query as { birthyear: unknown }).birthyear,
  };

  return formData;
}
