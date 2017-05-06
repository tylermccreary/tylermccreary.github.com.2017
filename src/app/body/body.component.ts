declare var $: any;

export class BodyComponent {
  viewportSmall = false;

  init (anchors, colors) {
    var ctrl = this;
    window.addEventListener("orientationchange", function() {
      // Announce the new orientation number
      ctrl.checkViewPort();
    }, false);

    this.checkViewPort();
    console.log("Body");
    if($('html').hasClass('fp-enabled')){
      $('#body-fullpage').fullpage.destroy('all');
    }

    $('#body-fullpage').fullpage({
      onLeave: function(index, nextIndex, direction){

        if (direction == 'down') {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }

        $('body').css("background-color", colors[nextIndex - 1]);
        $('nav.navbar-default').css("background-color", colors[nextIndex - 1]);
      },
      anchors: anchors,
	    menu: '#fp-nav',
      css3: true,
      controlArrows: false,
      scrollingSpeed: 1000,
      navigation: true
    });
  }

  checkViewPort () {
    console.log(window.screen.height);
    if (window.screen.height < 660) {
      this.viewportSmall = true;
    } else {
      this.viewportSmall = false;
    }
  }
}
