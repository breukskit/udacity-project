import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { viewportReducer } from '../store/reducers';
import { ViewportComponent } from './components/viewport/viewport.component';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgramsDropdownComponent } from './components/nav/programs-dropdown/programs-dropdown.component';
import { BurgerSidenavComponent } from './components/nav/burger-sidenav/burger-sidenav.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { CarouselComponent } from './components/main/carousel/carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { BenefitCardsComponent } from './components/main/benefit-cards/benefit-cards.component';
import { StudentStoriesComponent } from './components/main/student-stories/student-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    NavComponent,
    ProgramsDropdownComponent,
    BurgerSidenavComponent,
    MainComponent,
    HeaderComponent,
    CarouselComponent,
    BenefitCardsComponent,
    StudentStoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    StoreModule.forRoot({ viewport: viewportReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FontAwesomeModule,
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
