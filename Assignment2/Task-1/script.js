 function removeSpecialChar() {
  newString = "";
  newArray = [];
  newArray2 = [];

  const str = document.getElementById("inp1").value;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "@" ||
      str[i] === "#" ||
      str[i] === "$" ||
      str[i] === "^" ||
      str[i] === "*" ||
      str[i] === "!" ||
      str[i] === "&" ||
      str[i] === "%"
    ) {
      newString = str.replace(str[i], "");
    } else {
      newString = str[i];
      newArray.push(newString.charCodeAt(str[i]) + 1);
    }
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