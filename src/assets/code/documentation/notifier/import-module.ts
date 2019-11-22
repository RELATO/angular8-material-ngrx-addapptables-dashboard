import { NotifierModule } from '@addapptables/notifier';
@NgModule({
    imports: [
        NotifierModule.forRoot(),
        // options
        /*NotifierModule.forRoot({
          position: NotifierPositionType.bottomRight,
          timeout: 5000,
          classIcon: 'material-icons',
          iconValue: 'notifications'
        })*/
    ]
})
export class AppModule { }
