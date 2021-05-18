let userArray = [];
const container = document.querySelector(".card");
const today = new Date();
const date =
today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let pincode;
const pincodeButton = document.querySelector(".pincodeButton");


const createCardList = (array) => {
//   container.innerHTML = "";

  array = array.centers;
  array.forEach((obj) => {
    const card = document.createElement("tr");
    card.classList.add("card");

    card.innerHTML=`<tr>
    <th>${obj.center_id}</th>
    <th>${obj.name}</th>
    <th>${obj.address}</th>
    <th>${obj.fee_type}</th>
</tr>`;

    obj=obj.sessions;

    obj.forEach((item) => {
        card.innerHTML+=`
        <table>
        <tr>
            <td>${item.available_capacity}</td>
            <td>${item.available_capacity_dose1}</td>
            <td>${item.available_capacity_dose2}</td>
            <td>${item.date}</td>
            <td>${item.min_age_limit}</td>
            <td>${item.vaccine}</td>
        </tr>
        </table>
        `
    })
    container.appendChild(card);
  });
};
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

