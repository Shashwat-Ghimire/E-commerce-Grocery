//Javascript to validate form
function validation(){ //creating function validation 
    //extracting data from the form with the corresponding name
    var Fname = document.forms["FeedBackForm"] ["Name"].value; 
    var Phoneno = document.forms["FeedBackForm"] ["Phone"].value;
    var EmailAdd = document.forms["FeedBackForm"] ["Email"].value;
    var FeedBackMsg = document.forms["FeedBackForm"] ["Message"].value;
     
    //conditional statement for the validation of form
        if(Fname == ""|| Phoneno == "" || EmailAdd == "" || FeedBackMsg == ""){
            alert("The fields are found empty, please fill out the form."); //pop-up alert
        }

        else {
            alert("Thank you for your response! Enjoy the rest of your day!");
        }
};


// Get reference to the button element 
const addToCartBtn = document.getElementById("addToCart");
// Add event listener to the button
addToCartBtn.addEventListener("click", function() {
    // Display an alert message when the button is clicked
    alert("Item added to cart!");
});
