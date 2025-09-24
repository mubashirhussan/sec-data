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

  private sectionsMap: Record<string, Section[]> = {
    '8-k': [
      {
        name: 'Item 1.01 - Entry into a Material Definitive Agreement',
        code: '1.01',
      },
      {
        name: 'Item 1.02 - Termination of a Material Definitive Agreement',
        code: '1.02',
      },
      { name: 'Item 1.03 - Bankruptcy or Receivership', code: '1.03' },
      {
        name: 'Item 1.04 - Mine Safety - Reporting of Shutdowns and Violations',
        code: '1.04',
      },
      {
        name: 'Item 2.01 - Completion of Acquisition or Disposition of Assets',
        code: '2.01',
      },
      {
        name: 'Item 2.02 - Results of Operations and Financial Condition',
        code: '2.02',
      },
      {
        name: 'Item 2.03 - Creation of a Direct Financial Obligation',
        code: '2.03',
      },
      { name: 'Item 2.04 - Triggering Events', code: '2.04' },
      {
        name: 'Item 2.05 - Costs Associated with Exit or Disposal Activities',
        code: '2.05',
      },
      { name: 'Item 2.06 - Material Impairments', code: '2.06' },
      { name: 'Item 3.01 - Notice of Delisting', code: '3.01' },
      {
        name: 'Item 3.02 - Unregistered Sales of Equity Securities',
        code: '3.02',
      },
      {
        name: 'Item 3.03 - Modification to Rights of Security Holders',
        code: '3.03',
      },
      { name: 'Item 4.01 - Changes in Certifying Accountant', code: '4.01' },
      {
        name: 'Item 4.02 - Non-Reliance on Financial Statements',
        code: '4.02',
      },
      { name: 'Item 5.01 - Changes in Control of Registrant', code: '5.01' },
      { name: 'Item 5.02 - Departure of Directors or Officers', code: '5.02' },
      { name: 'Item 5.03 - Amendments to Articles or Bylaws', code: '5.03' },
      { name: 'Item 5.04 - Temporary Suspension of Trading', code: '5.04' },
      { name: 'Item 5.05 - Amendments to Code of Ethics', code: '5.05' },
      { name: 'Item 5.06 - Change in Shell Company Status', code: '5.06' },
      { name: 'Item 5.07 - Submission of Matters to a Vote', code: '5.07' },
      { name: 'Item 5.08 - Shareholder Director Nominations', code: '5.08' },
      { name: 'Item 6.01 - ABS Informational Material', code: '6.01' },
      { name: 'Item 6.02 - Change of Servicer or Trustee', code: '6.02' },
      { name: 'Item 6.03 - Change in Credit Enhancement', code: '6.03' },
      {
        name: 'Item 6.04 - Failure to Make Required Distribution',
        code: '6.04',
      },
      { name: 'Item 6.05 - Securities Act Updating Disclosure', code: '6.05' },
      { name: 'Item 7.01 - Regulation FD Disclosure', code: '7.01' },
      { name: 'Item 8.01 - Other Events', code: '8.01' },
      {
        name: 'Item 9.01(a) - Financial Statements of Businesses Acquired',
        code: '9.01a',
      },
      { name: 'Item 9.01(b) - Pro Forma Financial Information', code: '9.01b' },
      { name: 'Item 9.01(c) - Shell Company Transactions', code: '9.01c' },
      { name: 'Item 9.01(d) - Exhibits', code: '9.01d' },
    ],

    '10-k': [
      { name: 'Item 1. Business', code: '1' },
      { name: 'Item 1A. Risk Factors', code: '1A' },
      { name: 'Item 1B. Unresolved Staff Comments', code: '1B' },
      { name: 'Item 1C. Cybersecurity', code: '1C' },
      { name: 'Item 2. Properties', code: '2' },
      { name: 'Item 3. Legal Proceedings', code: '3' },
      { name: 'Item 4. Mine Safety Disclosures', code: '4' },
      {
        name: 'Item 5. Market for Equity, Related Stockholder Matters',
        code: '5',
      },
      { name: 'Item 6. [Reserved]', code: '6' },
      { name: 'Item 7. MD&A', code: '7' },
      { name: 'Item 7A. Market Risk Disclosures', code: '7A' },
      {
        name: 'Item 8. Financial Statements and Supplementary Data',
        code: '8',
      },
      { name: 'Item 9. Accounting Changes/Disagreements', code: '9' },
      { name: 'Item 9A. Controls and Procedures', code: '9A' },
      { name: 'Item 9B. Other Information', code: '9B' },
      { name: 'Item 9C. HFCAA Disclosures', code: '9C' },
      { name: 'Item 10. Directors and Governance', code: '10' },
      { name: 'Item 11. Executive Compensation', code: '11' },
      { name: 'Item 12. Security Ownership', code: '12' },
      { name: 'Item 13. Relationships and Independence', code: '13' },
      { name: 'Item 14. Accounting Fees and Services', code: '14' },
      { name: 'Item 15. Exhibits, Financial Schedules', code: '15' },
      { name: 'Item 16. Form 10-K Summary', code: '16' },
    ],
    '10-q': [
      { name: 'Item 1. Financial Statements', code: '1' },
      { name: 'Item 2. MD&A', code: '2' },
      { name: 'Item 3. Market Risk Disclosures', code: '3' },
      { name: 'Item 4. Controls and Procedures', code: '4' },
      { name: 'Item 1. Legal Proceedings', code: '1L' },
      { name: 'Item 1A. Risk Factors', code: '1A' },
      { name: 'Item 2. Unregistered Sales of Equity Securities', code: '2U' },
      { name: 'Item 3. Defaults Upon Senior Securities', code: '3D' },
      { name: 'Item 4. Mine Safety Disclosures', code: '4M' },
      { name: 'Item 5. Other Information', code: '5O' },
      { name: 'Item 6. Exhibits', code: '6E' },
    ],
  };

  ngOnInit() {
    this.formTypes = [
      { name: '8k', code: '8-k' },
      { name: '10k', code: '10-k' },
      { name: '10Q', code: '10-q' },
    ];
  }
  onFormTypeChange() {
    if (this.selectedType) {
      this.sections = this.sectionsMap[this.selectedType.code] || [];
      this.selectedSection = undefined; // reset when type changes
    }
  }

  handleSubmit() {
    // later you can replace with actual API call
    this.responseText = `Dummy response for URL: ${this.url}, Form Type: ${this.selectedType?.name}, Section: ${this.selectedSection?.name}`;
  }
}
