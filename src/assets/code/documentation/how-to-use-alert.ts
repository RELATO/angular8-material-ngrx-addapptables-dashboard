@Component({
    selector: 'app-alert'
})
export class AlertComponent {

    constructor(public dialog: MatDialog) { }

    openDialog() {
        this.dialog.open(AddapptableDialogAlertComponent, {
            width: '478px',
            data: <AlertModel>{
                type: AlertEnum.info,
                title: 'Info',
                text: 'Information'
            }
        });
    }
}
