"use strict";
exports.__esModule = true;
var projectList = [
    { id: 1, name: "Du an mau" },
    { id: 2, name: "Du an 1" },
    { id: 3, name: "Du an tot nghiep" }
];
function displayProjectNames(projectList) {
    var projectNames = projectList.map(function (project) { return project.name; });
    var projectId = projectList.map(function (project) { return project.id; });
    console.log(projectNames, projectId);
}
displayProjectNames(projectList);
//   funtion
