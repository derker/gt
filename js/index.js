var owl;

$(document).ready(function() {
  	  //mobile Nav
  	  $('body').addClass('js');
		  var $menu = $('#menu'),
		  	  $menulink = $('.menu-link'),
		  	  $menuTrigger = $('.has-subnav > a');
		
		$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
		});
		
		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});
	//end Mobile Nav	
//home Slider
$(".sync1").owlCarousel({ 
navigation : true, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
navigation : false,
singleItem:true
});
//about Impact Slider
$("#impactSlider").owlCarousel({ 
navigation : true, // Show next and prev buttons
slideSpeed : 300,
paginationSpeed : 400,
navigation : false,
singleItem:true
});

//About passion Slider
owl = $("#passionSlider");

owl.owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    pagination : false,
    afterInit: afterOWLinit // do some work after OWL init
});
function afterOWLinit() {

        var pafinatorsLink = $('.blueSection .reSliderNavLink');

        $.each(this.owl.userItems, function (i) {

            $(pafinatorsLink[i])

                .click(function( event ) {
                	$('figcaption.reSlideCap').removeClass('active');
                	$('.greenCircle').removeClass('active');
                	$('.arrowPt').removeClass('active');

                	var capClass = $(this).find('figcaption');
                	if (!capClass.hasClass('active')) {
                	capClass.addClass('active');
        			}
        			var grnCirClass = $(this).find('div');
                	if (!grnCirClass.hasClass('active')) {
                	grnCirClass.addClass('active');
        			}
        			var arrowClass = $(this).find('figure.arrowFig img');
                	if (!arrowClass.hasClass('active')) {
                	arrowClass.addClass('active');
        			}
					event.preventDefault();
				 	owl.trigger('owl.goTo', i);
					});

        });



        // add Custom PREV NEXT controls
        //$('.leftArrow').prepend('<a href="#prev" class="prev-owl">&#60;</a>');
        //$('.rightArrow').prepend('<a href="#next" class="next-owl">&#62;</a>');


        // set Custom event for NEXT custom control
        //$(".next-owl").click(function () {
          //  owl.trigger('owl.next');
        //});

        // set Custom event for PREV custom control
        //$(".prev-owl").click(function () {
          //  owl.trigger('owl.prev');
        //});

    }

    $( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
itemSelector: '.productItem'


  });

  // mobile buttons filters
  var filters = {};

  $('#ageFilters, #categoryFilters, #priceFilters ').on( 'click', '.ink-button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });
   //radial button filters
    var filters2 = {};
     $('#radFilters, #catRadFilters, #priceRadFilters').on( 'click', 'input', function() {
      var $that = $(this);
      // get group key
      var $radGroup = $that.parents('.rad-group');
       var radfilterGroup = $radGroup.attr('data-filter-group');
        // set filter for group
          filters2[ radfilterGroup ] = $that.attr('data-filter');
        // combine filters
          var radfilterValue = '';
          for ( var prop2 in filters2 ) {
            radfilterValue += filters2[ prop2 ];
          }
          // set filter for Isotope
          $container.isotope({ filter: radfilterValue });

  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });


  
});
		
});