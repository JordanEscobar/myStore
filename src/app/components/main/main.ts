import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

@Component({
  selector: 'app-main',
  imports: [Footer, Header],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
