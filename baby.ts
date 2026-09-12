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

   private life(){
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

new Baby()
