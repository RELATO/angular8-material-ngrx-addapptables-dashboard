import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@addapptables/alert';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AlertModule.forRoot()
    ]
})
export class AppModule { }
