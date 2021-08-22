import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { WeatherContainer } from './weather.container';
import { WeatherFacade } from './store/facade/weather.facade';
import { WeatherVM } from '../view-model/weather.vm';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  const mockWeathetrs: WeatherVM[] = [
    {
      city: 'London',
      sixAM: 10.0,
      twelvePM: 12.0,
      sixPM: 15.02,
      twelveAM: 18.9
    }
  ];

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [],
      providers: [
        {
          provide: WeatherFacade,
          useValue: mockWeathetrs
        }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Forecast', () => {
    it('should have a list of weathers', () => {
      component.weathers$ = of(mockWeathetrs);

      fixture.detectChanges();

      component.weathers$.subscribe(weathers => {
        expect(weathers).toEqual(mockWeathetrs);
      });
    });

    it('should have an empty list of weathers', () => {
      component.weathers$ = null;

      fixture.detectChanges();

      expect(component.weathers$).toEqual(null);
    });
  });
});
