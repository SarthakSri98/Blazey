import { Component, OnInit } from '@angular/core';
import {  MatDialog,  MatDialogConfig,  MAT_DIALOG_DATA,  MatTooltip} from '@angular/material/';import {  transition,  trigger,  style,  animate,  state,  stagger,  query,  keyframes} from '@angular/animations';  import {    FormControl,  FormGroup,  FormControlName} from '@angular/forms';
import {  map} from 'rxjs/operators';
import {  BaseService} from '../services/base.service';
import {  Route,  Router} from '@angular/router';import {MatSnackBar} from '@angular/material';
import {  applyOperation} from 'fast-json-patch'
declare var require: any;
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  animations: [

    trigger('fadeIn', [
      transition('*=>*', [
        query(':enter', style({
          opacity: 0,
          transform: 'translate(0,-20px)'
        }), {
          optional: true
        }),
        query(':enter', stagger('400ms', [
          animate('.3s ease-in', style({
            opacity: 1,
            transform: 'translate(0,0)'
          }))

        ]), {
          optional: true
        }),
      ])
    ])
  ]
})
export class GenreComponent implements OnInit {
  jsonpatch = require('fast-json-patch')
  i: number;
  currentId: string;
  genreArray: any = []
  title;
  description;
  height = '500px';
  width = '600px';
  height1 = '600px';
  constructor(private modalService: MatDialog, private _baseService: BaseService,
     private router: Router,public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getGenres();
  }



  getGenres() {
    this._baseService.getGenre().subscribe((res:any) => {
      this.genreArray = res.data.filter(elem=>{
        console.log('elem',elem.user);
        console.log('user',localStorage.getItem('user'));
        return elem.user === localStorage.getItem('user');
      });
      
      console.log('res', res.data);
      console.log('gernearray',this.genreArray);
    })
  }

  openTopic(i) {
    this.currentId = this.genreArray[i]._id;
    localStorage.setItem('currentId', this.currentId);
    console.log(this.currentId);
    this.router.navigate(['genre/topic/'+this.currentId]);
  }


  addNew(content) {

    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content, {
      height: this.height1,
      width: this.width,
      panelClass: 'custom-modalbox'
    });


  }
  Cross_click() {
    this.modalService.closeAll();
  }

  // Reactive form formGroup data  
  addForm = new FormGroup({
    genreName: new FormControl(),
  })

  add() {
   
    var doc = this.addForm.value;
    var patch = [{
      op: "add",
      path: "/user",
      value: localStorage.getItem('user')
    },
    {
      op: "add",
      path: "/token",
      value: localStorage.getItem('token')
    } ];

    doc = this.jsonpatch.applyPatch(doc, patch).newDocument;

    console.log('form value',this.addForm.value);
    this._baseService.postGenre(this.addForm.value).subscribe(data => {
      console.log('post data is :' + data)
      this.getGenres();
       
      });
    this.addForm.reset();
    //this.genreArray.push(this.addForm.value);
    this.Cross_click();
    this.snackBar.open('The new Genre has been created!', '', {
      duration: 3000
    }); 
  }

   delete(index)
   {
    console.log(this.genreArray[index]._id)
     this._baseService.deleteGenre(this.genreArray[index]._id).subscribe(result=>{
       console.log(result);
       this.snackBar.open('The Genre has been deleted!', '', {
        duration: 3000
      }); 
     })
     this.genreArray.splice(index,1);
     console.log('deleted',index);
   }

}
