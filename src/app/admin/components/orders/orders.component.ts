import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
orders:any[] = [];
 displayedColumns: string[] = [
    'trackingId',
    'userName',
    'amount',
    'description',
    'address',
    'date',
    'status',
    'action'
  ];

constructor(private adminService:AdminService,
  private snackbar:MatSnackBar) {}

  ngOnInit(): void {
    this.getPlacedOrders();
  }

  getPlacedOrders(){
    this.adminService.getPlacedOrders().subscribe(res =>{
      this.orders = res;
    })
  }
}
