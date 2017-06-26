// modified from code containing the following copyright

/**
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
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
 * A Directive to select a Canvas element that avoids adding to markup to identify the canvas or direct DOM manipulation.
 *
 * Modified from original version to take out EaselJS stage creation; only provides Canvas selection and ability to
 * obtain a direct reference to the Canvas element.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

// platform imports
import { Directive
  , OnInit
  , AfterViewInit
  , ElementRef
} from '@angular/core';

@Directive({
  selector: 'canvas'
})

export class CanvasSelectorDirective implements OnInit, AfterViewInit
{
  private _canvas: HTMLCanvasElement;  // direct reference to the canvas

  constructor(private _elRef: ElementRef)
  {
    // empty
  }

  public ngOnInit(): void
  {
    this._canvas = <HTMLCanvasElement> this._elRef.nativeElement;
  }

  // angular2 life cycle event
  public ngAfterViewInit(): void
  {
    // reserved for future use
  }

  /**
   * Access the Canvas
   *
   * @return HTMLCanvasElement Direct reference to the <canvas> element in a template
   */
  public get canvas(): HTMLCanvasElement
  {
    return this._canvas;
  }

  /**
   * Access the canvas width
   *
   * @return number Canvas width or zero if the internal Canvas reference is not yet defined
   */
  public get width(): number
  {
    return this._canvas ? this._canvas.width : 0;
  }

  /**
   * Access the canvas height
   *
   * @return number Canvas height or zero if the internal Canvas reference is not yet defined
   */
  public get height(): number
  {
    return this._canvas ? this._canvas.height : 0;
  }
}
