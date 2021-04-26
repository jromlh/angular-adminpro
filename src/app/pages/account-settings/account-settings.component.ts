import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settings_ : SettingsService) { }

  ngOnInit(): void {
    this.settings_.checkTheme();
  }

  changeTheme(theme : string){
    this.settings_.changeTheme(theme);
  }

  

}
