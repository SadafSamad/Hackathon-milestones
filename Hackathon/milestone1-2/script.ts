// Hide the skills section by default when the page loads
window.onload = () => {
    const skillsSection = document.getElementById('skills-section') as HTMLElement;
    if (skillsSection) {
        skillsSection.style.display = 'none';
    }
};

// Toggle the display of the skills section on button click
const toggleButton = document.getElementById('toggle-skills') as HTMLElement;
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const skillsSection = document.getElementById('skills-section') as HTMLElement;
        if (skillsSection) {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        }
    });
}