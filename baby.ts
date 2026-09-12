/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Nie&Wang Corporation. All rights reserved.
 *  Thanks for Developer Wang's Work !
 *--------------------------------------------------------------------------------------------*/

class Nie { }
interface Wang { }
import {Nie,Wang} from China;

class Baby extends Nie implements Wang {
    private weight = 5
    private name = "聂"
    constructor(){
        super()
    }

    public life(){
    // todo list
   }
   
    public love(i:number){
    i++
    this.love(i);
   }

   private cry(){
    console.log('wu~ wa~ wu~');

   }
}
const baby = new Baby()
try {
    baby.life();
}catch(e){
    Nie.checkAndHelp(e);
    Wang.helpAndProtect(e);
}

// 这是我写过的最好的代码
