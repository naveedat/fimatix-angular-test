import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [FormBuilder],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Weather Form', () => {
    it('should have a valid form', () => {
      component.weatherForm.controls.city.setValue('Bristol');
      expect(component.weatherForm.valid).toEqual(true);
    });

    it('should have an invalid form on load', () => {
      expect(component.weatherForm.valid).toEqual(false);
    });

    it('should emit a city', (() => {
      component.weatherForm.controls.city.setValue('Bristol');
      component.citySearch.subscribe((city: string) => {
        expect(city).toEqual('Bristol');
      });
    }));
  });
});
