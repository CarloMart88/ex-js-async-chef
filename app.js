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

//procedo a creare funzione getChefBirthday(id)

async function getChefBirthday(id) {
  const recipes = getData(`https://dummyjson.com/recipes/${id}`)
  //con recipes prendo la ricetta con l'id che passerò
  const chef = getData(`https://dummyjson.com/users/${userId}`)
  //una volta che ho ottenuto l'id dello user in recipes potrò fare la chiamata users
  return {...recipes , chef}
  //creo l'oggetto con entrambe le proprietà
}
