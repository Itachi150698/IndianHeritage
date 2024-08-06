import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStorageService } from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.scss']
})
export class ViewProductDetailComponent implements OnInit {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  product: any;
  FAQS: any[] = [];
  reviews: any[] = [];

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getProductDetailById();
  }

  getProductDetailById(): void {
    this.customerService.getProductDetailById(this.productId).subscribe(res => {
      this.product = res.productDto;
      this.product.processedImg = 'data:image/png;base64,' + res.productDto.byteImg;

      this.FAQS = res.faqDtoList;

      this.reviews = res.reviewDtoList.map(element => {
        element.processedImg = 'data:image/png;base64,' + element.returnedImg;
        return element;
      });
    });
  }

  addToWishlist(): void {
    const wishlistDto = {
      userId: UserStorageService.getUserId(),
      productId: this.productId
    };

    this.customerService.addProductToWishlist(wishlistDto).subscribe(res => {
      if (res.id != null) {
        this.snackbar.open("Product Added to Wishlist Successfully!", "Close", {
          duration: 5000
        });
      } else {
        this.snackbar.open("Something went wrong!", "ERROR", {
          duration: 5000
        });
      }
    });
  }
}
