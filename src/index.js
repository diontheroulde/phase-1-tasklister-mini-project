document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", (event) =>{
    event.preventDefault()
  const newTask = document.querySelector("#new-task-description").value 
  const tasks = document.querySelector("#tasks")
  const element = document.createElement("li")
  element.innerText = newTask
  tasks.append(element)
  
  
  
  
  })

})
