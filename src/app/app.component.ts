import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent {

  readonly menus: Array<PoMenuItem> = [{ label: 'Cidades', link: '/cidades' }];
}
