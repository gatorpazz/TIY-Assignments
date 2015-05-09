//var chai = require('chai'),
//    expect = chai.expect;

var expect = require('chai').expect;

var taskList = [];

// I can list my tasks...
function listTasks(){
  return taskList;
}

//I can add a task to my list...
function addTaskToList(task, list){
  //What is the task?
  //Where is the task going?
  //What order / priority?
  return list.push(task);
}

//I can check a task off my list...
function completeTask(task, list){
  list[task - 1] += ' COMPLETE';
}

expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

addTaskToList("Take out the trash", taskList);

expect(listTasks).to.exist;
expect(listTasks(taskList)).to.equal(taskList);

expect(completeTask).to.exist;
completeTask(1, taskList);
expect(taskList[0]).to.equal("Remember the milk COMPLETE");

var d;

for(var a = 0; a < taskList.length; a++){
  d += a + 1 + ') ' + taskList[a] + ' \n';
}
console.log(d);
