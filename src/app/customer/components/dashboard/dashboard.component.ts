import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../admin/service/admin.service';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { UserStorageService } from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
  ]
})
export class DashboardComponent {
  products: any[] = [];
  searchProductForm!: FormGroup;
  isCustomerLoggedIn : boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn : boolean = UserStorageService.isAdminLoggedIn();

   faqLink = '';
  helpLink = '';
  supportLink = '';
  facebookLink = '';
  twitterLink = '';
  linkedinLink = '';
  instagramLink = '';
  youtubeLink = '';
  homeLink = '';
  wishlistLink = '';
  cartLink = '';

  searchQuery: string = '';
  wishlistCount: number = 0;
  cartCount: number = 0;

  onSearch(event: Event) {
    event.preventDefault();
    console.log('Search Query:', this.searchQuery);
    // Handle search logic here
  }

   categories = [
    {
      name: 'Handicrafts',
      subCategories: ['Terracotta', 'Dhokra', 'Papier-Mâché']
    },
    {
      name: 'Textiles',
      subCategories: ['Silk', 'Cotton', 'Wool']
    },
    {
      name: 'Jewelry',
      subCategories: ['Gold', 'Silver', 'Beaded']
    },
    {
      name: 'Paintings',
      subCategories: ['Madhubani', 'Warli', 'Pattachitra']
    },
    {
      name: 'Sculptures',
      subCategories: ['Stone', 'Bronze', 'Wood']
    },
    {
      name: 'Pottery',
      subCategories: ['Blue Pottery', 'Black Pottery', 'Red Pottery']
    },
    {
      name: 'Musical Instruments',
      subCategories: ['Sitar', 'Tabla', 'Flute']
    },
    {
      name: 'Furniture',
      subCategories: ['Wooden', 'Bamboo', 'Cane']
    },
    {
      name: 'Masks',
      subCategories: ['Chhau', 'Bhoota', 'Teyyam']
    },
    {
      name: 'Toys',
      subCategories: ['Wooden Toys', 'Clay Toys', 'Lacquer Toys']
    }
  ];

   carouselItems = [
    {
      imgSrc: 'https://necessityestore.in/wp-content/uploads/2022/10/13.-India_s-Handicraft-Industry-Gaining-Momentum-10-Best-Corporate-Leaders-From-Jaipur-2021.jpg',
      altText: 'Image',
      discountText: '10% Off Your First Order',
      title: 'Exquisite Handicrafts',
      buttonText: 'Shop Now',
      link: '/handicrafts'
    },
    {
      imgSrc: 'https://pakistanicrafts.com/wp-content/uploads/2023/05/handicrafts-from-pakistan-or-mypakpartner-com.jpeg',
      altText: 'Image',
      discountText: '10% Off Your First Order',
      title: 'Authentic Textiles',
      buttonText: 'Shop Now',
      link: '/textiles'
    }
  ];

   features = [
    {
      iconClass: 'fa fa-check',
      title: 'Quality Craftsmanship'
    },
    {
      iconClass: 'fa fa-shipping-fast',
      title: 'Free Shipping'
    },
    {
      iconClass: 'fas fa-exchange-alt',
      title: '14-Day Return'
    },
    {
      iconClass: 'fa fa-phone-volume',
      title: '24/7 Support'
    }
  ];

  categories1 = [
    {
      productCount: 15,
      imgSrc: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
      altText: 'Handicrafts',
      title: 'Handicrafts',
      link: '/handicrafts'
    },
    {
      productCount: 15,
      imgSrc: 'https://static.fibre2fashion.com/newsresource/images/268/shutterstock-1428954188_279844.jpg',
      altText: 'Textiles',
      title: 'Textiles',
      link: '/textiles'
    },
    {
      productCount: 15,
      imgSrc: 'https://www.jdinstitute.edu.in/media/2022/01/Traditional-Indian-Jewellery-History-And-Significance-12.jpg',
      altText: 'Jewelry',
      title: 'Jewelry',
      link: '/jewelry'
    },
    {
      productCount: 15,
      imgSrc: 'https://theasifkamal.com/blog/wp-content/uploads/2018/01/image5-8-1009x715.jpg',
      altText: 'Paintings',
      title: 'Paintings',
      link: '/paintings'
    },
    {
      productCount: 15,
      imgSrc: 'https://cdn.cdnparenting.com/articles/2019/05/18105348/394081159-H.webp',
      altText: 'Sculptures',
      title: 'Sculptures',
      link: '/sculptures'
    },
    {
      productCount: 15,
      imgSrc: 'https://t3.ftcdn.net/jpg/06/84/89/32/360_F_684893283_wOdow8GpUgXhXxRSqeOx4fNClk5jYn1v.jpg',
      altText: 'Pottery',
      title: 'Pottery',
      link: '/pottery'
    }
  ];

   offers = [
    {
      imgSrc: 'assets/img/offer-1.png',
      altText: 'Offer 1',
      discountText: '20% off all orders',
      collectionName: 'Spring Collection',
      buttonText: 'Shop Now',
      link: '/spring-collection',
      textAlign: 'text-md-right'
    },
    {
      imgSrc: 'assets/img/offer-2.png',
      altText: 'Offer 2',
      discountText: '20% off all orders',
      collectionName: 'Winter Collection',
      buttonText: 'Shop Now',
      link: '/winter-collection',
      textAlign: 'text-md-left'
    }
  ];

  // products1 = [
  //   {
  //     imgSrc: 'img/product-1.jpg',
  //     imgAlt: 'Product 1',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     oldPrice: '$123.00',
  //     detailLink: '',
  //     cartLink: ''
  //   },
  //   {
  //     imgSrc: 'img/product-2.jpg',
  //     imgAlt: 'Product 2',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     oldPrice: '$123.00',
  //     detailLink: '',
  //     cartLink: ''
  //   },

  // ];

    sectionTitle = 'Stay Updated';
  sectionDescription = 'Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.';
  email = '';

  subscribe() {
    if (this.email) {
      // Handle the subscribe logic here
      console.log(`Subscribed with email: ${this.email}`);
      // Reset the email field after subscribing
      this.email = '';
    }
  }

   sectionTitle1 = 'Just Arrived';
  // products2 = [
  //   {
  //     imgSrc: 'img/product-1.jpg',
  //     altText: 'Product 1',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-2.jpg',
  //     altText: 'Product 2',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-3.jpg',
  //     altText: 'Product 3',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-4.jpg',
  //     altText: 'Product 4',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-5.jpg',
  //     altText: 'Product 5',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-6.jpg',
  //     altText: 'Product 6',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-7.jpg',
  //     altText: 'Product 7',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   },
  //   {
  //     imgSrc: 'img/product-8.jpg',
  //     altText: 'Product 8',
  //     title: 'Colorful Stylish Shirt',
  //     price: '$123.00',
  //     originalPrice: '$123.00',
  //     detailLink: '#',
  //     cartLink: '#'
  //   }
  // ];

   vendors = [
    { imgSrc: 'img/vendor-1.jpg', altText: 'Vendor 1' },
    { imgSrc: 'img/vendor-2.jpg', altText: 'Vendor 2' },
    { imgSrc: 'img/vendor-3.jpg', altText: 'Vendor 3' },
    { imgSrc: 'img/vendor-4.jpg', altText: 'Vendor 4' },
    { imgSrc: 'img/vendor-5.jpg', altText: 'Vendor 5' },
    { imgSrc: 'img/vendor-6.jpg', altText: 'Vendor 6' },
    { imgSrc: 'img/vendor-7.jpg', altText: 'Vendor 7' },
    { imgSrc: 'img/vendor-8.jpg', altText: 'Vendor 8' }
  ];

   footerDescription = 'Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.';
  footerAddress = '123 Street, New York, USA';
  footerEmail = 'info@example.com';
  footerPhone = '+012 345 67890';

  quickLinks = [
    { text: 'Home', url: 'index.html' },
    { text: 'Our Shop', url: 'shop.html' },
    { text: 'Shop Detail', url: 'detail.html' },
    { text: 'Shopping Cart', url: 'cart.html' },
    { text: 'Checkout', url: 'checkout.html' },
    { text: 'Contact Us', url: 'contact.html' }
  ];

  subscriberName: string;
  subscriberEmail: string;

  siteName = 'Your Site Name';
  siteUrl = '#';
  designerUrl = 'https://htmlcodex.com';
  distributorUrl = 'https://themewagon.com';
  paymentImageSrc = 'img/payments.png';

  subscribe1() {
    // Handle subscription logic here
    console.log(`Subscriber Name: ${this.subscriberName}, Email: ${this.subscriberEmail}`);
  }

  constructor(private customerService: CustomerService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]
    })

    this.router.events.subscribe(event =>{
      this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    })
  }

  getAllProducts() {
    this.products = [];
    this.customerService.getAllProducts().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
      console.log(this.products)
    })
  }

  submitForm(){
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.customerService.getAllProductByName(title).subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
      console.log(this.products)
    })
  }

  addToCart(id:any){
    this.customerService.addToCart(id).subscribe(res =>{
      this.snackbar.open("Product added to cart successfully", "Close", {
        duration: 5000
      })
    })
  }

  logout(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
