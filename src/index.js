function typePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 4,
  });
}

function generatePoem() {
  event.preventDefault();

  let poemPrompt = document.querySelector("#poem-prompt");
  let apiKey = "19884f8731abea4oebtff3a019e58351";
  let context =
    "You are a travel poem generator. You love to write a short, 4 lined poem. Make sure to follow user instructions";
  let prompt = `user instructions: Generate a poem about travel using the theme ${poemPrompt.value}`;
  let aiApi = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`prompt. ${prompt}`);
  console.log(context);

  axios.get(aiApi).then(typePoem);
}

let poemGeneraterForm = document.querySelector("#poem-generator-form");
poemGeneraterForm.addEventListener("submit", generatePoem);
