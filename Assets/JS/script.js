
 //Time and date format 
$("#currentDay").text(moment().format('dddd, MMMM Do'));
var saveTask = new Array();
   
//Function to access, create, and stylize scheduler columns
 function createColumns() {
    var plannerContainer = $(".container");
    for ( var i=0; i<=9; i++ ) {
       var columnEl = document.createElement("div");
       columnEl.className = "row"
       columnEl.id = i+9;
       plannerContainer.append(columnEl);
    }

     for (var i=9; i<18; i++) {
        currentTime = moment().format('HH')
        var colEl = document.createElement("span");
        var inDiv = $("#" + i);
        var colTime = document.createElement("div");
        colTime.className = "col-1 hour";
        colTime.id += i
        colTime.textContent = moment(i, ["HH.mm"]).format("h A");
        colEl.setAttribute("data-span-time-id", (i-9).toString());

        if (currentTime>i) {
            colEl.className = "col-10 past";
        }
        else if (currentTime === i) {
            colEl.className = "col-10 present";
        }
        else { 
            colEl.className = "col-10 future";
        }
        colEl.className = colEl.className + " task";
        

        var saveDiv = document.createElement("div");
        var newEl  = document.createElement("i");
        newEl.className = "fa fa-save my-4 mx-1"
        newEl.setAttribute("data-time-id", (i-9).toString());
        saveDiv.className = "col-1 saveBtn"
        saveDiv.id = i;

        try {
            colEl.innerText = saveTask.find( ({ timeDis }) => timeDis === (i-9).toString()).task;
        }
        catch (e) {
            colEl.innerText = '';
        }
    
        saveDiv.append(newEl)
        inDiv.append(colTime);
        inDiv.append(colEl);
        inDiv.append(saveDiv);

    }
}

$(".container").on("click", "i", function(){
    var timeDis = $(this).attr("data-time-id");
    var taskWord = $(`[data-span-time-id=${timeDis}]`).text()
    saveSch(timeDis, taskWord);
});

$(".container").on("click", "span", function() {
    var taskWord = $(this) .text() .trim();
    var timeDis = $(this).attr('data-span-time-id');
    var textI = $("<textarea>").addClass($(this).attr("class")).val(taskWord);
    textI.attr("data-span-time-id", timeDis)
    $(this).replaceWith(textI)
    textI.trigger("focus");
   
});

$(".container").on("blur", "textarea", function() { 
    var taskWord = $(this).val();
    var timeDis= $(this).attr('data-span-time-id');
    var tSpan = $("<span>")
    .addClass($(this).attr("class"))
    .text(taskWord);
   
    tSpan.attr("data-span-time-id", timeDis)
  
    $(this).replaceWith(tSpan);

});

function saveSch(timeDis, task) {
    try {
      var newObj = saveTask.find(x => x.timeID === timeDis); 
      newObj.task = task;
    }
    catch (e) {
        var newTask = {};
        newTask.timeDis = timeDis;
        newTask.task = task;
        saveTask.push(newTask);
    }
    try {
        localStorage.setItem('dailyTasks', JSON.stringify(saveTask));
    }
    catch (e) {
        alert("Something went wrong! Please try again.")
    }
    alert("Task saved!")
}

function loadSch() {
    if (localStorage.dailyTasks) {
        saveTask = JSON.parse(localStorage.getItem('dailyTasks'))
    }
}

loadSch();
createColumns();







