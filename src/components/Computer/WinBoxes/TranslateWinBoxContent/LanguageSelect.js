import "./LanguageSelect.css";

function LanguageSelect(props) {
  return (
    <div id="language-select">
      <select
        name="languages"
        defaultValue={props.lang}
        onChange={(e) => props.setLang(e.target.value)}
      >
        <option
          value="Programmer's Vision"
          disabled={props.otherLang === "Programmer's Vision"}
        >
          Programmer's Vision
        </option>
        <option
          value="High-Level Code"
          disabled={props.otherLang === "High-Level Code"}
        >
          High-Level Code
        </option>
        <option
          value="Assembly Code"
          disabled={props.otherLang === "Assembly Code"}
        >
          Assembly Code
        </option>
        <option
          value="Object Code"
          disabled={props.otherLang === "Object Code"}
        >
          Object Code
        </option>
      </select>
      <div id="custom-select-arrow"></div>
    </div>
  );
}

export default LanguageSelect;
