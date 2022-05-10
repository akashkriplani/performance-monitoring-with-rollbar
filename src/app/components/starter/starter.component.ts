import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UiService } from './../../services/ui.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css'],
})
export class StarterComponent implements OnInit {
  data!: User[];

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.data = data;
    });
  }
}
