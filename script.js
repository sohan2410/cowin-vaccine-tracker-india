let userArray = [];
const container = document.querySelector(".myTable");
const today = new Date();
const date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
let pincode;
const pincodeButton = document.querySelector(".pincodeButton");

const createCardList = (array) => {
  //   container.innerHTML = "";

  array = array.centers;
  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("myDiv");
    let temp;
    
    temp=`
    <tr>
      <td>${obj.center_id}</td>
      <td>${obj.name}</td>
      <td>${obj.address}</td>
      <td>${obj.fee_type}</td>
    `;

    obj = obj.sessions;
    temp += `<td>
          <table>`;
    obj.forEach((item) => {
      temp += `
        <tr>
            <td>${item.available_capacity}</td>
            <td>${item.available_capacity_dose1}</td>
            <td>${item.available_capacity_dose2}</td>
            <td>${item.date}</td>
            <td>${item.min_age_limit}</td>
            <td>${item.vaccine}</td>
        </tr>
        `;
    });
    temp += `</table></td></tr>`;
    card.innerHTML = temp;
    container.appendChild(card);
    console.log(card.innerHTML);
  });
};
pincodeButton.addEventListener("click", () => {
  // pincode = prompt("Enter PinCode to search for covid vaccines in India");
  pincode = 110001;
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
