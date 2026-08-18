import profile from "../data/profile";

function Home() {
  return (
    <main>
      <h1>{profile.name}</h1>

      <h2>{profile.title}</h2>

      <p>{profile.company}</p>

      <p>{profile.tagline}</p>
    </main>
  );
}

export default Home;