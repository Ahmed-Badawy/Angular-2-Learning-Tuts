import {Pipe} from '@angular/core';


@Pipe({
    name: "starts_with_filter"
})
export class FilterArrayPipe{
    transform( value , [start_with_char] ){ //all filter params are passed as an array.
//		value.splice(0,1);
        return value.filter((item,index)=>{
            if(item.title.startsWith(start_with_char)) return false;
            return true;
        });
    }
}