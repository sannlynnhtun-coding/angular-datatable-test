import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  data : any = [];

   dtTrigger: Subject<any> = new Subject();

  ngOnInit(): void {
    this.dtOptions = {
    };
    this.data = [
        {"name" : "asdfadfaf mg"},
        {"name" : "kg kg"}
      ];
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(this.data);
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.data = [
        {"name" : "mg mg"},
        {"name" : "kg kg"},
        {"name" : "dfasfd dfasdf"},
        {"name" : "af asfda"},
      ]
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(this.data);
    });
  }

  rerender2(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.data = [
        {"name" : "mgfasdfa mg"},
        {"name" : "asdfadsadfasdfasfd dfasdf"},
        {"name" : "sdfasdfasfdaf asfdfadsfda"},
      ]
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(this.data);
    });
  }
}
