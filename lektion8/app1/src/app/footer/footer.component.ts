import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  copyright: string = `© ${new Date().getFullYear()} EC-Utbildning.`
  userTerms = { url: 'https://ecutbildning.se/userterms', text: 'Allmänna användarvillkor'}

  ngOnInit(): void {
  }

}
