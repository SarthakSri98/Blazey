import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators'
import { BaseService } from '../services/base.service';
import {  ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sub-topic',
  templateUrl: './sub-topic.component.html',
  styleUrls: ['./sub-topic.component.css'],
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
export class SubTopicComponent implements OnInit {

  
  id:string;
  i:number;
  subTopicArray :any = [
  ]
  currentOpened={};
  currentTopic:string;
  height = '700px';
  width= '800px';
  height1 = '600px';
  width1 = '600px';
  subTopicForm : FormGroup;
  linkData : FormArray

  constructor(private modalService: MatDialog , private _baseService : BaseService, private router:ActivatedRoute, private formBuilder: FormBuilder, private route : Router) { }

  ngOnInit() {

    this.subTopicForm = this.formBuilder.group({
      subTopic :'',
      content :'',
      linkData : this.formBuilder.array([ this.createItem() ])
    })

    this.id = this.router.snapshot.params.id1;
   this.getSubTopics(this.id);
  }

  getSubTopics(id) {
    this._baseService.getSubTopic(id).subscribe(res => {
      this.currentTopic = res.topic;
      console.log('res out', res);
      if(res.subtopics)
      this.subTopicArray = res.subtopics;
      console.log('res', res.subtopics);
    })
  }

  open(content,i) {
    //i = this.subTopicArray.length - 1;
    this.currentOpened = this.subTopicArray[i];
    console.log(this.currentOpened);

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });
}

createItem(): FormGroup {
  return this.formBuilder.group({
    link : '',
    linkCaption : ''
  });
}

addItem() {
  this.linkData = this.subTopicForm.get('linkData') as FormArray;
  console.log(this.linkData);
  this.linkData.push(this.createItem());
}

addNew(content) {


    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height1,
      width: this.width1,
      panelClass: 'custom-modalbox'
    });

    

  }
  Cross_click(){
      this.modalService.closeAll();
  }

// Reactive form formGroup data  
  
  
  add() {
    this._baseService.postSubTopic(this.subTopicForm.value,this.id).subscribe(data => {
      console.log('post data is :' + data)
    });
    console.log(this.subTopicForm.value);
   this.getSubTopics(this.id);
    this.subTopicForm.reset();
    //this.genreArray.push(this.subTopicForm.value);
    this.Cross_click();
  }

   delete(index)
   {
     this._baseService.deleteSubTopic(this.subTopicArray[index]._id).subscribe(result=>{
       console.log(result);
     })
     this.subTopicArray.splice(index,1);
     console.log('deleted',index);
   }


}
