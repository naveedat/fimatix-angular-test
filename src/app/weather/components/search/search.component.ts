import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() citySearch = new EventEmitter<string>();

  weatherForm = this.fb.group({
    city: ['', Validators.required]
  });

  constructor(public fb: FormBuilder) {
  }

  search() {
    if (this.weatherForm.valid) {
      this.citySearch.emit(this.weatherForm.value.city);
    }
  }
}
