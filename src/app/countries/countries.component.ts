import { Component, OnInit } from '@angular/core';
import { CountriesInterface } from '../countries-interface';
import { CountriesServiceService } from '../countries-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  errorMsg: string;
  _countryFilter: string;
  get countryFilter(): string {
    return this._countryFilter;
  }
  set countryFilter(value: string) {
    this._countryFilter = value;
    this.filteredCountries = this.countryFilter ? this.performFilter(this.countryFilter) : this.countries;
  }
  constructor(private countriesService: CountriesServiceService) { }
  countries: CountriesInterface[];
  filteredCountries: CountriesInterface[] = [];

  ngOnInit(): void {

    this.countriesService.getCountries().subscribe(
      countries => {
        this.countries = countries;
        this.filteredCountries = this.countries;
      },
      error => this.errorMsg = <any>error
    );


  }

  performFilter(filterBy: string): CountriesInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((country: CountriesInterface) =>
      country.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

}
