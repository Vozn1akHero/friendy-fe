export default class EventSearchCriteriaModel {
  title: string;
  city: string;
  street: string;
  streetNumber: string;
  entryPriceMin: number;
  entryPriceMax: number;
  participantsAmountMin: number;
  participantsAmountMax: number;
  date: Date;

  constructor(title: string, city: string, street: string, streetNumber: string, entryPriceMin: number, entryPriceMax: number, participantsAmountMin: number, participantsAmountMax: number, date: Date) {
    this.title = title;
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
    this.entryPriceMin = entryPriceMin;
    this.entryPriceMax = entryPriceMax;
    this.participantsAmountMin = participantsAmountMin;
    this.participantsAmountMax = participantsAmountMax;
    this.date = date;
  }

}
