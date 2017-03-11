import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'nested_comp',
	templateUrl: 'app/templates/template1.html'
})
export class NestedComponent implements OnChanges{
    message:string = "What's Up";
    model_from_child:string;

    @Input() data_from_parent:string;
    @Output() data_from_child:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{ //this method runs every time an input changes
        console.log("hello world")
    }

    sent_out():void{
        this.data_from_child.emit(`Child Said: ${this.model_from_child}`);
    }


}
