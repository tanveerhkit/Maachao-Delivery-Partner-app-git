'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MaachaoLogo from '../../components/MaachaoLogo';

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { id: 'english', name: 'English', native: 'English' },
    { id: 'hindi', name: 'हिन्दी', native: 'Hindi' },
    { id: 'marathi', name: 'मराठी', native: 'Marathi' },
    { id: 'kannada', name: 'ಕನ್ನಡ', native: 'Kannada' }
  ];

  const handleContinue = () => {
    router.push('/mobile-entry');
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Maachao</h1>
            <p className="text-gray-600">Delivery Partner App</p>
          </div>

          {/* Language Selection Card */}
          <div className="card shadow-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-semibold text-center mb-6">Select a language to continue</h2>
            
            <div className="grid gap-3 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    selectedLanguage === lang.id
                      ? 'border-yellow-400 bg-yellow-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-yellow-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{lang.name}</div>
                      <div className="text-sm text-gray-500">{lang.native}</div>
                    </div>
                    {selectedLanguage === lang.id && (
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleContinue}
              className="btn btn-primary w-full text-lg font-semibold"
              disabled={!selectedLanguage}
            >
              Continue
            </button>
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