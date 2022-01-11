import { FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Query-Builder';
  // public queryCtrl: FormControl;
  
  // public query = {
  //   condition: 'and',
  //   rules: [
  //     {field: 'age', operator: '<=', entity: 'physical'},
  //     {field: 'birthday', operator: '=', value: new Date(), entity: 'nonphysical'},
  //     {
  //       condition: 'or',
  //       rules: [
  //         {field: 'gender', operator: '=', entity: 'physical'},
  //         {field: 'occupation', operator: 'in', entity: 'nonphysical'},
  //         {field: 'school', operator: 'is null', entity: 'nonphysical'},
  //         {field: 'notes', operator: '=', entity: 'nonphysical'}
  //       ]
  //     }
  //   ]
  // };

  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: {name: 'Physical Attributes'},
      nonphysical: {name: 'Nonphysical Attributes'},
      test: {name: 'testing'}
    },
    fields: {
      age: {name: 'Age', type: 'number', entity: 'physical'},
      gender: {
        name: 'Gender',
        entity: 'physical',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string', entity: 'nonphysical'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical'},
      educated: {name: 'College Degree?', type: 'boolean', entity: 'nonphysical'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()), entity: 'nonphysical'
      },
      school: {name: 'School', type: 'string', nullable: true, entity: 'nonphysical'},
      occupation: {
        name: 'Occupation',
        entity: 'nonphysical',
        type: 'category',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  };

  // public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  // public allowCollapse: boolean;
  // public persistValueOnFieldChange: boolean = false;

  constructor(
    // private formBuilder: FormBuilder
  ) {
    // this.queryCtrl = this.formBuilder.control(this.query);
    // this.currentConfig = this.entityConfig;
  }

  // changeDisabled(event: Event) {
  //   (<HTMLInputElement>event.target).checked ? this.queryCtrl.disable() : this.queryCtrl.enable();
  // }
}
