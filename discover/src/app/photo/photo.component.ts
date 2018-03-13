import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'my-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos()
    .subscribe((photos) => {
      let photoFiltered = photos.filter((photo) => photo.id <= 10);
      this.photos = photoFiltered; }
  }

}
