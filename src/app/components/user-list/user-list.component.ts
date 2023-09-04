import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StartsWithThreeCharsPipe } from 'src/app/starts-with-three-chars.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {
  data: any;

  // pagination variables
  itemsPerPage: number = 10;
  currentPage: number = 1;
  itemsPerPageOptions: number[] = [10, 50, 100];

  // pagination variables
  filteredData: any;
  filterValue: string = ''; 

  constructor(private http: HttpClient) { }
  
  ngOnInit() { 
    const endpointUrl = 'http://ilumno.lndo.site:8000/API/formulario';
    this.http.get(endpointUrl).subscribe(
      (responseData) => {
        this.data = responseData;
        this.filteredData = responseData;
        console.log(responseData);
      },
      (error) => {
        console.error('Error al consumir el endpoint:', error);
      }
    );
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  getPaginatedData() {
    let filteredData = this.data;
  
    if (this.filterValue) {
      
      filteredData = this.data.filter((user: any) => {
        
        return user.name.toLowerCase().includes(this.filterValue.toLowerCase());
      });
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
  
    return filteredData.slice(startIndex, endIndex);
  }
  

  onItemsPerPageChange(value: number) {
    console.log('Cambió la cantidad de elementos por página:', value);
  }

  applyFilter() {
    if (!this.data) {
      return;
    }
  
    if (!this.filterValue) {
      this.filteredData = this.data;
      return;
    }
  
    // Filter using the pipe
    this.filteredData = this.data.filter((item: any) => {
      return item.name.toLowerCase().startsWith(this.filterValue.toLowerCase());
    });
  }
  
}
