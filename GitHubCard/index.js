import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryDiv = document.querySelector('.cards');

axios 
.get('https://api.github.com/users/kendra4227')
.then((res)=>{
//console.log(res);
entryDiv.append(userCard(res.data));
})
.catch((err)=>{
  console.log("Error has occured",err);

})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/jiangeyre',
'https://api.github.com/users/Pytormal',
'https://api.github.com/users/Veilios',
'https://api.github.com/users/1professionalusername'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function userCard(obj){
  //created user card
let card = document.createElement('div');
card.classList.add('card');
//created user image
let userImg = document.createElement('img');
userImg.src = obj.avatar_url;
card.appendChild(userImg);
// user info
let info = document.createElement('div');
info.classList.add('card-info');
card.appendChild(info);

let name = document.createElement('h3');
name.classList.add('name');
name.textContent = obj.name;
info.appendChild(name);

let userName = document.createElement("p");
userName.classList.add("username");
userName.textContent =  obj.login;
info.appendChild(userName);

let location = document.createElement("p");
location.textContent = obj.location;
info.appendChild(location);

let profile = document.createElement("p");
profile.href =  obj.html_url;
info.appendChild(profile);

let followers = document.createElement("p");
followers.textContent = `"Followers:",${obj.followers}`;
info.appendChild(followers);

let following = document.createElement("p");
following.textContent = `'Following:',${ obj.following}`;
info.appendChild(following);

let bio = document.createElement("p");
bio.textContent = `"Bio:", ${obj.bio}`;
info.appendChild(bio);

return card;
}
followersArray.forEach((link) => {
  axios.get(`${link}`)
  .then((res) => {
    entryDiv.append(userCard(res.data))
  })
  .catch((err) => {
    console.log(err);
  });
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
