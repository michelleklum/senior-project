import "./JPGWinBoxContent.css";

function JPGWinBoxContent(props) {
  return (
    <div id="jpg-winbox-content" className="custom-winbox-child">
      <img src={props.src} alt={props.alt} width="100%" />
      <p>{props.caption}</p>
    </div>
  );
}

export default JPGWinBoxContent;
