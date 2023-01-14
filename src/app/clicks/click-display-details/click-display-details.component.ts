import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-display-details',
  templateUrl: './click-display-details.component.html',
  styleUrls: ['./click-display-details.component.css']
})
export class ClickDisplayDetailsComponent implements OnInit{
  
  showSecret = false;
  secretData ='Secret password = tuna';
  log = [];


  ngOnInit(): void {
    
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push ( this.log.length +1);
   
  }

}
