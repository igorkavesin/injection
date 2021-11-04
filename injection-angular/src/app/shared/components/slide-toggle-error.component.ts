import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggle } from '@angular/material/slide-toggle';
//lister_utilisateur

// http://websvctest/ws_ssc_develop/ws-console.php?nom=lister_utilisateur
@Component({
  selector: 'app-slide-toggle-error',
  template: `
    <mat-slide-toggle warn (change)="onChange($event)">
      <span *ngIf="hint" class="act">Cacher les details</span>
      <span *ngIf="!hint" class="inact">Afficher les détails</span>
    </mat-slide-toggle> `
})
export class SlideToggleErrorComponent implements OnInit {

  @Input() public hint = false;
  @Output() public eventSlideToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onChange(ob: MatSlideToggleChange): void {
    const matSlideToggle: MatSlideToggle = ob.source;
    this.hint = ob.checked;
    this.eventSlideToggle.emit(ob.checked);
  }

}
