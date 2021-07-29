const discordButton = document.getElementById("discord_button");

discordButton.addEventListener("click", async () => {
    const id = "Messier 51#7840";
    await navigator.clipboard.writeText(id);
    alert(`${id}, 클립보드에 복사되었습니다!`);
});
