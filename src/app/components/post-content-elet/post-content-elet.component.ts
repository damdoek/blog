import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-content-elet',
  templateUrl: './post-content-elet.component.html',
  styleUrls: ['./post-content-elet.component.scss']
})
export class PostContentEletComponent implements OnInit {

  constructor() { }
  @Input() content

  type;
  option

  currentIndex: number = 0
  show: boolean = false
  ngOnInit(): void {
    this.type = this.content.type
    this.option = this.content.option
  }
  zoomImg(i) {
    this.currentIndex = i
    this.show = true
  }
  quitZoomImg() {
    this.show = false
  }
  move(d) {
    console.log(this.content[this.type], this.content[this.type][this.currentIndex], this.currentIndex)
    this.currentIndex = (this.currentIndex + d) % this.content[this.type].length
    if (this.currentIndex < 0) this.currentIndex = this.content[this.type].length - 1
  }
}
