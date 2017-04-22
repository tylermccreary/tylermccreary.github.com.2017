import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home!';

  ngOnInit () {
    console.log("HOME");
    if($('html').hasClass('fp-enabled')){
      $('#home-fullpage').fullpage.destroy('all');


    }

    $('#home-fullpage').fullpage({
      onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);

        if (direction == 'down') {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
      },
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
	    menu: '#myMenu'
    });


  }
}
