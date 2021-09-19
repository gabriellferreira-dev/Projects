const decode = (questions) => {
  const questionsDecoded = questions.map(
    ({ question, correct_answer, incorrect_answers, category }, i) => {
      const questionDecoded = decodeURIComponent(question);
      const correctAnswerDecoded = decodeURIComponent(correct_answer);
      const incorrectAnswersDecoded = incorrect_answers.map((answer) =>
        decodeURIComponent(answer)
      );
      const categoryDecoded = decodeURIComponent(category);
      return {
        ...questions[i],
        question: questionDecoded,
        correct_answer: correctAnswerDecoded,
        incorrect_answers: incorrectAnswersDecoded,
        category: categoryDecoded,
      };
    }
  );
  return questionsDecoded;
};

export default decode;
