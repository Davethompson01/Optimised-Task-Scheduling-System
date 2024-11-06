function scheduleTasks(tasks) {
  // Sort tasks by deadline to try to fit them into available time
  tasks.sort((a, b) => a.deadline - b.deadline);

  let currentTime = 0; // Keeps track of time spent
  let completedTasks = 0;

  // Loop through each task and see if it can be scheduled
  tasks.forEach(task => {
    console.log(`Current Time: ${currentTime}, Task Duration: ${task.duration}, Task Deadline: ${task.deadline}`);
    // Check if the task can be scheduled (current time + task duration <= task deadline)
    if (currentTime + task.duration <= task.deadline) {
      currentTime += task.duration; // Add task duration to the current time
      completedTasks++; // Increment completed tasks count
    }
  });

  return { completedTasks };
}

module.exports = scheduleTasks;
