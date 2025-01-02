import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone  : true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  currentPage1 = 1;

  data =[
    { "username": "user1", "email": "user1@example.com" },
    { "username": "user2", "email": "user2@example.com" },
    { "username": "user3", "email": "user3@example.com" },
    { "username": "user4", "email": "user4@example.com" },
    { "username": "user5", "email": "user5@example.com" },
    { "username": "user6", "email": "user6@example.com" },
    { "username": "user7", "email": "user7@example.com" },
    { "username": "user8", "email": "user8@example.com" },
    { "username": "user9", "email": "user9@example.com" },
    { "username": "user10", "email": "user10@example.com" },
    { "username": "user11", "email": "user11@example.com" },
    { "username": "user12", "email": "user12@example.com" },
    { "username": "user13", "email": "user13@example.com" },
    { "username": "user14", "email": "user14@example.com" },
    { "username": "user15", "email": "user15@example.com" }
  ]

  
}
