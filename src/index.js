function generatePoem() {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Insert Poem here 🌹",
    autoStart: true,
    cursor: null,
  });
}

let poemGeneraterForm = document.querySelector("#poem-generator-form");
poemGeneraterForm.addEventListener("submit", generatePoem);
