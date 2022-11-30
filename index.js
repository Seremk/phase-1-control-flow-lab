function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  }
  else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
}

// function ternaryCheckCity(destination){
  // let result;
  //  destination === 'NYC'? 
    // result "Ok, sounds good."; result "No go."
function ternaryCheckCity(city) {
  return city=="NYC" ? "Ok, sounds good." : "No go.";
   console.log (pittsbourgh)
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  let result;
  switch(tip){
         case 'generous':
         result = "Thank you so much.";
      break;
   case 'not as generous':
   result= "Thank you.";
      break;
    default:
      result= "Bye.";

   }
    return result;
   }
