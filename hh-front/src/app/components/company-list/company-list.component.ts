import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';
import { Vacancy } from 'src/app/models/vacancy';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onCompanyClick(id: number): void {
    this.selectedCompanyId = id;
    this.companyService.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
