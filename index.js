//this code gets the note from localStorage

function getNoteId(){ //created getNoteId funciton and when called all embedded functions inside will take action
    let noteObject = getExistingNotes(); /*assigned getExistingNote function to noteObject variable*/
    if (!noteObject){ 
        return 1;
    }

    const keysArray = Object.keys(noteObject); //keyArray variable is assigned to the property values in the noteObject array which is the getExistigNotes function
    const numberKeys = keysArray.map((key)=>Number(key)); /*.map calls the keysArray array and something to each element??*/
    console.log(numberKeys);
    return Math.max(...numberKeys)+1; /*returns the highest number and ... = expands the array into individual elements and a adds 1*/

} 

function getExistingNotes(){ 
    let notes = localStorage.getItem('notes'); /* we are reading 'notes' from localStorage. localStorage allows for data to save to the browser*/
    if (!notes){ 
        return null;
    }
    return JSON.parse(notes); /*JSON is a format for storing and transporting data. Often used when data is sent from a server to a webpage. 
    JSON.parse() converts data we receive from the server as a string to an object
    else: ??*/
}