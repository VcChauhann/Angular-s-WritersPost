import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/auth.guard';
import { AuthInterceptor } from './service/auth.interceptor';
import {MatTabsModule} from '@angular/material/tabs';
import { OpenWriterComponent } from './components/write/open-writer/open-writer.component';
import { AudioHeaderComponent } from './components/write/audio-header/audio-header.component';
import { FooterComponent } from './components/write/footer/footer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { CarouselItemComponent } from './components/home/carousel-item/carousel-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EditHeaderComponent } from './components/edit-data/edit-header/edit-header.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    OpenWriterComponent,
    AudioHeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    EditDataComponent,
    EditHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    NgbModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [LoginService, AuthGuard ,[{provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor , multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
