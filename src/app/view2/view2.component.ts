import { Component, OnInit } from '@angular/core';
import { HeaderBreadcrumb } from 'src/app/shared/models/common-models';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getHeaderBreadcrumbs(): HeaderBreadcrumb[] {
    const headerBreadcrumbs: HeaderBreadcrumb[] = [
      {
        navigateTitle: "Main App",
        navigateUrl: "/dashboard"
      },
      {
        navigateTitle: "App 2",
        navigateUrl: "/app2"
      }
    ]

    return headerBreadcrumbs;
  }
}
