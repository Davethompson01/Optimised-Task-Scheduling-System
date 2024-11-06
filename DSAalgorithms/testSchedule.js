const scheduleTasks = require("./schedule");

describe("Task Scheduling Algorithm", () => {
  it("should return the maximum number of tasks that can be completed on time", () => {
    const tasks = [
      { duration: 4, deadline: 5 },
      { duration: 2, deadline: 3 },
      { duration: 3, deadline: 9 },
      { duration: 1, deadline: 7 },
    ];
    const result = scheduleTasks(tasks);
    expect(result.completedTasks).toBe(3); // We expect to complete 3 tasks based on the deadlines
  });

  it("should handle an empty list of tasks", () => {
    const result = scheduleTasks([]);
    expect(result.completedTasks).toBe(0); 
  });

  describe("Task Scheduling Algorithm - Edge Cases", () => {
    it("should handle tasks with deadlines sooner than their durations", () => {
      const tasks = [{ duration: 3, deadline: 2 }];
      const result = scheduleTasks(tasks);
      expect(result.completedTasks).toBe(0);
    });

    // it("should handle tasks with deadline exactly equal to duration", () => {
    //   const tasks = [
    //     { duration: 2, deadline: 2 },
    //     { duration: 3, deadline: 3 },
    //     { duration: 1, deadline: 1 },
    //   ];
    //   const result = scheduleTasks(tasks);
    //   expect(result.completedTasks).toBe(3);
    // });
    
    
    
    

    it("should handle a single task", () => {
      const tasks = [{ duration: 3, deadline: 5 }];
      const result = scheduleTasks(tasks);
      expect(result.completedTasks).toBe(1); 
    });

    it("should handle tasks that are already sorted by deadline", () => {
      const tasks = [
        { duration: 2, deadline: 3 },
        { duration: 1, deadline: 5 },
        { duration: 2, deadline: 6 },
        { duration: 3, deadline: 9 },
      ];
      const result = scheduleTasks(tasks);
      expect(result.completedTasks).toBe(4); 
    });
    
    
  });
});
