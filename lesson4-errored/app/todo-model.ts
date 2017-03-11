export class TodoModel{
	status:string = "started"; //(string)define the type of the data (optional)
	// title:string  = "";
	// checked:boolean = false;

	constructor(public title:string = "" , public checked:boolean = false, public myClass:string = ""){
		// this.title = title;
		// this.checked = checked;
        // this.class = "second_class";
	}

	toggle_hidden():void{
		this.status= (this.status=="started") ? "completed" : "started";
		this.checked= !this.checked;
	}
	toggle_myClass():void{
		this.myClass= (this.myClass=="second_class") ? "" : "second_class";
	}

}