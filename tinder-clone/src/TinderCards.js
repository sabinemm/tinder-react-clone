import React from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = React.useState([
    {
      name: "Steve",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/1200px-Steve_Jobs_Headshot_2010-CROP.jpg",
    },
    {
      name: "mark",
      url:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_962120488_200014382000928098_434049.jpg",
    },
  ]);
  return (
    <div>
      <h1>tinder cards</h1>

      {people.map((person) => (
        <TinderCard>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
