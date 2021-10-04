export interface Currency {
  AUD: string;
  BGN: string;
  BRL: string;
  CAD: string;
  CHF: string;
  CNY: string;
  CZK: string;
  DKK: string;
  EUR: string;
  GBP: string;
  HKD: string;
  HRK: string;
  HUF: string;
  IDR: string;
  ILS: string;
  INR: string;
  ISK: string;
  JPY: string;
  KRW: string;
  MXN: string;
  MYR: string;
  NOK: string;
  NZD: string;
  PHP: string;
  PLN: string;
  RON: string;
  RUB: string;
  SEK: string;
  SGD: string;
  THB: string;
  TRY: string;
  USD: string;
  ZAR: string;
}

export interface Conversion {
  amount: number;
  base: string;
  date: Date;
  rates: Rates;
}

export interface Rates {
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number;
  CNY: number;
  CZK: number;
  DKK: number;
  EUR: number;
  GBP: number;
  HKD: number;
  HRK: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  ISK: number;
  JPY: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PHP: number;
  PLN: number;
  RON: number;
  RUB: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  USD: number;
  ZAR: number;
}
