var bgStart = false;
function sfxFeedback() {
    if (!bgStart)
        bg.play();
    bgStart = true;
    gamestart.play();
}