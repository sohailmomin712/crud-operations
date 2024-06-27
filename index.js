let formTag = document.querySelector("form");

const getData = async () => {
  try {
    let res = await fetch("http://localhost:3000/employees");
    let data = await res.json();
    appendData(data);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      // Re-fetch data and update table
      getData();
    } else {
      console.log("Failed to delete");
    }
  } catch (err) {
    console.log(err);
  }
};

const postData = async (obj) => {
  try {
    let res = await fetch("http://localhost:3000/employees",{
      method:"POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
       body: JSON.stringify(obj) // We send data in JSON format
    });
    let data = await res.json();
  console.log(data)
  } catch (err) {
    console.log(err);
  }
};

const getFormData = (e) => {
  e.preventDefault();
  let obj = {
    employeeName: document.getElementById("name").value,
    employeeID: document.getElementById("employeeID").value,
    department: document.getElementById("department").value,
    experience: document.getElementById("exp").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mbl").value,
  };

  postData(obj);
};
const appendData = (data) => {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; // Clear existing data

  data.forEach((el) => {
    let tr = document.createElement("tr");
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

    let td8 = document.createElement("button");
    td8.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior

      deleteData(el.id);
    });
    td8.innerHTML = "Delete";
    td8.style.background = "green";
    td8.style.color = "white";
    td8.setAttribute("type", "button"); // Explicitly set type to button

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    tbody.append(tr);

    if (el.experience < 2) {
      td7.innerHTML = "Fresher";
    } else if (el.experience >= 2 && el.experience <= 4) {
      td7.innerHTML = "Junior";
    } else {
      td7.innerHTML = "Senior";
    }
  });
};

formTag.addEventListener("submit", getFormData);

window.onload = getData;
