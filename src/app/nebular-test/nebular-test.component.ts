import { Component, OnInit, NgModule } from '@angular/core';
import { NbLayoutModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    NbLayoutModule,
    NbButtonModule,
  ],
})

@Component({
  selector: 'app-nebular-test',
  template: `
    <nb-layout>
      <nb-layout-header fixed>Awesome Nebular</nb-layout-header>
      
      <nb-layout-column>
        <button nbButton>Hello World!</button>
      </nb-layout-column>
    </nb-layout>
  `,
  styleUrls: ['./nebular-test.component.scss']
})
export class NebularTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
