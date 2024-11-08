// Hide the skills section by default when the page loads
window.onload = function () {
    var skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.style.display = 'none';
    }
};
// Toggle the display of the skills section on button click
var toggleButton = document.getElementById('toggle-skills');
if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        var skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        }
    });
}
