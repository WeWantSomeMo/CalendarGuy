$('#currentDay').text(moment().format('dddd, MMMM Do'))
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val()
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, task)
    window.alert("You have saved the event!")
})

function updater() {
    var currentTime = moment().hour()
    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id'))
        if (timeBlock < currentTime) {
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past')
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass('past')
            $(this).removeClass('future')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

updater()
setInterval(updater, 15000)

for (let i = 9; i < 18; i++) {
    $('#' + i + ' .description').val(localStorage.getItem(i))
}