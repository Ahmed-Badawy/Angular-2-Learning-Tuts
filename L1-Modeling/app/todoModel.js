System.register([], function(exports_1) {
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                // title:string  = "";
                // checked:boolean = false;
                function TodoModel(title, checked) {
                    if (title === void 0) { title = ""; }
                    if (checked === void 0) { checked = false; }
                    this.title = title;
                    this.checked = checked;
                    this.status = "started"; //(string)define the type of the data (optional)
                    // this.title = title;
                    // this.checked = checked;
                }
                TodoModel.prototype.toggle = function () {
                    this.status = (this.status == "started") ? "completed" : "started";
                    this.checked = !this.checked;
                };
                return TodoModel;
            })();
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todoModel.js.map