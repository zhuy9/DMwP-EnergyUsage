(function () {

    "use strict";
    
    var graphMenuSelection = document.getElementById('graph-type');
    
//    function graphMenuDropdown () {
//     	switch(this.graphMenuSelection) {
//     		case '1':
//     			console.log('X-Y Plot selected');
//     			break;
//     		case '2':
//     			console.log('Pie Chart selected');
//     			break;
//     	}
//     }
//     
//     graphMenuSelection.addEventListener('change', graphMenuDropdown, false);

    function setup() {
        $('#clickViewDescription').click(function () {
            $(this).text(function(i, text) {
                return text === "Click to view description" ? "Click to hide description" : "Click to view description";
            });
            $('#description_img').toggle();
        });

		$('#changeGraphType').click(function (){
			var graph = $('#graph-type').val();
			if (graph == '1') {
				console.log("graph-type1: "+graph)
				document.getElementById("selection").style.display = '';
			} else if (graph == '2') {
				console.log("graph-type2: "+graph)
				document.getElementById("selection").style.display = 'none';
			}
			
		});

        $('#clickViewGraphs').click(function () {
        	var graph = $('#graph-type').val();
            var x = $('#x_label').val()
            var y = $('#y_label').val()

			if (graph == "1") {
				//XY Plot
				document.getElementById("donutchart").style.display = 'none';
				document.getElementById("donutchart").style.width = "0px";
				document.getElementById("donutchart").style.height = "0px";
				
				document.getElementById("graph_img").style.display = '';
				
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
			} else if (graph == "2") {
				// Show Pie Chart
				document.getElementById("graph_img").style.display = 'none';
				
				document.getElementById("donutchart").style.display = '';
				document.getElementById("donutchart").style.width = "700px";
				document.getElementById("donutchart").style.height = "400px";
				
// 				var div = document.createElement("div");
// 				div.setAttribute("id", "donutchart")
// 				div.style.width = "900px";
// 				div.style.height = "520px";
// 				document.getElementById("displayArea").appendChild(div);
			}
            
		
        });
    }

    $(window).on('load', setup);
})();


