// fetch = Function used for making HTTP requests to fetch resources.
// fetch is a function that returns a promise that resolves to the response object.
// The response object has several properties and methods that can be used to access the response data.
//         (JSON,style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and 
//         used for interracting with APIs to retrieve and send data asynchronously over the web.
//         fetch() is a function that returns a promise that resolves to the response object.
//         fetch(url, {options})

//         {options} => {method: "GEt"}..get some data / {method: "POST"}..to send some data / {method: "PUT"}..to replace some data / {method: "DELETE"}..to delete some data

// HTTPS response status code:
//      100-199(information response)    200-299(successful response)  300-399(redirection message)  400-499(client error message)  500-599(server error message)

// url: https://pokeapi.co  ...for all pokemon details in API

/*//using FETCH
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  //.then((response) => response.json()) //converts the response to JSON folder
  .then(response => {
    if (!response.ok) {  //this means it can't fetch data
        throw new Error("Failed to fetch data");
        }
    return response.json();
  })
  .then((data) => console.log(data)) //prints the data in the console
  .catch((error) => console.error("Error occured"));
*/

//using ASYNC
async function fetchData() {

    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); //url given for API

        if (!response.ok) {
            throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            console.log(data);
            const pokemonsprite = data.sprites.front_default;  //the section where pictures of pokemons are stored
            
            const imageElement = document.getElementById("pokemonsprite");

            imageElement.src = pokemonsprite; //link to pic
            imageElement.style.display = "block"; //right now it has no image..so it's a block
    }
    catch(error) {   //this only used for error
       console.log(error);
    }
}