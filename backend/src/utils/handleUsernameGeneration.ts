import { FormData } from '../types';

export function handleUsernameGeneration(data: FormData): string {
  const { firstName, lastName, favoriteFruit, birthday } = data;
  const username = `${firstName}_${lastName}_${favoriteFruit}${birthyear}`;
  return username;
}
