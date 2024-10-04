document.getElementById('myButton').addEventListener('click', function() {
    if (this.textContent === 'Check') {
        // Open YouTube link only when the button says "Check"
        window.open('https://www.youtube.com/', '_blank');
        
        // Change the button text to "Claim" after opening the link
        this.textContent = 'Claim';
    }
});
