import React from 'react';

const PasswordRegex = ({ capsLetterFlag, numberFlag, passLengthFlag, specialCharFlag }) => {
    return (
        <div>
            <p className={capsLetterFlag}>Must contain 1 Capital Letter</p>
            <p className={numberFlag}>Must contain number</p>
            <p className={passLengthFlag}>Must be 8 Chars Long</p>
            <p className={specialCharFlag}>Must contain special character</p>
        </div>
    );
}

export default PasswordRegex;
