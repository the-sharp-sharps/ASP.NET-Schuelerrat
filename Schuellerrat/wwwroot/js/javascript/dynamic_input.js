﻿////var room = 1;
////function education_fields() {
////    var paragraphIndex = 0;
////    room++;
////    var objTo = document.getElementById('education_fields')
////    var divtest = document.createElement("div");
////    divtest.setAttribute("class", "form-group removeclass" + room);
////    var rdiv = 'removeclass' + room;
////    //divtest.innerHTML = '<div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="Schoolname" name="Schoolname[]" value="" placeholder="School name"></div></div><div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="Major" name="Major[]" value="" placeholder="Major"></div></div><div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="Degree" name="Degree[]" value="" placeholder="Degree"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><div class="input-group"> <select class="form-control" id="educationDate" name="educationDate[]"><option value="">Date</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option> </select><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields(' + room + ');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';

////    divtest.innerHTML = "<div class='form-group'> Name: <input  type='text' name='Paragraphs[" + paragraphIndex + "].Title' id='' /> Text: <input type='text', name='Paragraphs[" + paragraphIndex + "].Content' id='' /></div><div class='input-group-btn'><button class='btn btn-success' type='button' onclick='education_fields();'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span></button></div>";
////    paragraphIndex++;
////    console.log("paragraph index updated", paragraphIndex);


////    objTo.appendChild(divtest)
////}
////function remove_education_fields(rid) {
////    $('.removeclass' + rid).remove();
////}