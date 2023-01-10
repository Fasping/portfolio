import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Fernando </span>
            originally from sunny{" "}
            <span className="purple"> Barcelona, Spain 🇪🇸 </span>
            since 2019 happily making a new home at
            <span className="purple"> Stockholm, Sweden 🇸🇪 </span>.
            <br />
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by climbing mountains, gaming like there's no tomorrow, and scouring
            the earth for rare vinyls...You could say I'm a collector, but
            instead of stamps or coins, I collect grooves and scratches.
          </p>

          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">Nando</strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <span className="purple"> educational</span> background is rooted in
            <span className="purple"> psychology</span> at UAB in Barcelona. But
            I found myself drawn to technology and coding. So, I decided to
            embark on the ultimate coding journey and attended the IronHack Full
            Stack Web Development <span className="purple"> Bootcamp</span>. And
            now, here I am, <span className="purple"> working </span> as a
            Frontend Developer for and iGaming company, (ComeOn Group) in Sweden.
            When I'm not typing away at my computer, you can find me flexing my
            testing muscles with Jest and Vitest, and slowly but surely, I'm
            becoming a TypeScript Pro! (Well, I'm getting there.) You can find
            more of my work on my GitHub profile.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
