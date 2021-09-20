import { translateToPt } from './translateToPt';

export const translateQuestions = async (questions) => {
  const result = await Promise.all(
    questions.map(
      async ({ question, correct_answer, incorrect_answers, category }, i) => {
        const translatedQuestion = await translateToPt(question);
        const translatedCategory = await translateToPt(category);
        const translatedCorrectAnswer = await translateToPt(correct_answer);
        const translatedIncorrectAnswers = await Promise.all(
          incorrect_answers.map(async (answer) => {
            const translated = await translateToPt(answer);
            return translated.text;
          })
        );
        return {
          ...questions[i],
          question: translatedQuestion.text,
          correct_answer: translatedCorrectAnswer.text,
          incorrect_answers: translatedIncorrectAnswers,
          category: translatedCategory.text,
        };
      }
    )
  );
  return result;
};
