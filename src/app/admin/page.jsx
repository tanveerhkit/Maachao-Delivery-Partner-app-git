'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#f7f7fa', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ background: '#FFA500', padding: 16, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: 16 }}>
          <span role="img" aria-label="notifications">🔔</span>
          <span role="img" aria-label="settings">⚙️</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ background: '#fff', padding: 16, borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {['overview', 'agents', 'locations', 'heatmaps', 'payouts', 'penalties'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                background: activeTab === tab ? '#FFA500' : '#f7f7fa',
                color: activeTab === tab ? '#fff' : '#000',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: activeTab === tab ? 'bold' : 'normal'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: 24 }}>
        {activeTab === 'overview' && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16, marginBottom: 24 }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#FFA500' }}>Total Agents</h3>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>1,247</div>
                <div style={{ color: '#1ca672', fontSize: 14 }}>+12% from last week</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#FFA500' }}>Active Orders</h3>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>89</div>
                <div style={{ color: '#1ca672', fontSize: 14 }}>+5% from last hour</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#FFA500' }}>Today's Payout</h3>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>₹2.4M</div>
                <div style={{ color: '#1ca672', fontSize: 14 }}>+8% from yesterday</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#FFA500' }}>Penalties</h3>
                <div style={{ fontSize: 32, fontWeight: 'bold' }}>23</div>
                <div style={{ color: '#d32f2f', fontSize: 14 }}>-3% from last week</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Delivery Agents Management</h2>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0 }}>Agent List</h3>
                <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 'bold' }}>Add New Agent</button>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { id: 1, name: 'Rahul Kumar', status: 'Active', zone: 'Kakadeo', orders: 15, rating: 4.8 },
                  { id: 2, name: 'Amit Singh', status: 'Inactive', zone: 'Adarsh Nagar', orders: 8, rating: 4.5 },
                  { id: 3, name: 'Priya Sharma', status: 'Active', zone: 'Swaroop Nagar', orders: 22, rating: 4.9 },
                  { id: 4, name: 'Vikram Patel', status: 'Active', zone: 'Chawla Market', orders: 18, rating: 4.7 }
                ].map((agent) => (
                  <div key={agent.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{agent.name}</div>
                      <div style={{ fontSize: 14, color: '#888' }}>Zone: {agent.zone}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold' }}>{agent.orders} orders</div>
                      <div style={{ fontSize: 14, color: '#888' }}>★ {agent.rating}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: 4, 
                        fontSize: 12, 
                        fontWeight: 'bold',
                        background: agent.status === 'Active' ? '#1ca672' : '#d32f2f',
                        color: '#fff'
                      }}>
                        {agent.status}
                      </span>
                      <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', fontSize: 12 }}>
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
          <div>
            <h2 style={{ marginBottom: 24 }}>Live Location of Riders</h2>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
              <div style={{ width: '100%', height: 400, background: '#eee', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#888', marginBottom: 16 }}>
                [Map with Live Locations]
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { name: 'Rahul Kumar', location: 'Near Kakadeo Market', eta: '5 min' },
                  { name: 'Amit Singh', location: 'Adarsh Nagar Circle', eta: '8 min' },
                  { name: 'Priya Sharma', location: 'Swaroop Nagar', eta: '3 min' },
                  { name: 'Vikram Patel', location: 'Chawla Market', eta: '12 min' }
                ].map((rider, index) => (
                  <div key={index} style={{ background: '#f7f7fa', borderRadius: 8, padding: 12 }}>
                    <div style={{ fontWeight: 'bold' }}>{rider.name}</div>
                    <div style={{ fontSize: 14, color: '#888' }}>{rider.location}</div>
                    <div style={{ color: '#1ca672', fontSize: 12 }}>ETA: {rider.eta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'heatmaps' && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Delivery Heatmaps</h2>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px' }}>Today</button>
                <button style={{ background: '#f7f7fa', color: '#000', border: 'none', borderRadius: 8, padding: '8px 16px' }}>This Week</button>
                <button style={{ background: '#f7f7fa', color: '#000', border: 'none', borderRadius: 8, padding: '8px 16px' }}>This Month</button>
              </div>
              <div style={{ width: '100%', height: 400, background: '#eee', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#888' }}>
                [Heatmap Visualization]
              </div>
              <div style={{ marginTop: 16 }}>
                <h4>High Activity Zones</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                  {[
                    { zone: 'Kakadeo', orders: 156, growth: '+12%' },
                    { zone: 'Adarsh Nagar', orders: 134, growth: '+8%' },
                    { zone: 'Swaroop Nagar', orders: 98, growth: '+15%' },
                    { zone: 'Chawla Market', orders: 87, growth: '+5%' }
                  ].map((zone, index) => (
                    <div key={index} style={{ background: '#f7f7fa', borderRadius: 8, padding: 12 }}>
                      <div style={{ fontWeight: 'bold' }}>{zone.zone}</div>
                      <div style={{ fontSize: 18, color: '#FFA500' }}>{zone.orders} orders</div>
                      <div style={{ color: '#1ca672', fontSize: 12 }}>{zone.growth}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payouts' && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Daily Payout Management</h2>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0 }}>Payout Reports</h3>
                <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 'bold' }}>Export CSV</button>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { date: '2025-03-22', totalAgents: 1247, totalPayout: '₹2.4M', status: 'Completed' },
                  { date: '2025-03-21', totalAgents: 1234, totalPayout: '₹2.3M', status: 'Completed' },
                  { date: '2025-03-20', totalAgents: 1221, totalPayout: '₹2.2M', status: 'Completed' },
                  { date: '2025-03-19', totalAgents: 1208, totalPayout: '₹2.1M', status: 'Completed' }
                ].map((payout, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{payout.date}</div>
                      <div style={{ fontSize: 14, color: '#888' }}>{payout.totalAgents} agents</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold', color: '#FFA500' }}>{payout.totalPayout}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: 4, 
                        fontSize: 12, 
                        fontWeight: 'bold',
                        background: '#1ca672',
                        color: '#fff'
                      }}>
                        {payout.status}
                      </span>
                      <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', fontSize: 12 }}>
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'penalties' && (
          <div>
            <h2 style={{ marginBottom: 24 }}>Penalty Management</h2>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ margin: 0 }}>Penalty Records</h3>
                <button style={{ background: '#FFA500', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 'bold' }}>Add Penalty</button>
              </div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { agent: 'Rahul Kumar', reason: 'Late Delivery', amount: '₹50', date: '2025-03-22', status: 'Pending' },
                  { agent: 'Amit Singh', reason: 'Wrong Action', amount: '₹100', date: '2025-03-21', status: 'Paid' },
                  { agent: 'Priya Sharma', reason: 'Order Cancellation', amount: '₹75', date: '2025-03-20', status: 'Paid' },
                  { agent: 'Vikram Patel', reason: 'Customer Complaint', amount: '₹25', date: '2025-03-19', status: 'Pending' }
                ].map((penalty, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{penalty.agent}</div>
                      <div style={{ fontSize: 14, color: '#888' }}>{penalty.reason}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold', color: '#d32f2f' }}>{penalty.amount}</div>
                      <div style={{ fontSize: 14, color: '#888' }}>{penalty.date}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: 4, 
                        fontSize: 12, 
                        fontWeight: 'bold',
                        background: penalty.status === 'Paid' ? '#1ca672' : '#FFA500',
                        color: '#fff'
                      }}>
                        {penalty.status}
                      </span>
                      <button style={{ background: penalty.status === 'Paid' ? '#f7f7fa' : '#FFA500', color: penalty.status === 'Paid' ? '#000' : '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', fontSize: 12 }}>
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
    </div>
  );
} 