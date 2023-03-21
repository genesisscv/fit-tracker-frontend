import {Component, Input} from '@angular/core';
import {AppUser} from "../../../../services/app/app.service";

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
    @Input()
    public character: AppUser
}
