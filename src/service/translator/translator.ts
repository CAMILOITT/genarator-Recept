/**
 * traductor
 *
 * @param text text to be translated
 * @param lang language of traduction
 * @returns a text converted, lang to english
 */
export async function translator(text: string, lang: string) {
  const encodedParams = new URLSearchParams();
  encodedParams.append('source_language', lang);
  encodedParams.append('target_language', 'en');
  encodedParams.append('text', text);
  try {
    const res = await fetch(
      'https://text-translator2.p.rapidapi.com/translate',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': import.meta.env.VITE_KEY_TRANSLATOR,
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        },
        body: encodedParams,
      }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
}
/**
 * traductor
 *
 * @param text text to be translated
 * @param lang language of traduction
 * @returns a text converted, english to lang
 */
export async function reverseTranslator(text: string, lang: string) {
  const encodedParams = new URLSearchParams();
  encodedParams.append('source_language', 'en');
  encodedParams.append('target_language', lang);
  encodedParams.append('text', text);
  try {
    const res = await fetch(
      'https://text-translator2.p.rapidapi.com/translate',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': import.meta.env.VITE_KEY_TRANSLATOR,
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        },
        body: encodedParams,
      }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
}
