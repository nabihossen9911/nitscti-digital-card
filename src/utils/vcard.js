import profile from "../data/profile";

export function downloadVCard() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.position}
TEL:${profile.phone}
EMAIL:${profile.email}
URL:${profile.website}
ADR:;;${profile.address}
END:VCARD
  `.trim();

  const blob = new Blob([vcard], {
    type: "text/vcard;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${profile.name}.vcf`;

  link.click();

  URL.revokeObjectURL(url);
}