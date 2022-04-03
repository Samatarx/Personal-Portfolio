const bioData = [
  {
    info: "London",
    span: "Frontend Developer",
    info2: "& Engineer.",
  },
  {
    info: "I am a London based",
    span: "Frontend Developer",
    info2: "who uses Angular for work and React in my free time.",
  },
  {
    info: "I help startups build their UIs using JavaScript frameworks",
    span: "like React or Angular.",
    info2: "I am self-taught developer and I am always looking to further develop my skills.",
    span2: "Started learning how to code in July 2020 as a hobby,",
    info3: "now it's my career 💪",
  },
];

function Bio({ colour, size }) {
  if (size >= 3) {
    return null
  }
  return (
    <p>
      {bioData[size].info},{" "}
      <span className={`${colour}`}>{bioData[size].span}</span>{" "}
      {bioData[size].info2}{" "}
      <span className={`${colour}`}>{bioData[size].span2}</span>{" "}
      {bioData[size].info3}
    </p>
  );
}

export default Bio;
