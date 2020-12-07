import { Component, OnInit } from '@angular/core';
import { Workshop } from '../interfaces/workshop';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-workshops-listing',
  templateUrl: './workshops-listing.component.html',
  styleUrls: ['./workshops-listing.component.scss']
})
export class WorkshopsListingComponent implements OnInit {

  workshops: Workshop[] = [
    { date: '27.12.2020.', time: '09:00', title: 'Interaction Design Workshop', price: '450,00', category: 'design' },
    { date: '10.11.2020.', time: '09:00', title: 'Interaction Frontend Workshop', price: '450,00', category: 'frontend' },
    { date: '27.6.2020.', time: '09:00', title: 'Interaction Frontend Workshop', price: '450,00', category: 'frontend' },
    { date: '14.2.2020.', time: '09:00', title: 'Interaction Design Workshop', price: '450,00', category: 'design' },
    { date: '27.11.2020.', time: '09:00', title: 'Interaction Design Workshop', price: '450,00', category: 'design' },
    { date: '27.4.2020.', time: '09:00', title: 'Interaction Design Workshop', price: '450,00', category: 'design' },
    { date: '11.12.2020.', time: '09:00', title: 'Interaction Frontend Workshop', price: '450,00', category: 'frontend' },
    { date: '27.6.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '04.6.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '27.5.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '25.9.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '10.6.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '27.6.2020.', time: '09:00', title: 'Interaction Frontend Workshop', price: '450,00', category: 'frontend' },
    { date: '23.0.2020.', time: '09:00', title: 'Interaction Backend Workshop', price: '450,00', category: 'backend' },
    { date: '27.6.2020.', time: '09:00', title: 'Interaction Backend Workshop', price: '450,00', category: 'backend' },
    { date: '27.11.2020.', time: '09:00', title: 'Interaction Backend Workshop', price: '450,00', category: 'backend' },
    { date: '03.6.2020.', time: '09:00', title: 'Interaction Backend Workshop', price: '450,00', category: 'backend' },
    { date: '09.5.2020.', time: '09:00', title: 'Interaction Marketing Workshop', price: '450,00', category: 'marketing' },
    { date: '06.6.2020.', time: '09:00', title: 'Interaction Frontend Workshop', price: '450,00', category: 'frontend' }];

  workshopCategories = [
    { name: 'all', icon: '' },
    { name: 'design', icon: 'design-icon.svg', iconHover: 'design-icon.svg' },
    { name: 'frontend', icon: 'frontend-icon.svg', iconHover: 'frontend-icon.svg' },
    { name: 'backend', icon: 'backend-icon.svg', iconHover: 'backend-icon.svg' },
    { name: 'marketing', icon: 'marketing-icon.svg', iconHover: 'marketing-icon.svg' }];

  workshopsCopy: Workshop[] = [];
  filteredWorkshops: Workshop[] = [];
  selectedCategory = 'design';

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.workshopsCopy = [...this.workshops];
    this.filteredWorkshops = this.workshopsCopy.filter(workshop => workshop.category === 'design');
  }

  getIcon(categoryName: string, selected: boolean) {
    switch (categoryName) {
      case 'design':
        return selected ? 'assets/icons/design-icon-hover.svg' : 'assets/icons/design-icon.svg';
      case 'frontend':
        return selected ? 'assets/icons/frontend-icon-hover.svg' : 'assets/icons/frontend-icon.svg';
      case 'backend':
        return selected ? 'assets/icons/backend-icon-hover.svg' : 'assets/icons/backend-icon.svg';
      case 'marketing':
        return selected ? 'assets/icons/marketing-icon-hover.svg' : 'assets/icons/marketing-icon.svg';
      default:
        return selected ? 'assets/icons/design-icon-hover.svg' : 'assets/icons/design-icon.svg';
    }
  }

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    if (categoryName === 'all') {
      this.filteredWorkshops = this.workshopsCopy;
    } else {
      this.filteredWorkshops = this.workshopsCopy.filter(workshop => workshop.category === categoryName);
    }
  }

  addToCard(workshop: Workshop): void {
    this.cartService.cartHasItems = true;
  }

}
