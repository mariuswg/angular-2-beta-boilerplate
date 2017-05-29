import {Component} from "angular2/core";

@Component({
    selector: "contact",
    template: `
    <div>
        Name: <input [(ngModel)]="contact.name" type="text"> <br>
        Phone: {{contact.phone}} <br>
        Email: {{contact.email}} <br>
        Address: {{contact.address}} <br>
        Age: {{contact.age}} <br>
        Balance: {{contact.balance}} <br>
        Registration time: {{contact.registered}} <br>
    </div>
    `,
    inputs: ["contact"]
})

export class ContactComponent{
    public contact = {};
}
