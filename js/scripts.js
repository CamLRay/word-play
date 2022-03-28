$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const inputSentence = $("#sentence").val().toLowerCase().split(" "); 
    let newSentence = [];
    let punctuation = [];

    inputSentence.forEach(function(word) {
      // if (word.length >= 3) {
      //   if (word.includes(".", "!", "?", ",")) {
      //     newSentence.push(word.slice(0,-1));
      //     punctuation.push(word.slice(-1))
          
      //   } else {
      //     newSentence.push(word);
      //   } 

        if (!word.includes(".", "!", "?") && word.length >=3) {
          newSentence.push(word);
          } else if (word.includes(".", "!", "?") && word.length <4) {
          punctuation.push(word.slice(-1));
        } else if (word.length >=4) {
          newSentence.push(word.slice(0,-1));
          punctuation.push(word.slice(-1))
        }
    });
    let reversedSentence = newSentence.reverse().join(" ");

    $("#output").append(reversedSentence[0].toUpperCase().concat(reversedSentence.slice(1)).concat(punctuation[0]));
  });
});