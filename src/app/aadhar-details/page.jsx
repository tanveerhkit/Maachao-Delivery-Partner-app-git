'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MaachaoLogo from '../../components/MaachaoLogo';

export default function AadharDetails() {
  const router = useRouter();
  const [aadharNumber, setAadharNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleAadharChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 12);
    setAadharNumber(value);
    setIsValid(value.length === 12);
  };

  const formatAadharNumber = (value) => {
    if (value.length <= 4) return value;
    if (value.length <= 8) return `${value.slice(0, 4)} ${value.slice(4)}`;
    return `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(8)}`;
  };

  const handleContinue = () => {
    if (isValid) {
      router.push('/aadhar-otp-verification');
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen flex items-center justify-center p-4">
        <div className="container max-w-sm w-full">
          {/* Logo/Brand Section */}
          <div className="text-center mb-6 fade-in">
            <div className="flex justify-center mb-4">
              <MaachaoLogo size={70} animated={false} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Aadhar Verification</h1>
            <p className="text-gray-600 text-sm">Enter your Aadhar number for verification</p>
          </div>

          {/* Aadhar Details Card */}
          <div className="card shadow-lg fade-in bg-white p-6" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-center mb-6 text-gray-900">
                Enter your <span className="text-yellow-600 font-bold">Aadhar Number</span>
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhar Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formatAadharNumber(aadharNumber)}
                    onChange={handleAadharChange}
                    placeholder="XXXX XXXX XXXX"
                    className="w-full px-4 py-3 text-center text-lg font-bold border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-200 bg-white"
                    style={{ 
                      letterSpacing: '0.5em',
                      fontFamily: 'monospace'
                    }}
                    maxLength={14}
                  />
                </div>
                {aadharNumber.length > 0 && aadharNumber.length < 12 && (
                  <p className="text-sm text-red-500 mt-2">Please enter a valid 12-digit Aadhar number</p>
                )}
                {aadharNumber.length === 12 && (
                  <p className="text-sm text-green-600 mt-2">✓ Valid Aadhar number format</p>
                )}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Important Information:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Your Aadhar number will be used for identity verification</li>
                  <li>• This information is secure and encrypted</li>
                  <li>• You'll receive an OTP on your registered mobile number</li>
                  <li>• This step is mandatory for partner verification</li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                isValid 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 shadow-md hover:shadow-lg' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!isValid}
            >
              Continue
            </button>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4 fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xs text-gray-500">
              Need help? Contact our support team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 