import { getRandomJoke, urlRandomDadJoke } from "../../services/api/apicall";
import type { Joke, jokeApiResponse } from "../../services/api/interface";

import { printJoke } from "../../ui/randomJoke/uiRandomJoke";


export function covertResponse(dataApi:jokeApiResponse | undefined): Joke|undefined{
  if(dataApi){
    const dataConvert:Joke={
      joke:dataApi.joke
    }
    return dataConvert
  }else{
    return undefined
  }
}

async function loadAndPrintJoke() {
  const newjoke= covertResponse(await getRandomJoke(urlRandomDadJoke));
  if(newjoke){
    printJoke( newjoke );
  }
}

export async function initJokeFeature(button: any) {
  loadAndPrintJoke();

  button.addEventListener("click", loadAndPrintJoke);
}
