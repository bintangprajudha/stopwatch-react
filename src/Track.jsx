export default function Track({ track }) {
  const list = track.map((t, i) => {
    return <p key={i}>{t}</p>;
  });
  return <div className="tracker">{list}</div>;
}
