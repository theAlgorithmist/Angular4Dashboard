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
 * Create a data provider to feed the bar chart driven by ratio data
 *
 * @param federerData Federer statistical data
 *
 * @returns Object Drive Chart.js bar (ratio data) chart
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export function toRatioBar(federerData: Object): Object
{
  const freq: Object = federerData['frequency'];
  if (freq === undefined) {
    return {};
  }

  const data: Array<Object>      = freq['data'];
  const barColors: Array<string> = ['#303F9F', '#3F51B5', '#C5CAE9', '#EBEBEB', '#9E9E9E', '#212121', '#757575', '#BDBDBD'];

  // data provider for chart display
  const dataProvider: Object = {};

  dataProvider['xLabel']     = 'Federer/Field, 1 = parity';
  dataProvider['yLabel']     = 'Shot Type';
  dataProvider['comparison'] = freq['comparison'];

  const len: number = data.length;

  let i: number;
  let item: Object;

  const dataObj: Object = {};
  dataObj['labels']     = new Array<string>();

  let federer: number;
  let other: number;
  let ratio: string;

  for (i = 0; i < len; ++i)
  {
    item = data[i];
    dataObj['labels'].push(item['title']);
  }

  const dataSets: Array<Object> = new Array<Object>();
  const ratios: Array<string>   = new Array<string>();

  for (i = 0; i < len; ++i)
  {
    item = data[i];

    federer = parseFloat(item['federer']);
    other   = parseFloat(item['other']);

    ratio = (federer / other).toFixed(2);

    ratios.push(ratio);
  }

  dataSets.push( {data: ratios, backgroundColor: barColors.slice()} );

  dataObj['datasets'] = dataSets;

  dataProvider['data'] = dataObj;

  return dataProvider;
}

