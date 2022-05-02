const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

fetch(url)
.then (function(response) {
  console.log(response)
  return response.json()
})

.then(function(data){
  console.log(data.length)
})
.catch(function(error){
  console.log(error)
}
)

// async function getCatFacts() {
//   try {
//       const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
//       const results = await response.json();
//       console.log(results.length);
//   } catch (error) {
//       console.log(error);
//   }
// }

