
  
$("#currentDay").text(moment().format('dddd, MMMM Do'));
var savedTasks = new Array();
   
 function createColumns() {
    var plannerContainer = $("#dailyPlannerContainer");
    for ( var i=0; i<=9; i++ ) {
       var columnEl = document.createElement("column-div");
       columnEl.className = "row"
       columnEl.id = i+9;
       plannerContainer.append(newColumn);
    }

     for (var i=9; i<18; i++) {

        currentTime = moment().format('HH')
        var spanEl = document.createElement("span");
        var innerDiv = $("#" + i);
        var colTime = document.createElement("div");
        colTime.className = "col-1 hour";
        colTime.id += i
        colTime.textContent = moment(i, ["HH.mm"]).format("h A");

        spanEl.setAttribute("data-span-time-id", (i-9).toString());

   


createColumns();







