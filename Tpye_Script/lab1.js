"use strict";
// exports.__esModule = true;
;
var projectList = [
    {
        id: 1,
        name: "Hà",
        image: "abc",
        link: "abc",
        members: 2
    },
    {
        id: 2,
        name: "Hà",
        image: "abc",
        link: "abc",
        members: 2
    },
    {
        id: 3,
        name: "Hà",
        image: "abc",
        link: "abc",
        members: 2
    }
];
function listProject(projectLists) {
    var app = document.getElementById("app");
    app.innerHTML = "";
    projectLists.forEach(function (project) {
        var id = project.id, name = project.name, image = project.image, link = project.link, members = project.members;
        var projectHtml = "\n        <div class=\"project\">\n          <img src=\"".concat(image, "\" alt=\"").concat(name, "\" />\n          <h3>").concat(name, "</h3>\n          <p>Members: ").concat(members, "</p>\n          <a href=\"").concat(link, "\">View project</a>\n        </div>\n      ");
        app.innerHTML += projectHtml;
    });
}
listProject(projectList);
