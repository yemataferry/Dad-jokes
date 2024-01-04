const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// USING THE .then() method

// function generateJoke() {

//   const config = {
//     headers: {
//       'Accept':'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config)
//   .then(response => response.json())
//   .then((data) => {
//      jokeEL.innerHTML = data.joke
//   })
// }


// USING THE async function

async function generateJoke() {

  const config = {
    headers: {
      'Accept':'application/json'
    }
  }

  const response = await fetch('https://icanhazdadjoke.com', config)

  const data = await response.json()
  jokeEL.innerHTML = data.joke
}
