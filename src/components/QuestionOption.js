/* eslint-disable react/react-in-jsx-scope */
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { pushToUserAnswers, toggleChoice } from '../Redux/optionControllerSlice';



const QuestionOption = () => {
  const dispatch = useDispatch();
  const { optionReducer: { selectedOptions }, questionControllerReducer: { questions, currentQuestionIndex } } = useSelector((state) => (state));

  const OPTIONS = ['A', 'B', 'C', 'D'];
  const OPTION_DATA = OPTIONS.map(option => ({
    value: `option${option}`,
    option,
    optionLabel: questions[currentQuestionIndex][option],
  }));

  const handleChange = (e) => {
    const selectedOption = (e.target.value);
    dispatch(toggleChoice(selectedOption));
    dispatch(pushToUserAnswers(currentQuestionIndex));
  };

  return (
    <FormControl>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={selectedOptions[currentQuestionIndex]}
        onChange={handleChange}
        sx={{ my: 1 }}
      >
        {OPTION_DATA.map(({ value, option, optionLabel }) =>
          <Radio key={value} sx={{ color: 'primary.main' }} value={option} label={optionLabel} />
        )}
      </RadioGroup>
    </FormControl>
  );
}

export default QuestionOption;
