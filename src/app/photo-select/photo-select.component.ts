import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.scss']
})
export class PhotoSelectComponent implements OnInit {
  user:string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
      //  this.imgURL = +params['imgURL']; // (+) converts string 'id' to a number
       this.user = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

}
