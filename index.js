let formTag = document.querySelector("form");

//step1:creating a async function to get data from api//

const getData = async () => {
  //add try block//
  try {
    //fetch the api//
    let res = await fetch("http://localhost:3000/employees");
    let data = await res.json(); //data is in the form of chunks//
    // console.log(data);
    //check if the api data is getting or not//

    appendData(data);
    //call the function of appenData and send data from here//
  } catch (err) {
    console.log(err);
  }
};

//step2: get the data from the form i.e from frontend//

const getformData = (e) => {
  e.preventDefault();
  let formObj = {
    employeeName: document.querySelector("#name").value,
    employeeID: document.querySelector("#employeeID").value,
    department: document.querySelector("#department").value,
    experience: document.querySelector("#exp").value,
    email: document.querySelector("#email").value,
    mobile: document.querySelector("#mbl").value,
  };
  //console to check whether we got values or not//
  // console.log(formObj);
};

//step3:write a function to append the data from backend to Ui//
const appendData = (data) => {
  let tbody = document.querySelector("tbody");
  data.forEach((el) => {
    console.log(el);
    //  will return the object from data
    //create tr and append tds inside it//
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = el.employeeName;

    let td2 = document.createElement("td");
    td2.innerHTML = el.employeeID;

    let td3 = document.createElement("td");
    td3.innerHTML = el.department;

    let td4 = document.createElement("td");
    td4.innerHTML = el.experience;

    let td5 = document.createElement("td");
    td5.innerHTML = el.email;

    let td6 = document.createElement("td");
    td6.innerHTML = el.mobile;

    let td7 = document.createElement("td");
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.append(tr);

    //check experience to assign role
    //is exp is less than 2 fresher
    //more than 2 and less than 4 junior
    //else senior

    if (el.experience < 2) {
      td7.innerHTML = "Fresher";
    } else if (el.experience >= 2 && el.experience >= 4) {
      td7.innerHTML = "Junior";
    } else {
      td7.innerHTML = "Senior";
    }
  });
};
formTag.addEventListener("click", getformData);

window.onload = getData;
