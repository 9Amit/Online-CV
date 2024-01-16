document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the visibility of the "Interests" section
    function toggleInterests() {
        var interestsSection = document.getElementById("interests");
        interestsSection.classList.toggle("hidden");
    }

    // Attach click event to the "Toggle Interests" button
    var toggleInterestsButton = document.getElementById("toggleInterests");
    toggleInterestsButton.addEventListener("click", toggleInterests);
});
