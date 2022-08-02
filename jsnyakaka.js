while (true) {
  // menangkap pilihan playernya
  var playerPlayer = prompt("choose your champion, jempol, telunjuk, kelingking");
  // menangkap pilihan komputer, seperti randomizer
  //randomizer
  var compPlayer = Math.random() * 10;
  console.log(compPlayer);

  if (compPlayer <= 1 / 3) {
    compPlayer = "jempol";
  } else if (compPlayer > 1 / 3 && compPlayer <= 2 / 3) {
    compPlayer = "telunjuk";
  } else if (compPlayer > 2 / 3) {
    compPlayer = "kelingking";
  }

  console.log(compPlayer);
  // aturan mainnya
  var result = "";
  if (playerPlayer == compPlayer) {
    result = "DRAW";
  } else if (playerPlayer == "jempol") {
    result = compPlayer == "telunjuk" ? "WIN" : "LOSE";
  } else if (playerPlayer == "telunjuk") {
    result = compPlayer == "kelingking" ? "WIN" : "LOSE";
  } else if (playerPlayer == "kelingking") {
    result = compPlayer == "jempol" ? "WIN" : "LOSE";
  } else if (playerPlayer == "manis") {
    result = "OTHER1";
    alert("what? marry me baby. . . . !? ");
  } else if (playerPlayer == "tengah") {
    result = "OTHER2";
    alert("NANI!!. . . . ");
  }
  console.log(result);

  // tampilan hasilnya
  if (result == "OTHER1") {
    alert("you got 3 options, 3!, choose only those");
  } else if (result == "OTHER2") {
    alert("you got 3 options, 3!, choose only those");
  } else {
    alert("you have chosen " + playerPlayer);
    alert("and the computer choose " + compPlayer);
    alert("you have " + result);
  }
}
