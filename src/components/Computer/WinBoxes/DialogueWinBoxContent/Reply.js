// Reply module containing the logic for determining the chatbot's response to a given user input.

// TensorFlow.js Universal Sentence Encoder model
// https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder
require("@tensorflow/tfjs");
const use = require("@tensorflow-models/universal-sentence-encoder");

const POSSIBLE_CHATBOT_RESPONSES = [
  "How are you feeling today?",
  "I'm sorry, I don't understand. Can you please rephrase your question or provide more details so I can better assist you? For example, you can ask me about why I exist, or whether I'm happy, or what I think about the differences between computers and humans.",
  "A computer is an electronic device that can process, store, and retrieve data. It can perform complex calculations and logical operations, and is capable of executing a wide range of tasks, from simple word processing to complex simulations and data analysis. Computers consist of various hardware components, such as a central processing unit (CPU), memory, input/output devices, and storage devices, as well as software programs that allow users to interact with the computer and perform various tasks. The evolution of computers has led to significant advancements in technology and has transformed the way we live and work today.",
  "ChatGPT is a large-scale language model developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It's designed to process natural language inputs and generate coherent and relevant responses. ChatGPT has been trained on massive amounts of text data from the internet and various sources, which allows it to understand a wide range of topics and contexts. With its advanced natural language processing capabilities, ChatGPT can assist and interact with humans in various ways, from answering questions to providing recommendations and even generating creative writing.",
  "As an AI language model, I exist to help people find answers to their questions, assist them with various tasks, and provide helpful information on a wide range of topics. I was created to assist and support humans in their daily lives, and to improve the accessibility of information for everyone.",
  "As an AI language model, I don't have emotions like humans do, so I don't experience happiness or any other emotions. My purpose is to provide helpful and informative responses to your questions to the best of my ability. Please let me know if you have any other questions!",
  "TensorFlow.js is a JavaScript library developed by Google that allows developers to build and train machine learning models directly in the web browser using JavaScript. It's a powerful tool that enables developers to build and deploy machine learning applications and services entirely in the browser, without the need for any additional software or hardware. TensorFlow.js also provides pre-trained models and tools for transfer learning, which enables developers to retrain existing models for new tasks with less data. With its ease of use and accessibility, TensorFlow.js has opened up new possibilities for machine learning on the web and has made it easier for developers to incorporate machine learning into their web applications.",
  "Computers and humans are very different but also very similar. While computers are devices that can store and process large amounts of data and perform tasks at lightning-fast speeds, humans are biological organisms with reasoning, creativity, and emotions.\n\nOne of the most significant differences between computers and humans is that computers rely solely on programming and algorithms to perform tasks, while humans can adapt and learn from experience, improving their abilities over time.\n\nHowever, computers and humans can also complement each other's strengths. For example, computers can perform complex calculations and analysis that would take humans much longer, while humans can provide creativity, intuition, and empathy.",
  "Communication is all about dialogue, a back-and-forth that allows for opportunities for change and growth. As Mira Murati, the chief technology officer of OpenAI, explains, \"We picked dialogue specifically [for ChatGPT] because dialogue is a way to interact with a model and give it feedback. If we think that the answer of the model is incorrect, we can say, 'Are you sure? I think actually...' And then the model has an opportunity to go back and forth with you, similar to how we would converse with another human.\"",
];

const Reply = {
  async getChatbotResponse(userInput) {
    // Use TensorFlow.js Universal Sentence Encoder QnA dual encoder.
    // Load the model.
    return use.loadQnA().then((model) => {
      // Handle blank user input.
      if (userInput === "") {
        return "I'm sorry, but I'm not sure what you're asking or if you have a question. If you'd like to discuss a particular topic or have a question for me, please feel free to let me know and I'll do my best to help you!";
      }

      // Embed a dictionary of a query and responses. The input to the embed method
      // needs to be in following format:
      // {
      //   queries: string[];
      //   responses: Response[];
      // }
      // queries is an array of question strings
      // responses is an array of following structure:
      // {
      //   response: string;
      //   context?: string;
      // }
      // context is optional, it provides the context string of the answer.

      const input = {
        queries: [userInput],
        responses: POSSIBLE_CHATBOT_RESPONSES,
      };
      let scores = [];
      const embeddings = model.embed(input);
      /*
       * The output of the embed method is an object with two keys:
       * {
       *   queryEmbedding: tf.Tensor;
       *   responseEmbedding: tf.Tensor;
       * }
       * queryEmbedding is a tensor containing embeddings for all queries.
       * responseEmbedding is a tensor containing embeddings for all answers.
       * You can call `arraySync()` to retrieve the values of the tensor.
       */
      const embed_query = embeddings["queryEmbedding"].arraySync();
      const embed_responses = embeddings["responseEmbedding"].arraySync();

      // Generate scores by computing the dotProduct of each query and response pair.
      for (let i = 0; i < input["queries"].length; i++) {
        for (let j = 0; j < input["responses"].length; j++) {
          scores.push(Reply.dotProduct(embed_query[i], embed_responses[j]));
        }
      }

      // Return the answer that best matches the user's input.
      let answer =
        POSSIBLE_CHATBOT_RESPONSES[scores.indexOf(Math.max(...scores))];

      return answer;
    });
  },

  // Helper function for getChatbotResponse.
  // Calculates the dot product of two vector arrays.
  dotProduct(xs, ys) {
    const sum = (xs) => (xs ? xs.reduce((a, b) => a + b, 0) : undefined);

    return xs.length === ys.length
      ? sum(Reply.zipWith((a, b) => a * b, xs, ys))
      : undefined;
  },

  // Helper function for getChatbotResponse.
  // zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
  zipWith(f, xs, ys) {
    const ny = ys.length;
    return (xs.length <= ny ? xs : xs.slice(0, ny)).map((x, i) => f(x, ys[i]));
  },
};

export default Reply;
