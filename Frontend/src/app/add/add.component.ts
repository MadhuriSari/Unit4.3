import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  addDetails(body: any) {
    this.response = this.apiService.addData(body).subscribe((response: any) => {
      this.response = response?.response;
    });
  }
  Add(name: string, description: string, category: string, price: string) {
    const body = {
      name: name,
      description: description,
      category: category,
      price: price.toString(),
    };
    this.addDetails(body);
    this.homePage();
  }
  homePage() {
    this.routes.navigate(['/home']);
  }
}
