document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validate form fields (example)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields.");
      return;
    }
  
    // Create a message to display
    var displayMessage = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
  
    // Display the message
    document.getElementById("messageDisplay").innerHTML = displayMessage;
  
    // You can also submit the form data to a server using AJAX here if needed
  
    // Clear form fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
  });
  