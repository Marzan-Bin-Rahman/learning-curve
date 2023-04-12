console.log('first log')

const firstPromise = new Promise((resolve, reject) => {
     let isResolvedPromise = false;
     if (isResolvedPromise) {
          resolve('promise resolved')
     }
     else {
          reject('promise rejected')
     }
})

const secondPromise = new Promise((reject, reslove) => {
     let isUserLoggedIn = true;
     if (isUserLoggedIn) {
          reslove('user is successfully logged in. now show him the dashboard')
     } else {
          reject("please try again with correct credentials")
     }
})


/* firstPromise
     .then((response) => {
          console.log(response)
     })
     .catch((error) => {
          console.log(error)
     })


secondPromise
     .then((response) => {
          console.log(response)
     })
     .catch((error) => {
          console.log(error)
     }) */


// short form of this promise

Promise.all([firstPromise, secondPromise])
     .then((res) => {
          console.log(res)
     })
     .catch((error)=>{
          console.log(error)
     })

console.log('second log')