var Transpose = Transpose || {};
Transpose.Site = Transpose.Site || {};

$(function (ns) {

    //var deleteLog = false;
   
    //function addToLog(callbackName, params) {
    //    var callbackData = '<h4>' + callbackName + '</h4>';
    //    Object.keys(params).forEach(function (key) {
    //        var content = params[key];

    //        if (content !== null && typeof content === 'object') {
    //            content = JSON.stringify(content);
    //        }
    //        callbackData += '<p><b>' + key + '</b>: ' + content + '</p>';
    //    });
    //    callbackData += '<br />';

    //    document.getElementById('callbacksDiv').innerHTML += callbackData;
    //}


var website = new fullpage('#Fullpage', {
    sectionsColor: ['#ffffff'],
    anchors: ['HomeSection', 'ProjectSection', 'AboutSection', 'JoinUsSection', 'ContactSection'],
    menu: '#NavMenu',   

    verticalCentered: true,
    //fixedElements: '#Slide0, #Slide1, #Slide2',

    //Parallax
    //parallax: true,
    //parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
    //parallaxOptions: {
    //    type: 'reveal',
    //    percentage: 62,
    //    property: 'translate'
    //},
    //scrollingSpeed: 1000,
    //autoScrolling: true,
    //scrollBar: false,
    //fitToSection: false,


    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: true,
    scrollHorizontally: true,
    interlockedSlides: true,
    dragAndMove: true,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
   
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,


    //Callbacks
    onLeave: function (origin, destination, direction) {
        var params = {
            origin: origin,
            destination: destination,
            direction: direction
            };
        parallaxOnLeave(origin, destination, direction);
    },

    onSlideLeave: function (section, origin, destination, direction) {
        var params = {
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
        };
    },
    afterRender: function () {
      
    },
    afterResize: function (width, height) {      
    },
    afterSlideLoad: function (section, origin, destination, direction) {
        var params = {
            section: section,
            origin: origin,
            destination: destination,
            direction: direction
        };
    },
    afterLoad: function (origin, destination, direction) {
        var params = {
            origin: origin,
            destination: destination,
            direction: direction
            };
        parallaxAfterLoad();
    },


    //equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
    //easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
});

}(Transpose.Site || {}));

/////////////////////////////////////////////
// About Us Scroll Parallax
/////////////////////////////////////////////

/* Scroll the background layers */
function parallaxOnLeave(origin, destination, direction) {
    console.log(origin, destination, direction);
    if (destination.anchor == "AboutSection") {
        $('.transpose-parallax.intro').css('transform', 'translate(0, 500px)');
        $('.transpose-parallax.second-paragraph').css('transform', 'translate(0, -500px)');
    } else {
        $('.transpose-parallax').css('transform', 'translate(0)');
    }

};

function parallaxAfterLoad(){
    //$('.transpose-parallax').css('transform', 'translate(0, 200px)');
};