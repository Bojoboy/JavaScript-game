var table_x = 0;
var table_y = 0;

$(document).ready(function(){
    $(".up").bind({
    	click: function() {
    		if (table_y < 4){
				var el = $(".robot");
				table_y += 1;
				var table = $("#" + table_x + table_y);
			    el.removeClass("robot");
			    $(table).addClass("robot");
			    console.log(table_x, table_y);
		    }
		},
    });
    $(".down").bind({
    	click: function() {
    		if (table_y > 0){
				var el = $(".robot");
				table_y -= 1;
				var table = $("#" + table_x + table_y);
			    el.removeClass("robot");
			    $(table).addClass("robot");
			    console.log(table_x, table_y);
		    }
		},
    });
    $(".right").bind({
    	click: function() {
    		if (table_x < 5){
				var el = $(".robot");
				table_x += 1;
				var table = $("#" + table_x + table_y);
			    el.removeClass("robot");
			    $(table).addClass("robot");
			    console.log(table_x, table_y);
		    }
		},
    });
    $(".left").bind({
    	click: function() {
    		if (table_x > 0){
				var el = $(".robot");
				table_x -= 1;
				var table = $("#" + table_x + table_y);
			    el.removeClass("robot");
			    $(table).addClass("robot");
			    console.log(table_x, table_y);
		    }
		},
    });
	$('.s_submit').bind({
		click: function(){	
				var el = $(".robot");
			    var form = this.form;
			    console.log('X: ' + form.x.value + ' Y: ' + form.y.value);
			    console.log(table_x, table_y);
			    var table = $("#" + form.x.value + form.y.value);
			    el.removeClass("robot");
			    $(table).addClass("robot");
			}
	});

});

// $('#name').val(); 



      













// function changeid ()
// {
// var move = document.getElementsByClassName("robot");
// var moveB = document.getElementsById("01");

// }




// var btns = document.getElementsByClassName('up__btn');
// var par = document.getElementsByClassName('robot');
// var move = document.getElementsById('00')
// btns[0].onclick = function() {
//   par[0].classList.add("robotHide");
//   move.id = '01';
// }
// btns[1].onclick = function() {
//   par[0].classList.remove("robotHide");
// }






// buttonTop.onclick = function() {
//     console.log( 'Идет вверх' );

//   };
// buttonRight.onclick = function() {
//     console.log( 'Идет направо' );
//   };
// buttonBottom.onclick = function() {
//     console.log( 'Идет вниз' );
//   };
// buttonLeft.onclick = function() {
//     console.log( 'Идет налево' );
//   };
// var robotLocation = "00";
