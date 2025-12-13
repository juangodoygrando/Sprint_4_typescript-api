export const jokeContainer = document.getElementById(
  "output_joke"
) as HTMLHeadingElement;

export const nextJokeButton = document.getElementById(
  "next_joke"
) as HTMLButtonElement;

export function printJoke(joke: string):void {
  jokeContainer.textContent = joke;
}
