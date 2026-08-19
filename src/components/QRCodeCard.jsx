import QRCode from "react-qr-code";
import profile from "../data/profile";

function QRCodeCard() {
  return (
    <section className="qr-card">
      <h3>Scan to Connect</h3>

      <div className="qr-box">
        <QRCode
          value={profile.website}
          size={180}
          bgColor="#ffffff"
          fgColor="#199edc"
          level="H"
        />
      </div>

      <small>{profile.website.replace("https://", "")}</small>
    </section>
  );
}

export default QRCodeCard;