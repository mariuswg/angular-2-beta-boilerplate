import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello {{contact.firstName}}</p>
        <p (click)="onSelect()" [class.clicked]="showDetail === true">Reveal contact information by clicking on this text</p>
        <div *ngIf="showDetail === true">
            Phone: {{contact.phone}} <br>
            Email: {{contact.email}}
        </div>
        <h4>Change my name in the input field below</h4>
        <input [(ngModel)]="contact.firstName" type="text">
    `,
})
export class AppComponent {
    public contact = { firstName: "Marius", phone:"12345678", email:"e@mail.com"};
    public showDetail = false;

    onSelect(){
      this.showDetail = true;
    }
}
