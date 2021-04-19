var inputEl1 = document.querySelector("#input-field1");
var inputEl2 = document.querySelector("#input-field2");
var inputEl3 = document.querySelector("#input-field3");
var inputEl4 = document.querySelector("#input-field4");
var inputEl5 = document.querySelector("#input-field5");
var inputEl6 = document.querySelector("#input-field6");
var inputEl7 = document.querySelector("#input-field7");
var inputEl8 = document.querySelector("#input-field8");
var inputEl9 = document.querySelector("#input-field9");
var inputEl10 = document.querySelector("#input-field10");

var buttonEl = document.querySelectorAll(".saveBtn");

var taskFormEl1 = document.querySelector("#task-form1");
var taskFormEl2 = document.querySelector("#task-form2");
var taskFormEl3 = document.querySelector("#task-form3");
var taskFormEl4 = document.querySelector("#task-form4");
var taskFormEl5 = document.querySelector("#task-form5");
var taskFormEl6 = document.querySelector("#task-form6");
var taskFormEl7 = document.querySelector("#task-form7");
var taskFormEl8 = document.querySelector("#task-form8");
var taskFormEl9 = document.querySelector("#task-form9");
var taskFormEl10 = document.querySelector("#task-form10");



var taskSubmitHandler1 = function(event) {

    event.preventDefault();

    var task1 = inputEl1.value.trim();
    if (task1) {
        localStorage.setItem("task1", task1);
    }
    inputEl1.value =  localStorage.getItem("task1");
};

var taskSubmitHandler2 = function(event) {
    event.preventDefault();

    var task2 = inputEl2.value.trim();
    if (task2) {
        localStorage.setItem("task2", task2);
    }
    inputEl2.value =  localStorage.getItem("task2");
};

var taskSubmitHandler3 = function(event) {
    event.preventDefault();

    var task3 = inputEl3.value.trim();
    if (task3) {
        localStorage.setItem("task3", task3);
    }
    inputEl3.value =  localStorage.getItem("task3");
};

var taskSubmitHandler4 = function(event) {
    event.preventDefault();

    var task4 = inputEl4.value.trim();
    if (task4) {
        localStorage.setItem("task4", task4);
    }
    inputEl4.value =  localStorage.getItem("task4");
};

var taskSubmitHandler5 = function(event) {
    event.preventDefault();

    var task5 = inputEl5.value.trim();
    if (task5) {
        localStorage.setItem("task5", task5);
    }
    inputEl5.value =  localStorage.getItem("task5");
};

var taskSubmitHandler6 = function(event) {
    event.preventDefault();

    var task6 = inputEl6.value.trim();
    if (task6) {
        localStorage.setItem("task6", task6);
    }
    inputEl6.value =  localStorage.getItem("task6");
};

var taskSubmitHandler7 = function(event) {
    event.preventDefault();

    var task7 = inputEl7.value.trim();
    if (task7) {
        localStorage.setItem("task7", task7);
    }
    inputEl7.value =  localStorage.getItem("task7");
};

var taskSubmitHandler8 = function(event) {
    event.preventDefault();

    var task8 = inputEl8.value.trim();
    if (task8) {
        localStorage.setItem("task8", task8);
    }
    inputEl8.value =  localStorage.getItem("task8");
};

var taskSubmitHandler9 = function(event) {
    event.preventDefault();

    var task9 = inputEl9.value.trim();
    if (task9) {
        localStorage.setItem("task9", task9);
    }
    inputEl9.value =  localStorage.getItem("task9");
};

var taskSubmitHandler10 = function(event) {
    event.preventDefault();

    var task10 = inputEl10.value.trim();
    if (task10) {
        localStorage.setItem("task10", task10);
    }
    inputEl10.value =  localStorage.getItem("task10");
};

var timeArr = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '16:00', '17:00', '18:00'];

var inputArr = [inputEl1, inputEl2, inputEl3, inputEl4, inputEl5, inputEl6, inputEl7, inputEl8, inputEl9, inputEl10];

inputEl1.setAttribute("data-time", timeArr[0]);
inputEl2.setAttribute("data-time", timeArr[1]);
inputEl3.setAttribute("data-time", timeArr[2]);
inputEl4.setAttribute("data-time", timeArr[3]);
inputEl5.setAttribute("data-time", timeArr[4]);
inputEl6.setAttribute("data-time", timeArr[5]);
inputEl7.setAttribute("data-time", timeArr[6]);
inputEl8.setAttribute("data-time", timeArr[7]);
inputEl9.setAttribute("data-time", timeArr[8]);
inputEl10.setAttribute("data-time", timeArr[9]);

var now = moment();

var formatted = "h:mm";

console.log(moment(finalDate).isBefore(now));


for (var i = 0; i < timeArr.length; i++) {
    var finalDate = moment(timeArr[i], formatted);

    if (moment(finalDate).isBefore(now)) {
        inputArr[i].setAttribute("class", "timezne");
    } else {
        inputArr[i].setAttribute("class", "notyet");
    }
};


taskFormEl1.addEventListener("click", taskSubmitHandler1);
taskFormEl2.addEventListener("click", taskSubmitHandler2);
taskFormEl3.addEventListener("click", taskSubmitHandler3);
taskFormEl4.addEventListener("click", taskSubmitHandler4);
taskFormEl5.addEventListener("click", taskSubmitHandler5);
taskFormEl6.addEventListener("click", taskSubmitHandler6);
taskFormEl7.addEventListener("click", taskSubmitHandler7);
taskFormEl8.addEventListener("click", taskSubmitHandler8);
taskFormEl9.addEventListener("click", taskSubmitHandler9);
taskFormEl10.addEventListener("click", taskSubmitHandler10);

