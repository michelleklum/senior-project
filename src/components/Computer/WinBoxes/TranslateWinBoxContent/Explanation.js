import React, { useState } from "react";
import "./Explanation.css";
import ExplanationSlide from "./ExplanationSlide";

function Explanation() {
  const [slideNum, setSlideNum] = useState(0);

  const minSlideNum = 0;
  const maxSlideNum = 5;
  const slides = [
    {
      title: "Compilation",
      text:
        "Compilation is the process of transforming high-level code written by humans into a machine-readable code of 1's and 0's.\n\nHere are the steps involved in this translation process:\n\n1. High-level code is compiled into assembly code." +
        "\n2. That assembly code is then assembled into object code." +
        "\n3. Finally, many object code files are linked together into an executable file that can be run once loaded into memory.",
    },
    {
      title: "High-Level Code",
      text: "High-level code is what you typically think of when you think of programming. It's the (relatively) human-readable functions written in C (like the func function shown in the example above), classes defined in Java, for loops written in Python, and so on.",
    },
    {
      title: "Assembly Code",
      text:
        'Assembly code breaks that high-level code down into individual instructions. For example, here, "add a0,a1,a0" is an instruction that adds a0 and a1, and puts that result back in a0. This stands in for the "a + b" arithmetic found in the high-level code.' +
        "\n\nAssembly brings us closer to the machine, but it's still not understandable to computers.",
    },
    {
      title: "Object Code",
      text:
        "For that, we need object code, also known as machine code. Object code is a machine-readable binary format consisting of 1's and 0's—the bits underlying our everyday interactions with our computers. The bit is the smallest unit of computation; a single bit can either have a value of 1 or 0. And that's why we say that computing is just all 1's and 0's!" +
        "\n\nNote that the object code sample shown above actually employs a compressed version of bits: hexadecimal, where 1 hex digit consists of 4 bits." +
        "\n\nHexadecimal is a base-16 numbering system, where digits go from 0 to F, with A being equivalent to the decimal number 10 (which is equivalent to the binary number 1010), and F being equivalent to the decimal number 15 (which is equivalent to the binary number 1111)." +
        "\n\nSo, in our example above, the 8-digit hex code instruction 00a58533 is equivalent to the 32-bit binary number 00000000101001011000010100110011, since a hex value of 0 represents the binary number 0000, a hex value of a represents the binary number 1010, a hex value of 5 represents the binary number 0101, a hex value of 8 represents the binary number 1000, and a hex value of 3 represents the binary number 0011." +
        '\n\nEach line of object code maps directly to a line of assembly. So, here, the machine code instruction 00a58533 maps directly to the assembly code instruction "add a0,a1,a0".',
    },
    {
      title: "Morse Code",
      text:
        "Because machines cannot understand the high-level code a programmer writes, or even the instruction-level assembly code that that high-level code is compiled into, we see here that computers lack fundamental understanding." +
        '\n\nDespite the metaphors that attempt to abstract away the underlying bits, "all that you see on your computer screen—your Tomb Raider, your digitized voice mail messages, faxes, and word processing documents written in thirty-seven different typefaces—is still, from the computer\'s point of view, just like telegrams" (Stephenson 6).' +
        "\n\nTo your machine, it's all still just Morse code: dots separated by long dashes, pauses, and periods of silence.",
    },
    {
      title: "Intention",
      text:
        "And technical processes aside, the crucial first step is for the programmer to translate the intention in their mind, along with all prior knowledge, experience, and biases, into words and phrases. That vision might start as pseudocode before eventually becoming high-level source code." +
        "\n\nAs Neal Stephenson recalls about his experience programming as a high schooler in the 1970s:" +
        '\n\n"...my interaction with the computer was of an extremely formal nature, being sharply divided up into different phases, viz.: (1) sitting at home with paper and pencil, miles and miles from any computer, I would think very, very hard about what I wanted the computer to do, and translate my intentions into a computer language—a series of alphanumeric symbols on a page. (2) I would carry this across a sort of informational cordon sanitaire (three miles of snowdrifts) to school and type those letters into a machine—not a computer—which would convert the symbols into binary numbers and record them visibly on a tape. (3) Then, through the rubber-cup modem, I would cause those numbers to be sent to the university mainframe, which would (4) do arithmetic on them and send different numbers back to the teletype. (5) The teletype would convert these numbers back into letters and hammer them out on a page and (6) I, watching, would construe the letters as meaningful symbols."' +
        "\n\n-- from page 5 of In the Beginning… Was the Command Line",
    },
  ];

  return (
    <div id="explanation">
      <p id="explanation-header">
        <b>
          How does a program go from a thought in a programmer's mind to
          something interpretable by machines?
        </b>
      </p>
      <ExplanationSlide
        title={slides[slideNum].title}
        text={slides[slideNum].text}
        slideNum={slideNum}
        setSlideNum={setSlideNum}
        minSlideNum={minSlideNum}
        maxSlideNum={maxSlideNum}
      />
    </div>
  );
}

export default Explanation;
