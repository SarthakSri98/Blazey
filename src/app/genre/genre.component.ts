import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FormControl,FormGroup,FormControlName } from '@angular/forms'
import { map } from 'rxjs/operators'
import { BaseService } from '../services/base.service';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
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
export class GenreComponent implements OnInit {

  i:number;
  genreArray :any = [
    { name:'Operating System' },
    { name:'Competitive Programming' },
    { name:'Computer Networks' }  
  ]
  title;
  description;
  height = '500px';
  width= '600px';
  height1 = '600px';
  constructor(private modalService: MatDialog , private _baseService : BaseService) { }

  ngOnInit() {
  // this.getGenres();
  }

  
  // getGenres()
  // {
  //   this._baseService.getGenres().subscribe(res=>{
  //      this.genreArray = res.data;
  //      console.log('res',res.data);
  //   })
  // }

  open(content,i) {
    //i = this.genreArray.length - 1;
    this.title = this.genreArray[i].title;
    this.description = this.genreArray[i].description;

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
  //   this._baseService.postGenre(this.addForm.value).subscribe(data=>{
  //     console.log('post data is :' + data.data)
  //   });
  //   console.log(this.addForm.value);
  //   this.getGenres();
  //   this.addForm.reset();
  //   //this.genreArray.push(this.addForm.value);
  //   this.Cross_click();
  // }

  //  delete(index)
  //  {
  //    this._baseService.deleteGenre(this.genreArray[index]._id).subscribe(result=>{
  //      console.log(result);
  //    })
  //    this.genreArray.splice(index,1);
  //    console.log('deleted',index);
  //  }

}
