// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she should embrace her mistakes. She hugged me.",
    "Why don’t programmers like nature? It has too many bugs.",
    "Why do cows wear bells? Because their horns don’t work.",
    "Why did the computer go to the doctor? It caught a virus."
  ];
  
  // Function to get a random joke
  function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  // Display the joke
  document.getElementById('joke').innerText = getRandomJoke();
  