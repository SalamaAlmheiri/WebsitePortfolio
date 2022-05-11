// From https://gist.github.com/mikestratton/62f5bcbe9d8b701fe1d36d66652cbd2d

$(document).ready(function(){
    animateDiv('.movingObject');
    animateDiv('.gif1');
    animateDiv('.gif2');
    animateDiv('.gif3');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1500,   function(){
      animateDiv(myclass);
    });
};
