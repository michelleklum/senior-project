function ExplanationSlide(props) {
  return (
    <div className="explanation-slide">
      <button
        className={
          props.slideNum > props.minSlideNum
            ? "explanation-slide-button-left"
            : undefined
        }
        onClick={() =>
          props.slideNum > props.minSlideNum &&
          props.setSlideNum(props.slideNum - 1)
        }
      >
        {props.slideNum > props.minSlideNum ? (
          <i className="fas fa-chevron-left"></i>
        ) : undefined}
      </button>
      <div className="explanation-text-group">
        <p className="explanation-title">{props.title}</p>
        <p className="explanation-text">{props.text}</p>
      </div>
      <button
        className={
          props.slideNum < props.maxSlideNum
            ? "explanation-slide-button-right"
            : undefined
        }
        onClick={() =>
          props.slideNum < props.maxSlideNum &&
          props.setSlideNum(props.slideNum + 1)
        }
      >
        {props.slideNum < props.maxSlideNum ? (
          <i className="fas fa-chevron-right"></i>
        ) : undefined}
      </button>
    </div>
  );
}

export default ExplanationSlide;
