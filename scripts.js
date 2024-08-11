document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var toggleButtons = document.querySelectorAll('.toggle-abstract');
    
    console.log('Number of toggle buttons found:', toggleButtons.length);
    
    toggleButtons.forEach(function(button) {
        console.log('Attaching event listener to button');
        button.addEventListener('click', function() {
            console.log('Button clicked');
            var posterAbstract = this.nextElementSibling;
            if (posterAbstract.style.display === 'none' || posterAbstract.style.display === '') {
                posterAbstract.style.display = 'block';
                this.textContent = 'Hide Abstract';
                this.classList.remove('show');
                this.classList.add('hide');
            } else {
                posterAbstract.style.display = 'none';
                this.textContent = 'Show Abstract';
                this.classList.remove('hide');
                this.classList.add('show');
            }
        });
    });
});