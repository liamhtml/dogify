/*
    2020
    This is the script I use to check if the extension options are checked.
    I do this by checking if the checkboxes are checked. Based on whether
    they are or not, another, different script is executed which either
    dogifies or de-dogifies the page.
*/

//  Start Option #1: Replace instances of "cat" with "dog"

// checks if DOM is loaded first
window.addEventListener('DOMContentLoaded', (event) => {
// inline js isn't allowed by chrome, so I have to do this
document.getElementById("option1").addEventListener("click", toggleOption1);
});

function toggleOption1() {

  var option1 = document.getElementById("option1");

  // if option1 is checked, dogify
  if (option1.checked === true) {
    console.log("DOGIFICATION HAS BEGUN.");
    chrome.tabs.executeScript({
          file: 'dogify.js'
        });
  // otherwise, deDogify
  } else {
    console.log("DOGIFICATION HAS BEEN DISABLED. DE-DOGIFYING ALL CATS");
    chrome.tabs.executeScript({
          file: 'deDogify.js'
        });
    }
}

toggleOption1();
// End Option 1
