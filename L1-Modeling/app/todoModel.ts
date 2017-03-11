export class TodoModel{
	status:string = "started"; //(string)define the type of the data (optional)
	// title:string  = "";
	// checked:boolean = false;

	constructor(public title:string = "" , public checked:boolean = false){
		// this.title = title;
		// this.checked = checked;
	}

	toggle():void{
		this.status= (this.status=="started") ? "completed" : "started";
		this.checked= !this.checked;
	}


}