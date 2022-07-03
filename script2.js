
  
$("#currentDay").text(moment().format('dddd, MMMM Do'));
var savedTasks = new Array();
   
 function createColumns() {

  var plannerContainer = $("#dailyPlannerContainer");

    for ( var i=0; i<=9; i++ ) {
       var timeIndex = workHours - 9;
       var columnEl = document.createElement("column-div");
       columnEl.className = "row"
       columnEl.id = i+9;
       plannerContainer.append(newColumn);
    }
 
  }
/*function workTasks() {

}*/


createColumns();



/**TODO  //////refactor this to append columns? 5.4.6
 * var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");

  var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskDate);

  var taskP = $("<p>").addClass("m-1").text(taskText);

  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);

  // check due date
  auditTask(taskLi);

  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};
 */



