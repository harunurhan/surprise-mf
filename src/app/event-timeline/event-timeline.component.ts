import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';

import { DomUtilService } from '../shared';

@Component({
  selector: 'event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent implements AfterViewInit {

  @Input() events: Array<Event>;

  private timelineBlocks: Array<HTMLElement>;
  private offset: number = 0.7;
  private imageHeight: number;

  constructor(private elementRef: ElementRef, private domUtil: DomUtilService) { }

  ngAfterViewInit() {
    this.imageHeight = document.getElementById('logo').offsetHeight;
    let el = this.elementRef.nativeElement.querySelector('section');
    this.timelineBlocks = Array.prototype
      .slice.call(el.querySelectorAll('.cd-timeline-block'));

    this.hideTimelineBlocks();

    window.onscroll = () => {
      (!window.requestAnimationFrame)
        ? setTimeout(() => this.showTimelineBlocks(), 100)
        : window.requestAnimationFrame(() => this.showTimelineBlocks());
    };
  }

  hideTimelineBlocks() {
    this.timelineBlocks
      .filter(block => block.offsetTop + this.imageHeight > window.scrollY + window.innerHeight * this.offset)
      .map(block => Array.prototype.slice.call(
        block.querySelectorAll('.cd-timeline-img, .cd-timeline-content')))
      .reduce((pre: Array<HTMLElement>, cur: Array<HTMLElement>) => cur.concat(pre), [])
      .forEach((element: HTMLElement) => {
        this.domUtil.addClass(element, 'is-hidden');
      });
  }

  showTimelineBlocks() {
    this.timelineBlocks
      .filter(block => block.offsetTop + this.imageHeight <= window.scrollY + window.innerHeight * this.offset)
      .map(block => Array.prototype.slice.call(
        block.querySelectorAll('.cd-timeline-img.is-hidden, .cd-timeline-content.is-hidden')))
      .reduce((pre: Array<HTMLElement>, cur: Array<HTMLElement>) => cur.concat(pre), [])
      .forEach((element: HTMLElement) => {
        this.domUtil.removeClass(element, 'is-hidden');
        this.domUtil.addClass(element, 'bounce-in');
      });
  }

}

interface Event {
  date: string;
  title: string;
  description: string;
  detailsLink: string;
  type: string;
  price: string;
}