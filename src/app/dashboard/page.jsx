'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MaachaoLogo from '../../components/MaachaoLogo';

export default function Dashboard() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);

  const stats = [
    { label: 'Today', earnings: '₹0', hours: '0:00', orders: '0' },
    { label: 'This Week', earnings: '₹0', hours: '0:00', orders: '0' }
  ];

  const quickActions = [
    { icon: '📊', label: 'Earnings', route: '/earnings' },
    { icon: '⏰', label: 'My Shifts', route: '/my-shifts' },
    { icon: '🔔', label: 'Notifications', route: '/notifications' },
    { icon: '⚙️', label: 'More', route: '/more' }
  ];

  return (
    <div className="page-wrapper bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <MaachaoLogo size={40} animated={false} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Maachao</h1>
                <p className="text-sm text-gray-500">Delivery Partner</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isOnline 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {isOnline ? '🟢 Online' : '🔴 Offline'}
              </button>
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors">
                🔔
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Welcome Section */}
          <div className="mb-6 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h2>
            <p className="text-gray-600">Ready to deliver? Let's get started.</p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-2 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="card hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Earnings</span>
                    <span className="font-semibold text-yellow-600">{stat.earnings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Login hours</span>
                    <span className="font-semibold text-gray-900">{stat.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Orders</span>
                    <span className="font-semibold text-gray-900">{stat.orders}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Incentive Banner */}
          <div className="card bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">🎉 Special Offer!</h3>
                <p className="text-gray-700">20% extra per order in Paltan Bazaar</p>
              </div>
              <button className="btn btn-primary text-sm">
                View Details
              </button>
            </div>
          </div>

          {/* Next Order */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Order Near</h3>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Kiranshree Sweets & Snacks</h4>
                <p className="text-sm text-gray-600">Estimated pickup: 5 minutes</p>
              </div>
              <button className="btn btn-secondary text-sm">
                Get Directions
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => router.push(action.route)}
                  className="card text-center hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-2">{action.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">📦</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Order completed</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="text-sm font-semibold text-green-600">+₹45</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">⏰</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Shift started</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="container">
          <div className="bottom-nav-content">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => router.push(action.route)}
                className="bottom-nav-item"
              >
                <span className="text-lg">{action.icon}</span>
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
} 