import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MerchService } from 'src/app/merch.service';
import Swal from 'sweetalert2';
import { api_url } from '../../config';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('cardInfo', { static: false }) cardInfo: ElementRef;

  images_url = api_url + '/products/images/';
  api_url = api_url;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  amount;
  order: any = {};
  currentUser;
  merchImage = '';
  designingCharges = 250;
  quantity = 10;
  final_price = 0;

  constructor(private orderservice: MerchService, private router: Router,
    private cd: ChangeDetectorRef, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.currentUser);
    this.merchImage = sessionStorage.getItem('final_merch')
    this.createOrder();
  }

  createOrder() {
    this.order = JSON.parse(sessionStorage.getItem('order'));
    console.log(this.order)
    this.final_price = this.order.data.price + this.quantity * this.designingCharges;
  }

  ngAfterViewInit() {

    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };

    this.card = elements.create('card', { style });
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  completePayment(secret, obj) {
    const that = obj
    stripe.confirmCardPayment(secret, {
      payment_method: {
        card: this.card,
        billing_details: {
          name: this.currentUser.name
        }
      }
    }).then(function (result) {
      if (result.error) {

        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          console.log('success');
          that.addOrder();
        }
      }
    });
  }

  addOrder() {
    let imagename = this.order.data.merchName + (Math.floor(1000 + Math.random() * 9000) + '.png');
    this.orderservice.uploadImage(this.merchImage, imagename).subscribe(data => console.log(data));
    this.order.data.merchImage = imagename;
    this.order.data.quantity = this.quantity;
    this.order.data.payment = this.final_price;
    this.orderservice.addOrder(this.order).subscribe(data => {
      console.log(this.order);
      Swal.fire({ title: 'Great!', text: 'You have placed your Order Successfully', icon: 'success' }).then(() => {
        this.router.navigate(['/user/manageorder']);
      })
    })
  }

  getIntent() {
    this.http.post(this.api_url + '/create-payment-intent', { amount: this.final_price * 100 }).subscribe(data => {
      console.log(data);
      this.completePayment(data['client_secret'], this);
      console.log(this.card);
    });

  }

}
