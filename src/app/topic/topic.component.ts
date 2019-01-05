import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators'
import { BaseService } from '../services/base.service';
import {  ActivatedRoute } from '@angular/router';
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


  id:string;
  i:number;
  topicArray :any = [
   { title:"Linked List" , description: "Create a treasure hunt, with each of the treasure prize zones containing a treat along with a clue about where the next prize can be found - akin to a chain of nodes each containing some data and also the address of the next node. You could let the kid know if a prize is to be removed from the middle, the previous prize point should point to the one that comes after the removed prize (delete a node I say) - but doing this will ruin the hunt for the kid, so lets skip that part :)" },
   { title:"Cloud Computing" , description: "Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive" },
  ]
  title;
  description;
  height = '500px';
  width= '600px';
  height1 = '600px';
  list = ['a'];
  topicForm : FormGroup;
  linkData : FormArray

  constructor(private modalService: MatDialog , private _baseService : BaseService, private router:ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.topicForm = this.formBuilder.group({
      genre :[{value: this.id, disabled: true}],
      topicName :'',
      isSubTopic :'',
      content :'',
      linkData : this.formBuilder.array([ this.createItem() ])
    })

    this.id = this.router.snapshot.params.id;
   this.getTopics();
  }

  
  createItem(): FormGroup {
    return this.formBuilder.group({
      link : '',
      linkCaption : ''
    });
  }

  addItem() {
    this.linkData = this.topicForm.get('linkData') as FormArray;
    this.linkData.push(this.createItem());
  }

  getTopics() {
    this._baseService.getTopic().subscribe(res => {
      if(res.data)
      this.topicArray = res.data;
      console.log('res', res.data);
    })
  }

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
  
  
  add() {
    this._baseService.postTopic(this.topicForm.value,this.id).subscribe(data => {
      console.log('post data is :' + data)
    });
    console.log(this.topicForm.value);
   this.getTopics();
    this.topicForm.reset();
    //this.genreArray.push(this.topicForm.value);
    this.Cross_click();
  }

  addLink()
  {
    this.list.push('a');
  }
  //  delete(index)
  //  {
  //    this._baseService.deleteTopic(this.topicArray[index]._id).subscribe(result=>{
  //      console.log(result);
  //    })
  //    this.topicArray.splice(index,1);
  //    console.log('deleted',index);
  //  }


}
