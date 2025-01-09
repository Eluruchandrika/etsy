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



    function showPopup() {
        document.getElementById("popup-modal").style.display = "block";
        }
        
        function closePopup() {
        document.getElementById("popup-modal").style.display = "none";
        }
        
        window.onclick = function (event) {
        const modal = document.getElementById("popup-modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
        };