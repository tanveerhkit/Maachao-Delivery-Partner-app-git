'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MaachaoLogo from '../components/MaachaoLogo';

export default function WelcomeScreen() {
  const [confetti, setConfetti] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  // Generate confetti particles
  useEffect(() => {
    const generateConfetti = () => {
      const particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 3 + 2,
          color: ['#F7C600', '#FFD700', '#FFF89A', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 6)],
          size: Math.random() * 8 + 4,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10
        });
      }
      setConfetti(particles);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate confetti
  useEffect(() => {
    const animateConfetti = () => {
      setConfetti(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          rotation: particle.rotation + particle.rotationSpeed,
          vy: particle.vy + 0.1 // gravity
        })).filter(particle => particle.y < window.innerHeight + 100)
      );
    };

    const animationId = setInterval(animateConfetti, 50);
    return () => clearInterval(animationId);
  }, []);

  const handleGetStarted = () => {
    setIsAnimating(true);
    // Add a burst of confetti on button click
    const burstParticles = [];
    for (let i = 0; i < 30; i++) {
      burstParticles.push({
        id: Date.now() + i,
        x: window.innerWidth / 2,
        y: window.innerHeight - 200,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 10 - 5,
        color: ['#F7C600', '#FFD700', '#FFF89A'][Math.floor(Math.random() * 3)],
        size: Math.random() * 10 + 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15
      });
    }
    setConfetti(prev => [...prev, ...burstParticles]);

    // Navigate to the next screen after animation
    setTimeout(() => {
      router.push('/mobile-entry');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {confetti.map(particle => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            transform: `rotate(${particle.rotation}deg)`,
            opacity: 0.8,
            zIndex: 10
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Logo and Welcome Section */}
        <div className="text-center mb-8 fade-in">
          {/* Maachao Logo */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <MaachaoLogo size={120} animated={true} />
            </div>
            <div className="text-lg text-gray-600 font-medium">Maachao</div>
          </div>

          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Maachao
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Delivery Partner App
          </h2>
          <p className="text-gray-700 text-xl max-w-lg mx-auto leading-relaxed">
            Join our community of delivery partners and start earning today!
          </p>
        </div>

        {/* Festive Elements */}
        <div className="mb-8 flex items-center justify-center gap-6">
          {/* Party Popper Elements */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Flexible Hours</h3>
            <p className="text-sm text-gray-600">Work when you want</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Great Earnings</h3>
            <p className="text-sm text-gray-600">Competitive pay rates</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Easy Orders</h3>
            <p className="text-sm text-gray-600">Simple pickup & delivery</p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="w-full max-w-lg mb-8">
          <button
            onClick={handleGetStarted}
            disabled={isAnimating}
            className={`relative overflow-hidden px-10 py-5 rounded-xl text-xl font-bold shadow-2xl ${
              isAnimating ? 'animate-pulse' : 'hover:scale-105 hover:shadow-3xl'
            } transition-all duration-500 bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-orange-600 w-full`}
            style={{
              boxShadow: '0 8px 25px rgba(255, 165, 0, 0.3)',
              minHeight: '60px'
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              <span className="text-gray-900 font-bold">Get Started</span>
            </span>
            
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-xl blur-xl"></div>
          </button>
          
          <p className="text-center text-base text-gray-700 mt-4 font-medium">
            Join thousands of happy delivery partners
          </p>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-orange-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-60 left-1/4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-60 right-1/4 w-20 h-20 bg-orange-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
} 