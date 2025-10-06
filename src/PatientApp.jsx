import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FileText, MessageCircle, Bell, Languages, Send, Download, Star, BookOpen,
  User, Shield, Calendar, Activity, Heart, Stethoscope, Book
} from 'lucide-react';
import './PatientApp.css';

const PatientApp = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      message: 'Upcoming General Health Camp on October 10, 2025 - Free checkups and consultations available', 
      time: 'Today', 
      read: false,
      type: 'camp'
    },
    { 
      id: 2, 
      message: 'Vaccination Drive for Seasonal Flu on October 15, 2025 - Bring your vaccination card', 
      time: 'Yesterday', 
      read: false,
      type: 'vaccination'
    },
    { 
      id: 3, 
      message: 'Registration open for COVID-19 Booster Camp - Priority for senior citizens and comorbidities', 
      time: '2 days ago', 
      read: true,
      type: 'alert'
    },
    { 
      id: 4, 
      message: 'Your next routine checkup is scheduled for November 5, 2025 - Please confirm your availability', 
      time: '1 week ago', 
      read: true,
      type: 'appointment'
    }
  ]);
  
  const [healthRecords, setHealthRecords] = useState([
    { 
      date: '2025-09-15', 
      bp: '120/80', 
      sugar: '98 mg/dL', 
      weight: '70kg', 
      height: '172cm',
      temperature: '98.6°F',
      symptoms: 'None reported',
      diagnosis: 'Stable condition, maintain current lifestyle',
      medication: 'Continue prescribed vitamins',
      doctor: 'Dr. Sharma'
    },
    { 
      date: '2025-08-20', 
      bp: '118/78', 
      sugar: '95 mg/dL', 
      weight: '71kg', 
      height: '172cm',
      temperature: '98.4°F',
      symptoms: 'Mild fatigue',
      diagnosis: 'Good progress, improving overall health',
      medication: 'Multivitamins, Iron supplement',
      doctor: 'Dr. Sharma'
    },
    { 
      date: '2025-07-10', 
      bp: '125/82', 
      sugar: '110 mg/dL', 
      weight: '72kg', 
      height: '172cm',
      temperature: '98.8°F',
      symptoms: 'Increased thirst',
      diagnosis: 'Need to monitor blood sugar levels regularly',
      medication: 'Diet control, regular exercise advised',
      doctor: 'Dr. Patel'
    }
  ]);

  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState([
    {
      id: 1,
      rating: 5,
      comment: 'Excellent service from ASHA worker Priya. Very helpful and knowledgeable about my condition.',
      date: '2025-09-10',
      worker: 'Priya Sharma'
    },
    {
      id: 2,
      rating: 4,
      comment: 'Regular follow-ups were very helpful. Could improve on explaining medication side effects.',
      date: '2025-08-25',
      worker: 'Anita Verma'
    }
  ]);

  const [healthLibraryTopics] = useState([
    { id: 1, title: 'Pregnancy Care', content: 'Complete guide for expecting mothers...', category: 'Maternal Health' },
    { id: 2, title: 'Diabetes Management', content: 'Managing blood sugar levels...', category: 'Chronic Care' },
    { id: 3, title: 'Child Nutrition', content: 'Nutrition guide for children...', category: 'Pediatric Care' },
  ]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const handleLogin = () => {
    if (uniqueId.trim() && password.trim()) {
      const mockPatient = {
        id: 1,
        uniqueId,
        name: 'Ramesh Kumar',
        age: 45,
        gender: 'Male',
        location: 'Rural Health Center, Sector 12',
        phone: '+91 98765 43210',
        bloodGroup: 'B+',
        lastVisit: '2025-09-15'
      };
      setUser(mockPatient);
      setActiveTab('records');
    }
  };

  const downloadPDF = () => {
    const records = healthRecords;
    const patientName = user?.name;
    
    const pdfContent = records.map(record => 
      `${record.date}: BP ${record.bp}, Sugar ${record.sugar}, Weight: ${record.weight}, Notes: ${record.diagnosis}`
    ).join('\n');
    
    const pdfWindow = window.open('');
    pdfWindow.document.write(`<h1>Health Records - ${patientName}</h1><pre>${pdfContent}</pre>`);
    pdfWindow.document.close();
  };

  const submitFeedback = () => {
    if (feedbackRating > 0 && feedbackComment.trim()) {
      const newFeedback = {
        id: submittedFeedback.length + 1,
        rating: feedbackRating,
        comment: feedbackComment,
        date: new Date().toLocaleDateString(),
        worker: 'Current ASHA Worker'
      };
      setSubmittedFeedback([newFeedback, ...submittedFeedback]);
      setFeedbackRating(0);
      setFeedbackComment('');
    }
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  if (activeTab === 'login') {
    return (
      <div className="patient-app-theme">
        <div className="patient-login-container">
          <div className="patient-login-card">
            <div className="patient-login-header">
              <div className="patient-login-logo">
                <Heart size={32} className="login-logo-icon" />
                <h1 className="patient-login-title">Chikitsa Patient Portal</h1>
              </div>
              <p className="patient-login-subtitle">Secure access to your health records and healthcare services</p>
            </div>
            
            <div className="patient-language-selector">
              <Languages size={16} />
              <select value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)} className="patient-language-dropdown">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
              </select>
            </div>

            <div className="patient-input-group">
              <div className="patient-input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter your Patient ID"
                  value={uniqueId}
                  onChange={(e) => setUniqueId(e.target.value)}
                  className="patient-login-input"
                  required
                />
              </div>
              <div className="patient-input-wrapper">
                <Shield size={18} className="input-icon" />
                <input 
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="patient-login-input"
                  required
                />
              </div>
            </div>
            
            <button className="patient-login-btn" onClick={handleLogin}>
              <User size={18} />
              Login to Portal
            </button>

            <div className="patient-login-help">
              <p>Don't have an account? Contact your healthcare provider</p>
              <p className="patient-login-security">
                <Shield size={14} />
                Your data is securely encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-app-theme">
      <div className="patient-portal">
        <header className="patient-header">
          <div className="patient-header-content">
            <div className="patient-brand">
              <div className="patient-brand-icon">
                <Activity size={24} />
              </div>
              <div className="patient-brand-text">
                <h1 className="patient-portal-title">Chikitsa Health Portal</h1>
                <p className="patient-welcome">Welcome back, {user?.name}</p>
              </div>
            </div>
            
            <div className="patient-header-actions">
              <div className="patient-language-selector-header">
                <Languages size={18} />
                <select value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)} className="patient-language-dropdown-header">
                  <option value="en">EN</option>
                  <option value="hi">HI</option>
                  <option value="ta">TA</option>
                  <option value="te">TE</option>
                </select>
              </div>
              
              <div className="patient-notification-wrapper">
                <button className="patient-notification-btn" onClick={() => setActiveTab('notifications')}>
                  <Bell size={20} />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="patient-notification-badge">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="patient-main">
          {activeTab === 'records' && (
            <div className="patient-tab-content">
              <div className="patient-tab-header">
                <h2 className="patient-tab-title">
                  <FileText size={24} />
                  Health Records
                </h2>
                <div className="patient-tab-actions">
                  <button className="patient-download-btn" onClick={downloadPDF}>
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>
              </div>
              
              <section className="patient-section">
                <div className="patient-records-list">
                  {healthRecords.map((record, index) => (
                    <div key={index} className="patient-record-card">
                      <div className="patient-record-header">
                        <div className="patient-record-date-section">
                          <Calendar size={16} />
                          <h4 className="patient-record-date">{record.date}</h4>
                          <span className="patient-record-doctor">by {record.doctor}</span>
                        </div>
                        <div className="patient-record-stats">
                          <span className="patient-stat">
                            <Activity size={14} />
                            BP: {record.bp}
                          </span>
                          <span className="patient-stat">
                            <Activity size={14} />
                            Sugar: {record.sugar}
                          </span>
                          <span className="patient-stat">
                            <Activity size={14} />
                            Weight: {record.weight}
                          </span>
                          <span className="patient-stat">
                            <Activity size={14} />
                            Temp: {record.temperature}
                          </span>
                        </div>
                      </div>
                      <div className="patient-record-details">
                        <div className="patient-detail-group">
                          <strong>Symptoms:</strong> {record.symptoms}
                        </div>
                        <div className="patient-detail-group">
                          <strong>Diagnosis:</strong> {record.diagnosis}
                        </div>
                        <div className="patient-detail-group">
                          <strong>Medication:</strong> {record.medication}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="patient-tab-content">
              <div className="patient-tab-header">
                <h2 className="patient-tab-title">
                  <MessageCircle size={24} />
                  ASHA Worker Feedback
                </h2>
              </div>
              
              <section className="patient-section">
                <div className="patient-feedback-form">
                  <div className="patient-form-group">
                    <label className="patient-form-label">Rate the ASHA Worker Service</label>
                    <div className="patient-rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`patient-star ${feedbackRating >= star ? 'patient-star-filled' : ''}`}
                          onClick={() => setFeedbackRating(star)}
                        >
                          <Star size={24} fill={feedbackRating >= star ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                    <div className="patient-rating-labels">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                  
                  <div className="patient-form-group">
                    <label className="patient-form-label">Your Feedback & Suggestions</label>
                    <textarea
                      value={feedbackComment}
                      onChange={(e) => setFeedbackComment(e.target.value)}
                      placeholder="Share your experience with the ASHA worker, suggestions for improvement, or any concerns..."
                      className="patient-form-textarea"
                      rows={4}
                    />
                  </div>
                  
                  <button className="patient-submit-btn" onClick={submitFeedback} disabled={feedbackRating === 0 || !feedbackComment.trim()}>
                    <Send size={18} />
                    Submit Feedback
                  </button>
                </div>
                
                {submittedFeedback.length > 0 && (
                  <div className="patient-submitted-feedback">
                    <h3 className="patient-feedback-title">Your Previous Feedback</h3>
                    {submittedFeedback.map((fb) => (
                      <div key={fb.id} className="patient-feedback-item">
                        <div className="patient-feedback-header">
                          <div className="patient-feedback-rating">
                            {[...Array(fb.rating)].map((_, i) => (
                              <Star key={i} size={16} className="patient-star-filled" fill="currentColor" />
                            ))}
                            <span className="patient-rating-text">{fb.rating}/5</span>
                          </div>
                          <span className="patient-feedback-date">{fb.date}</span>
                        </div>
                        <p className="patient-feedback-comment">{fb.comment}</p>
                        <div className="patient-feedback-worker">
                          <User size={14} />
                          ASHA Worker: {fb.worker}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          )}

          {activeTab === 'library' && (
            <div className="patient-tab-content">
              <div className="patient-tab-header">
                <h2 className="patient-tab-title">
                  <BookOpen size={24} />
                  Health Education Library
                </h2>
              </div>
              <section className="patient-section">
                <div className="featured-video-section">
                  <h3>Official PHC Video</h3>
                  <div className="video-frame">
                    <iframe
                      width="100%"
                      height="315"
                      src='https://www.youtube.com/embed/W3jSiFJpcm0'
                      title="PHC Health Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>Latest video from authorities on health guidelines.</p>
                </div>
                <div className="patient-library-filters">
                  <button className="patient-filter-btn active">All Topics</button>
                  <button className="patient-filter-btn">Maternal Health</button>
                  <button className="patient-filter-btn">Child Care</button>
                  <button className="patient-filter-btn">Chronic Diseases</button>
                </div>
                <div className="patient-library-grid">
                  {healthLibraryTopics.map(topic => (
                    <div key={topic.id} className="patient-library-card">
                      <div className="patient-library-card-header">
                        <div className="patient-topic-category">{topic.category}</div>
                        <Book size={20} className="patient-topic-icon" />
                      </div>
                      <h3>{topic.title}</h3>
                      <p>{topic.content}</p>
                      <button className="patient-btn-primary">{t('readMore') || 'Read More'}</button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="patient-tab-content">
              <div className="patient-tab-header">
                <h2 className="patient-tab-title">
                  <Bell size={24} />
                  Health Alerts & Notifications
                </h2>
              </div>
              
              <section className="patient-section">
                <div className="patient-notifications-list">
                  {notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className={`patient-notification-card patient-notification-${notif.type} ${notif.read ? 'patient-notification-read' : 'patient-notification-unread'}`}
                      onClick={() => markNotificationAsRead(notif.id)}
                    >
                      <div className="patient-notification-icon">
                        {notif.type === 'camp' && <Calendar size={20} />}
                        {notif.type === 'vaccination' && <Activity size={20} />}
                        {notif.type === 'alert' && <Bell size={20} />}
                        {notif.type === 'appointment' && <Stethoscope size={20} />}
                      </div>
                      <div className="patient-notification-content">
                        <p className="patient-notification-message">{notif.message}</p>
                        <span className="patient-notification-time">{notif.time}</span>
                      </div>
                      {!notif.read && <div className="patient-notification-indicator"></div>}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>

        {/* Bottom Navigation */}
        <nav className="patient-bottom-nav">
          <button 
            className={`patient-nav-item ${activeTab === 'records' ? 'patient-nav-active' : ''}`} 
            onClick={() => setActiveTab('records')}
          >
            <FileText size={20} />
            <span>Records</span>
          </button>
          
          <button 
            className={`patient-nav-item ${activeTab === 'feedback' ? 'patient-nav-active' : ''}`} 
            onClick={() => setActiveTab('feedback')}
          >
            <MessageCircle size={20} />
            <span>Feedback</span>
          </button>

          <button 
            className={`patient-nav-item ${activeTab === 'library' ? 'patient-nav-active' : ''}`} 
            onClick={() => setActiveTab('library')}
          >
            <BookOpen size={20} />
            <span>Library</span>
          </button>
          
          <button 
            className={`patient-nav-item ${activeTab === 'notifications' ? 'patient-nav-active' : ''}`} 
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={20} />
            <span>Alerts</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PatientApp;