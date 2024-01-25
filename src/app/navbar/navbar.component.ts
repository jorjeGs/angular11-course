import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

    pages = [
        {
            name: 'Home',
            link: ''
        },
        {
            name: 'About',
            link: 'about'
        },
        {
            name: 'Contact',
            link: 'contact'
        }
    ]

    title = 'angularIntro';
    
}