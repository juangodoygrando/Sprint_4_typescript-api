const ratingDiv = document.getElementById("ratingDiv") as HTMLDivElement;

const happyIcon = document.getElementById("happyIcon") as HTMLImageElement;
const neutralIcon = document.getElementById("neutralIcon") as HTMLImageElement;
const angryIcon = document.getElementById("angryIcon") as HTMLImageElement;

const allIcons = document.querySelectorAll(".iconImage");

export function ratingListener() {
  document.addEventListener("click", (e) => {
    const eventTarget = e.target as HTMLElement;
    const event = eventTarget.id;
    if (eventTarget.tagName === "DIV") {
      console.log("Clik en:", event);
    }
    const hoy = new Date()
    console.log(hoy.toLocaleDateString('es-ES'))

    if (allIcons || !ratingDiv.contains(eventTarget)) {
      allIcons.forEach((icon) => icon.classList.remove("grayscale"));
    }

    if (event === "happyIcon") {
      neutralIcon.classList.add("grayscale");
      angryIcon.classList.add("grayscale");
    } else if (event === "neutralIcon") {
      happyIcon.classList.add("grayscale");
      angryIcon.classList.add("grayscale");
    } else if (event === "angryIcon") {
      happyIcon.classList.add("grayscale");
      neutralIcon.classList.add("grayscale");
    }
  });
}
