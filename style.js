$(function() {
    // reset Button
    $('#resetButton').on('click',function() {
        location.reload();
    })

    // print letters to screen
    var alphabetArray = new Array();
    alphabetArray[0]="images/A.png";
    $(document).keydown(function(e) {
        e.preventDefault;
        if (e.keyCode == 65) {
            var imgA = $('<img>');
            imgA.attr('src', alphabetArray[0]);
            imgA.appendTo('#alphabetDiv');
        }

        // keys to ignore
        if (e.keyCode==112) {
            event.keyCode = 0;
            console.log(event);
            return false;
        } else if (e.keyCode==113) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==114) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==115) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==116) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==117) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==118) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==119) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==120) {
            event.keyCode = 0;
            return false;
        } else if (e.keyCode==121) {
            event.keyCode = 0;
             return false;
        } else if (e.keyCode==122) {
            event.keyCode = 0;
             return false;
        } else if (e.keyCode==123) {
            event.keyCode = 0;
             return false;
        }
    })
})
