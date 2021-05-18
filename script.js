const container = document.querySelector(".container");
const today = new Date();
const date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
const pincode = 110001;
// const apiUrl="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}"
const apiUrl =
  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110001&date=18-05-2021";

let userArray = [];

const createCardList = (array) => {
  container.innerHTML = "";
    // console.log(array);
    
  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(obj);
    card.innerHTML = `<div class="name">Name: </div><div class=${obj.centers.name}></div>`;

    container.appendChild(card);
  });
};

console.log("before fetch");
fetch(apiUrl)
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    console.log(result);
    userArray = result;
    createCardList(userArray);
    // console.log(result.centers[0].name);
  });
