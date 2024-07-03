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








 