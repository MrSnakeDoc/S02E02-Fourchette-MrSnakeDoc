(function () {
  let rightPrice = Math.round(Math.random() * 500);
  let answer = 0;
  let tries = 0;
  function askuser() {
    answer = window.prompt("Quel est le juste prix");
  }
  function compare() {
    if (answer < rightPrice) {
      alert(
        `Pas assez mon gars! C'est plus que ${answer}\nTu as fait ${tries}essais`
      );
    } else if (answer > rightPrice) {
      alert(
        `Trop cher! trop cher! C'est moins que ${answer}\nTu as fait ${tries} essais`
      );
    } else {
      alert(
        `Ding! Ding! Ding! Tu as trouvé le juste prix\nIl t'as fallu ${tries} essais!`
      );
    }
  }
  block: while (answer !== rightPrice) {
    tries++;
    askuser();
    if (
      answer === "Exit" ||
      answer === "EXIT" ||
      answer === "exit" ||
      answer === null
    )
      break block;
    answer = parseInt(answer, 10);
    compare();
  }
})();
