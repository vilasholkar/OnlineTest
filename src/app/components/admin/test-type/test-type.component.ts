import { Component, OnInit } from '@angular/core';
import {TestTypeService} from '../../../services/admin/test-type.service'


@Component({
  selector: 'app-test-type',
  templateUrl: './test-type.component.html',
  styleUrls: ['./test-type.component.scss']
})
export class TestTypeComponent implements OnInit {
  constructor(private TestServices:TestTypeService) {}
  ngOnInit() {
  }

  TestTypeModel=[];

  getTestTypes() {
      this.TestServices.getTestTypes()
      .subscribe(data => {
        if (data.status == 200) {
          this.TestTypeModel = data.json();
        }
      }, error => {
        console.log(error);
      })
  
   
  }
}
