function Erasure2WinBoxContent() {
  return (
    <div className="custom-winbox-child text">
      <p>Biased Facial Recognition Algorithms:</p>
      <div className="img img-right">
        <p>
          In 2015, MIT grad student and poet of code Joy Buolamwini realized
          that facial recognition systems had trouble detecting her dark-skinned
          face, unless she donned a white face mask à la Guy Fawkes. Her 2018{" "}
          <a
            href="http://proceedings.mlr.press/v81/buolamwini18a/buolamwini18a.pdf"
            target="_blank"
            rel="noreferrer"
          >
            "Gender Shades" paper
          </a>
          , written in collaboration with AI researcher Timnit Gebru, prompted
          companies such as Microsoft, IBM, and Amazon to make their software
          more inclusive.
          <br />
          <br />
          Today, Buolamwini leads the Algorithmic Justice League, which brings
          awareness to the inequities that artificial systems often perpetuate —
          speaking out against such instances of erasure.
          <br />
          <br />
          <a
            href="https://www.poetofcode.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.poetofcode.com/
          </a>
        </p>

        <img
          src={require("../../img/JoyMITMediaLabMaskBlackAndWhite.jpeg")}
          alt="Joy Buolamwini holding a white mask"
          width="35%"
        />
      </div>
    </div>
  );
}

export default Erasure2WinBoxContent;
