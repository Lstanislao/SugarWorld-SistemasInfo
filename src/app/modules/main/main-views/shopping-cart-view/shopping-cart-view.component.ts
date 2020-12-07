import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'firebase';
import { Bag } from 'src/app/models/bag';
import { AuthService } from 'src/app/services/auth.service';
import { BagService } from 'src/app/services/bag.service';


@Component({
  selector: 'app-shopping-cart-view',
  templateUrl: './shopping-cart-view.component.html',
  styleUrls: ['./shopping-cart-view.component.scss']
})
export class ShoppingCartViewComponent implements OnInit {
  bags: Array<Bag> = [];
  user: User;
  hayBolsas = true;
  loading = true;
  modificada = false;
  proceder=false;
  subtotal= [];
  total: number = 0;
  orderForm: FormGroup = null;

  constructor(private authService: AuthService, private bagService: BagService) { }

  ngOnInit(): void {
    this.getUserBags();
  }

  getUserBags(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
      if (user) {
        this.bagService.getUserBags(this.user.uid).then((res) => {
            if (res.docs.length <= 0) {
              this.hayBolsas = false;
              this.loading = false;
            } else {
                console.log(res.docs.length);
                res.docs.forEach((bag) => {
                  this.bagService.getBag(bag.id).subscribe((item) => {
                    let currentBag = {
                      key: item.payload.id,
                      ...item.payload.data(),
                    };

                    console.log(currentBag);
                    
                    console.log(this.bags);
                    this.bags.forEach((item) => {
                      if (item.key == currentBag.key) {
                        console.log('soy igual');
                        item = currentBag;
                        this.modificada = true;
                        console.log(this.bags);
                                          
                      }
                    });

                    if (!this.modificada) {
                      this.bags.push(currentBag);
                    }
                    
                    if (this.bags.length == 0) {
                      this.hayBolsas = false;
                    }
                    this.modificada = false;
                  });  
                });
                this.loading = false; 
                console.log(this.bags);
              }
        }).catch(err => console.log(err));    
      }
    });
  }


  purchase(){
    this.bags.forEach(element => {
      
      let sub = (element.weight*element.price)/50
      this.subtotal.push(sub);
      this.total = this.total+sub;
    });
    console.log(this.subtotal)
    this.proceder=true;
  }







}
