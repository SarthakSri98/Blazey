import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormControl,FormGroup,FormControlName } from '@angular/forms'
import { map } from 'rxjs/operators'
import { BaseService } from '../services/base.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  animations: [
    
    trigger('fadeIn',  [
       transition('*=>*',[
          query(':enter',style({opacity:0,transform:'translate(0,-20px)'}),{optional:true}),
          query(':enter',stagger('400ms',[
               animate('.3s ease-in',style({ opacity:1,transform:'translate(0,0)' }))
  
          ]),{optional:true}),
        ])
      ])
    ]
})
export class TopicComponent implements OnInit {

  
  i:number;
  topicArray :any = [
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
    { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
   { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
   { title:"Machine Learning" , description: "Let's say the Machine is a ten month old baby and you are trying hard to teach him what is an apple and what is an pear. Whenever you find an apple you show it to him and say 'apple' (he says 'blah'); whenever you find a pear you hold it in front of him and say 'pear' (he says 'blah'). To develop the cognitive ability of our genius baby, we diligent parent continue to show him hundreds and thousands of apples and pears over time, and one day magic happen, our Machine baby says 'apple' when he sees an apple. He will continue to make mistakes once in a while -- when a new apple does not look like traditional ones he has seen before -- but less and less he will go wrong. After some time, the Machine baby will know enough characters of apple to even recognize aged apples or apple slices. We say that he has been trained, or learned, now he can do stuff!" },
   { title:"Backtracking" , description: "Imagine we are going to buy a robot for you from Toy Shop;  We go to the Shop1 and do not find any Robot there.  Then We go to Shop2 and there too we don't find the Robot.  Then we go to Shop3 and we find a Robot that a smart kid like you would love.   Discarding shops that do not sell good robots and looking for new alternatives is called BACKTRACKING" },
   { title:"Linked List" , description: "Create a treasure hunt, with each of the treasure prize zones containing a treat along with a clue about where the next prize can be found - akin to a chain of nodes each containing some data and also the address of the next node. You could let the kid know if a prize is to be removed from the middle, the previous prize point should point to the one that comes after the removed prize (delete a node I say) - but doing this will ruin the hunt for the kid, so lets skip that part :)" },
   { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
  ]
  title;
  description;
  height = '500px';
  width= '600px';
  height1 = '600px';
  constructor(private modalService: MatDialog , private _baseService : BaseService) { }

  ngOnInit() {
  // this.getTopics();
  }

  
  // getTopics()
  // {
  //   this._baseService.getTopics().subscribe(res=>{
  //      this.topicArray = res.data;
  //      console.log('res',res.data);
  //   })
  // }

  open(content,i) {
    //i = this.topicArray.length - 1;
    this.title = this.topicArray[i].title;
    this.description = this.topicArray[i].description;

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });
}
  addNew(content) {

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height1,
      width: this.width,
      panelClass: 'custom-modalbox'
    });

    
  }
  Cross_click(){
      this.modalService.closeAll();
  }

// Reactive form formGroup data  
  addForm = new FormGroup({
    title :new FormControl(),
    tags : new FormControl(),
    description :new FormControl()
  })
  
  // add()
  // {
  //   this._baseService.postTopic(this.addForm.value).subscribe(data=>{
  //     console.log('post data is :' + data.data)
  //   });
  //   console.log(this.addForm.value);
  //   this.getTopics();
  //   this.addForm.reset();
  //   //this.topicArray.push(this.addForm.value);
  //   this.Cross_click();
  // }

  //  delete(index)
  //  {
  //    this._baseService.deleteTopic(this.topicArray[index]._id).subscribe(result=>{
  //      console.log(result);
  //    })
  //    this.topicArray.splice(index,1);
  //    console.log('deleted',index);
  //  }


}
