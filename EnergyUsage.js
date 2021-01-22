(function () {

    "use strict";

    function setup() {
        $('#clickViewDescription').click(function () {
            $(this).text(function(i, text) {
                return text === "Click to view description" ? "Click to hide description" : "Click to view description";
            });
            $('#description_img').toggle();
        });
    }

    $(window).on('load', setup);
})();
