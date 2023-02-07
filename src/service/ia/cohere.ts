/**
 * generate a recipe for artificial intelligence [cohere]
 *
 * @param prompt list of ingredients
 * @param typeFood type of ingredients [food, juice, dessert]
 * @param addMoreIngredients
 * @returns recipe generate
 */

export async function generateText(
  prompt: string,
  typeFood: string,
  addMoreIngredients: string
) {
  const res = await fetch('https://api.cohere.ai/generate', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'cohere-Version': '2022-12-06',
      'content-type': 'application/json',
      authorization: import.meta.env.VITE_KEY_IA,
    },
    body: JSON.stringify({
      max_tokens: 800,
      return_likelihoods: 'NONE',
      truncate: 'END',
      prompt: `Generate a recipe for making ${typeFood} with the following ingredients \n${prompt} and ${addMoreIngredients}.`,
      model: 'command-xlarge-nightly',
      temperature: 0.9,
    }),
  });

  return res.json();
}
/**
 * detects the language of the prompt
 *
 * @param {string} prompt text
 * @param {React.Dispatch<React.SetStateAction<string>>} stateLanguage dispatch of useState for update
 * @returns the initials of the detected language
 */

export async function detectLang(prompt: string) {
  const res = await fetch('https://api.cohere.ai/detect-language', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: import.meta.env.VITE_KEY_IA,
    },
    body: JSON.stringify({
      texts: [prompt],
    }),
  });

  return await res.json();
}
// generates a recipe which I can make with the following products
