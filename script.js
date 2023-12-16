

const APIURL = 'https://api.github.com/users/';
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');


// Fetch a user data
async function getUser(username){
    try {
        const {data} = await axios(APIURL + username);
        createUserCard(data)
    } catch (error) {
        if(error.response.status = 404){
          createErrorCard('No profile with this username');
        }
        
    }
}
//getUser('Am1d1v');

// Serch define user
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = search.value;
    
    if(user){
        getUser(user);
        search.value = '';
    }
})

// Create dynamic card of user
function createUserCard(user){
    const cardHTML = `
    <div class="card">

        <div>
            <img src="${user.avatar_url}" alt="profileImage" class="avatar">
        </div>

        <div class="user-info">
            <h2>${user.name ? user.name : user.login}</h2>
            <p>${user.bio ? user.bio : 'User has no biography'}</p>

            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Followings</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">

            </div>
        </div>

    </div>
`;

    main.innerHTML = cardHTML;
}

// Error Card. Pop up if user profile is not found
function createErrorCard(message){
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}