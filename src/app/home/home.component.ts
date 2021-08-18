import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goSocialMedia(target: string): void{
    switch (target) {
      case 'telegram': window.open('https://t.me/Natalie_Lukaniuk', '_blank');
                       break;
      case 'viber': window.open('viber://chat?number=380950500317', '_blank');
                    break;
      case 'skype': window.open('https://join.skype.com/invite/KtKYnDhfcz6A', '_blank');
                    break;
      case 'linkedin': window.open('https://www.linkedin.com/in/natalie-lukaniuk-4158ba31/', '_blank');
                       break;
      case 'github': window.open('https://github.com/NatalieLukaniuk', '_blank');
    }
  }
}
