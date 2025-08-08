'use client';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import MaachaoLogo from '../../components/MaachaoLogo';

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isComplete, setIsComplete] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Move to next input
    if (value && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 100);
    }
    
    // Check if OTP is complete
    const isComplete = newOtp.every(digit => digit !== '');
    setIsComplete(isComplete);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    if (isComplete) {
      router.push('/onboarding');
    }
  };

  const handleResend = () => {
    setCountdown(30);
    // Here you would typically trigger resend OTP
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen flex items-center justify-center p-4">
        <div className="container max-w-sm w-full">
          {/* Logo/Brand Section */}
          <div className="text-center mb-4 fade-in">
            <div className="flex justify-center mb-3">
              <MaachaoLogo size={60} animated={false} />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">Verify Your Number</h1>
            <p className="text-gray-600 text-xs">Enter the 6-digit code sent to your mobile</p>
          </div>

          {/* OTP Verification Card */}
          <div className="card shadow-lg fade-in bg-white p-4" style={{ animationDelay: '0.2s' }}>
            <div className="mb-3">
              <h2 className="text-base font-semibold text-center mb-3 text-gray-900">
                Enter the OTP sent to <span className="text-yellow-600 font-bold">your number</span>
              </h2>
              
              <div className="flex justify-center items-center gap-2 mb-3 px-4">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={el => inputRefs.current[idx] = el}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleChange(idx, e.target.value)}
                    onKeyDown={e => handleKeyDown(idx, e)}
                    onFocus={() => inputRefs.current[idx]?.select()}
                    className={`w-8 h-10 text-center text-sm font-bold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-white otp-input ${
                      digit ? 'border-yellow-400 bg-yellow-50' : 'border-gray-300'
                    }`}
                    style={{ 
                      minHeight: '40px',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      width: '40px',
                      height: '40px'
                    }}
                  />
                ))}
              </div>

              <div className="text-center mb-3">
                <p className="text-xs text-gray-500 mb-1">
                  Didn't receive the code?
                </p>
                <button
                  onClick={handleResend}
                  disabled={countdown > 0}
                  className={`text-xs font-medium transition-colors duration-200 px-3 py-1 rounded-md border ${
                    countdown > 0 
                      ? 'text-gray-400 cursor-not-allowed border-gray-300' 
                      : 'text-yellow-600 hover:text-yellow-700 border-yellow-400 hover:bg-yellow-50'
                  }`}
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : 'Resend OTP'}
                </button>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className={`w-full py-2 px-4 rounded-lg text-base font-semibold transition-all duration-300 ${
                isComplete 
                  ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-md hover:shadow-lg' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!isComplete}
            >
              Continue
            </button>

            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-3 fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-gray-500">
              Need help? Contact our support team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 