document.getElementById("fetchBtn").addEventListener("click", () => {
  fetch("http://localhost:8080/api/tasks")
    .then(response => response.json())
    .then(tasks => {
      const tasksList = document.getElementById("tasksList");
      tasksList.innerHTML = "";
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.name;
        tasksList.appendChild(li);
      });
    })
    .catch(err => console.error("Error fetching tasks:", err));
});
