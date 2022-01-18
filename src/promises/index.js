const somethingHillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whopps!');
    }
  })
}

somethingHillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error))

  const somethingHillHappen2 = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve('true!!');
        }, 2000)
      } else {
        const error = new Error('Whopps!')
        reject(error);
      }
    })
  }

  somethingHillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error))


  Promise.all([somethingHillHappen(), somethingHillHappen2()])
  .then(response => {
    console.log('array of results', response);
  }).catch(err => {
    console.error(err)
  })