var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var controller = new ScrollMagic.Controller();

if (isMobile) {
  const animation1 = document.getElementById('animation1');
  animation1.innerHTML = '<img src="/a_zmywarki/Frame 118.png" alt="zmywarki" id="img">';
  var images = [
    './a_zmywarki/Frame 118.png',
    './a_zmywarki/Frame 119.png',
    './a_zmywarki/Frame 121.png',
    './a_zmywarki/Frame 122.png',
    './a_zmywarki/Frame 123.png',
    './a_zmywarki/Frame 124.png',
    './a_zmywarki/Frame 125.png',
    './a_zmywarki/Frame 126.png',
    './a_zmywarki/Frame 127.png',
    './a_zmywarki/Frame 128.png',
    './a_zmywarki/Frame 129.png',
    './a_zmywarki/Frame 130.png',
    './a_zmywarki/Frame 131.png',
    './a_zmywarki/Frame 132.png',
    './a_zmywarki/Frame 133.png',
    './a_zmywarki/Frame 134.png',
    './a_zmywarki/Frame 135.png'
  ];

  for (var i = 0; i < images.length; ++i) {
    var img = new Image();
    img.src = images[i];
  }

  var obj = { curImg: 0 };
  var tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,
    roundProps: 'curImg',
    repeat: 0,
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function() {
      document.getElementById('img').setAttribute('src', images[obj.curImg]);
    }
  });

  var scene = new ScrollMagic.Scene({ triggerElement: '#img', duration: 200 }) // duration - długość animacji, wysokość video w px
    .setTween(tween)
    .addIndicators()
    .addTo(controller);
} else {
  const animation1 = document.getElementById('animation1');
  animation1.innerHTML = `<video id="v0" tabindex="0" , autobuffer preload>
            <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="./zmywaki.mp4">
            </source>
          </video>`;
  const vid = document.getElementById('v0');
  var scene = new ScrollMagic.Scene({ triggerElement: '#v0', duration: 300 }) // duration - długość animacji, wysokość video w px
    .addTo(controller)
    .on('progress', function(e) {
      const length = 4; // długość video w sekundach
      vid.currentTime = e.progress * length;
    });
}
