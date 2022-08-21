import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() closer:EventEmitter<string> = new EventEmitter<string>();
  // message:string="Dikkat";
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    this.closer.emit("Out Element close event");
  }
}
