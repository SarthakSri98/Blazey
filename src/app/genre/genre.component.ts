import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatTooltip
} from '@angular/material/';
import {
  transition,
  trigger,
  style,
  animate,
  state,
  stagger,
  query,
  keyframes
} from '@angular/animations';
import {
  FormControl,
  FormGroup,
  FormControlName
} from '@angular/forms'
import {
  map
} from 'rxjs/operators'
import {
  BaseService
} from '../services/base.service';
import {
  Route,
  Router
} from '@angular/router';
import {MatSnackBar} from '@angular/material';

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
    this._baseService.getGenre().subscribe(res => {
      this.genreArray = res.data;
      console.log('res', res.data);
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
    this._baseService.postGenre(this.addForm.value).subscribe(data => {
      console.log('post data is :' + data)
      this.snackBar.open('The new Genre has been created!', '', {
        duration: 3000
      });  
      });
    console.log(this.addForm.value);
    this.getGenres();
    this.addForm.reset();
    //this.genreArray.push(this.addForm.value);
    this.Cross_click();
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
