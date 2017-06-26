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

// Canvas Selector
import { CanvasSelectorDirective } from '../canvas-selector/canvas-selector.directive';

import * as chartjs from 'chart.js';

/**
 * Base chart component upon which all other dashboard charts are derived
 *
 * @author Jim Armstrong
 *
 * @version 1.0
 */
@Component({template: ``})
export class BaseChartComponent implements OnInit, AfterViewInit
{
  // Direct reference to the Canvas Selector
  @ViewChild(CanvasSelectorDirective) canvasSelector: CanvasSelectorDirective;

  // Canvas (chart context) and direct reference to the chart
  protected _context: any;
  protected _chart: any;

  // chart type
  protected _chartType: string = 'bar';

  /**
   * Construct a new stacked bar chart
   *
   * @returns nothing
   */
  constructor()
  {
    // empty
  }

  /**
   * Angular lifecycle method (on init)
   *
   * @returns nothing
   */
  public ngOnInit(): void
  {
    // empty
  }

  /**
   * Angular lifecycle method (after view init)
   *
   * @returns nothing Extract a reference to the canvas to use as a chart context
   */
  public ngAfterViewInit(): void
  {
    if (this.canvasSelector !== undefined) {
      this._context = this.canvasSelector.canvas;
    }
    else {
      console.log( "Canvas not defined in after view init" );
    }
  }

  /**
   * Assign data to this chart
   *
   * @param data: Object Point chart data
   *
   * @returns nothing The chart is cleared (if necessary), created, then data/options are assigned
   */
  public set dataProvider(data: Object)
  {
    // to be implemented in subclass
  }
}
