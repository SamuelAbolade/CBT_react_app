/* eslint-disable react/react-in-jsx-scope */
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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
    <FormControl variant="standard">
      <FormLabel></FormLabel>
        <RadioGroup
          name="question-option"
          value={selectedOptions[currentQuestionIndex]}
          aria-labelledby="options"
          onChange={handleChange}
          sx={{ my: 1 }}
        >
          {OPTION_DATA.map(({ value, option, optionLabel }) =>
            <FormControlLabel key={value} sx={{}} control={<Radio />} value={option} label={optionLabel} />
          )}
        </RadioGroup>
    </FormControl>
  );
}

export default QuestionOption;
