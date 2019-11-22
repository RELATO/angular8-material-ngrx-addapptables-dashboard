@Component(// ...)
export class NotifierComponent {

    constructor(private notifierService: NotifierService) { }

    openNotifier() {
        this.notifierService.open({
            type: NotifierType.success,
            message: 'Notifier success'
        });
    }
}