console.log("view the projects here")

//const taskbutton = document.getElementById("button")

document.getElementById('mytaskform').addEventListener('submit',function(event) {
    event.preventDefault(); 
    
    var taskAdd = document.getElementById('mytask').value
     
    // console.log(value)
    var li = document.createElement('li')
   
    li.textContent=taskAdd; 

    document.getElementById('taskList').appendChild(li); 
    document.getElementById('mytask').value = ''; 

})

// taskbutton.add("click", function(){
//     console.log('button works')
// })



// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     var inputValue = document.getElementById('myInput').value; // Get the input value
//     if (inputValue.trim() !== '') { // Check if the input is not empty
//         var li = document.createElement('li'); // Create a new <li> element
//         li.textContent = inputValue; // Set the text content to the input value

//         document.getElementById('myList').appendChild(li); // Append the <li> to the <ul>

//         document.getElementById('myInput').value = ''; // Clear the input field
//     }
// });


 