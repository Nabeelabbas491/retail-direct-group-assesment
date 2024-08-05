import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  data$!: Observable<any[]>;
  error: any

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.data$ = this.getData()
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').pipe(
      map((data: any) => data.slice(0, 10)),
      catchError(error => {
        this.error = error
        return of([])
      })
    );
  }

  goToDetailsPage(id: number | string) {
    this.router.navigate([`details/${id}`])
  }


}
