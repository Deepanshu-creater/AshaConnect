import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, Users, Stethoscope, Shield, ArrowRight,
  FileText, Activity, MapPin, Clock
} from 'lucide-react';
import './Intro.css';

const IntroPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users size={36} />,
      title: "Community Health",
      description: "Manage patient records and community healthcare efficiently"
    },
    {
      icon: <Stethoscope size={36} />,
      title: "Remote Monitoring",
      description: "Real-time health tracking and emergency response"
    },
    {
      icon: <Shield size={36} />,
      title: "Family Health",
      description: "Complete family health management system"
    },
    {
      icon: <Activity size={36} />,
      title: "24/7 Support",
      description: "Round-the-clock healthcare access"
    }
  ];

  const handleRoleSelect = (role) => {
    if (role === 'asha') {
      navigate('/asha');
    } else {
      navigate('/patient');
    }
  };

  return (
    <div className="intro-container">
      {/* Header */}
      <header className="intro-header">
        <div className="intro-logo">
          <Heart className="logo-icon" />
          <span className="logo-text">AshaConnect</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="intro-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Transforming Rural Healthcare
            </h1>
            <p className="hero-description">
              Bridging healthcare gaps in rural communities through innovative digital solutions. 
              Empowering ASHA workers and connecting patients with quality medical care.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-title">Platform Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Role Selection */}
        <section className="role-section">
          <div className="role-container">
            <h2 className="role-title">Continue As</h2>
            <div className="role-buttons">
              <button 
                className="role-btn asha-btn"
                onClick={() => handleRoleSelect('asha')}
              >
                <div className="btn-content">
                  <Users size={24} />
                  <div className="btn-text">
                    <span className="btn-title">ASHA Worker</span>
                    <span className="btn-subtitle">Healthcare Professional</span>
                  </div>
                  <ArrowRight size={20} />
                </div>
              </button>
              <button 
                className="role-btn patient-btn"
                onClick={() => handleRoleSelect('patient')}
              >
                <div className="btn-content">
                  <Heart size={24} />
                  <div className="btn-text">
                    <span className="btn-title">Patient</span>
                    <span className="btn-subtitle">Community Member</span>
                  </div>
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="intro-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Heart size={16} />
            <span>AshaConnect</span>
          </div>
          <div className="footer-text">
            Digital Healthcare Platform
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;