// Assignment Code
var generateBtn = document.querySelector("#generate");


// RegExp for containing any non digit characters
const regExp_letters = /\D/i


// prompt user for lenght of password. 8-128 character range
function promptLength()
{
  let min_len = 7;
  let max_len = 129;
  let user_len = 8



  // Keep user in prompt loop until input is between 8-128
  do 
    {
    // Default message when prompt is opened
    let msg = "How many characters does the password need to have? \n(Minimum length is 8 | Maximum length is 128)"

    // Message selection if input did not pass
    if (user_len < min_len) 
    {
      msg = "You had too few characters! \nPlease try again. (8-128)"
    }
    else if (user_len > max_len)
    {
      msg = "You had too many characters! \nPlease try again. (8-128)"
    }
    else if (regExp_letters.test(user_len))
    {
      msg = "You included letters in your answer. \nPlease only user numbers. (8-128)"
    }

    // Prompt
    user_len = prompt(msg,"8");
    

    // Check if response was cancel or contains letters
    if (user_len === null)
    {
      user_len = 8;
    }
    else if (regExp_letters.test(user_len))
    {
      continue;
    }

    // Parse input into integer
    user_len = parseInt(user_len);

  } while (user_len<min_len || user_len>max_len || regExp_letters.test(user_len))

  return user_len;
}




// prompt user if spcial character must be included
function promptSpecialChar()
{

  let user_special = true;


  // Keep user in prompt loop until input yes, no, or defaulted
  do 
  {
    // Default message when prompt is opened
    let msg = "Should the password include special characters? (Y or N)"

    // Message selection if input did not pass
    if (typeof(user_special) !== typeof(true))
    {

      msg = "Invalid answer! Please try again (Y/N)"

    }

    // Prompt
    user_special = prompt(msg, "Y");
    
    
    // Check if response was cancel, or matches criteria
    if (user_special === null)
    {
      user_special = false
      break;
    }

    switch (user_special[0].toUpperCase()) {
      case "Y":
        user_special = true
        break;
      
      case "N":
        user_special = false
        break
    }

  } while (typeof(user_special) !== typeof(true));

  return user_special;
}




// prompt user if num character must be included
function promptNumChar()
{

  let user_num = true;


  // Keep user in prompt loop until input yes, no, or defaulted
  do 
  {
    // Default message when prompt is opened
    let msg = "Should the password include numbers characters? (Y or N)"

    // Message selection if input did not pass
    if (typeof(user_num) !== typeof(true))
    {

      msg = "Invalid answer! Please try again (Y/N)"

    }

    // Prompt
    user_num = prompt(msg, "Y");
    
    
    // Check if response was cancel, or matches criteria
    if (user_num === null)
    {
      user_num = false
      break;
    }

    switch (user_num[0].toUpperCase()) {
      case "Y":
        user_num = true
        break;
      
      case "N":
        user_num = false
        break
    }

  } while (typeof(user_num) !== typeof(true));

  return user_num;
}





// prompt user if capital characters must be included
function promptUpChar()
{

  let user_up = true;


  // Keep user in prompt loop until input yes, no, or defaulted
  do 
  {
    // Default message when prompt is opened
    let msg = "Should the password include upper characters? (Y or N)"

    // Message selection if input did not pass
    if (typeof(user_up) !== typeof(true))
    {

      msg = "Invalid answer! Please try again (Y/N)"

    }

    // Prompt
    user_up = prompt(msg, "Y");

    // Check if response was cancel, or matches criteria
    if (user_up === null)
    {
      user_up = false
      break;
    }

    switch (user_up[0].toUpperCase()) {
      case "Y":
        user_up = true
        break;
      
      case "N":
        user_up = false
        break
    }

  } while (typeof(user_up) !== typeof(true));

  return user_up;
}



// prompt user if lower characters must be included
function promptLowChar()
{

  let user_low = true;


  // Keep user in prompt loop until input yes, no, or defaulted
  do 
  {
    // Default message when prompt is opened
    let msg = "Should the password include lower case characters? (Y or N)"

    // Message selection if input did not pass
    if (typeof(user_low) !== typeof(true))
    {

      msg = "Invalid answer! Please try again (Y/N)"

    }

    // Prompt
    user_low = prompt(msg, "Y");

    // Check if response was cancel, or matches criteria
    if (user_low === null)
    {
      user_low = false
      break;
    }

    switch (user_low[0].toUpperCase()) {
      case "Y":
        user_low = true
        break;
      
      case "N":
        user_low = false
        break
    }

  } while (typeof(user_low) !== typeof(true));

  return user_low;
}



function generatePassword()
{
  const special_characters = "!@#$%^&*()_+-=|\\}{][':;/?.>,<`~\""
  const numbers = "0123456789"
  const alpha_lower = "abcdefghijklmnopqrstuvwxyz"

  var pass_len = promptLength(); //Length of password
  var pass_has_spe = promptSpecialChar(); // If can contain special char
  var pass_has_num = promptNumChar(); // If can contain num char
  var pass_has_up = promptUpChar(); // If can contain upper charc
  var pass_has_low = promptLowChar(); // If can contain lower charc

  // Function to decide whether or not to pull from a char list
  function randBool()
  {

    let rand = Math.floor(Math.random()*2)
    switch (rand) 
    {

      case 1:
        rand = true;
        break;

      case 0:
        rand = false;
        break;
 
    }

    return rand;
  }

  // Function to pull a random char from a given char set
  function pullRandCharacter(char_set)
  {
    let rand_selector = Math.floor(Math.random()*(char_set.length-1));

    return char_set[rand_selector];
  }

  // Function to collect appropriate character sets
  function collectCharSets()
  {
    let collected_sets = [];

    if (pass_has_spe)
    {
      collected_sets.push(special_characters);
    }

    if (pass_has_num)
    {
      collected_sets.push(numbers);
    }

    if (pass_has_up)
    {
      collected_sets.push(alpha_lower.toUpperCase());
    }

    if (pass_has_low)
    {
      collected_sets.push(alpha_lower);
    }

    return collected_sets
  }

  var char_sets = collectCharSets();

  function constructPassword()
  {
    for (let i = 1; i < pass_len; i++) 
    {
      let character;

      
    }
  }

}

generatePassword()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);