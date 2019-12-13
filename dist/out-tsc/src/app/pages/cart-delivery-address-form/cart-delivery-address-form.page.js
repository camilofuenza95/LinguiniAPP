import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
var CartDeliveryAddressFormPage = /** @class */ (function () {
    function CartDeliveryAddressFormPage(formBuilder, userService, navParams, motalController) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.navParams = navParams;
        this.motalController = motalController;
        var addData = this.navParams.get("addr");
        console.log('addData ', addData);
        if (typeof addData != 'undefined') {
            this.addressData = addData;
        }
        else {
            this.addressData = { id: '', houseNumber: '', streetName: '', state: '', city: '', mobileNumber: '' };
        }
        this.formData = formBuilder.group({
            id: [this.addressData.id],
            houseNumber: [this.addressData.houseNumber, Validators.required],
            streetName: [this.addressData.streetName, Validators.required],
            city: [this.addressData.city, Validators.required],
            state: [this.addressData.state, Validators.compose([Validators.maxLength(40), Validators.pattern('[a-zA-Z]*'), Validators.required])],
            mobileNumber: [this.addressData.mobileNumber, Validators.required]
        });
    }
    CartDeliveryAddressFormPage.prototype.ngOnInit = function () {
    };
    CartDeliveryAddressFormPage.prototype.formSubmit = function () {
        console.log('ID : ', this.formData.value.id);
        if (this.formData.value.id != '') {
            console.log("update");
            this.userService.updateAddress(this.formData.value);
        }
        else {
            console.log("add");
            this.userService.addAddress(this.formData.value);
        }
        this.motalController.dismiss();
    };
    CartDeliveryAddressFormPage.prototype.close = function () {
        this.motalController.dismiss();
    };
    CartDeliveryAddressFormPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-delivery-address-form',
            templateUrl: './cart-delivery-address-form.page.html',
            styleUrls: ['./cart-delivery-address-form.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            UserService,
            NavParams,
            ModalController])
    ], CartDeliveryAddressFormPage);
    return CartDeliveryAddressFormPage;
}());
export { CartDeliveryAddressFormPage };
//# sourceMappingURL=cart-delivery-address-form.page.js.map