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
var taskFormEl = document.querySelector("#task-form");



var taskSubmitHandler = function(event) {

    event.preventDefault();

    var task1 = inputEl1.value.trim();
    if (task1) {
        localStorage.setItem("task1", task1);
    }
    inputEl1.value =  localStorage.getItem("task1");

    var task2 = inputEl2.value.trim();
    if (task2) {
        localStorage.setItem("task2", task2);
    }
    inputEl2.value =  localStorage.getItem("task2");

    var task3 = inputEl3.value.trim();
    if (task3) {
        localStorage.setItem("task3", task3);
    }
    inputEl3.value =  localStorage.getItem("task3");

    var task4 = inputEl4.value.trim();
    if (task4) {
        localStorage.setItem("task4", task4);
    }
    inputEl4.value =  localStorage.getItem("task4");

    var task5 = inputEl5.value.trim();
    if (task5) {
        localStorage.setItem("task5", task5);
    }
    inputEl5.value =  localStorage.getItem("task5");

    var task6 = inputEl6.value.trim();
    if (task6) {
        localStorage.setItem("task6", task6);
    }
    inputEl6.value =  localStorage.getItem("task6");

    var task7 = inputEl7.value.trim();
    if (task7) {
        localStorage.setItem("task7", task7);
    }
    inputEl7.value =  localStorage.getItem("task7");

    var task8 = inputEl8.value.trim();
    if (task8) {
        localStorage.setItem("task8", task8);
    }
    inputEl8.value =  localStorage.getItem("task8");

    var task9 = inputEl9.value.trim();
    if (task9) {
        localStorage.setItem("task9", task9);
    }
    inputEl9.value =  localStorage.getItem("task9");

    var task10 = inputEl10.value.trim();
    if (task10) {
        localStorage.setItem("task10", task10);
    }
    inputEl10.value =  localStorage.getItem("task10");
}

taskFormEl.addEventListener("click", taskSubmitHandler);

