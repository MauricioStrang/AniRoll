




export const userVerify= ()=>{
    fetch('http://localhost:3001/animes/mal/verify', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    }).then((data) => {
        console.log('success');
        return data
      })
      .catch((error) => {   
        console.log('new error', error);
      });

}

