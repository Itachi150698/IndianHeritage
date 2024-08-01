import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';  // Ensure this path is correct

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerVideo: any = {};
  videos: any[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getData().subscribe((data: any) => {
      this.headerVideo = data.headerVideo;
      this.videos = data.videos;
    });
  }
}
