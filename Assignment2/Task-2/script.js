fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      data.forEach((element) => {
        temp += "<tr>";
        temp += "<td>" + element.id + "</td>";
        temp += "<td>" + element.name + "</td>";
        temp += "<td>" + element.email + "</td>";
        temp += "<td>" + element.username + "</td>";
        temp += "<td>" + element.phone + "</td></tr>";
      });
      document.getElementById("tablebody").innerHTML = temp;
    }
  });
});

function updateData(data) {
  let opt = prompt("Enter row u want to update");

  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    res.json().then((data) => {
      console.log(data);
      if (data.length > 0) {
        var temp = "";
        
        data.forEach((element) => {
          if (element.id == opt) {
            let newId = prompt("Enter id");
        let newName = prompt("Enter Name");
        let newEmail = prompt("Enter Email");
        let newUsername = prompt("Enter Username");
        let newPhone = prompt("Enter Phone number");
           
            temp += "<tr>";
            temp += "<td>" + newId + "</td>";
            temp += "<td>" + newName + "</td>";
            temp += "<td>" + newEmail + "</td>";
            temp += "<td>" + newUsername + "</td>";
            temp += "<td>" + newPhone + "</td></tr>";
          } else  {
          // if(newId===' ' || newId===null || newName===' ' || newName===null || newEmail===' ' || newEmail===null || newUsername===' ' || newUsername===null || newPhone==='' || newPhone===null){
            temp += "<tr>"; 
            temp += "<td>" + element.id + "</td>";
            temp += "<td>" + element.name + "</td>";
            temp += "<td>" + element.email + "</td>";
            temp += "<td>" + element.username + "</td>";
            temp += "<td>" + element.phone + "</td></tr>";
            
           
          }
        });
        document.getElementById("tablebody").innerHTML = temp;
      }
    });
  });
}

function deleteData() {
  let option = prompt("enter id");
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    res.json().then((data) => {
      console.log(data);
      if (data.length > 0) {
        var temp = "";

        data.forEach((element) => {
          if (element.id != option) {
            temp += "<tr>";
            temp += "<td>" + element.id + "</td>";
            temp += "<td>" + element.name + "</td>";
            temp += "<td>" + element.email + "</td>";
            temp += "<td>" + element.username + "</td>";
            temp += "<td>" + element.phone + "</td></tr>";
          }
        });
        document.getElementById("tablebody").innerHTML = temp;
      }
    });
  });
}
