(function () {
  let rightPrice = Math.round(Math.random() * 500);
  let answer = 0;
  let tries = 0;
  block: while (answer !== rightPrice) {
    tries++;
    answer = window.prompt("Quel est le juste prix");
    if (answer === null) break block;
    answer = answer.toLowerCase();
    if (answer == "exit") break block;
    answer = parseInt(answer, 10);
    if (answer < rightPrice) {
      alert(
        `Pas assez mon gars! C'est plus que ${answer}\nTu as fait ${tries}`
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
})();
