function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var task = taskInput.value;
  
    if (task.trim() !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = task;
      taskList.appendChild(listItem);
      taskInput.value = '';
    } else {
      alert('Please enter a valid task!');
    }
  }
  