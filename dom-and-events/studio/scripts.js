// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Wait for the window to load before attaching event handlers
window.addEventListener('load', function() {
    // Attach event handler to the "Take off" button
    document.getElementById('takeoff').addEventListener('click', function() {
        // Ask for confirmation
        var readyForTakeoff = confirm("Confirm that the shuttle is ready for takeoff.");
        
        // If user confirms, proceed
        if (readyForTakeoff) {
            // Update flight status
            document.getElementById('flightStatus').innerText = "Shuttle in flight";
            // Update background color
            document.getElementById('shuttleBackground').style.backgroundColor = "blue";
            // Increment shuttle height
            var currentHeight = parseInt(document.getElementById('spaceShuttleHeight').innerText);
        document.getElementById('spaceShuttleHeight').innerText = currentHeight + 10000; // Increase shuttle height
        }
    });

    // Attach event handler to the "Land" button
    document.getElementById('landing').addEventListener('click', function() {
        // Alert user about landing
          alert("The shuttle is landing. Landing gear engaged.");
        // Update flight status
        document.getElementById('flightStatus').innerText = "The shuttle has landed.";
        // Reset shuttle height
        document.getElementById('spaceShuttleHeight').innerText = 0;
        // Restore background color
        document.getElementById('shuttleBackground').style.backgroundColor = "";
    });

    // Attach event handler to the "Abort Mission" button
    document.getElementById('missionAbort').addEventListener('click', function() {
        // Ask for confirmation
        var abortMission = confirm("Confirm that you want to abort the mission.");
        
        // If user confirms, proceed
        if (abortMission) {
            // Update flight status
            document.getElementById('flightStatus').innerText = "Mission aborted.";
            // Reset shuttle height
            document.getElementById('spaceShuttleHeight').innerText = 0;
            // Restore background color
            document.getElementById('shuttleBackground').style.backgroundColor = "";
        }
    });
});