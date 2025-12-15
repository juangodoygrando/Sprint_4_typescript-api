export const jokeContainer = document.getElementById(
  "output_joke"
) as HTMLHeadingElement;

export const nextJokeButton = document.getElementById(
  "next_joke"
) as HTMLButtonElement;
const blobDiv = document.getElementById("blobDiv") as HTMLDivElement;

export function printJoke(joke: string): void {
  jokeContainer.textContent = joke;
}

export function getNewBlob() {
  const randomBlob = Math.floor(Math.random() * 10) + 1;
  const newUrl = `/blob/blob_${randomBlob}.svg`;

  blobDiv.style.backgroundImage = `url('${newUrl}')`;
}
