import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
    selector: 'contact-list',
    template:`
        <ul>
          <li *ngFor="#contact of contacts"
              (click)="onSelect(contact)"
              [class.clicked]="selectedContact === contact"
          >
          {{contact.name}}
          </li>
        </ul>
        <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    styleUrls: ["../src/css/app.css"]
})

export class ContactListComponent{
  public contacts =[
  {
    "_id": "592c8cb95f4ce07b089e34ef",
    "index": 0,
    "guid": "e7b583ca-f340-4f2d-9fc0-86e44024938f",
    "isActive": false,
    "balance": "$2,130.64",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": "Janette Nichols",
    "gender": "female",
    "company": "HONOTRON",
    "email": "janettenichols@honotron.com",
    "phone": "+1 (962) 555-3161",
    "address": "948 Harrison Avenue, Nash, Wyoming, 8257",
    "about": "Dolor laborum irure ad esse cupidatat ad reprehenderit incididunt commodo quis laboris consequat commodo reprehenderit. Consequat consectetur proident nostrud velit irure. Eu adipisicing sit esse laborum voluptate est qui. Laboris aute consequat duis magna ex magna velit ea dolor ipsum voluptate pariatur commodo. Consectetur dolor minim veniam sit esse ut aute elit est sint incididunt.\r\n",
    "registered": "2015-01-18T12:29:24 -01:00",
    "latitude": 82.870715,
    "longitude": -149.479786,
    "tags": [
      "dolor",
      "ut",
      "aliquip",
      "commodo",
      "proident",
      "exercitation",
      "quis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hutchinson Gray"
      },
      {
        "id": 1,
        "name": "Farley Lynn"
      },
      {
        "id": 2,
        "name": "Della Mcconnell"
      }
    ],
    "greeting": "Hello, Janette Nichols! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "592c8cb91feda9b6f6974a4d",
    "index": 1,
    "guid": "26098b6d-af68-442e-a10a-f35a26b02993",
    "isActive": false,
    "balance": "$1,124.20",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Ellison Bowen",
    "gender": "male",
    "company": "SOLAREN",
    "email": "ellisonbowen@solaren.com",
    "phone": "+1 (833) 447-3808",
    "address": "494 Cadman Plaza, Greenfields, North Dakota, 876",
    "about": "Duis aliquip excepteur eiusmod sunt nulla est in magna duis ex ipsum id. Pariatur ad anim nostrud veniam aute enim est aliquip nostrud sint non nisi ea anim. Commodo ad duis cupidatat esse sint qui. Laboris proident Lorem culpa aute et voluptate aliquip sunt id ullamco deserunt. Quis labore cupidatat incididunt quis proident ea consectetur est exercitation. Aliquip laboris reprehenderit ea mollit fugiat et. Reprehenderit non cupidatat esse et fugiat nulla reprehenderit exercitation consectetur elit magna.\r\n",
    "registered": "2014-09-14T02:09:37 -02:00",
    "latitude": 42.607823,
    "longitude": -173.801755,
    "tags": [
      "Lorem",
      "amet",
      "et",
      "ad",
      "culpa",
      "cupidatat",
      "minim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Wilkerson May"
      },
      {
        "id": 1,
        "name": "Selma Santos"
      },
      {
        "id": 2,
        "name": "Mcconnell Moss"
      }
    ],
    "greeting": "Hello, Ellison Bowen! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "592c8cb963169ef84307b96a",
    "index": 2,
    "guid": "38259ad5-978c-4177-86ff-4b6ca3ac42f5",
    "isActive": true,
    "balance": "$3,938.16",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": "Catherine Wright",
    "gender": "female",
    "company": "BOVIS",
    "email": "catherinewright@bovis.com",
    "phone": "+1 (978) 531-3569",
    "address": "784 Lloyd Court, Tioga, Palau, 9123",
    "about": "Officia quis commodo ipsum officia ullamco culpa eiusmod ea enim cupidatat pariatur. Qui exercitation sunt aliqua sint excepteur ut cupidatat nostrud aliqua. Dolore voluptate id nostrud ad sunt veniam minim velit incididunt.\r\n",
    "registered": "2015-06-26T08:39:41 -02:00",
    "latitude": 86.758091,
    "longitude": 65.150842,
    "tags": [
      "qui",
      "aute",
      "laboris",
      "labore",
      "sint",
      "excepteur",
      "ex"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Debra Navarro"
      },
      {
        "id": 1,
        "name": "Jocelyn Byers"
      },
      {
        "id": 2,
        "name": "Geraldine Browning"
      }
    ],
    "greeting": "Hello, Catherine Wright! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "592c8cb907463716b9b47a26",
    "index": 3,
    "guid": "ec42461e-86d0-4a0d-8ea9-961c6009bb05",
    "isActive": false,
    "balance": "$3,254.22",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "brown",
    "name": "Mcguire Rose",
    "gender": "male",
    "company": "ICOLOGY",
    "email": "mcguirerose@icology.com",
    "phone": "+1 (875) 508-3692",
    "address": "861 Victor Road, Bellamy, Hawaii, 4631",
    "about": "Magna non cupidatat id ea laboris occaecat cillum nostrud exercitation. Fugiat pariatur aute esse elit consectetur adipisicing ad nulla nisi anim voluptate quis nostrud est. Consequat elit aliquip velit quis in dolore quis amet aute eu laborum dolore. Cillum in ad proident fugiat aliqua mollit velit pariatur sit elit. Culpa proident occaecat minim dolor. Proident in consectetur reprehenderit aute. Esse mollit est magna eu ad duis nulla sit sit irure.\r\n",
    "registered": "2015-06-16T02:27:33 -02:00",
    "latitude": 38.52693,
    "longitude": 52.735711,
    "tags": [
      "ad",
      "magna",
      "labore",
      "tempor",
      "laborum",
      "tempor",
      "pariatur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lynda Mathews"
      },
      {
        "id": 1,
        "name": "Corrine Johnson"
      },
      {
        "id": 2,
        "name": "Keri Pitts"
      }
    ],
    "greeting": "Hello, Mcguire Rose! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "592c8cb95146e48ba8b41144",
    "index": 4,
    "guid": "215ed3e2-8d4f-4daf-bee9-6852912641fd",
    "isActive": false,
    "balance": "$3,041.07",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": "Phoebe Stone",
    "gender": "female",
    "company": "EVIDENDS",
    "email": "phoebestone@evidends.com",
    "phone": "+1 (938) 410-3766",
    "address": "250 Furman Avenue, Noxen, Nebraska, 7457",
    "about": "Qui velit ullamco non commodo ipsum amet consequat labore ullamco excepteur sint elit irure do. Qui cillum elit sunt sint minim excepteur laboris nisi mollit in dolore aliquip. Laborum anim veniam dolore enim pariatur excepteur esse. Aute ipsum fugiat mollit eiusmod eu consequat consequat eiusmod veniam.\r\n",
    "registered": "2017-05-17T05:18:46 -02:00",
    "latitude": -74.773811,
    "longitude": 93.609123,
    "tags": [
      "do",
      "veniam",
      "est",
      "ut",
      "quis",
      "sunt",
      "laboris"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mendoza Bryant"
      },
      {
        "id": 1,
        "name": "Ramsey Cabrera"
      },
      {
        "id": 2,
        "name": "Sonya Chang"
      }
    ],
    "greeting": "Hello, Phoebe Stone! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "592c8cb95ee84cba7130179a",
    "index": 5,
    "guid": "361b4ce3-12cf-4804-a548-20f47c3ee892",
    "isActive": false,
    "balance": "$3,023.36",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": "Lucille Moreno",
    "gender": "female",
    "company": "PROSELY",
    "email": "lucillemoreno@prosely.com",
    "phone": "+1 (805) 470-2524",
    "address": "759 Dikeman Street, Chical, Guam, 3344",
    "about": "Laborum dolor consequat et tempor proident reprehenderit quis magna sit ad ex commodo. Adipisicing occaecat nostrud incididunt sint elit nostrud sunt. Lorem ipsum velit consectetur fugiat minim laborum ipsum labore sint sit laboris nisi labore. Veniam elit pariatur qui veniam consequat. Fugiat mollit ullamco ut exercitation dolor ullamco fugiat.\r\n",
    "registered": "2016-11-05T08:46:44 -01:00",
    "latitude": 54.714563,
    "longitude": -96.718925,
    "tags": [
      "irure",
      "sit",
      "Lorem",
      "officia",
      "occaecat",
      "dolor",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Meyer Foreman"
      },
      {
        "id": 1,
        "name": "Alston Stein"
      },
      {
        "id": 2,
        "name": "Irwin Short"
      }
    ],
    "greeting": "Hello, Lucille Moreno! You have 1 unread messages.",
    "favoriteFruit": "strawberry"
  }
  ];
  public selectedContact = {};

  onSelect(contact){
    this.selectedContact = contact;
  }
}
