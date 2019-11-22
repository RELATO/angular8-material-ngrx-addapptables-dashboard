import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { LocalizationService } from './localization/services/localization.service';
import { Subject } from 'rxjs';
import { ReponsiveService } from '@addapptables/responsive';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  // unsubscribe all observable
  _unsubscribeAll = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    readonly localizationService: LocalizationService,
    private readonly reponsiveService: ReponsiveService
  ) {
    // init languages
    this.localizationService.initDefaultLanguage();
  }

  ngAfterViewInit(): void {
    // init responsive service
    this.reponsiveService.resize$.pipe(
      takeUntil(this._unsubscribeAll)
    )
      .subscribe();
  }

  /**
  * On destroy
  */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
