const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector("#search");

const client_id = "Iv1.f89ffdc839355db0";
const client_secret = "877801d2b1495bca293c87959f00f3be5865c909";

const fetchUser = async user => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
  );

  const data = await api_call.json();
  return data;
};

// ** This is just an alternative, refactor. I think you want to make it clear that the 'user' is a custom parameter **

// const fetchUser = async (user) => {
//   const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
//   const data = await api_call.json();

//   return data;
// }

const showData = () => {
  fetchUser(inputValue.value).then(res => {
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${
      res.name
      }</span>`;
  });
};

// ** This is just a refactor alternative and it creates you a reusable component for returning the user information. 
// `prop` could be updated to 'email' or 'location' etc. You'll also need to update 'Name:' to a variable of some sort if you choose to go down that route ** 

// const showData = async () => {
//   let fetchingUser = await fetchUser(inputValue.value);
//   let prop = 'name';
//   return returnContainer(fetchingUser, prop);
// };

// const returnContainer = (user, prop) => {
//   nameContainer.innerHTML = `Name: <span class="main__profile-value">${
//     user[prop]
//     }</span>`;
// };

searchButton.addEventListener("click", () => {
  showData();
});