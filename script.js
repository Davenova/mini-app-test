document.getElementById('myButton').addEventListener('click', function() {
    // Open YouTube link
    window.open('https://www.youtube.com/', '_blank');

    // Change the button text to "Claim"
    this.textContent = 'Claim';
});
