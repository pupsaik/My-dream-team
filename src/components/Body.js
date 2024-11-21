import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/dana's_avatar.jpg"} alt="Daniela Stan" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Daniela Stan</h2>
          <p style={styles.position}>QA Engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/stelmakh_yurii.png"} alt="Stelmakh Yurii" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Stelmakh Yurii</h2>
          <p style={styles.position}>Scrum Master</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/andrii_avatar.jpg"} alt="Andrii Potikha" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andrii Potikha</h2>
          <p style={styles.position}>Product Owner</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/andriy's-photo.png"} alt="Andriy Replianskiy" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Andriy Replianskiy</h2>
          <p style={styles.position}>Full Stack Engineer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/max's_avatar.jpg"} alt="Max Skydanchuk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Max Skydanchuk</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "darkslateblue", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
