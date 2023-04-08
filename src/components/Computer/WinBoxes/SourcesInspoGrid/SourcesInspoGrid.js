import "./SourcesInspoGrid.css";
import Link from "./Link";

function SourcesInspoGrid(props) {
  return (
    <div
      className="custom-winbox-child grid sources-inspo-grid"
      id={props.type === "sources" ? "sources-grid" : "inspo-grid"}
    >
      {props.links.map(([linkName, linkIcon, linkUrl]) => (
        <Link key={linkName} name={linkName} icon={linkIcon} link={linkUrl} />
      ))}
    </div>
  );
}

export default SourcesInspoGrid;
