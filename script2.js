
$( document ).ready(function() {
   
   
    
  
   /***************** Moment Date and Clock **********************************/

   function getMoment () {
      new Date();
     // var headerCalendar = moment().format('dddd [,] MMMM do');
     //  $("#currentDay").text(headerCalendar);

     // var moment = moment().format('H');
     //     moment = Number(moment);
            
     //     return moment;
    }
   
 /************ Create and Append Columns **********************************/

   /*Append()5.1.5*/ 

   //** ACCESS HTML ELEMENT WITH # SELECTOR  *//
   var $plannerContainer = $("#dailyPlannerContainer");

   //** DYNAMICALLY GENERATED ELEMENTS IN #dailyPlannerContainer */

 function createColumns() {

    for ( var workHours = 9; workHours <= 17; workHours++ ) {

       /*var timeIndex = workHours - 9;

       //**** NEW COLUMN ROWS ******************/
       var $columnEl = $("<div></div>")
       .addClass('row')
       .addClass('nonBootStrapRow')
       /*.attr(timeIndex);*/
     //**************************************/

     /************TIMES OF DAY**************/

      var $dayHour = $("<div></div>")
     .addClass("col-md-9 hour time-block")

     $columnEl.append($dayHour)
     $plannerContainer.append($columnEl)

     /*********************************** */

    };
};


    /********************************************************************* */

   

getMoment();
createColumns();

});


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

/** refactored code from 5.4.6 that includes moment
 * var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl).find("span").text().trim();
  // ensure it worked
  console.log(date); 

  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 17);
  // this should print out an object for the value of the date variable, but at 5:00pm of that date
  console.log(time);

};
 */

/**Starter code from module 5///TODO: refactor. currently focusing on the append taks section. work through module to gradually add code.
 * 
 * var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(taskDate);
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

  ///// append span and p element to parent li
  taskLi.append(taskSpan, taskP);


  ///// append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  ///// if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      toDo: [],
      inProgress: [],
      inReview: [],
      done: []
    };
  }

  //// loop over object properties
  $.each(tasks, function(list, arr) {
    console.log(list, arr);
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text, task.date, list);
    });
  });
};

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};




// modal was triggered
$("#task-form-modal").on("show.bs.modal", function() {
  // clear values
  $("#modalTaskDescription, #modalDueDate").val("");
});

// modal is fully visible
$("#task-form-modal").on("shown.bs.modal", function() {
  // highlight textarea
  $("#modalTaskDescription").trigger("focus");
});

// save button in modal was clicked
$("#task-form-modal .btn-primary").click(function() {
  // get form values
  var taskText = $("#modalTaskDescription").val();
  var taskDate = $("#modalDueDate").val();

  if (taskText && taskDate) {
    createTask(taskText, taskDate, "toDo");

    // close modal
    $("#task-form-modal").modal("hide");

    // save in tasks array
    tasks.toDo.push({
      text: taskText,
      date: taskDate
    });

    saveTasks();
  }
});

// remove all tasks
$("#remove-tasks").on("click", function() {
  for (var key in tasks) {
    tasks[key].length = 0;
    $("#list-" + key).empty();
  }
  saveTasks();
});

// load tasks for the first time
loadTasks();


 */
