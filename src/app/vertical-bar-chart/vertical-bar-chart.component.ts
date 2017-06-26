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
 * Vertical bar chart component
 *
 * @author jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent extends BaseChartComponent
{
  /**
   * @inheritDoc
   */
  constructor()
  {
    super();

    this._chartType = 'bar';
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

      const chartOptions: Object =
      {
        scaleShowVerticalLines: true,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: data['xLabel']
        },
        scales: {
          'yAxes': [{categoryPercentage: 0.6, barPercentage: 0.9}]
        }
      };

      this._chart = new chartjs.Chart(this._context, {
        type: this._chartType,
        options: chartOptions,
        data: data['data']
      });
    }
  }
}
