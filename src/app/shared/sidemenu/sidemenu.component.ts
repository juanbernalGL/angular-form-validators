import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})

export class SidemenuComponent {

  menuTemplate: MenuItem[] = [
    {
      label: 'Basics',
      route: './template/basics'
    },
    {
      label: 'Dynamics',
      route: './template/dynamics'
    },
    {
      label: 'Switches',
      route: './template/switches'
    },
  ];

  menuReactive: MenuItem[] = [
    {
      label: 'Basics',
      route: './reactive/basics'
    },
    {
      label: 'Dynamics',
      route: './reactive/dynamics'
    },
    {
      label: 'Switches',
      route: './reactive/switches'
    },
  ];

  menuAuth: MenuItem[] = [
    {
      label: 'Register',
      route: './auth/register'
    },
    {
      label: 'Login',
      route: './auth/login'
    }
  ];

}
