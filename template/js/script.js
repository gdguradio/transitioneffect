// Javascript template

var images,
    loadedImage = 0;

function preload(preload = null) {
    images = new Array(
        
        
        // list images needed from the assets folder
        'images/background.jpg',
        'images/button.png',
        'images/female.png',
        'images/headline1.png',
        'images/headline2.png',
        'images/logo.png',
        'images/replay.png',
        'images/subheadline.png'
        
    );

    for (var i = 0; i < images.length; i++) {
        imageObj = new Image();
        imageObj.src = images[i];
        imageObj.addEventListener("load", iLoad, false)


        
    }

    
}

function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
        
        // set the background for each div by calling the images declared on the array
        
        content.style.backgroundImage  = "url('"+images[2]+"')";
        content1.style.backgroundImage  = "url('"+images[3]+"')";
        content2.style.backgroundImage  = "url('"+images[4]+"')";
        content3.style.backgroundImage  = "url('"+images[7]+"')";
        content4.style.backgroundImage  = "url('"+images[5]+"')";
        content5.style.backgroundImage  = "url('"+images[1]+"')";
        content6.style.backgroundImage  = "url('"+images[6]+"')"
        
        init();
    }

    document.getElementById('content6').addEventListener("click", init1,false)
}

function init() {
    main.style.visibility = "visible";



    content.className = 'start';
    window.getComputedStyle(document.getElementById('content')).opacity;
    content.className = 'transition ';


   

    content2.className = 'start';
    window.getComputedStyle(document.getElementById('content2')).opacity;
    content2.style.marginLeft  = "0px";
    content2.className = 'transition2';


    content3.className = 'start';
    window.getComputedStyle(document.getElementById('content3')).opacity;
    content3.className = 'transition3';
    
    content5.className = 'start';
    window.getComputedStyle(document.getElementById('content5')).opacity;
    content5.className = 'transition5';


    content6.className = 'start';
    window.getComputedStyle(document.getElementById('content6')).opacity;
    content6.className = 'transition6';

    setTimeout(function() {
        content4.classList.remove('animate1');
      }, 4000);
    
     content1.classList.add('animate');
      setTimeout(function() {
        content1.classList.remove('animate');
      }, 2000)

}
function init1() {
    main.style.visibility = "visible";

    var el = document.getElementById('main'),
    //modern browsers IE >= 10
    classList = 'classList' in el;
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        if (child.tagName == 'DIV') {
            if (classList) {
                child.classList.add('hideall');
            } else {
                child.className += ' hideall'
            }
        }
    }

    content.className = 'start';
    window.getComputedStyle(document.getElementById('content')).opacity;
    content.className = 'transition ';

    content1.classList.remove('hideall');
    content1.classList.add('animate');
      setTimeout(function() {
        content1.classList.remove('animate');
      }, 2000)


    content2.className = 'start';
    window.getComputedStyle(document.getElementById('content2')).opacity;
    content2.style.marginLeft  = "0px";
    content2.className = 'transition2';


    content3.className = 'start';
    window.getComputedStyle(document.getElementById('content3')).opacity;
    content3.className = 'transition3';

    
    content4.classList.remove('hideall');
    content4.classList.add('animate1');
      setTimeout(function() {
        content4.classList.remove('animate1');
      }, 4000)

    content5.className = 'start';
    window.getComputedStyle(document.getElementById('content5')).opacity;
    content5.className = 'transition5';

    content6.className = 'start';
    window.getComputedStyle(document.getElementById('content6')).opacity;
    content6.className = 'transition6';

    
    
    

}

// image preload function should be called upon banner load.
preload();