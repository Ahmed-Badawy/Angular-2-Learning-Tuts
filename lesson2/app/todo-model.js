"use strict";
var TodoModel = (function () {
    // title:string  = "";
    // checked:boolean = false;
    function TodoModel(title, checked, myClass) {
        if (title === void 0) { title = ""; }
        if (checked === void 0) { checked = false; }
        if (myClass === void 0) { myClass = ""; }
        this.title = title;
        this.checked = checked;
        this.myClass = myClass;
        this.status = "started"; //(string)define the type of the data (optional)
        // this.title = title;
        // this.checked = checked;
        // this.class = "second_class";
    }
    TodoModel.prototype.toggle_hidden = function () {
        this.status = (this.status == "started") ? "completed" : "started";
        this.checked = !this.checked;
    };
    TodoModel.prototype.toggle_myClass = function () {
        this.myClass = (this.myClass == "second_class") ? "" : "second_class";
    };
    return TodoModel;
}());
exports.TodoModel = TodoModel;
//# sourceMappingURL=todo-model.js.map