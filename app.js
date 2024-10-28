let activityImages = [
    ['../image/sic1.jpg','../image/sic_item.png' , '../image/sic2.jpg', '../image/sic3.jpg'],
    ['../image/bcg1.jpg','../image/bcg2.jpg','../image/bcg3.jpg','../image/bcg4.jpg','../image/bcg6.png','../image/bcg5.png'],
    ['../image/com_1.jpg', '../image/com_2.jpg'],
    ['../image/ii.jpg', '../image/iii.jpg', '../image/i.png'],
    ['../image/open2.jpg', '../image/open3.jpg', '../image/open4.jpg', '../image/open1.png'],
    ['../image/engi.jpg', '../image/engii.jpg'],
    ['../image/vr.png', '../image/vrr.png', '../image/vrrr.png'],
    ['../image/iw1.png', '../image/iw2.png'],
    ['../image/is.jpg', '../image/iss.jpg', '../image/isss.jpg'],
    ['../image/ll.jpg', '../image/llk.jpg'],
    ['../image/book1.png', '../image/book2.jpg'],
    ['../image/snake.png'],
    ['../image/ai1.png', '../image/ai2.png', '../image/ai3.png'],
    ['../image/TTT1.png', '../image/TTT2.png'],
    ['../image/godot.png'],
    ['../image/iot2.jpg', '../image/iot1.jpg'],
    ['../image/3D1.png', '../image/3D2.png'],
    ['../image/namjai.jpg'],
    ['../image/pha1.jpg', '../image/pha2.jpg'],
    ['../image/wid1.jpg', '../image/wid2.jpg', '../image/wid3.jpg'],
    ['../image/bye2.jpg', '../image/bye1.jpg'],
    ['../image/sport.jpg'],
    ['../image/ipc.png'],
    ['../image/hack.png'],
    ['../image/dd.png'],
    ['../image/add.jpg'],
    ['../image/KU.png'],
    ['../image/cc.png'],
    ['../image/as.png'],
    ['../image/imagepy.png'],
    ['../image/v.png'],
    ['../image/imagea.png'],
    ['../image/b.png'],
    ['../image/c.png']
];

//NOTE TO TA this part make for slide image from activity page
let currentIndex = 0;
let currentActivity = 0;

function openPopup(activityIndex) {
    currentActivity = activityIndex;
    currentIndex = 0; 
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popup-img");

    popupImg.src = activityImages[currentActivity][currentIndex];
    popup.style.display = "flex";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;

    // NOTE TO TA  this is LOOP for return last image to first img
    if (currentIndex >= activityImages[currentActivity].length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = activityImages[currentActivity].length - 1;
    }

    var popupImg = document.getElementById("popup-img");
    popupImg.src = activityImages[currentActivity][currentIndex];
}
