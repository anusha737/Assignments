var myArray=[]

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
  response.json()
  .then((data)=>{
     console.log(data)
    myArray.push(data);
    console.log(myArray)
    if (data.length > 0) {
      var temp=" "
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
  })

})

function updateData(){
  let option=prompt(" Enter row you want to update");
  // let newId = prompt("Enter id");
  let newName = prompt("Enter Name");
  let newEmail = prompt("Enter Email");
  let newUsername = prompt("Enter Username");
  let newPhone = prompt("Enter Phone number");
  fetch(`https://jsonplaceholder.typicode.com/users/${option}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: `${newName}`,
      email:`${newEmail}`,
      username: `${newUsername}`,
      phone:`${newPhone}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    var temp=" ";
    myArray.forEach((element) => {
    for(var i in element){
      if (element[i].id == option) {
        temp += "<tr>";
        temp += "<td>" + element[i].id + "</td>";
        temp += "<td>" + newName + "</td>";
        temp += "<td>" + newEmail + "</td>";
        temp += "<td>" + newUsername + "</td>";
        temp += "<td>" + newPhone + "</td></tr>";

      }
  else{
        temp += "<tr>";
        temp += "<td>" + element[i].id + "</td>";
        temp += "<td>" + element[i].name + "</td>";
        temp += "<td>" + element[i].email + "</td>";
        temp += "<td>" + element[i].username + "</td>";
        temp += "<td>" + element[i].phone + "</td></tr>";
      }
    }
    });
  
    document.getElementById("tablebody").innerHTML = temp;

  }
    
   
  
  

function deleteData(){
  let option=prompt("enter row number to delete")
  fetch(`https://jsonplaceholder.typicode.com/posts/${option}`, {
  method: 'DELETE',
});
 temp="";
  myArray.forEach((element) => {
  for(var i in element){
    if (element[i].id != option) {

      temp += "<tr>";
      temp += "<td>" + element[i].id + "</td>";
      temp += "<td>" + element[i].name + "</td>";
      temp += "<td>" + element[i].email + "</td>";
      temp += "<td>" + element[i].username + "</td>";
      temp += "<td>" + element[i].phone + "</td></tr>";
    }
  }
  });

  document.getElementById("tablebody").innerHTML = temp;

}
