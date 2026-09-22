const brochureHref = "images/COMPTECH PRODUCT CATALOUGE.pdf";

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

document.querySelector("#save-contact").addEventListener("click", () => {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:;AV Singh;;;",
    "FN:AV Singh",
    "ORG:Comptech Equipments Limited",
    "TITLE:National Sales Manager",
    "TEL;TYPE=WORK,VOICE:+91 93138 01729",
    "EMAIL;TYPE=WORK:ajay@comptechcompressor.in",
    "URL:https://comptechcompressor.com",
    "END:VCARD"
  ].join("\n");
  downloadBlob(new Blob([vCard], {type: "text/vcard;charset=utf-8"}), "AV Singh.vcf");
  const label = document.querySelector("#save-label");
  label.textContent = "CONTACT SAVED";
  setTimeout(() => { label.textContent = "SAVE MY CONTACT"; }, 2400);
});

document.querySelector(".company-link").addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(brochureHref);
    if (!response.ok) throw new Error("Download failed");
    downloadBlob(await response.blob(), "COMPTECH PRODUCT CATALOUGE.pdf");
  } catch {
    window.location.href = brochureHref;
  }
});
