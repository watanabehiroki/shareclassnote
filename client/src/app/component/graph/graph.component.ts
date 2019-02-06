import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
//import { Chart, ChartData, ChartOptions} from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
/*
  @ViewChild('canvas')
  ref:ElementRef
  @Input()
  data:ChartData;
  @Input()
  options: ChartOptions;

  context:CanvasRenderingContext2D;
  chart:Chart;
  constructor(private _elementRef:ElementRef) { }
*/
  ngOnInit() {
  /*  this.data = {
      labels:[],
      datasets:[{
        label:'# of Votes',
        data:[],
        backgroundColor:[],
        borderColor:[],
        borderWidth:1
      }]
    };
    this.options = {
      scales: {
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }*/
  }
/*
  ngAfterViewInit(){
    this.context = this.ref.nativeElement.getContext('2d');
    this.chart = new Chart(this.context,{
      type:'pie',
      data:this.data,
      options:this.options
    })
  }
  */
}
