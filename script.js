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
  array.forEach((obj1) => {
    
    let temp;

    obj = obj1.sessions;
    obj.forEach((item) => {
      const card = document.createElement("tr");
      card.classList.add("myDiv");
      if(!temp){
        temp=`
          <td>${obj1.center_id}</td>
          <td>${obj1.name}</td>
          <td>${obj1.address}</td>
          <td>${obj1.fee_type}</td>
          `;
      }
      else {
        temp=`
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          `;
      }
      
      temp += `
              <td>${item.available_capacity}</td>
              <td>${item.available_capacity_dose1}</td>
              <td>${item.available_capacity_dose2}</td>
              <td>${item.date}</td>
              <td>${item.min_age_limit}</td>
              <td>${item.vaccine}</td>
              
          `;
  
      card.innerHTML = temp ;
      container.appendChild(card);  

      console.log(card);
    });
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