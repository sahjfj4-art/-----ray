
import React, { useState, useEffect } from 'react';
import Marketplace from './components/Marketplace';
import Dashboard from './components/Dashboard';
import { ViewState } from './types';
import { BusinessType } from './components/dashboard/config';
import { ThemeProvider } from './components/common/ThemeContext';
import { RAY_DESIGN_SYSTEM, rayUtils } from './components/common/DesignSystem';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.MARKETPLACE);
  const [selectedBusinessType, setSelectedBusinessType] = useState<BusinessType>('restaurant');
  const [isAdmin, setIsAdmin] = useState(false);

  // Splash Screen Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMerchantEntry = (type: string = 'restaurant', admin: boolean = false) => {
    setSelectedBusinessType(type as BusinessType);
    setIsAdmin(admin);
    setCurrentView(ViewState.DASHBOARD);
  };

  // Handle admin login
  const handleAdminLogin = () => {
    setIsAdmin(true);
    setSelectedBusinessType('admin');
    setCurrentView(ViewState.DASHBOARD);
  };

  if (isLoading) {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 flex-col"
        style={{ backgroundColor: RAY_DESIGN_SYSTEM.colors.primary[500] }}
      >
        <div 
          className="w-24 h-24 rounded-3xl flex items-center justify-center animate-bounce"
          style={{ 
            backgroundColor: RAY_DESIGN_SYSTEM.colors.secondary[500],
            boxShadow: RAY_DESIGN_SYSTEM.shadows.ray
          }}
        >
          <span 
            className="text-6xl font-black"
            style={{ color: RAY_DESIGN_SYSTEM.colors.primary[500] }}
          >
            R
          </span>
        </div>
        <h1 
          className="text-3xl font-black mt-6 tracking-wider animate-pulse"
          style={{ color: 'white' }}
        >
          RAY
        </h1>
        <p className="text-blue-200 mt-2 text-sm font-medium">نور طريق نجاحك</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      {currentView === ViewState.MARKETPLACE && (
        <Marketplace onMerchantClick={handleMerchantEntry} onAdminLogin={handleAdminLogin} />
      )}
      {currentView === ViewState.DASHBOARD && (
        <Dashboard 
          initialType={selectedBusinessType} 
          isAdmin={isAdmin}
          onLogout={() => {
            setCurrentView(ViewState.MARKETPLACE);
            setIsAdmin(false);
          }} 
        />
      )}
    </ThemeProvider>
  );
};

export default App;
