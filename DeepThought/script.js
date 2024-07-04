document.addEventListener('DOMContentLoaded', function() {
    const journeyBoard = document.getElementById('journeyBoard');
    const toggleIcon = document.getElementById('toggleIcon');
    const arrowIcon = document.getElementById('arrowIcon');

    toggleIcon.addEventListener('click', function() {
        journeyBoard.classList.toggle('expanded');
        if (journeyBoard.classList.contains('expanded')) {
            arrowIcon.classList.remove('fa-arrow-right');
            arrowIcon.classList.add('fa-arrow-left');
        } else {
            arrowIcon.classList.remove('fa-arrow-left');
            arrowIcon.classList.add('fa-arrow-right');
        }
    });
});
