import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  totalA=0;
  totalB=0;

  private decrease3()
  {
    this.totalA -=3;

    if(this.totalA<0)
    this.totalA=0;
  }

  private increase3()
  {
    this.totalA +=3;

    if(this.totalA<0)
    this.totalA=0;
  }

  private decrease3B()
  {
    this.totalB -=3;
    if(this.totalB<0)
    this.totalB=0;
  }

  private increase3B()
  {
    this.totalB +=3;
    if(this.totalB<0)
    this.totalA=0;
  }



  private decrease2()
  {
    this.totalA -=2;
    if(this.totalA<0)
    this.totalA=0;
  }

  private increase2()
  {
    this.totalA +=2;
    if(this.totalA<0)
    this.totalA=0;
  }
    

    private decrease2B()
  {
    this.totalB -=2;
    if(this.totalB<0)
    this.totalB=0;
  }

  private increase2B()
  {
    this.totalB +=2;
    if(this.totalB<0)
    this.totalB=0;
  }




    private decrease1()
    {
      this.totalA -=1;
      if(this.totalA<0)
    this.totalA=0;
    }
  
    private increase1()
    {
      this.totalA +=1;
      if(this.totalA<0)
    this.totalA=0;
    }

      private decrease1B()
      {
        this.totalB -=1;
        if(this.totalB<0)
    this.totalB=0;
      }
    
      private increase1B()
      {
        this.totalB +=1;
        if(this.totalB<0)
        this.totalB=0;

      }

      buttonReset() {
      this.totalA=0;
      this.totalB=0;
      }

      
}
