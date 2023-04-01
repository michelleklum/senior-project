// Reply module contains the logic for determining the chatbot's response to a given user input.

// TensorFlow.js Universal Sentence Encoder model
// https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder
// require("@tensorflow/tfjs");
// const use = require("@tensorflow-models/universal-sentence-encoder");

// Delays for the amount of time (in milliseconds) specified by delay.
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

const Reply = {
  async getChatbotResponse(userInput) {
    await timeout(500); // 0.5-second delay.

    return userInput;
  },
};
export default Reply;
