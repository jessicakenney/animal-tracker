"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewAnimalComponent = (function () {
    function NewAnimalComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    NewAnimalComponent.prototype.submitForm = function (newName, newBrand, newPrice, newABV) {
        var newAnimalToAdd = new Animal(newName, newBrand, newPrice, newABV);
        this.newAnimalSender.emit(newAnimalToAdd);
        this.showNewAnimalForm = false;
    };
    NewAnimalComponent.prototype.newAnimalButtonClicked = function () {
        this.showNewAnimalForm = true;
    };
    return NewAnimalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewAnimalComponent.prototype, "newAnimalSender", void 0);
NewAnimalComponent = __decorate([
    core_1.Component({
        selector: 'new-animal',
        template: "\n  <div *ngIf=\"!showNewAnimalForm\">\n    <button (click)=\"newAnimalButtonClicked()\">Add a New Animal</button>\n  </div>\n  <div *ngIf=\"showNewAnimalForm\" class=\"newAnimalForm\">\n    <h1>New Animal</h1>\n    <div>\n       <label>Enter Animal Name:</label>\n       <input #newName>\n       <br>\n       <label>Enter Animal Brand:</label>\n       <input #newBrand>\n       <br>\n       <label>Enter Animal Price:</label>\n       <input #newPrice>\n       <br>\n       <label>Enter Animal ABV:</label>\n       <input #newABV>\n       <br>\n       <button (click)=\"submitForm(newName.value, newBrand.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newPrice.value=''; newABV.value='';\">Add</button>\n       <br>\n     </div>\n   </div>\n  "
    })
], NewAnimalComponent);
exports.NewAnimalComponent = NewAnimalComponent;
//# sourceMappingURL=new-animal.component.js.map