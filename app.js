console.log("hello world")

/* url degli endpoint 
https://dummyjson.com/recipes/{id} per la ricetta
https://dummyjson.com/users/{userId} per le informazioni sullo chef
*/

/**creo una funzione di supporto asincrona  */

async function getData(url) {
  const call = await fetch(url)
  const result = await call.json()
  return result
  /**con questa funzione posso recuperare i dati dagli endpoint forniti */
  
}