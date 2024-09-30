//The API used for this APP is "https://alquran.cloud/api"   `SW`

function bringVerse(nm) {
  fetch(`https://api.alquran.cloud/v1/ayah/${nm}/en.asad`)
    .then((resp) => resp.json())
    .then((result) => {
      const me = document.querySelector("#here");
      me.innerHTML = result.data.text;

      //displaying the verse number
      const spn = document.querySelector("#insertHere");
      spn.innerHTML = result.data.number;
    })
    .catch((error) => {
      alert("Failed to fetch data.");
    });
}

const inpValue = document.querySelector("#inp"); //input field

const btn = document.querySelector("#hit"); //For normal submit button

const randomBtn = document.querySelector("#rndm");

btn.addEventListener("click", handleSubmit);
randomBtn.addEventListener("click", handleRandom);

inpValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSubmit();
  }
});
function handleSubmit() {
  if (/^[a-zA-Z]+$/.test(inpValue.value)) {
    alert("Enter a valid number!!");
    return;
  }
  let value = inpValue.value;
  bringVerse(value);
}

function handleRandom() {
  inpValue.value = "";

  let anyNum;

  anyNum = Math.floor(Math.random() * 6236);
  bringVerse(anyNum);
}
