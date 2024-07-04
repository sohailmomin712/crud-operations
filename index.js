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

//step 4:create async function to delete data from backend and frontend//

const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      getData();
      //if everything is alright update and re-fetch the data//
    }
    //cause we are going to delete id from employees object//
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
  tbody.innerHTML = "";
  //clearing the previous data//
  data.forEach((el) => {
    console.log(el);
    //  will return the object from data
    //create tr and append tds inside it//
    let tr = document.createElement("tr");
    //creating id to delete the row using id//
    tr.setAttribute("id", el.id);
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

    let td8 = document.createElement("td");
    td8.innerHTML = "Delete";
    td8.style.background = "red";
    td8.style.color = "white";
    td8.addEventListener("click", (e) => {
      //attach the function cause we dont want invoke it immediately/
      e.preventDefault(); // Prevent default behavior

      deleteData(el.id); //we are going to delete the whole row using id//
    });

    let td9 = document.createElement("td");
    td9.innerHTML = "Edit";
    td9.style.background = "green";
    td9.style.color = "white";
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
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
