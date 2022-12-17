import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// button styles and sizes which are declared in the button.css
const Styles = ['btn--plain', 'btn--outline'];
const Sizes = ['btn--default', 'btn--L'];



export const Button = ({
    // parameters inputted into button function
    iter,
    whenClicked,
    type,
    buttonStyle,
    buttonSize
}) => {
    // checks to see what style of the button was given and if not the primary is picked
    const whatButtonStyle = Styles.includes(buttonStyle) ? buttonStyle: Styles[0];
    const whatButtonSize = Sizes.includes(buttonSize) ? buttonSize: Sizes[0];
  return (
    <Link to='/donate' className='btn-mobile'>
        <button className={`btn ${whatButtonStyle} ${whatButtonSize}`}
        whenClicked = {whenClicked}
        type={type}
        >
            {iter}
        </button>
    </Link>
  )
};
