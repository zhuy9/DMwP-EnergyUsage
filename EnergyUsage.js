(function () {

    "use strict";
    
    var graphMenuSelection = document.getElementById('graph-type');
    

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
				document.getElementById("selection_bar").style.display = 'none';
			} else if (graph == '2') {
				console.log("graph-type2: "+graph)
				document.getElementById("selection").style.display = 'none';
				document.getElementById("selection_bar").style.display = 'none';
			} else if (graph == '3') {
				console.log("graph-type3: "+graph)
				document.getElementById("selection").style.display = 'none';	
				document.getElementById("selection_bar").style.display = '';
			} else if (graph == '4') {
				console.log("graph-type4: "+graph)
				document.getElementById("selection").style.display = 'none';	
				document.getElementById("selection_bar").style.display = 'none';
				document.getElementById("chart1").style.display='';
				document.getElementById("chart2").style.display='none';
			} else if (graph == '5') {
				console.log("graph-type5: "+graph)
				document.getElementById("selection").style.display = 'none';	
				document.getElementById("selection_bar").style.display = 'none';
				document.getElementById("chart1").style.display='none';
				document.getElementById("chart2").style.display='';
			}
			
		});

        $('#clickViewGraphs').click(function () {
        	var graph = $('#graph-type').val();
            

			if (graph == "1") {
			var x = $('#x_label').val()
            var y = $('#y_label').val()
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
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '2' && y == '2') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '2' && y == '3') {
                $('#graph_img').attr('src','Figure/powerLossAllKinds.png');
            } else if (x == '2' && y == '4') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '3' && y == '1') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '3' && y == '2') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '3' && y == '3') {
                $('#graph_img').attr('src','Figure/totRevenueByState.png');
            } else if (x == '3' && y == '4') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '4' && y == '1') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '4' && y == '2') {
                $('#graph_img').attr('src','Figure/summerWinterPeak.png');
            } else if (x == '4' && y == '3') {
                $('#graph_img').attr('src','Figure/noPlot.png');
            } else if (x == '4' && y == '4') {
                $('#graph_img').attr('src','Figure/noPlot.png');
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
			} else if (graph == "3") {
			var x = $('#x_label_bar').val()
            var y = $('#y_label_bar').val()
				// Show Bar Chart
				//XY Plot
				document.getElementById("donutchart").style.display = 'none';
				document.getElementById("donutchart").style.width = "0px";
				document.getElementById("donutchart").style.height = "0px";
				
				document.getElementById("graph_img").style.display = '';
				
				if (x == '1' && y == '1') {
                $('#graph_img').attr('src','Figure/CustomerNumberRCIT.png');
            } else if (x == '1' && y == '2') {
                $('#graph_img').attr('src','Figure/RevenueRCIT.png');
            } else if (x == '1' && y == '3') {
                $('#graph_img').attr('src','Figure/PowerDeliveredRCIT.png');
            }
			} else if (graph == "4") {
				document.getElementById("graph_img").style.display = 'none';
				document.getElementById("donutchart").style.display = 'none';
				document.getElementById("chart1").style.display='';
				document.getElementById("chart2").style.display='none';
			} else if (graph == "5") {
				document.getElementById("graph_img").style.display = 'none';
				document.getElementById("donutchart").style.display = 'none';
				document.getElementById("chart1").style.display='none';
				document.getElementById("chart2").style.display='';
			}
            
		
        });

        var chart1 = c3.generate({
            bindto: "#chart1",
            data: {
                columns: [
                    ["Total Generation of Power (MWh)", 6916431.0, 94490013.0, 55715570.0, 96248652.0, 324458359.0, 6402865.0, 101486615.0, 39227668.0, 10122968.0, 10079771.0, 299967369.0, 143429124.0, 9599248.0, 74809687.0, 21298495.0, 67260218.0, 123425199.0, 46930797.0, 67384202.0, 100330610.0, 43465938.0, 514494283.0, 8151082.0, 103735792.0, 127976481.0, 117494993.0, 52309087.0, 12720255.0, 197828433.0, 48086025.0, 56140826.0, 6082632.0, 34625121.0, 20818048.0, 40479149.0, 159749752.0, 186302938.0, 102203341.0, 219755024.0, 225408245.0, 5858602.0, 68691139.0, 14413753.0, 248821711.0, 773840664.0, 7257731.0, 116058018.0, 6143610.0, 130682456.0, 92475537.0, 54392.0, 7448970.0], 
                    ["Power losses of all kinds measured in megawatt hours", 357085.0, 4448349.0, 3068421.0, 4303615.0, 14768014.0, 0.0, 4151622.0, 1858385.0, 898247.0, 803143.0, 13593034.0, 6118751.0, 440866.0, 1736513.0, 1399418.0, 1869434.0, 5318550.0, 1796911.0, 2830552.0, 3763123.0, 1055204.0, 2224176.0, 218749.0, 4226527.0, 3546689.0, 3920962.0, 2536053.0, 866517.0, 8381897.0, 769574.0, 2114446.0, 371019.0, 1831202.0, 1142254.0, 1338628.0, 5485845.0, 7257792.0, 3471658.0, 5547029.0, 11693898.0, 330047.0, 2218050.0, 569944.0, 6171703.0, 14716925.0, 266012.0, 1927003.0, 284297.0, 4839739.0, 2266274.0, 4794.0, 359447.0]
                ], 
                types: {"Total Generation of Power (MWh)": "area-spline", "Power losses of all kinds measured in megawatt hours": "area-spline"}, 
                groups: [["Total Generation of Power (MWh)", "Power losses of all kinds measured in megawatt hours"]]}
            });

                        

        var chart2 = c3.generate({
            bindto: "#chart2",
            data: {
                columns: [
                    ["Investor Owned", 2348077855.0], 
                    ["Retail Power Marketer", 1543203536.0], 
                    ["Cooperative", 494085488.0], 
                    ["Municipal", 454847628.0], 
                    ["Federal", 288034058.0], 
                    ["Political Subdivision", 185429548.0], 
                    ["State", 91209595.0], 
                    ["Wholesale Power Marketer", 26292106.0], 
                    ["Community Choice Aggregator", 11826361.0], 
                    ["Behind the Meter", 6151714.0]], 
                    "type": "bar"}
            });
    }

    $(window).on('load', setup);
})();


