'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleContinue = () => {
    router.push('/onboarding');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
      <div style={{ width: 340, marginTop: 80, background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h3>Enter the OTP sent to <span style={{ color: '#FFA500' }}>your number</span></h3>
        <div style={{ display: 'flex', gap: 8, margin: '24px 0' }}>
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              style={{ width: 40, height: 48, fontSize: 24, textAlign: 'center', border: '1px solid #ccc', borderRadius: 8 }}
            />
          ))}
        </div>
        <button
          style={{ width: '100%', padding: 16, background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16 }}
          onClick={handleContinue}
          disabled={otp.some(d => d === '')}
        >
          Continue
        </button>
        <div style={{ marginTop: 16, textAlign: 'center', color: '#888' }}>
          Did not get OTP? Resend OTP in 00:12
        </div>
      </div>
    </div>
  );
} 