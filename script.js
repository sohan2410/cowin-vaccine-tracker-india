let userArray = [];
const container = document.querySelector(".container");
const today = new Date();
const date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let pincode;
const pincodeButton = document.querySelector(".pincodeButton");
pincodeButton.addEventListener("click", () => {
  pincode = prompt("Enter PinCode to search for covid vaccines in India");
  const apiUrl =
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" +
    pincode +
    "&date=" +
    date;
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
});

const createCardList = (array) => {
  container.innerHTML = "";

  array = array.centers;
  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="center-id">
    <span>Center Id: </span>
    <span>${obj.center_id}</span>
  </div>

  <div class="name">
    <span>Name: </span>
    <span>${obj.name}</span>
  </div>

  <div class="address">
    <span>Address: </span>
    <span>${obj.address}</span>
  </div>

  <div class="district_name">
    <span>District Name: </span>
    <span>${obj.district_name}</span>
  </div>

  <div class="pincode">
          <span>Pincode:  </span>
          <span>${obj.pincode}</span>
        </div>

  <div class="state_name">
    <span>State Name: </span>
    <span>${obj.state_name}</span>
  </div>

  <div class="fee_type">
    <span>Fee Type: </span>
    <span>${obj.fee_type}</span>
  </div>`;

    container.appendChild(card);
  });
};

console.log("before fetch");
