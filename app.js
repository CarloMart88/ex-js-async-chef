
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

//creo la funzione asincrona getChefBirthday a cui passo l'id 

async function getChefBirthday(id) {
  const recipes = await getData(`https://dummyjson.com/recipes/${id}`)
  //con recipes prendo la ricetta con l'id che passerò
  const chef =  await getData(`https://dummyjson.com/users/${recipes.userId}`)
  //una volta che ho ottenuto l'id dello user in recipes potrò fare la chiamata users
  return chef.birthDate
  //ritorno a questo punto solo la chiave birthDate perchè non ho bisogno di tutto l'oggetto
}

//provo ad effettuare le chiamate per vedere il risultato ottenuto 

(async()=>{
  //metodo try per testare la chiamata ed eventuali errori 
  try{
  const result = await getChefBirthday(1)
  console.log(`il compleanno dello chef è: ${dayjs(result).format('DD/MM/YYYY')}`)
  }catch(error){
    console.error(error)
    
  }// non ho aggiunto un finally perchè non penso avesse molto senso farlo 
})()