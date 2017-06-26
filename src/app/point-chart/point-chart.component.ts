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

// platform inputs
import { Component } from '@angular/core';

// base chart
import { BaseChartComponent } from '../base-chart/base-chart.component';

import * as chartjs from 'chart.js';

/**
 * Display a point chart (variation of line chart with only points plotted
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-point-chart',
  templateUrl: './point-chart.component.html',
  styleUrls: ['./point-chart.component.scss']
})
export class PointChartComponent extends BaseChartComponent
{
  /**
   * @inheritDoc
   */
  constructor()
  {
    super();

    this._chartType = 'line';
  }

  /**
   * @inheritDoc
   */
  public set dataProvider(data: Object)
  {
    if (this._context !== undefined)
    {
      if (this._chart !== undefined)
      {
        // remove any prior event listeners and clear canvas
        this._chart.clear();
        this._chart.destroy();
      }

      const barChartOptions: Object =
      {
        scaleShowVerticalLines: true,
        maintainAspectRatio: false,
        responsive: true,
        showLines: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: data['xLabel']
        },
        scales: {
          yAxes: [
            {
              ticks: {
                callback: function(label, index, labels) {
                  return label.toFixed(2);
                }
              }
            }
          ]
        }
      };

      this._chart = new chartjs.Chart(this._context, {
        type: this._chartType,
        options: barChartOptions,
        data: data['data']
      });
    }
  }
}
