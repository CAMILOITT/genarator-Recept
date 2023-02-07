import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../component/loading/Loading';
import Recipe from '../../component/recipe/Recipe';
import SendIngredient from '../../component/sendIngredient/SendIngredient';
import { detectLang, generateText } from '../../service/ia/cohere';
import {
  reverseTranslator,
  translator,
} from '../../service/translator/translator';
import './GenerateRecipe.css';
import MessageError from '../../component/messageError/MessageError';

// genera una receta que contengan los productos dichos
// generates a recipe which I can make with the following products\n${recipe}
// genera una receta solo con los productos dichos
// generate a recipe with the next ingredients:\n ${recipe}
// genera una receta aleatoria
// generate a recipe

interface IGenerateRecipe {
  promptIngredients: string;
  typeFood: string;
  addMoreIngredients: string;
}

export default function GenerateRecipe() {
  const [instructions, setInstructions] = useState<string>('');
  const [ingredients, setIngredients] = useState<IGenerateRecipe>({
    promptIngredients: '',
    typeFood: '',
    addMoreIngredients: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  function sendIngredients(
    promptIngredients: string,
    typeFood: string,
    addMoreIngredients: string
  ) {
    setIngredients({
      promptIngredients,
      typeFood,
      addMoreIngredients,
    });
    setLoading(true);
    let lang = 'en';
    async function getInstructions() {
      try {
        setLoading(true);
        setMessageError(false);

        const langResult = await detectLang(promptIngredients);
        lang = langResult.results[0].language_code;

        let translatedIngredients = promptIngredients;
        if (lang !== 'en') {
          translatedIngredients = (await translator(promptIngredients, lang))
            .data.translatedText;
        }

        const generatedText = (
          await generateText(
            translatedIngredients,
            typeFood,
            addMoreIngredients
          )
        ).generations[0].text;

        let result = generatedText;
        if (lang !== 'en') {
          result = (await reverseTranslator(generatedText, lang)).data
            .translatedText;
        }

        setLoading(false);
        setInstructions(result);
      } catch (error) {
        setLoading(false);
        setMessageError(true);
      }
    }
    getInstructions();
  }

  return (
    <div className='generate'>
      <Link to='/' className='generate__goBack'>
        regresar
      </Link>
      <main className='generate__main'>
        <SendIngredient sendIngredients={sendIngredients} />

        {loading ? (
          <Loading />
        ) : messageError ? (
          <MessageError
            sendIngredients={sendIngredients}
            ingredients={ingredients}
          />
        ) : (
          instructions && (
            <Recipe
              instructions={instructions}
              sendIngredients={sendIngredients}
              ingredients={ingredients}
            />
          )
        )}
      </main>
    </div>
  );
}
