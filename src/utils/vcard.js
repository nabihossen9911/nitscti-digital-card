import logoBase64 from "../data/logoBase64";
import profile from "../data/profile";

export function downloadVCard() {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:${profile.lastName};${profile.firstName};;;
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.position}
NOTE:${profile.tagline}
TEL;TYPE=CELL,VOICE:${profile.phone}
EMAIL;TYPE=INTERNET:${profile.email}
URL:${profile.website}
ADR;TYPE=WORK:;;${profile.address};;;;Bangladesh
PHOTO;ENCODING=b;TYPE=PNG:${logoBase64}
END:VCARD
`.trim();

  const blob = new Blob([vcard], {
    type: "text/vcard;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${profile.name}.vcf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}