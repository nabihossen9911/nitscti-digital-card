import CourseChips from "../components/CourseChips";
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

    </main>
  );
}

export default Home;