const getData = async () => {
  try {
    let res = await fetch("http://localhost:3000/employees");
    let data = await res.json();
    appenData(data);
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const appenData = (data) => {
  let formTag = document.querySelector("form");

  data.forEach((el) => {
    // console.log(el);
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

    // console.log(td1, td2, td3, td4, td5, td6)

    tr.append(td1, td2, td3, td4, td5, td6, td7);

    let tbody = document.querySelector("tbody");
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

getData();
