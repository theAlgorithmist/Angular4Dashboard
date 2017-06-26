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

/**
 * Create a data provider to feed the stacked bar chart
 *
 * @param federerData Federer statistical data
 *
 * @returns Object Drive Chart.js stacked bar chart
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export function toStackedBar(federerData: Object): Object
{
  const rallyLength: Object = federerData['length'];
  if (rallyLength === undefined) {
    return {};
  }

  const data: Array<Object>       = rallyLength['data'];
  const categories: Array<string> = ['Federer', 'Field'];
  const barColors: Array<string>  = ['#303F9F', '#EBEBEB'];

  // data provider for chart display
  const dataProvider: Object = {};

  dataProvider['xLabel']     = 'Percentage vs. Field';
  dataProvider['yLabel']     = 'Number Shots';
  dataProvider['comparison'] = rallyLength['compari'];;

  const len: number = data.length;

  let i: number;
  let item: Object;

  dataProvider['labels']       = new Array<string>();
  const dataArr: Array<Object> = new Array<Object>();

  for (i = 0; i < len; ++i)
  {
    item = data[i];
    dataProvider['labels'].push(item['title']);
  }

  let dataObj: Object = {};
  dataObj['label']    = categories[0];

  let dataValues: Array<number> = new Array<number>();
  for (i = 0; i < len; ++i)
  {
    item = data[i];
    dataValues.push(item['federer']);
  }

  dataObj['data']            = dataValues.slice();
  dataObj['backgroundColor'] = barColors[0];

  dataArr.push(dataObj);

  dataObj = {};
  dataObj['label'] = categories[1];

  dataValues = new Array<number>();
  for (i = 0; i < len; ++i)
  {
    item = data[i]
    dataValues.push(item['other']);
  }

  dataObj['data']            = dataValues.slice();
  dataObj['backgroundColor'] = barColors[1];

  dataArr.push(dataObj);

  dataProvider['data'] = dataArr;

  return dataProvider;
}
