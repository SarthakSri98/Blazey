import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { map } from 'rxjs/operators'
import { BaseService } from '../services/base.service';
import {  ActivatedRoute, Router } from '@angular/router';
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
  ]
  currentOpened={};
  height = '700px';
  width= '800px';
  height1 = '600px';
  width1 = '600px';
  list = ['a'];
  topicForm : FormGroup;
  linkData : FormArray

  constructor(private modalService: MatDialog , private _baseService : BaseService, private router:ActivatedRoute, private formBuilder: FormBuilder, private route : Router) { }

  ngOnInit() {

    this.topicForm = this.formBuilder.group({
      genre :[{value: this.id, disabled: true}],
      topicName :'',
      isSubTopic :'',
      content :'',
      linkData : this.formBuilder.array([ this.createItem() ])
    })

    this.id = this.router.snapshot.params.id;
   this.getTopics(this.id);
  }

  getTopics(id) {
    this._baseService.getTopic(id).subscribe(res => {
      console.log('res out', res);
      if(res.topics)
      this.topicArray = res.topics;
      console.log('res', res.topics);
    })
  }

  open(content,i) {
    //i = this.topicArray.length - 1;
    this.currentOpened = this.topicArray[i];
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
  this.linkData = this.topicForm.get('linkData') as FormArray;
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
    this._baseService.postTopic(this.topicForm.value,this.id).subscribe(data => {
      console.log('post data is :' + data)
    });
    console.log(this.topicForm.value);
   this.getTopics(this.id);
    this.topicForm.reset();
    //this.genreArray.push(this.topicForm.value);
    this.Cross_click();
  }

  addLink()
  {
    this.list.push('a');
  }

  goToSubTopic(id){
     this.route.navigate(['genre/topic/'+this.id+'/subtopic/'+id])
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
