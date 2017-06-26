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
 * Some mock data to experiment with - taken from http://www.tennisabstract.com/charting/RogerFederer.html
 */
export const federerStats: Object = {
  length: {
    comparison: 'Raw Data',
    data: [
      {
        title: '1-3 shots',
        federer: '59.2',
        other: '58.2'
      },
      {
        title: '4-6 shots',
        federer: '22.9',
        other: '22.2'
      },
      {
        title: '7 to 9 shots',
        federer: '9.8',
        other: '10.1'
      },
      {
        title: '10+ shots',
        federer: '8.1',
        other: '9.4'
      }
    ]
  },
  frequency: {
    comparison: 'Ratio',
    data: [
      {
        title: 'FH Drive',
        federer: '43.6',
        other: '45.5'
      },
      {
        title: 'BH Drive',
        federer: '31.1',
        other: '36.0'
      },
      {
        title: 'FH Slice',
        federer: '1.3',
        other: '2.1'
      },
      {
        title: 'BH Slice',
        federer: '16.1',
        other: '9.7'
      },
      {
        title: 'Dropshot',
        federer: '1.1',
        other: '1.1'
      },
      {
        title: 'Lob',
        federer: '0.7',
        other: '1.2'
      },
      {
        title: 'Net',
        federer: '6.2',
        other: '4.4'
      }
    ]
  },
  winners: {
    comparison: 'Ratio',
    data: [
      {
        title: 'Ace',
        federer: '26.8',
        other: '25.8'
      },
      {
        title: 'Forehand',
        federer: '35.5',
        other: '35.3'
      },
      {
        title: 'Backhand',
        federer: '12.4',
        other: '16.6'
      },
      {
        title: 'Net',
        federer: '25.3',
        other: '22.3'
      }
    ]
  },
  unforced: {
    comparison: 'Ratio',
    data: [
      {
        title: 'Double Fault',
        federer: '6.2',
        other: '9.8'
      },
      {
        title: 'Forehand',
        federer: '48.5',
        other: '46.9'
      },
      {
        title: 'Backhand',
        federer: '40.5',
        other: '39.6'
      },
      {
        title: 'Net',
        federer: '4.8',
        other: '3.7'
      }
    ]
  }
}
