const fetchApi = async (url) => {
     try {
          const response = await fetch(url)
          const users = await response.json()
          return users;
     } catch (e) {
          console.log(e)
     }
}

fetchApi('https://jsonplaceholder.typicode.com/users')
     .then((users) => {
          console.log(users)
     })
