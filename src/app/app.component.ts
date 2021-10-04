import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiForexService } from './services/convertx.service';
import { Currency, Conversion, Rates } from './models/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngCurrencyConverter';
  currencyForm!: FormGroup;
  symbols!: Currency;
  // resultDOM: boolean = false;
  sampleValue: boolean = true;
  rates!: Rates;

  constructor(
    private fb: FormBuilder,
    private frankfurterAPI: ApiForexService
  ) {}
  ngOnInit(): void {
    this.initCurrencyForm();
    this.getCurrencies();
  }

  initCurrencyForm() {
    this.currencyForm = this.fb.group({
      quantity: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  getCurrencies() {
    this.frankfurterAPI.getCurrencies().subscribe((data: Currency) => {
      console.log(data);
      this.symbols = data;
    });
  }

  onSubmit() {
    console.log(this.currencyForm.value);
  }

  // Test conversion --start

  convert() {
    this.sampleValue = false;
    const valeur = this.currencyForm.get('quantity')?.value;
    const from = this.currencyForm.get('from')?.value;
    const to = this.currencyForm.get('to')?.value;

    this.frankfurterAPI
      .convert(valeur, from, to)
      .subscribe((value: Conversion) => {
        // this.results = value;
        this.rates = value.rates;
        console.log(this.rates);
      });
  }

  // Test conversion --end
}
