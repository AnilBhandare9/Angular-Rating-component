import { Component, OnInit, forwardRef, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AngRatingComponent),
  multi: true
};

@Component({
  selector: 'ang-rating',
  templateUrl: './ang-rating.component.html',
  styles: [],
  styleUrls: ['./ang-rating.component.scss'],
  providers: [customValueProvider]
})
export class AngRatingComponent implements OnInit, ControlValueAccessor {


  indxValue: number;
  _value = '';
  propagateChange: any = () => { };
  @Input() ratingObject: any;
  @Input() max = 25;
  @Input() min = 5;
  @Input() step = 5;
  @Input() icon = 'star'
  @Input() type = 'icon';;
  @Input() title;
  @Input() color = ['green'];
  @Input() input = false;
  @Output() rateChange = new EventEmitter<number>(true);
  items: number[] = [];
  rateColor: String


  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.type = !this.type ? 'icon' : this.type;
    this.max = !this.max ? 25 : this.max;
    this.min = !this.min ? 5 : this.min;
    this.step = !this.step ? 5 : this.step;
    this.icon = !this.icon ? 'star' : this.icon;
    this.color = !this.color || !this.color.length ? ['green'] : this.color;
    this.createRating();
  }

  writeValue(value: any) {
    if (value != undefined) {
      this._value = value;
      this.indxValue = this.items.indexOf(value);
      let indx = this.items.indexOf(value);
      let percentage = ((indx + 1) / this.items.length) * 100;
      let minRateColor = 100 / this.color.length;
      let rateArray = [];
      for (let i = minRateColor; i < 101; i += minRateColor) {
        rateArray.push(i);
      }
      for (let i = 0; i < this.color.length; i++) {
        if (rateArray[0] >= percentage) {
          this.rateColor = this.color[0];
        }
        if (rateArray[i] < percentage && percentage <= rateArray[i + 1]) {
          this.rateColor = this.color[i + 1];
        }
      }
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void { }

  createRating() {
    if (this.min < this.max) {
      for (let i = this.min; i <= this.max; i += this.step) {
        this.items.push(i);
      }
    }
    else {
      for (let i = this.min; i >= this.max; i -= this.step) {
        this.items.push(i);
      }
    }
  }

  update(event, id) {
    this._value = id;
    this.rateChange.emit(id);
  }
}

export interface RatingFieldConfig {
  type?: String,
  value: Number,
  min?: Number,
  max?: Number,
  steps?: Number,
  title?: String,
  icon?: String,
  input?: Boolean,
  color?: String[]
}