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
 * Create a data provider to feed the point (modified line) chart
 *
 * @param federerData Federer statistical data
 *
 * @returns Object Drive Chart.js line chart (line or point-only is controlled in the component options)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export function toPoint(federerData: Object): Object
{
  const winners: Object = federerData['winners'];
  if (winners === undefined) {
    return {};
  }

  const data: Array<Object> = winners['data'];

  // data provider for chart display
  const dataProvider: Object = {};

  dataProvider['xLabel']     = 'Federer/Field, 0 = parity';
  dataProvider['yLabel']     = 'Shot Type';
  dataProvider['comparison'] = winners['comparison'];

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

    ratio = (federer/other - 1).toFixed(2);

    ratios.push(ratio);
  }

  // as an exercise, consider moving some of these options to the component
  dataSets.push( {data: ratios, pointBackgroundColor: '#303F9F', pointRadius: 8, pointStyle: 'rect'} );

  dataObj['datasets'] = dataSets;

  dataProvider['data'] = dataObj;

  return dataProvider;
}

