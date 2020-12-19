// go top button
/*Add class when scroll down*/
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 250) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
});
/*Animation anchor*/
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});

// pagination
function getCurrentPageFromURL() {
    let numberPattern = /\d+/g;
    let url_numbers = window.location.href.match(numberPattern);
    return parseInt(url_numbers[url_numbers.length - 1])
}
let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    current_page++;
    changePage(current_page);
}

function changePage(page) {

    window.location.href = `./book_3_${page}.html`;

}

function loadPageChanger() {
    $(".page-number input").val(current_page)
}
$(document).ready(function () {

    const input = document.querySelector(".page-number input")
    input.addEventListener('keypress', logKey);

    function logKey(e) {
        if (e.key === "Enter") {
            window.location.href = `./book_3_${input.value}.html`;
        }
    }

    $(".prev-page,.prev").click(function () {
        prevPage();
    })
    $(".next-page,.next").click(function () {
        nextPage();
    })

    loadPageChanger();

});

function debounce(func) {
    var timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}


// dark mode
window.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode === 68) {
        console.log("d pressed")
        document.documentElement.classList.toggle('dark-mode')
    }
}

// ****************************
// check answers
// ***********************


function createNewMessageBox(text, type) {
    let iconClass;

    let container = document.createElement("div");
    let icon = document.createElement("i");
    let paragraph = document.createElement("p");
    let closeButton = document.createElement("button");



    if (type === "warn") {
        iconClass = "fa-exclamation-circle"
        container.classList.add("warn-message")
    } else if (type === "info ") {
        iconClass = "fa-info-circle"
        container.classList.add("info-message")
    }

    paragraph.classList.add("align-self-center")


    icon.classList.add("fa")
    icon.classList.add(iconClass)
    icon.classList.add("align-self-center")


    closeButton.classList.add("d-flex")
    closeButton.classList.add("mr-auto")
    closeButton.classList.add("close")
    closeButton.innerHTML = "&times;"

    let ptext = document.createTextNode(text);


    paragraph.appendChild(ptext)

    container.appendChild(icon)
    container.appendChild(paragraph)
    container.appendChild(closeButton)

    return container
}

function showWrongAnswerMessage(containerId) {
    $(containerId).append(getWrongAnswerMessageBox())
    $(containerId).find(".warn-message").css("display", "flex")
        .hide()
        .fadeIn();
}

function getWrongAnswerMessageBox() {

    return createNewMessageBox("بعضی پاسخ هات درست نبود، دوباره تلاش کن", "warn");
}



















function getNearestSegmentOnPath(path, point , points) {
    let minDistance = 99999;
    let minDistanceSegment = undefined;
    for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        if (segment.point.getDistance(point) < minDistance) {
            minDistance = segment.point.getDistance(point)
            minDistanceSegment = segment
        }

    }
    return minDistanceSegment;

}