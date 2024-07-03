let formTag = document.querySelector("form");

//step1:creating a async function to get data from api//

const getData = async () => {
  //add try block//
  try {
    //fetch the api//
    let res = await fetch("http://localhost:3000/employees");
    let data = await res.json(); //data is in the form of chunks//
    console.log(data);
    //check if the api data is getting or not//
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
    mobile: document.querySelector("mbl").value,
  };
  console.log(formObj);
};

formTag.addEventListener("click", getFormData);

window.onload = getData;
