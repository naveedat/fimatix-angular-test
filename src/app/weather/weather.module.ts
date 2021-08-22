import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './services/weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { WeatherFacade } from './store/facade/weather.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forFeature('forecast', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer,
  ],
  providers: [
    WeatherService,
    WeatherFacade
  ]
})
export class WeatherModule {
}
