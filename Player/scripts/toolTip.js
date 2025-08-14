//----------------------------------------------------Tooltip Part
export function showTooltip(message) {
  let tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = message;
  document.body.appendChild(tooltip);
  setTimeout(() => {
    tooltip.classList.add("fade-out");
    setTimeout(() => {
      tooltip.remove();
    }, 500);
  }, 1000);
}
//Call like showTooltip("Message")
//showTooltip("Shuffle Enabled")