function Submit(){
  let Number = document.getElementById("num").value
  let ComputerGuess = Math.floor(Math.random()*10)
  document.getElementById("Output").innerHTML=  "<p> The computers guess: "+ComputerGuess+"<br>"+"Your guess: "+Number+"</p>"
  if (Number==ComputerGuess){
    document.getElementById("Result").innerHTML="<p>You win!</p>"
  } else{
    document.getElementById("Result").innerHTML="<p>You lose!</p>"
  }
}