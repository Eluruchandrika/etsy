function toggleButton() {
  const button = document.querySelectorAll('.toggle-button');
  button.style.background="black";
  button.style.color="white";
}


const videoContainers = document.querySelectorAll('.image-container video');

        videoContainers.forEach(video => {
            const container = video.parentElement;

            container.addEventListener('mouseover', () => {
                video.play();
            });

            container.addEventListener('mouseout', () => {
                video.pause();
                video.currentTime = 0;
            });
        });



function showDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }
    
    // Close the dropdown if clicking outside of it
    window.addEventListener("click", function (e) {
    const dropdown = document.getElementById("dropdown");
    const searchBar = document.getElementById("search-bar");
    if (!searchBar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
    });      