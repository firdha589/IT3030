/**
 * 
 */
 $(document).ready(function() 
{ 
 $("#alertSuccess").hide(); 
 $("#alertError").hide(); 
}); 
// SAVE ============================================
$(document).on("click", "#btnSave", function() 
{ 
// Clear status msges-------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation----------------
var status = validateItemForm(); 
// If not valid-------------------
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid----------------------
var User = getUserd($("#txtName").val().trim(), 
 $('input[name="rdoGender"]:checked').val(), 
 $("#ddlCity").val()); 
 12
 $("#colUsers").append(User); 
 
 $("#alertSuccess").text("Saved successfully."); 
 $("#alertSuccess").show(); 
 
 $("#formStudent")[0].reset(); 
}); 
// REMOVE==========================================
$(document).on("click", ".remove", function() 
{ 
 $(this).closest(".User").remove(); 
 
 $("#alertSuccess").text("Removed successfully."); 
 $("#alertSuccess").show(); 
}); 
// CLIENT-MODEL=================================================================
function validateItemForm() 
{ 
// NAME
if ($("#txtName").val().trim() == "") 
 { 
 return "Insert User name."; 
 } 
// GENDER
if ($('input[name="rdoGender"]:checked').length === 0) 
 { 
 return "Select gender."; 
 } 
// YEAR
if ($("#ddlCity").val() == "0") 
 { 
 return "Select city."; 
 } 
return true; 
} 
function getStudentCard(name, gender, city) 
{ 
var title = (gender == "Male") ? "Mr." : "Ms."; 
var yearNumber = ""; 
switch (city) { 
case "1": 
 cityNumber = "matale"; 
 break; 
case "2": 
 cityNumber = "kandy"; 
 break; 
case "3": 
 cityNumber = "colombo"; 
 break; 
case "4": 
 cityNumber = "jaffna"; 
 13
 break; 
 } 
var user = ""; 
user += "<div class=\"student card bg-light m-2\"  style=\"max-width: 10rem; float: left;\">"; 

 user += "<div class=\"card-body\">"; 
 user += title + " " + name + ","; 
 user += "<br>"; 
 user += yearNumber + " year"; 
 user += "</div>"; 
user += "<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">"; 
 user += "</div>"; 
return user;}