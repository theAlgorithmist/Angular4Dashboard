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
       } from '@angular/core';

// covalent imports
import { TdDataTableService
  , TdDataTableSortingOrder
  , ITdDataTableSortChangeEvent
  , ITdDataTableColumn } from '@covalent/core';

import { IPageChangeEvent } from '@covalent/core';

/**
 * Display a paginated/searchable table of Federer Win/Loss Data against marquee players and various tournaments.  Note
 * that data is currently hardcoded for example purposes
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit
{
  // table properties (see Covalent documentation)
  public data: Array<Object>;
  public columns: Array<Object>;
  public selectedRows: Array<any>;
  public multiple: boolean;
  public filteredData: Array<Object>;
  public filteredTotal: number;
  public searchTerm: string;
  public fromRow: number;
  public currentPage: number;
  public pageSize: number;
  public sortBy: string;
  public sortOrder: number;

  /**
   * Construct a new Table View Component
   *
   * @param _dataTableService: TdDataTableService Injected reference to a TdDataTableService
   *
   * @returns nothing Table data is hardcoded in the constructor
   */
  constructor(protected _dataTableService: TdDataTableService)
  {
    this.columns = [
      { name: 'type', label: 'Tournament/Player' },
      { name: 'won', label: 'Number Won' },
      { name: 'lost', label: 'Number Lost' },
      { name: 'total', label: 'Total'},
      { name: 'pct', label: 'Win Percentage', numeric: true, format: v => v.toFixed(1), filter: true },
    ];

    this.data = [
      { type: 'Grand Slams', won: 18, lost: 10, total: 28, pct: 64.0 },
      { type: 'Year-End Championship', won: 6, lost: 4, total: 10, pct: 67.0 },
      { type: 'ATM Masters 1000', won: 26, lost: 18, total: 44, pct: 59.0 },
      { type: 'Olympic Games', won: 0, lost: 1, total: 1, pct: 0.0 },
      { type: 'ATP Tour 500', won: 17, lost: 6, total: 23, pct: 74.0 },
      { type: 'ATP Tour 250', won: 24, lost: 9, total: 33, pct: 73.0 },
      { type: 'vs. Djokovic', won: 22, lost: 23, total: 45, pct: 48.9},
      { type: 'vs. Nadal', won: 14, lost: 23, total: 37, pct: 37.8},
      { type: 'vs. Murray', won: 14, lost: 11, total: 25, pct: 56.0},
      { type: 'vs. Roddick', won: 21, lost: 3, total: 24, pct: 87.5},
      { type: 'vs. Hewitt', won: 18, lost: 9, total: 27, pct: 66.7},
      { type: 'vs. Agassi', won: 8, lost: 3, total: 11, pct: 72.7},
      { type: 'vs. Sampras', won: 1, lost: 0, total: 1, pct: 100.0},
      { type: 'vs. Rafter', won: 0, lost: 3, total: 3, pct: 0.0},
    ];

    this.selectedRows  = [];
    this.multiple      = true;
    this.filteredData  = this.data;
    this.filteredTotal = this.data.length;
    this.searchTerm    = '';
    this.fromRow       = 1;
    this.currentPage   = 1;
    this.pageSize      = 5;
    this.sortBy        = 'pct';
    this.sortOrder     = TdDataTableSortingOrder.Descending;
  }

  /**
   * Angular lifecycle method (on init)
   *
   * @returns nothing Filter the data
   */
  public ngOnInit(): void
  {
    this.filter();
  }

  // The following methods are basically the same as in the Covalent online examples - this illustrates the ease at
  // which one of the conponent examples may be modified for aactual use
  public sort(sortEvent: ITdDataTableSortChangeEvent): void
  {
    this.sortBy    = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  public search(searchTerm: string): void
  {
    this.searchTerm = searchTerm;
    this.filter();
  }

  public page(pagingEvent: IPageChangeEvent): void
  {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  public filter(): void
  {
    let newData: any[]              = this.data;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
        (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });

    newData            = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData            = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData            = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData  = newData;
  }
}

