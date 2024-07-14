document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const userName = document.getElementById('userName').value;
    const userAge = document.getElementById('userAge').value;
    const favoriteColor = document.getElementById('favoriteColor').value;
    
    // Display the inputted values
    const displayDiv = document.getElementById('displayInfo');
    displayDiv.innerHTML = `
      <h3>User Information:</h3>
      <p>Name: ${userName}</p>
      <p>Age: ${userAge}</p>
      <p>Favorite Color: ${favoriteColor}</p>
    `;
    
    // Change background color based on favorite color
    document.body.style.backgroundColor = favoriteColor;
  });
  