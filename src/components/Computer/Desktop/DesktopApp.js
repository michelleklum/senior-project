function DesktopApp(props) {
  return (
    <div id="desktop-app">
      <img
        src={props.iconSrc}
        className={props.className}
        alt={props.appName}
      />
      <p>{props.appName}</p>
    </div>
  );
}

export default DesktopApp;
