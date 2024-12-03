import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';


const OTPInput = ({length = 4, onOTPSubmit=(() =>{})}) => {
    const [otp, setOTP] = useState(new Array(length).fill(""));
    

    const handleChange = ()=>{}
    const handleClick = ()=>{}
    const handleKeyDown = ()=>{}

    return (
        otp.map((value, index) => {
            return <input key={index} type="text" value={value}
            onChange={(e)=> handleChange(index, e)}
                onClick={()=>handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='otpInput'
            />;
        })
    );
}