import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 mainMenu:{defaultOption:Array<any>, accessLink:Array<any>
  } = {defaultOption:[], accessLink:[] }
  
  customOptions : Array<any> =[]
  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOption =[
      {
        name:"Inicio",
        icon:"uil uil-estate",
        router:["/"]

      },
      {
        name:"Buscar",
        icon:"uil uil-search",
        router:["/","history"]
      },
      {
        name:"Tu biblioteca",
        icon:"uil uil-music",
        router: ["/", "favorites"]

      }
    ],
    this.mainMenu.accessLink =[
      {
        name:"Crear lista",
        icon:"uil uil-list-ul"
      },
      {
        name:"Favoritos",
        icon:"uil-heart-medical"
      }
    ],
    this.customOptions =[
      {
        name :"Mi lista 1",
        router:["/"]
      },
        {
        name :"Mi lista 2",
        router:["/"]
      },
        {
        name :"Mi lista 3",
        router:["/"]
      },
        {
        name :"Mi lista 4",
        router:["/"]
      }
    ]
  }

}
