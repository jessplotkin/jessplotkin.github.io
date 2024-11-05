function tellFortune(numChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.getElementById("fortuneOutput").innerHTML += `<p>${fortune}</p>`;
  }
  
  tellFortune(2, "Lady Gaga", "New York", "Artist");
  tellFortune(3, "Brad Pitt", "Tokyo", "Chef");
  tellFortune(1, "Taylor Swift", "Paris", "Engineer");

  function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const output = `Your doggie is ${dogAge} years old in dog years!`;
    document.getElementById("dogAgeOutput").innerHTML += `<p>${output}</p>`;
  }
  
  calculateDogAge(1);
  calculateDogAge(3);
  calculateDogAge(5);
  
  function getDogAge() {
    const userDogAge = document.getElementById("dogAgeInput").value;
    if (userDogAge) calculateDogAge(userDogAge);
  }

  function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    document.getElementById("reverseNumberOutput").innerHTML += `<p>${reversed}</p>`;
  }
  
  reverseNumber(32243);
  reverseNumber(12345);
  function alphabeticalOrder(str) {
    const orderedStr = str.split('').sort().join('');
    document.getElementById("alphabeticalOrderOutput").innerHTML += `<p>${orderedStr}</p>`;
  }
  
  alphabeticalOrder("webmaster");
  alphabeticalOrder("javascript");

  function capitalizeFirstLetter(str) {
    const capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById("capitalizeOutput").innerHTML += `<p>${capitalizedStr}</p>`;
  }
  
  // Call the function twice with different strings
  capitalizeFirstLetter("the quick brown fox");
  capitalizeFirstLetter("hello world this is js");
  
  
  
  