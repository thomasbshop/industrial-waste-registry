import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ColumnItem, DataItem } from 'src/app/interfaces/datatable'
import { Profile } from 'src/app/interfaces/profile';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  profiles$: Observable<Profile[]> = observableOf([]);

  constructor(private apiService: ApiService, private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

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
      name: 'Street',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'County',
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

  deleteRow(id: any): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  
  // modal

  createComponentModal(form: string): void {
    const modal = this.modal.create({
      nzTitle: 'Form',
      nzContent: FormComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec',
        form: form
      },
      // nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // delay until modal instance created
    setTimeout(() => {
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }
  // ***** //

  ngOnInit() {
    this.getProfiles();
  }

  public getProfiles() {
    this.profiles$ = this.apiService.getProfiles();
    console.log(this.profiles$);
  }
}
