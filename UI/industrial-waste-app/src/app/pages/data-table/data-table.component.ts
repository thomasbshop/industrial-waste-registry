import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ColumnItem, DataItem } from 'src/app/interfaces/datatable'
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  profiles$: Observable<Profile[]> = observableOf([]);

  constructor(private apiService: ApiService) { }

  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Address',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Location',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.location.localeCompare(b.location),
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Size',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Technologies',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.technologies.localeCompare(b.technologies),
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Type of Waste',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.waste.localeCompare(b.waste),
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Disposal Mechanism',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Potential Hazard',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.hazard.localeCompare(b.hazard),
      listOfFilter: [],
      filterFn: null
    },
  ];
  listOfData: DataItem[] = [
    {
      id: '1',
      name: 'Brownian',
      address: 'New York No. 1 Lake Park',
      location: '',
      size: '',
      technologies: '',
      waste: 'CO2',
      disposal: '',
      hazard: '',
    },
    {
      id: '1',
      name: 'Brownian',
      address: 'New York No. 1 Lake Park',
      location: '',
      size: '',
      technologies: '',
      waste: 'CO2',
      disposal: '',
      hazard: '',
    },
    {
      id: '1',
      name: 'Brownian',
      address: 'New York No. 1 Lake Park',
      location: '',
      size: '',
      technologies: '',
      waste: 'CO2',
      disposal: '',
      hazard: '',
    },
    {
      id: '1',
      name: 'Brownian',
      address: 'New York No. 1 Lake Park',
      location: '',
      size: '',
      technologies: '',
      waste: 'CO2',
      disposal: '',
      hazard: '',
    },
  ];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ];
      }
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  
  // modal
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit() {
    this.getProfiles();
  }

  public getProfiles() {
    this.profiles$ = this.apiService.getProfiles();
    console.log(this.profiles$);
  }
}
