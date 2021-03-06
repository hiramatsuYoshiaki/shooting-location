import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ChangeDetectorRef} from '@angular/core'
import { Observable } from 'rxjs';
// import { EXIF } from 'exif-js/exif';
//declare var EXIF: any;
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators} from '@angular/forms';
import {MapsAPILoader, NoOpMapsAPILoader, MouseEvent} from 'angular2-google-maps/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';


import { Spot } from '../../app.spot';

//declare var google: any;
//declare var firebase: any;

interface Image {
    path: string;
    filename: string;
    downloadURL?: string;
    $key?: string;
}
interface List_Place {
    id: number;
    name: string;
}
const LIST_PLACE: List_Place[] = [
  { id: 1, name: '北海道' },
  { id: 2, name: '青森県' },
  { id: 3, name: '岩手県' },
  { id: 4, name: '宮城県' },
  { id: 5, name: '秋田県' },
  { id: 6, name: '山形県' },
  { id: 7, name: '福島県' },
  { id: 8, name: '茨城県' },
  { id: 9, name: '栃木県' },
  { id: 10, name: '群馬県' },
  { id: 11, name: '埼玉県' },
  { id: 12, name: '千葉県' },
  { id: 13, name: '東京都' },
  { id: 14, name: '神奈川県' },
  { id: 15, name: '新潟県' },
  { id: 16, name: '富山県' },
  { id: 17, name: '石川県' },
  { id: 18, name: '福井県' },
  { id: 19, name: '山梨県' },
  { id: 20, name: '長野県' },
  { id: 21, name: '岐阜県' },
  { id: 22, name: '静岡県' },
  { id: 23, name: '愛知県' },
  { id: 24, name: '三重県' },
  { id: 25, name: '滋賀県' },
  { id: 26, name: '京都府' },
  { id: 27, name: '大阪府' },
  { id: 28, name: '兵庫県' },
  { id: 29, name: '奈良県' },
  { id: 30, name: '和歌山県'},
  { id: 31, name: '鳥取県' },
  { id: 32, name: '島根県' },
  { id: 33, name: '岡山県' },
  { id: 34, name: '広島県' },
  { id: 35, name: '山口県' },
  { id: 36, name: '徳島県' },
  { id: 37, name: '香川県' },
  { id: 38, name: '愛媛県' },
  { id: 39, name: '高知県' },
  { id: 40, name: '福岡県' },
  { id: 41, name: '佐賀県' },
  { id: 42, name: '長崎県' },
  { id: 43, name: '熊本県' },
  { id: 44, name: '大分県' },
  { id: 45, name: '宮崎県' },
  { id: 46, name: '鹿児島県' },
  { id: 47, name: '沖縄県' },
  { id: 99, name: '海外' }
];

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {
  @Input() items: FirebaseListObservable<any[]>;
  @Input() selectSpot: Spot;
  @Input() image: string [] = [] ;
   @Input() category: FirebaseListObservable<any[]>;
  @Input()  uid: string;
  @Input()  displayName: string;
  @Input()  email: string;

  @Output() updateCancele = new EventEmitter();

  topCategory: FirebaseListObservable<any[]>;
  newPanel: boolean = false;
  
  appMessage: string =null;
  selectSpotNull:Spot = null;
 
  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
   
 testDate : Date = new Date();

  // newSpot: NewSpot;
   newSpot: Spot = {
    id: 99,
    img: "",
    title: "",
    text: "",
    place: "",
    sdate: "",
    stime: "",
    camera: "",
    renze: "",
    uid: "",
    displayName: "",
    email: "",
    category: "",
    tag: "",
    imgURL:"",
    imgPath:"",
    imgLat: 0,
    imgLan: 0
  };
   list_Place:List_Place[] =LIST_PLACE;
  // google maps zoom level
  zoom: number = 12;
  // initial center position for the map
  //center point
  lat: number  = 34.6661326894375;
  lng: number = 133.91807389155386;
  latMap: number  = 34.6661326894375;
  lngMap: number = 133.91807389155386;
  infoMap: string = "撮影場所";
  exif:any;

  constructor(public af: AngularFire, private changeDetectorRef: ChangeDetectorRef, private element: ElementRef, public router: Router) { 
    //  var storageRef = firebase.storage().ref();
    //  this.storageRef = storageRef;
     this.topCategory = af.database.list('/top-category');
  }

  ngOnInit() {
   
  }
  
onDateChanged(event: IMyDateModel) {
 // event properties are: event.date, event.jsdate, event.formatted and event.epoc
 }

  

getUploadFile(){
 
}

 
 openUploadPanel(){
   this.appMessage ="";
   this.newPanel = true;
 }

 mapClicked($event: MouseEvent) {
      this.latMap = +$event.coords.lat;
      this.lngMap = +$event.coords.lng;
  }
 mapClickedUpdate($event: MouseEvent) {
      this.selectSpot.imgLat = +$event.coords.lat;
      this.selectSpot.imgLan = +$event.coords.lng;
  }

//Resize images and convert file encoding
 public file_srcs: string[] = [];
 public big_file_srcs:string [] = [];//my add
 public debug_size_before: string[] = [];
 public debug_size_after: string[] = [];
 public fileURL: string[] = [];
  
 public fileSrcs =[{ name:'',size:0,type:'',filePath:'' }];
  
 closeUpdate(){
  //  this.selectSpot = null;
   this.emmit();
 } 

 emmit(){
    this.updateCancele.emit({
      value: this.selectSpotNull
    })
  }
  

fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
  }
  reader.readAsDataURL(file);
}

readFiles(files, index=0){
  // Create the file reader
  let reader = new FileReader();
  
  // If there is a file
  if(index in files){
    // Start reading this file
    this.readFile(files[index], reader, (result) =>{
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = result;
      this.big_file_srcs[index] = img.src; 
      this.fileSrcs[index].name = files[index].name;
      this.fileSrcs[index].size = files[index].size;
      this.fileSrcs[index].type = files[index].type;
      // console.log('name: '+this.fileSrcs[index].name);
      // console.log('size: '+this.fileSrcs[index].size);
      // console.log('type: '+this.fileSrcs[index].type);
     this.fileURL = result;
        // console.log('result: '+this.fileURL);


// EXIF.getData(files[index], function() {
//         var make = this.exif.EXIF.getTag(this, "Make"),
//             model = this.exif.EXIF.getTag(this, "Model");
//         alert("I was taken by a " + make + " " + model);

//     });
     
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
  
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file).

        this.file_srcs.push(resized_jpeg);
      
         
        // Read the next file;
        this.readFiles(files, index+1);
      });
      

    });
  }else{
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }

}
resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    var width = img.width;
    var height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    var canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    var dataUrl = canvas.toDataURL('image/jpeg');
    // console.log('url:'+dataUrl);

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
}

//Angular 2 let user choose and image from their local machine
   // make FileReader work with Angular2
  

    changeListner(event) {
        // console.log(event);
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e:any) {
            var src = e.target.result;
            image.src = src;
        };

        reader.readAsDataURL(event.target.files[0]);
    }
//
  @ViewChild('fileInput') myFileInput: ElementRef;

  getFileLater() {
    // console.log('nativeElement'+this.myFileInput.nativeElement.files[0]);
  }

  fileChanged(event) {
    // console.log('file '+event.target.files[0]);
   
  }


  //Firebase Upload Component with Angular2
   folder: string = 'twilite';
   upload(
      newid: number,
      newimg: string,
      newtitle: string,
      newtext: string,
      newplace: string,
      newsdate: string,
      newstime: string,
      newcamera: string,
      newrenze: string,
      newuid: string,
      newdisplayName: string,
      newemail: string,
      newcategory: string,
      newtag: string,
      newimgURL: string,
      imgPath:string,
      newImgLat:number,
      newImgLan:number
     
   ) {
        // Create a root reference
        let storageRef = firebase.storage().ref();

        let success = false;
        // This currently only grabs item 0, TODO refactor it to grab them all
        for (let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
            // console.log(selectedFile);
            // Make local copies of services because "this" will be clobbered
             let router = this.router;
             let af = this.af;
             let folder = this.folder;
             let path = `/${this.folder}/${selectedFile.name}`;
            
             var iRef = storageRef.child(path);
             iRef.put(selectedFile).then((snapshot) => {
                //  console.log('Uploaded a blob or file! Now storing the reference at',`/${this.folder}/images/`);
            //     af.database.list(`/${folder}/images/`).push({ path: path, filename: selectedFile.name })
                  this.items.push({ 
                                    id: 0, 
                                    img: path,
                                    title: newtitle, 
                                    text: newtext, 
                                    place: newplace,
                                    sdate: newsdate, 
                                    stime: newstime,
                                    camera: newcamera,
                                    renze: newrenze, 
                                    uid: this.uid, 
                                    displayName: this.displayName, 
                                    email: "", 
                                    category: newcategory, 
                                    tag: newtag, 
                                    imgURL:path,
                                    imgPath:path
                                    ,
                                    imgLat: +newImgLat,
                                    imgLan: +newImgLan
                                    //   ,
                                    // imgLat: 0,
                                    // imgLan: 0
                                   
                                   
                    });
             });
              this.newPanel = false;
             this.appMessage = "新規画像を登録しましたしました。";
        }
    }
    delete(key: string) {
        let storagePath = this.selectSpot.imgURL;
       //let referencePath = `${this.folder}/images/` + image.$key;

        // Do these as two separate steps so you can still try delete ref if file no longer exists

        // Delete from Storage
        firebase.storage().ref().child(storagePath).delete()
        .then(
            () => {},
            (error) => console.error("Error deleting stored file",storagePath)
        );

        // Delete references
        //this.af.database.object(referencePath).remove()
        this.items.remove(key); 
        this.selectSpot = null;

    }

  updateItem(key: string,
             newid: number,
             newimg: string,
             newtitle: string,
             newtext: string,
             newplace: string,
             newsdate: string,
             newstime: string,
             newcamera: string,
             newrenze: string,
             newcategory: string,
             newtag: string,
             newimgLat: number,
             newimgLan: number
             ) {
    this.items.update(key, {  id: +newid,
                             img: newimg,
                             title: newtitle,
                             text: newtext,
                              place: newplace,
                              sdate: newsdate,
                              stime: newstime,
                              camera: newcamera,
                              renze: newrenze,
                              category: newcategory,
                             tag: newtag,
                              imgLat: +newimgLat,
                             imgLan: +newimgLan
                           }).then(resolve => {
                console.log('all good');
            }, reject => {
                console.log('error');
            })
            .catch(reject => {
                console.log('catch');
            })
                           ;
      // this. selectSpot = null;
      this.appMessage = "画像情報を修正しました。";
     
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  // deleteEverything() {
  //   this.items.remove();
  // }
}

