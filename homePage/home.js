
let dataArray = [];         // Array to push new data
const dataObject = {
    name: selector("#name").textContent,
    score:0  
}

/* If there is data saved already in local storage, add the new data to old data*/
let oldData = JSON.parse(localStorage.getItem("data"));
if((oldData !== null)){
    oldData.push(dataObject);
    localStorage.setItem("data", JSON.stringify(oldData))
   
} else{     /* If local storage is empty, Push new data to the empty array */
    dataArray.push(dataObject)  //Push object of data to the array

    /* set stringified data in local storage */
    localStorage.setItem('data', JSON.stringify(dataArray))
}
