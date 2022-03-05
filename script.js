// Assignment Code
var generateBtn = document.querySelector("#generate");


// RegExp for containing any non digit characters
const regExp_letters = /\D/i

// prompt user for lenght of password. 8-128 character range
function promptLength(){
  let min_len = 7;
  let max_len = 129;
  let user_len = 8;

  // Keep user in prompt loop until input is between 8-128
  do {
    // Default message when prompt is opened
    let msg = "How many characters does the password need to have? \n(Minimum length is 8 | Maximum length is 128)"

    // Message selection if input did not pass
    if (user_len < min_len) {
      msg = "You had too few characters! \nPlease try again. (8-128)"
    }else if (user_len > max_len){
      msg = "You had too many characters! \nPlease try again. (8-128)"
    }else if (regExp_letters.test(user_len)){
      msg = "You included letters in your answer. \nPlease only user numbers. (8-128)"
    }

    // Prompt
    user_len = prompt(msg,"8");
    
    // Check if response was cancel or contains letters
    if (user_len === null){
      user_len = 8;
    }else if (regExp_letters.test(user_len)){
      continue;
    }

    // Parse input into integer
    user_len = parseInt(user_len);

  } while (user_len<min_len || user_len>max_len || regExp_letters.test(user_len))

  return user_len;
}

// Function to prompt user for specific char set
function promptCharSet(msg){
  let user_set = true;

  // Keep user in prompt loop until input yes, no, or defaulted
  do {
    // Message selection if input did not pass
    if (typeof(user_set) !== typeof(true)){
      msg = "Invalid answer! Please try again (Y/N)"
    }

    user_set = prompt(msg, "Y")

    if (user_set ===null){
      user_set = false;
      break;
    }

    // Check if response was cancel, or matches criteria
    if (user_set === null){
      user_set = false
      break;
    }

    // Check if response was cancel, or matches criteria
    switch (user_set[0].toUpperCase()) {
      case "Y":
        user_set = true
        break;
      case "N":
        user_set = false
        break
    }
  } while (typeof(user_set) !== typeof(true));
  return user_set
}

// Returns generated password
function generatePassword(){
  const special_characters = "!@#$%^&*()_+-=|\\}{][':;/?.>,<`~\""
  const numbers = "0123456789"
  const alpha_lower = "abcdefghijklmnopqrstuvwxyz"

  var pass_len = promptLength(); //Length of password
  var pass_has_spe = promptCharSet("Can the password include special characters? \n(Y/Okay or N/Cancel)")
  var pass_has_num = promptCharSet("Can the password include number? \n(Y/Okay or N/Cancel)")
  var pass_has_up = promptCharSet("Can the password include upper-case characters? \n(Y/Okay or N/Cancel)")
  var pass_has_low = promptCharSet("Can the password include lower-case characters? \n(Y/Okay or N/Cancel)")

  // If no character set turned on, alert user default setting is all characters and reset values
  if (pass_has_spe===false && pass_has_num===false && pass_has_up===false && pass_has_low===false){
    alert("No characters selected. Defaulting all characters available")
    pass_has_spe = true;
    pass_has_num = true;
    pass_has_up = true;
    pass_has_low = true;
  }

  // Function to pull a random element from a given list or string
  function pullRand(item){
    let rand_selector = Math.floor(Math.random()*(item.length-1));

    return item[rand_selector];
  }

  // Function to collect appropriate character sets
  function collectCharSets(){
    let collected_sets = [];

    // Checks 
    function pushSet(has_boolean, collection, set){
        if (has_boolean){
          collection.push(set)
        }
      }

    pushSet(pass_has_spe, collected_sets, special_characters)
    pushSet(pass_has_num, collected_sets, numbers)
    pushSet(pass_has_up, collected_sets, alpha_lower.toUpperCase())
    pushSet(pass_has_low, collected_sets, alpha_lower)

    return collected_sets
  }

  var char_sets = collectCharSets();

  // Function for constructing the password
  function constructPassword(){
    let _password = "";

    for (let i = 0; i < pass_len; i++) {
      let character;

      while (character == null){
        character = pullRand(pullRand(char_sets))
      }
      _password = _password+=character;
    } 
    return _password
  }

  return constructPassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);