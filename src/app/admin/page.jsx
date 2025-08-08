'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Agents', value: '1,247', change: '+12%', changeType: 'positive' },
    { label: 'Active Orders', value: '89', change: '+5%', changeType: 'positive' },
    { label: "Today's Payout", value: '₹2.4M', change: '+8%', changeType: 'positive' },
    { label: 'Penalties', value: '23', change: '-3%', changeType: 'negative' }
  ];

  const agents = [
    { id: 1, name: 'Rahul Kumar', status: 'Active', zone: 'Kakadeo', orders: 15, rating: 4.8 },
    { id: 2, name: 'Amit Singh', status: 'Inactive', zone: 'Adarsh Nagar', orders: 8, rating: 4.5 },
    { id: 3, name: 'Priya Sharma', status: 'Active', zone: 'Swaroop Nagar', orders: 22, rating: 4.9 },
    { id: 4, name: 'Vikram Patel', status: 'Active', zone: 'Chawla Market', orders: 18, rating: 4.7 }
  ];

  const riders = [
    { name: 'Rahul Kumar', location: 'Near Kakadeo Market', eta: '5 min' },
    { name: 'Amit Singh', location: 'Adarsh Nagar Circle', eta: '8 min' },
    { name: 'Priya Sharma', location: 'Swaroop Nagar', eta: '3 min' },
    { name: 'Vikram Patel', location: 'Chawla Market', eta: '12 min' }
  ];

  const zones = [
    { zone: 'Kakadeo', orders: 156, growth: '+12%' },
    { zone: 'Adarsh Nagar', orders: 134, growth: '+8%' },
    { zone: 'Swaroop Nagar', orders: 98, growth: '+15%' },
    { zone: 'Chawla Market', orders: 87, growth: '+5%' }
  ];

  const payouts = [
    { date: '2025-03-22', totalAgents: 1247, totalPayout: '₹2.4M', status: 'Completed' },
    { date: '2025-03-21', totalAgents: 1234, totalPayout: '₹2.3M', status: 'Completed' },
    { date: '2025-03-20', totalAgents: 1221, totalPayout: '₹2.2M', status: 'Completed' },
    { date: '2025-03-19', totalAgents: 1208, totalPayout: '₹2.1M', status: 'Completed' }
  ];

  const penalties = [
    { agent: 'Rahul Kumar', reason: 'Late Delivery', amount: '₹50', date: '2025-03-22', status: 'Pending' },
    { agent: 'Amit Singh', reason: 'Wrong Action', amount: '₹100', date: '2025-03-21', status: 'Paid' },
    { agent: 'Priya Sharma', reason: 'Order Cancellation', amount: '₹75', date: '2025-03-20', status: 'Paid' },
    { agent: 'Vikram Patel', reason: 'Customer Complaint', amount: '₹25', date: '2025-03-19', status: 'Pending' }
  ];

  return (
    <div className="page-wrapper bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Maachao Delivery Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors">
                🔔
              </button>
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors">
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'agents', label: 'Agents' },
              { id: 'locations', label: 'Locations' },
              { id: 'heatmaps', label: 'Heatmaps' },
              { id: 'payouts', label: 'Payouts' },
              { id: 'penalties', label: 'Penalties' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="grid grid-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="card hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.label}</h3>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last week
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Delivery Agents Management</h2>
                <button className="btn btn-primary">
                  Add New Agent
                </button>
              </div>
              
              <div className="card">
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <div key={agent.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{agent.name}</div>
                        <div className="text-sm text-gray-600">Zone: {agent.zone}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{agent.orders} orders</div>
                        <div className="text-sm text-gray-600">★ {agent.rating}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`badge ${
                          agent.status === 'Active' ? 'badge-success' : 'badge-error'
                        }`}>
                          {agent.status}
                        </span>
                        <button className="btn btn-secondary text-sm">
                          {agent.status === 'Active' ? 'Unassign' : 'Assign'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'locations' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Location of Riders</h2>
              <div className="card mb-6">
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <div className="text-xl font-semibold text-gray-600">Map with Live Locations</div>
                  </div>
                </div>
                
                <div className="grid grid-2 gap-4">
                  {riders.map((rider, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-900">{rider.name}</div>
                      <div className="text-sm text-gray-600">{rider.location}</div>
                      <div className="text-sm text-green-600 font-medium">ETA: {rider.eta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'heatmaps' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Heatmaps</h2>
              <div className="card">
                <div className="flex gap-4 mb-6">
                  <button className="btn btn-primary">Today</button>
                  <button className="btn btn-ghost">This Week</button>
                  <button className="btn btn-ghost">This Month</button>
                </div>
                
                <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔥</div>
                    <div className="text-xl font-semibold text-gray-600">Heatmap Visualization</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">High Activity Zones</h4>
                  <div className="grid grid-2 gap-4">
                    {zones.map((zone, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="font-semibold text-gray-900">{zone.zone}</div>
                        <div className="text-lg font-bold text-yellow-600">{zone.orders} orders</div>
                        <div className="text-sm text-green-600">{zone.growth}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payouts' && (
            <div className="fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Daily Payout Management</h2>
                <button className="btn btn-primary">Export CSV</button>
              </div>
              
              <div className="card">
                <div className="space-y-4">
                  {payouts.map((payout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{payout.date}</div>
                        <div className="text-sm text-gray-600">{payout.totalAgents} agents</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-yellow-600">{payout.totalPayout}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="badge badge-success">{payout.status}</span>
                        <button className="btn btn-secondary text-sm">Download</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'penalties' && (
            <div className="fade-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Penalty Management</h2>
                <button className="btn btn-primary">Add Penalty</button>
              </div>
              
              <div className="card">
                <div className="space-y-4">
                  {penalties.map((penalty, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{penalty.agent}</div>
                        <div className="text-sm text-gray-600">{penalty.reason}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-red-600">{penalty.amount}</div>
                        <div className="text-sm text-gray-600">{penalty.date}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`badge ${
                          penalty.status === 'Paid' ? 'badge-success' : 'badge-primary'
                        }`}>
                          {penalty.status}
                        </span>
                        <button className={`btn text-sm ${
                          penalty.status === 'Paid' ? 'btn-ghost' : 'btn-secondary'
                        }`}>
                          {penalty.status === 'Paid' ? 'View' : 'Mark Paid'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 