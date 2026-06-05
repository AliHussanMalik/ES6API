const variable1 = document.getElementById("user-id")
const variable2 = document.getElementById("ID")
const variable3 = document.getElementById("Title")
const variable4 = document.getElementById("Completed")
variable1.value = "Variable One's Value is replaced here";
// variable2.
// variable3.
// variable4.

function fetchdata(userid){
      fetch(`https://jsonplaceholder.typicode.com/todos/${userid}`)

}
      // .then(response => response.json())
      // .then(json => console.log(json))

      console.log(`Here is the Response ${data}`)

      fetchdata(userid)