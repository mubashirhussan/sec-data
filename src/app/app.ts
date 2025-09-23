import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarModule,
    BadgeModule,
    CommonModule,
    AvatarModule,
    ButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'sec-data';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Products', items: [{ label: 'API 1' }, { label: 'API 2' }] },
      { label: 'Filings' },
      { label: 'Pricing' },
      // { label: 'Sandbox' },
      // { label: 'Docs' },
      // {
      //   label: 'Tutorials',
      //   items: [{ label: 'Guide 1' }, { label: 'Guide 2' }],
      // },
    ];
  }
}
