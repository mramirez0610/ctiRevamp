import MapDisplay from "../components/map";

export default function About() {
  return (
    <section>
      <h1>About Us</h1>
      <p>
        Since 1997, Climb Time Indy is dedicated to to providing the best that
        rock climbing has to offer. We are focused on maintaining a safe
        environment where climbers of all ability levels and ages can get
        better, learn more and above all else, have fun climbing. Climb Time
        offers a wide range of difficulty levels from very easy to moderate to
        extremely difficult, brought to you by some of the best route setters
        this side of the Mississippi. Routes are changed weekly in order to
        ensure there is always some thing new to challenge yourself with.
        Whether you are looking for powerful bouldering, sustained routes, or
        just a day out with the family, Climb Time Indy has what you are looking
        for. Come on by; we’d love for you to come climbing with us.
      </p>
      <MapDisplay />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{
              backgroundColor: "inherit",
              border: "1px solid",
              margin: "2.5px",
              padding: "2px",
            }}
            onClick={() =>
              window.open("https://www.facebook.com/climbtimeindy")
            }
          >
            Facebook
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              border: "1px solid",
              margin: "2.5px",
              padding: "2px",
            }}
            onClick={() =>
              window.open("https://www.instagram.com/climbtimeindy/")
            }
          >
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
