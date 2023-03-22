import { Component, OnInit } from '@angular/core';
import { AxiosSFService } from '../axios-sf.service';

@Component({
  selector: 'app-new-axios-comp',
  templateUrl: './new-axios-comp.component.html',
  styleUrls: ['./new-axios-comp.component.css'],
})
export class NewAxiosCompComponent implements OnInit {
  data: any;

  constructor(private axiosSF: AxiosSFService) {}

  ngOnInit(): void {
    console.log('inside serrvice');
    this.axiosSF.getDetails().subscribe((res) => {
      this.data = res;
      console.log(this.data.hints, 'test');
    });
  }
}
