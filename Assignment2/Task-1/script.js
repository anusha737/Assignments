 function removeSpecialChar() {
  newString = "";
  newArray = [];
  newArray2 = [];

  const str = document.getElementById("inp1").value;

  newString = str.replace(/[^a-zA-Z0-9]/g, '');
  for (let i = 0; i< newString.length; i++){
    newArray.push(newString.charCodeAt([i]) + 1);
  }

  for (let i = 0; i < newArray.length; i++) {
   
    newArray2.push(String.fromCharCode(newArray[i]));
  
    const successorString = newArray2.join(""); 

    document.getElementById("inp2").value=successorString;
  }
  if(newArray.length===0)
  {
    alert("Empty string");
  }
}




