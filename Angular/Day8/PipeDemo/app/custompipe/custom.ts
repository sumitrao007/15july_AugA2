import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})

export class CustomPipe implements PipeTransform
{
    transform(value: any, startindex?:number,endindex?:number ) {
        
        if(!value){
            return null;
        }

        let temp= ( <string> value );

        let ActualLowerLimit=(startindex)?startindex:0;
        let ActualHigherLimit=(endindex)?endindex:50;

        // return temp.substring(startindex,endindex)+"...";

        return temp.substring(ActualLowerLimit,ActualHigherLimit)+".....";

    }


}