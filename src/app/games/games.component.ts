import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  GamesArray: any[];
  selectedGame: string;
  players: any[];
  showList: boolean;
  constructor() {
        this.GamesArray = [
          {
            ImageSrc: 'https://icc-static-files.s3.amazonaws.com/ICC/photo/2017/01/30/44780aa2-2b6d-4048-897c-6606762b3d38/GettyImages-463485384_Cropped.jpg',
            GameName: 'cricket',
            PlayersList: ['dravid', 'kohli', 'rohit','dale steyn','mitchel stark','mohammad amir','bhuvneshver kumar','ashvin','pujara','rahane']
          },
          {
            ImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg',
            GameName: 'football',
            PlayersList: ['ronaldinho', 'zaltan', 'messi','ronaldo','pepe','neymar','nene']
          },
          {
            ImageSrc: 'https://usatthebiglead.files.wordpress.com/2017/07/usatsi_9931962.jpg?w=1000&h=667',
            GameName: 'Basketball',
            PlayersList: ['moosa', 'bakfer', 'popper','tony','nani']
          }
        ];
  }
  

  ngOnInit() {
  }

}
