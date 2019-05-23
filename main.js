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

  const data = api_call.json();
  return { data: data };
};

const showData = () => {
  fetchUser(inputValue.value).then(res => {
    console.log(res);
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${
      res.data.name
    }</span>`;
  });
};

searchButton.addEventListener("click", () => {
  showData();
});
