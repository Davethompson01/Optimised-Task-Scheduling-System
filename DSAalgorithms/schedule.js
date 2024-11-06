function scheduleTasks(tasks) {
  // Sort tasks by deadline
  tasks.sort((a, b) => a.deadline - b.deadline);

  let currentTime = 0;
  let completedTasks = 0;

  tasks.forEach(task => {
    // Allow task completion if current time + task duration is <= task deadline
    // We use <= to ensure tasks that finish exactly at their deadline are also counted
    if (currentTime + task.duration <= task.deadline) {
      currentTime += task.duration;
      completedTasks++;
    }
  });

  return { completedTasks };
}

module.exports = scheduleTasks;
