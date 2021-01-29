(function () {

    "use strict";

    function setup() {
        $('#clickViewDescription').click(function () {
            $(this).text(function(i, text) {
                return text === "Click to view description" ? "Click to hide description" : "Click to view description";
            });
            $('#description_img').toggle();
        });

        $('#clickViewGraphs').click(function () {
            var x = $('#x_label').val()
            var y = $('#y_label').val()

            if (x == '1' && y == '1') {
                $('#graph_img').attr('src','Figure/peakDemandSumVsGen.png');
            } else if (x == '1' && y == '2') {
                $('#graph_img').attr('src','Figure/peakDemandWinVsGen.png');
            } else if (x == '1' && y == '3') {
                $('#graph_img').attr('src','Figure/totGenByState.png');
            } else if (x == '1' && y == '4') {
                $('#graph_img').attr('src','Figure/totGenByUType.png');
            } else if (x == '2' && y == '1') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '2' && y == '2') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '2' && y == '3') {
                $('#graph_img').attr('src','Figure/powerLossAllKinds.png');
            } else if (x == '2' && y == '4') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '3' && y == '1') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '3' && y == '2') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '3' && y == '3') {
                $('#graph_img').attr('src','Figure/totRevenueByState.png');
            } else if (x == '3' && y == '4') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '4' && y == '1') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '4' && y == '2') {
                $('#graph_img').attr('src','Figure/summerWinterPeak.png');
            } else if (x == '4' && y == '3') {
                $('#graph_img').attr('src','Figure/.png');
            } else if (x == '4' && y == '4') {
                $('#graph_img').attr('src','Figure/.png');
            }
        });
    }

    $(window).on('load', setup);
})();
