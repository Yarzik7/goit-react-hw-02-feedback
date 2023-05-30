import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedback}>
      {options.map(feedback => (
        <button
          key={feedback}
          className={css.button}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback.replace(/^[a-z]/, char => char.toUpperCase())}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
