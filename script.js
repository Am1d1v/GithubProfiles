

const APIURL = 'https://api.github.com/users/';
const form = document.querySelector('#form');
const search = document.querySelector('#search');


// Fetch a user data
async function getUser(username){
    try {
        const {data} = await axios(APIURL + username);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
//getUser('Am1d1v');

// Serch define user
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = search.value;
    
    if(user){
        getUser(user);
    }
})