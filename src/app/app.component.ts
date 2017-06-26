/**
 * Copyright 2017 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// platform imports
import { Component
       , OnInit
       , AfterViewInit
       , ViewChild
       } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

// Material imports
import { MdIconRegistry } from '@angular/material';

// mock data
import { federerStats } from './mock-data/federer-stats';

// xform mock data elements to chart data providers
import { toStackedBar } from './utils/toStackedBar';
import { toRatioBar   } from './utils/toRatioBar';
import { toPoint      } from './utils/toPoint';
import { toPie        } from './utils/toPie';

// charts
import { StackedBarChartComponent  } from './stacked-bar-chart/stacked-bar-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { PointChartComponent       } from './point-chart/point-chart.component';
import { DonutChartComponent       } from './donut-chart/donut-chart.component';

/**
 * Main app component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  // app component name and title
  public name: string  = 'mainappview';
  public title: string = "The Algorithmist (Covalent/Material/ChartJS Demo)";

  // direct references to all charts in the template
  @ViewChild(StackedBarChartComponent) stackedBar: StackedBarChartComponent;
  @ViewChild(VerticalBarChartComponent) verticalBar: VerticalBarChartComponent;
  @ViewChild(PointChartComponent) pointChart: PointChartComponent;
  @ViewChild(DonutChartComponent) donutChart: DonutChartComponent;

  /**
   * Construct a new app component
   *
   * @param _iconRegistry: MdIconRegistry Injected Material Design Icon Registry
   *
   * @param _domSanitizer: DomSanitizer Injected Angular DOM Sanitizer
   *
   * @returns nothing Constructs a new app component
   */
  constructor(protected _iconRegistry: MdIconRegistry,
              protected _domSanitizer: DomSanitizer)
  {
    // the infinity SVG was emailed to me and I'm not sure where the person got it from, so I'm hazy on an original attribution
    this._iconRegistry.addSvgIconInNamespace('assets', 'algorithmist', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/infinity.svg'));
  }

  /**
   * Angular lifecycle method (on init)
   *
   * @returns nothing
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }

  /**
   * Angular lifecycle method (after view init)
   *
   * @returns nothing After all charts are initialized, set their data providers
   */
  public ngAfterViewInit(): void
  {
    // create and assign the data provider for each chart - these are broken out separately, but you can make the
    // code more compact, if desired
    if (this.stackedBar !== undefined)
    {
      let chartData: Object = toStackedBar(federerStats);

      this.stackedBar.dataProvider = chartData;
    }
    else
    {
      console.log( "Stacked Bar Chart not defined.");
    }

    if (this.verticalBar !== undefined)
    {
      let chartData: Object = toRatioBar(federerStats);

      this.verticalBar.dataProvider = chartData;
    }
    else
    {
      console.log( "Vertical Bar Chart not defined.");
    }

    if (this.pointChart !== undefined)
    {
      let chartData: Object = toPoint(federerStats);

      this.pointChart.dataProvider = chartData;
    }
    else
    {
      console.log( "Point Chart not defined.");
    }

    if (this.donutChart !== undefined)
    {
      let chartData: Object = toPie(federerStats);

      this.donutChart.dataProvider = chartData;
    }
    else
    {
      console.log( "Donut Chart not defined.");
    }
  }
}
