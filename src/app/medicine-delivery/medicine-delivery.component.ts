import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-delivery',
  templateUrl: './medicine-delivery.component.html',
  styleUrls: ['./medicine-delivery.component.css']
})
export class MedicineDeliveryComponent implements OnInit {
  addressBoxDisabled = false;
  imageSrc:any;
  isPrescription = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  toggleAddress(){
    this.addressBoxDisabled = !this.addressBoxDisabled;
  }
  uploadFile(fileInput:any){
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((e) => {
        this.imageSrc = e.target['result'];
      });
      reader.readAsDataURL(fileInput.target.files[0]);
      this.isPrescription = true
  }
}
  onSubmit() {
    alert("Your order is confirmed !! \nIt will be delivered within 2 business days.")
  }
}
