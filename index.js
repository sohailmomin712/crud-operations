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
    console.log(el);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = el.employeeName;
  });
};

getData();
