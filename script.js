document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the user's name
    const userName = document.getElementById('userName').value;

    // Display the Thank You section
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';

    // Show the entered name
    document.getElementById('displayedName').textContent = userName;
});
