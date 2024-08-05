function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    function liftoff() {
        document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
        console.log("Houston, we have liftoff!")
    }

    button.addEventListener("click", liftoff);

    missionAbort.addEventListener("mouseover", function(event) {
        missionAbort.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", function(event) {
        missionAbort.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", function(event) {
        let confirmation = window.confirm("Are you sure you want to abort the mission?");
        if (confirmation) {
            document.getElementById("statusReport").innerHTML = "Mission aborted! Space shuttle returning home.";
            console.log("Mission aborted! Space shuttle returning home.");
        }
    });
    
    
}

window.addEventListener("load", init);
