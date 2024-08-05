import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent {

  item: any
  error: any
  isImageLoading = true

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.getItemById(id)
  }

  getItemById(id: number | string) {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos/${id}`).subscribe((response) => {
      this.item = response;
    }, (err) => this.error = err)
  }

  goBack() {
    this.router.navigate(['/'])
  }

  imageLoaded() {
    console.log("Dsqwa")
  }
}
