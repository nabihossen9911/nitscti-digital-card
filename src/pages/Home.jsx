import QRCodeCard from "../components/QRCodeCard";
import Footer from "../components/Footer";
import CourseChips from "../components/courseChips";
import "../styles/home.css";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import ActionButtons from "../components/ActionButtons";

function Home() {
  return (
    <main>

      <Header />

      <ProfileCard />

      <ActionButtons />

      <CourseChips />
      
      <QRCodeCard />
      
      <Footer />

    </main>
  );
}

export default Home;