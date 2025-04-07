function poemApi() {
  let apiKey = "19884f8731abea4oebtff3a019e58351";
  let prompt = "Travel poem Generator";
  let context =
    "You are a travel poem generator. You write short, travel based poems about the subject provided";
  let aiApi = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(aiApi);
}

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

poemApi();
