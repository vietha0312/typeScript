"use strict";
// exports.__esModule = true;
var projectList = [
    {
        id: 1,
        name: "Hà",
        iamge: "abc",
        link: "abc",
        members: 2
    },
    {
        id: 2,
        name: "Hà",
        iamge: "abc",
        link: "abc",
        members: 2
    },
    {
        id: 3,
        name: "Hà",
        iamge: "abc",
        link: "abc",
        members: 2
    }
];
var listProject = function (project) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = project.map(function (item) {
            return "\n            <table style=\"bordered\" >\n    <thead>\n        <tr>\n            <th>ID</th>\n            <th>T\u00EAn</th>\n            <th>Image</th>\n            <th>Link</th>\n            <th>Member</th>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr>\n            <th>".concat(item.id, "</th>\n            <th>").concat(item.name, "</th>\n            <th>").concat(item.iamge, "</th>\n            <th>").concat(item.link, "</th>\n            <th>").concat(item.members, "</th>\n        </tr>\n    </tbody>\n  </table>\n          \n            ");
        }).join("");
    }
};
listProject(projectList);
