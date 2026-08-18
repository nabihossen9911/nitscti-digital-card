import profile from "../data/profile";

function ProfileCard() {
  return (
    <section className="profile-card">

      <h1>{profile.name}</h1>

      <h2>{profile.position}</h2>

      <h3>{profile.company}</h3>

      <p>{profile.tagline}</p>

    </section>
  );
}

export default ProfileCard;