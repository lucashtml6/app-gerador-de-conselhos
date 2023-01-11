const generateAdviceBtn = document.getElementById('generate-advice-btn');
const textAdvice = document.getElementById('advice');
const textAdviceTitle = document.getElementById('title-advice');

const getSlip = async () => {
  const url = 'https://api.adviceslip.com/advice';
  const res = await fetch(url);
  const json = await res.json();

  return json;
}

const generateNewAdvice = async () => {
  const slip = await getSlip();
  const advice = slip.slip.advice;
  const adviceID = slip.slip.id;

  textAdviceTitle.innerText = `Advice #${adviceID}`;
  textAdvice.innerText = `${advice}`;
}

generateNewAdvice();

generateAdviceBtn.addEventListener('click', () => {
  generateNewAdvice();
});

