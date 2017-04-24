import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MnFullpageOptions, MnFullpageService } from '@fullpage/index';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Home!';

  // constructor(private route: ActivatedRoute) { }
  // constructor(public fullpageService: MnFullpageService) {
  //   }

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
	    menu: '#fp-nav',
      css3: true,
      controlArrows: false,
      scrollingSpeed: 1000,
      navigation: true
    });

    // this.route.fragment.subscribe(f => {
    //   console.log("alkdsjflak");
    //   const element = document.querySelector("#" + f)
    //   console.log(element);
    //   if (element) element.scrollIntoView(element)
    // })

  }
}
