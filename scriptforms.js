function autoGrow(textarea) {
    if (!textarea) return;

    textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    });
}

autoGrow(document.getElementById("other"));
autoGrow(document.getElementById("description"));