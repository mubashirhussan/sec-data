import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
interface FormType {
  name: string;
  code: string;
}
interface Section {
  name: string;
  code: string;
}
@Component({
  selector: 'app-sandbox',
  imports: [
    FormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './sandbox.html',
  styleUrl: './sandbox.css',
})
export class Sandbox implements OnInit {
  url: string = '';
  responseText: string = '';
  formTypes: FormType[] | undefined;
  sections: Section[] | undefined;
  selectedType: FormType | undefined;
  selectedSection: Section | undefined;

  ngOnInit() {
    this.formTypes = [
      { name: '8k', code: '8-k' },
      { name: '10k', code: '10-k' },
      { name: '10Q', code: '10-q' },
    ];
    this.sections = [
      { name: 'Registrant’s Business and Operations', code: '8-k' },
      { name: 'Securities and Trading Markets', code: '10-k' },
      {
        name: 'Matters Related to Accountants and Financial Statements',
        code: '10-q',
      },
    ];
  }
  handleSubmit() {
    // later you can replace with actual API call
    this.responseText = `Dummy response for URL: ${this.url}, Form Type: ${this.selectedType?.name}, Section: ${this.selectedSection?.name}`;
  }
}
