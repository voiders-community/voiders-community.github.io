function copyCode(btn) {
    const terminalBody = btn.parentElement.nextElementSibling;
    const codeText = terminalBody.innerText.replace(/# .*/g, '').replace(/^\s*[\r\n]/gm, '');

    navigator.clipboard.writeText(codeText.trim()).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Text copied";
        btn.style.color = "var(--accent)";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.color = "";
        }, 2000);
    });
}
