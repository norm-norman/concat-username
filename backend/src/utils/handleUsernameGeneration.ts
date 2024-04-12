import { FormData } from '../types';

export function handleUsernameGeneration(data: FormData): string {
  const { firstName, lastName, favoriteFruit, birthyear } = data;
  const username = `${firstName}_${lastName}_${favoriteFruit}${birthyear}`;
  return username;
}
