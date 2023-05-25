import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  userArr: any[] = []
  filteredGridList: any [] =[ ]
  searchText: string = '';
  item: any = {
   fName : '',
   mName : '',
   lName : '',
    rollNo : '',
  }

  onFilter(event: any) {
    this.filteredGridList = this.item.filter((param: any) => {
      let search = event;
      let values = Object.values(param);
      let flag = false;
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      });
      if (flag) {
        return param;
      }
    });
  }
}
