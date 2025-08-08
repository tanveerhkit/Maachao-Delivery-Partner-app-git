'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MaachaoLogo from '../../components/MaachaoLogo';

export default function MobileEntry() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setMobile(value);
    setIsValid(value.length === 10);
  };

  const handleContinue = () => {
    if (isValid) {
      router.push('/otp-verification');
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen flex items-center justify-center p-4">
        <div className="container max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8 fade-in">
            <div className="flex justify-center mb-6">
              <MaachaoLogo size={80} animated={false} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Enter your mobile number to get started</p>
          </div>

          {/* Mobile Entry Card */}
          <div className="card shadow-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg">+91</span>
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={handleMobileChange}
                  placeholder="Enter your 10 digit mobile number"
                  className="input pl-12 text-lg"
                  maxLength={10}
                />
              </div>
              {mobile.length > 0 && mobile.length < 10 && (
                <p className="text-sm text-red-500 mt-1">Please enter a valid 10-digit number</p>
              )}
            </div>

            <button
              onClick={handleContinue}
              className={`btn w-full text-lg font-semibold transition-all duration-300 ${
                isValid 
                  ? 'btn-primary' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!isValid}
            >
              Get Started
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                We'll send you a verification code via SMS
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 