import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../models/menu-item-model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() title: string = ''
  @Input() menuItens: MenuItem[] = []

  constructor(private router: Router) {}

  goHeroes(rota: string) {
    this.router.navigateByUrl(rota);
  }


}
