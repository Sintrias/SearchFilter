import { Component, OnInit } from '@angular/core';
import { YTApiService } from 'ngx-youtube';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchString: string;

  constructor(private YTS: YTApiService) { }

  ngOnInit() {
  }
  doSearch(): void {
    let req = this.YTS.search(this.searchString, 25, 'video');
    req.execute(res => {
      console.log(res);
    })
  }

}
