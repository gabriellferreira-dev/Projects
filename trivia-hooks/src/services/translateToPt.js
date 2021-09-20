import { translate } from 'google-translate-api-browser';

export const translateToPt = async (string) => {
  const translated = await translate(string, { to: 'pt' });
  return translated;
};