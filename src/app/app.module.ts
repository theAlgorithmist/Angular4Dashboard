// platform
import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';
import { FormsModule             } from '@angular/forms';
import { HttpModule              } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material/FlexLayout
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// covalent
import { CovalentLayoutModule    } from '@covalent/core';
import { CovalentSearchModule    } from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core';
import { CovalentPagingModule    } from '@covalent/core';
import { CovalentMarkdownModule  } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';

// app components/directives
import { AppComponent              } from './app.component';
import { TableViewComponent        } from './table-view/table-view/table-view.component';
import { BaseChartComponent        } from './base-chart/base-chart.component';
import { StackedBarChartComponent  } from './stacked-bar-chart/stacked-bar-chart.component';
import { VerticalBarChartComponent } from './vertical-bar-chart/vertical-bar-chart.component';
import { PointChartComponent       } from './point-chart/point-chart.component';
import { DonutChartComponent       } from './donut-chart/donut-chart.component';
import { CanvasSelectorDirective   } from './canvas-selector/canvas-selector.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    CanvasSelectorDirective,
    BaseChartComponent,
    StackedBarChartComponent,
    VerticalBarChartComponent,
    PointChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentSearchModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentMarkdownModule,
    CovalentHighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
