import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-ordered-product',
  templateUrl: './review-ordered-product.component.html',
  styleUrl: './review-ordered-product.component.scss'
})
export class ReviewOrderedProductComponent {

  productId:number = this.activatedRoute.snapshot.params["productId"];
  reviewForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private snackBar:MatSnackBar,
    private customerService:CustomerService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }
}
