function Source(props) {
  return (
    <a className="grid-icon" href={props.link} target="_blank" rel="noreferrer">
      <img src={props.icon} className={props.name} alt={props.name} />
      <p>{props.name}</p>
    </a>
  );
}

export default Source;
