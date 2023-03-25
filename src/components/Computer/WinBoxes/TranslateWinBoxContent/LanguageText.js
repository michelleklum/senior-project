import "./LanguageText.css";

function LanguageText(props) {
  let text;
  // eslint-disable-next-line default-case
  switch (props.lang) {
    case "Programmer's Vision":
      text = "Write a program that does arithmetic on two variables!";
      break;
    case "High-Level Code":
      text =
        "int func(int a, int b) {\n  if (b < 0)\n    return (a + b);\n  else\n    return (a + func(a, b-1));\n}";
      break;
    case "Assembly Code":
      text =
        "func: addi sp,sp,-16\n      sw   ra,12(sp)\n      sw   s0,8(sp)\n      mv   s0,a0\n      add  a0,a1,a0\n      bgez a1,1016c <func+0x28>\n      lw   ra,12(sp)\n      lw   s0,8(sp)\n      addi sp,sp,16\n      ret\n      addi a1,a1,-1\n      mv   a0,s0\n      jal  ra,10144 <func>\n      add  a0,a0,s0\n      j    1015c <func+0x18>";
      break;
    case "Object Code":
      text =
        "ff010113\n00112623\n00812423\n00050413\n00a58533\n0005da63\n00c12083\n00812403\n01010113\n00008067\nfff58593\n00040513\nfd1ff0ef\n00850533\nfe1ff06f";
      break;
  }

  return (
    <div id="language-text">
      <p>{text}</p>
    </div>
  );
}

export default LanguageText;
