import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showInitial: boolean;
  showComplete: boolean;
  title: string;

  randomNumbersVariable: string;

  lottoNumbers;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    
    // Initial show state declaration
    this.showInitial = true;
    this.showComplete = false;

    // Set the title text
    this.title = "Nostradamus";

  }

  randomNumbers() {

		var arr = [];
		var arrSort = [];
		var stringWithNumbers;

		while(arr.length < 6){

		  var randomnumber=Math.floor((Math.random() * 60) + 1);
		  var found=false;
		  for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){found=true;break}
		  }

		  if(!found)arr[arr.length]=randomnumber;

		}

		// Organizes the array in ascending order
		arrSort = arr.sort(function(a, b) {return a-b});

		return stringWithNumbers = arrSort[0].toString() + " - " +
		 arrSort[1].toString() + " - " + arrSort[2].toString() +
		  " - " + arrSort[3].toString() + " - " + arrSort[4].toString() +
		   " - " + arrSort[5].toString();

	}

  // Function that activates when the 'descobrir' button is clicked
  toggle() {
		// this.title = "Consultando os astros";

    // Calling the loader and generating the numbers
    let loader = this.loadingCtrl.create({
      content: "Consultando os astros...",
      duration: 3000
    });
    loader.present();
    
    setTimeout(() => {
      this.showInitial = false;
      this.title = "Os números são";
			this.showComplete = true;
      this.lottoNumbers = this.randomNumbers();
    }, 3000);
	}

  restart() {

    this.showComplete = false;
    this.showInitial = true;
    this.lottoNumbers = "";
    this.title = "Nostradamus";

  }

}
