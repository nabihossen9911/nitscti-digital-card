import toast from "react-hot-toast";
import logoBase64 from "../data/logoBase64";
import profile from "../data/profile";

export function downloadVCard() {

  // Fold Base64 প্রতি 75 character পরপর
  const photo = logoBase64.match(/.{1,75}/g).join("\r\n ");

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:${profile.lastName};${profile.firstName};;;
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.position}
NOTE:${profile.tagline}
TEL;TYPE=CELL:${profile.phone}
EMAIL;TYPE=INTERNET:${profile.email}
URL:${profile.website}
ADR;TYPE=WORK:;;${profile.address};;;;Bangladesh
PHOTO;ENCODING=BASE64;TYPE=PNG:
 ${photo}
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
  toast.success("Contact download started");
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}