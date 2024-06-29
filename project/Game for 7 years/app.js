const dice = () => {
    let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let d = document.querySelector("#o1").innerHTML = `<img src='image/${num}.png' width="50px" height="50px">`;
}

const otp=()=>{

    let num = Math.floor(Math.random() * (99999 - 12345 + 1) + 12345);

    let d = document.querySelector("#o2").innerText=num;
 }
 const atm=()=>{

   let num = Math.floor(Math.random() * (999999 - 123456 + 1) + 123456);

   let d = document.querySelector("#o5").innerText=num;
}

function rpsGame() {
   var userChoice = prompt("Enter Rock, Paper, or Scissors:");
   var computerChoice = Math.random();
   if (computerChoice < 0.34) {
     computerChoice = "Rock";
   } else if (computerChoice <= 0.67) {
     computerChoice = "Paper";
   } else {
     computerChoice = "Scissors";
   }
 
   var result = compare(userChoice, computerChoice);
   document.getElementById("o7").textContent = "You chose: " + userChoice + ", Computer chose: " + computerChoice + ". " + result;
 }
 
 function compare(choice1, choice2) {
   if (choice1 === choice2) {
     return "The result is a tie!";
   }
   if (choice1 === "Rock") {
     return choice2 === "Scissors" ? "User wins!" : "Computer wins!";
   }
   if (choice1 === "Paper") {
     return choice2 === "Rock" ? "User wins!" : "Computer wins!";
   }
   if (choice1 === "Scissors") {
     return choice2 === "Paper" ? "User wins!" : "Computer wins!";
   }
 }
 

const dinner=()=>{
   let menu= ['dal-makhni','chole-bhature','chilli','idlii','dosa'];
   let l =menu.length;
   let x=Math.floor(Math.random() *l);
   document.querySelector("#o3").innerText=menu[x];
}

const quote=()=>{
   let quote= [
      'A journey of a thousand miles begins with a single step.',
      'The only way to do great work is to love what you do.',
      'In the middle of every difficulty lies opportunity.',
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      'Believe you can and you’re halfway there.',
      'The future belongs to those who believe in the beauty of their dreams.'
    ];
        let l =quote.length;
    let x=Math.floor(Math.random() *l);
    document.querySelector("#o4").innerText=quote[x];
 }

 function pg() {
   var length = 10,
       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=",
       password = "";
   for (var i = 0, n = charset.length; i < length; ++i) {
       password += charset.charAt(Math.floor(Math.random() * n));
   }
   document.getElementById("o6").innerText = password;
 }
 