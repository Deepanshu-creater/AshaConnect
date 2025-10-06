import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Phone, MapPin, User, Send, Camera, Video, Mic, FileText, X, Download, Trash2, Paperclip } from 'lucide-react';
import './EmergencyApp.css';

const EmergencyTab = ({ patients = [], emergencyRequests = [], setEmergencyRequests }) => {
  const [emergencyShowEmergencyForm, setEmergencyShowEmergencyForm] = useState(false);
  const [emergencySelectedPatient, setEmergencySelectedPatient] = useState(null);
  const [emergencyForm, setEmergencyForm] = useState({
    patientId: '',
    priority: 'high',
    type: 'general',
    description: '',
    symptoms: '',
    vitalSigns: {
      bp: '',
      pulse: '',
      temperature: '',
      oxygen: ''
    },
    attachments: [],
    urgencyLevel: 'critical',
    requestedAction: 'immediate_consultation'
  });
  const [emergencyIsRecording, setEmergencyIsRecording] = useState(false);
  const [emergencyRecordingTime, setEmergencyRecordingTime] = useState(0);
  
  const navigate = useNavigate();

  // Default data in case props are not provided
  const emergencyPhcWorkers = [
    { id: 1, name: 'Dr. Sharma', specialization: 'General Physician', available: true },
    { id: 2, name: 'Dr. Patel', specialization: 'Gynecologist', available: true },
    { id: 3, name: 'Dr. Kumar', specialization: 'Pediatrician', available: false },
    { id: 4, name: 'Dr. Gupta', specialization: 'Cardiologist', available: true }
  ];

  // Safe access to emergencyRequests
  const safeEmergencyRequests = emergencyRequests || [];
  const safePatients = patients || [];

  const emergencyHandleAttachment = (type) => {
    const emergencyNewAttachment = {
      id: Date.now(),
      type: type,
      name: `${type}_${Date.now()}`,
      url: '#',
      timestamp: new Date().toLocaleTimeString()
    };
  
    setEmergencyForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, emergencyNewAttachment]
    }));
  };

  const emergencyRemoveAttachment = (attachmentId) => {
    setEmergencyForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter(att => att.id !== attachmentId)
    }));
  };

  const emergencyStartRecording = () => {
    setEmergencyIsRecording(true);
    setEmergencyRecordingTime(0);
    const emergencyInterval = setInterval(() => {
      setEmergencyRecordingTime(prev => prev + 1);
    }, 1000);
  
    window.emergencyRecordingInterval = emergencyInterval;
  };

  const emergencyStopRecording = () => {
    setEmergencyIsRecording(false);
    clearInterval(window.emergencyRecordingInterval);
  
    if (emergencyRecordingTime > 0) {
      emergencyHandleAttachment('audio');
    }
  };

  const emergencyHandleSubmitEmergency = () => {
    if (!emergencyForm.patientId || !emergencyForm.description) {
      alert('Please select a patient and provide description');
      return;
    }
    
    const emergencyPatient = safePatients.find(p => p.id === parseInt(emergencyForm.patientId));
  
    const emergencyNewEmergency = {
      id: Date.now(),
      patientId: emergencyForm.patientId,
      patient: emergencyPatient?.name || 'Unknown Patient',
      type: emergencyForm.type,
      priority: emergencyForm.priority,
      description: emergencyForm.description,
      symptoms: emergencyForm.symptoms,
      vitalSigns: emergencyForm.vitalSigns,
      attachments: emergencyForm.attachments,
      urgencyLevel: emergencyForm.urgencyLevel,
      requestedAction: emergencyForm.requestedAction,
      status: 'pending',
      timestamp: new Date().toISOString(),
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
    
    // Safe update of emergency requests
    if (setEmergencyRequests) {
      setEmergencyRequests([emergencyNewEmergency, ...safeEmergencyRequests]);
    }
    
    setEmergencyShowEmergencyForm(false);
    setEmergencyForm({
      patientId: '',
      priority: 'high',
      type: 'general',
      description: '',
      symptoms: '',
      vitalSigns: {
        bp: '',
        pulse: '',
        temperature: '',
        oxygen: ''
      },
      attachments: [],
      urgencyLevel: 'critical',
      requestedAction: 'immediate_consultation'
    });
  
    alert('Emergency request sent to PHC workers successfully!');
  };

  const emergencyFormatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate stats safely
  const totalRequests = safeEmergencyRequests.length;
  const pendingRequests = safeEmergencyRequests.filter(req => req.status === 'pending').length;
  const respondedRequests = safeEmergencyRequests.filter(req => req.status === 'responded').length;
  const availableDoctorsCount = emergencyPhcWorkers.filter(w => w.available).length;

  return (
    <div className="emergency-tab-content">
      <div className="emergency-header-section">
        <div className="emergency-header">
          <h2 className="emergency-title">Emergency Assistance</h2>
          <p className="emergency-subtitle">Send critical patient cases to PHC workers for immediate help</p>
        </div>
        <button
          className="emergency-alert-btn"
          onClick={() => setEmergencyShowEmergencyForm(true)}
        >
          <AlertTriangle size={20} />
          Create Emergency Request
        </button>
      </div>
      
      {emergencyShowEmergencyForm && (
        <div className="emergency-modal-overlay">
          <div className="emergency-modal">
            <div className="emergency-modal-header">
              <h3 className="emergency-modal-title">Create Emergency Request</h3>
              <button
                className="emergency-close-btn"
                onClick={() => setEmergencyShowEmergencyForm(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="emergency-form">
              <div className="emergency-form-section">
                <h4 className="emergency-form-section-title">Patient Information</h4>
                <div className="emergency-form-grid">
                  <div className="emergency-form-group">
                    <label className="emergency-form-label">Select Patient *</label>
                    <select
                      value={emergencyForm.patientId}
                      onChange={(e) => setEmergencyForm(prev => ({ ...prev, patientId: e.target.value }))}
                      className="emergency-form-select"
                      required
                    >
                      <option value="">Choose a patient</option>
                      {safePatients.map(patient => (
                        <option key={patient.id} value={patient.id}>
                          {patient.name} ({patient.uniqueId}) - {patient.conditions?.[0]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="emergency-form-group">
                    <label className="emergency-form-label">Urgency Level *</label>
                    <select
                      value={emergencyForm.urgencyLevel}
                      onChange={(e) => setEmergencyForm(prev => ({ ...prev, urgencyLevel: e.target.value }))}
                      className="emergency-form-select"
                    >
                      <option value="critical">Critical - Immediate Attention</option>
                      <option value="urgent">Urgent - Within 1-2 hours</option>
                      <option value="high">High Priority - Today</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="emergency-form-section">
                <h4 className="emergency-form-section-title">Emergency Details</h4>
                <div className="emergency-form-grid">
                  <div className="emergency-form-group">
                    <label className="emergency-form-label">Emergency Type</label>
                    <select
                      value={emergencyForm.type}
                      onChange={(e) => setEmergencyForm(prev => ({ ...prev, type: e.target.value }))}
                      className="emergency-form-select"
                    >
                      <option value="general">General Emergency</option>
                      <option value="cardiac">Cardiac Issue</option>
                      <option value="respiratory">Respiratory Distress</option>
                      <option value="neurological">Neurological Symptoms</option>
                      <option value="obstetric">Pregnancy Related</option>
                      <option value="pediatric">Child Emergency</option>
                      <option value="trauma">Injury/Trauma</option>
                    </select>
                  </div>
                  <div className="emergency-form-group">
                    <label className="emergency-form-label">Requested Action</label>
                    <select
                      value={emergencyForm.requestedAction}
                      onChange={(e) => setEmergencyForm(prev => ({ ...prev, requestedAction: e.target.value }))}
                      className="emergency-form-select"
                    >
                      <option value="immediate_consultation">Immediate Consultation</option>
                      <option value="hospital_admission">Hospital Admission</option>
                      <option value="specialist_referral">Specialist Referral</option>
                      <option value="diagnostic_tests">Diagnostic Tests</option>
                      <option value="medication_review">Medication Review</option>
                    </select>
                  </div>
                </div>
                <div className="emergency-form-group">
                  <label className="emergency-form-label">Symptoms Description *</label>
                  <textarea
                    value={emergencyForm.symptoms}
                    onChange={(e) => setEmergencyForm(prev => ({ ...prev, symptoms: e.target.value }))}
                    placeholder="Describe the symptoms in detail, including onset, duration, and severity..."
                    className="emergency-form-textarea"
                    rows="3"
                    required
                  />
                </div>
                <div className="emergency-form-group">
                  <label className="emergency-form-label">Additional Details</label>
                  <textarea
                    value={emergencyForm.description}
                    onChange={(e) => setEmergencyForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Any other important information for PHC workers..."
                    className="emergency-form-textarea"
                    rows="2"
                  />
                </div>
              </div>
              
              <div className="emergency-form-section">
                <h4 className="emergency-form-section-title">Vital Signs (If Available)</h4>
                <div className="emergency-vital-signs-grid">
                  <div className="emergency-vital-input-group">
                    <label className="emergency-vital-label">Blood Pressure</label>
                    <input
                      type="text"
                      value={emergencyForm.vitalSigns.bp}
                      onChange={(e) => setEmergencyForm(prev => ({
                        ...prev,
                        vitalSigns: { ...prev.vitalSigns, bp: e.target.value }
                      }))}
                      placeholder="e.g., 120/80"
                      className="emergency-vital-input"
                    />
                  </div>
                  <div className="emergency-vital-input-group">
                    <label className="emergency-vital-label">Pulse Rate</label>
                    <input
                      type="number"
                      value={emergencyForm.vitalSigns.pulse}
                      onChange={(e) => setEmergencyForm(prev => ({
                        ...prev,
                        vitalSigns: { ...prev.vitalSigns, pulse: e.target.value }
                      }))}
                      placeholder="BPM"
                      className="emergency-vital-input"
                    />
                  </div>
                  <div className="emergency-vital-input-group">
                    <label className="emergency-vital-label">Temperature</label>
                    <input
                      type="number"
                      value={emergencyForm.vitalSigns.temperature}
                      onChange={(e) => setEmergencyForm(prev => ({
                        ...prev,
                        vitalSigns: { ...prev.vitalSigns, temperature: e.target.value }
                      }))}
                      placeholder="°C"
                      className="emergency-vital-input"
                    />
                  </div>
                  <div className="emergency-vital-input-group">
                    <label className="emergency-vital-label">Oxygen Saturation</label>
                    <input
                      type="number"
                      value={emergencyForm.vitalSigns.oxygen}
                      onChange={(e) => setEmergencyForm(prev => ({
                        ...prev,
                        vitalSigns: { ...prev.vitalSigns, oxygen: e.target.value }
                      }))}
                      placeholder="SpO2 %"
                      className="emergency-vital-input"
                    />
                  </div>
                </div>
              </div>
              
              <div className="emergency-form-section">
                <h4 className="emergency-form-section-title">Attach Evidence</h4>
                <div className="emergency-attachment-buttons">
                  <button
                    type="button"
                    className="emergency-attachment-btn"
                    onClick={() => emergencyHandleAttachment('photo')}
                  >
                    <Camera size={18} />
                    Add Photo
                  </button>
                  <button
                    type="button"
                    className="emergency-attachment-btn"
                    onClick={() => emergencyHandleAttachment('video')}
                  >
                    <Video size={18} />
                    Add Video
                  </button>
                  <button
                    type="button"
                    className={`emergency-attachment-btn ${emergencyIsRecording ? 'emergency-recording' : ''}`}
                    onClick={emergencyIsRecording ? emergencyStopRecording : emergencyStartRecording}
                  >
                    {emergencyIsRecording ? <StopCircle size={18} /> : <Mic size={18} />}
                    {emergencyIsRecording ? `Stop (${emergencyFormatTime(emergencyRecordingTime)})` : 'Record Audio'}
                  </button>
                  <button
                    type="button"
                    className="emergency-attachment-btn"
                    onClick={() => emergencyHandleAttachment('document')}
                  >
                    <FileText size={18} />
                    Add Document
                  </button>
                </div>
                {emergencyForm.attachments.length > 0 && (
                  <div className="emergency-attachments-list">
                    <h5 className="emergency-attachments-title">Attached Files:</h5>
                    {emergencyForm.attachments.map(attachment => (
                      <div key={attachment.id} className="emergency-attachment-item">
                        <div className="emergency-attachment-info">
                          <Paperclip size={16} />
                          <span className="emergency-attachment-name">{attachment.name}.{attachment.type}</span>
                          <span className="emergency-attachment-time">{attachment.timestamp}</span>
                        </div>
                        <button
                          className="emergency-remove-attachment-btn"
                          onClick={() => emergencyRemoveAttachment(attachment.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="emergency-form-section">
                <h4 className="emergency-form-section-title">Available PHC Workers</h4>
                <div className="emergency-phc-workers-list">
                  {emergencyPhcWorkers.map(worker => (
                    <div key={worker.id} className={`emergency-phc-worker-card ${worker.available ? 'emergency-available' : 'emergency-unavailable'}`}>
                      <div className="emergency-worker-avatar">
                        <User size={20} />
                      </div>
                      <div className="emergency-worker-info">
                        <h5 className="emergency-worker-name">{worker.name}</h5>
                        <p className="emergency-worker-specialization">{worker.specialization}</p>
                      </div>
                      <div className="emergency-worker-status">
                        <span className={`emergency-status-dot ${worker.available ? 'emergency-online' : 'emergency-offline'}`}></span>
                        {worker.available ? 'Available' : 'Offline'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="emergency-form-actions">
                <button
                  type="button"
                  className="emergency-cancel-btn"
                  onClick={() => setEmergencyShowEmergencyForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="emergency-submit-btn"
                  onClick={emergencyHandleSubmitEmergency}
                >
                  <Send size={18} />
                  Send Emergency Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <section className="emergency-section">
        <div className="emergency-section-header">
          <h3 className="emergency-section-title">Active Emergency Requests</h3>
          <div className="emergency-stats">
            <div className="emergency-stat">
              <span className="emergency-stat-number">{totalRequests}</span>
              <span className="emergency-stat-label">Total Requests</span>
            </div>
            <div className="emergency-stat">
              <span className="emergency-stat-number">{pendingRequests}</span>
              <span className="emergency-stat-label">Pending</span>
            </div>
            <div className="emergency-stat">
              <span className="emergency-stat-number">{respondedRequests}</span>
              <span className="emergency-stat-label">Responded</span>
            </div>
          </div>
        </div>
        <div className="emergency-requests-grid">
          {safeEmergencyRequests.length > 0 ? (
            safeEmergencyRequests.map(request => (
              <div key={request.id} className="emergency-request-card">
                <div className="emergency-request-header">
                  <div className="emergency-patient-info">
                    <div className="emergency-patient-avatar">
                      {request.patient?.charAt(0) || 'U'}
                    </div>
                    <div className="emergency-patient-details">
                      <h4 className="emergency-patient-name">{request.patient || 'Unknown Patient'}</h4>
                      <p className="emergency-patient-meta">{request.type} • {request.urgencyLevel}</p>
                    </div>
                  </div>
                  <div className="emergency-meta">
                    <span className={`emergency-priority-badge emergency-${request.priority}`}>
                      {request.priority?.toUpperCase() || 'UNKNOWN'}
                    </span>
                    <span className="emergency-request-time">{request.time}</span>
                  </div>
                </div>
                <div className="emergency-content">
                  <p className="emergency-description">{request.description}</p>
                
                  {request.symptoms && (
                    <div className="emergency-symptoms-section">
                      <strong className="emergency-section-label">Symptoms:</strong>
                      <p className="emergency-symptoms-text">{request.symptoms}</p>
                    </div>
                  )}
                  {request.vitalSigns && Object.values(request.vitalSigns).some(val => val) && (
                    <div className="emergency-vital-signs-display">
                      <strong className="emergency-section-label">Vital Signs:</strong>
                      <div className="emergency-vitals-grid">
                        {request.vitalSigns.bp && <span className="emergency-vital-item">BP: {request.vitalSigns.bp}</span>}
                        {request.vitalSigns.pulse && <span className="emergency-vital-item">Pulse: {request.vitalSigns.pulse} BPM</span>}
                        {request.vitalSigns.temperature && <span className="emergency-vital-item">Temp: {request.vitalSigns.temperature}°C</span>}
                        {request.vitalSigns.oxygen && <span className="emergency-vital-item">SpO2: {request.vitalSigns.oxygen}%</span>}
                      </div>
                    </div>
                  )}
                  {request.attachments && request.attachments.length > 0 && (
                    <div className="emergency-attachments-display">
                      <strong className="emergency-section-label">Attachments:</strong>
                      <div className="emergency-attachments-grid">
                        {request.attachments.map(att => (
                          <div key={att.id} className="emergency-attachment-preview">
                            {att.type === 'photo' && <Camera size={16} />}
                            {att.type === 'video' && <Video size={16} />}
                            {att.type === 'audio' && <Mic size={16} />}
                            {att.type === 'document' && <FileText size={16} />}
                            <span className="emergency-attachment-name">{att.name}.{att.type}</span>
                            <button className="emergency-download-btn">
                              <Download size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="emergency-actions">
                  <button className="emergency-action-btn emergency-primary">
                    <Phone size={14} />
                    Call PHC
                  </button>
                  <button className="emergency-action-btn emergency-outline">
                    View Details
                  </button>
                  <span className={`emergency-status-tag emergency-${request.status || 'pending'}`}>
                    {request.status || 'pending'}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="emergency-empty-state">
              <AlertTriangle size={48} />
              <h4 className="emergency-empty-title">No Emergency Requests</h4>
              <p className="emergency-empty-text">Create your first emergency request to get help from PHC workers</p>
            </div>
          )}
        </div>
      </section>
      
      <div className="emergency-quick-actions">
        <h4 className="emergency-quick-actions-title">Quick Actions</h4>
        <div className="emergency-quick-actions-grid">
          <button className="emergency-quick-action-card">
            <Phone size={24} />
            <span className="emergency-quick-action-title">Emergency Hotline</span>
            <p className="emergency-quick-action-desc">102/108</p>
          </button>
          <button className="emergency-quick-action-card">
            <MapPin size={24} />
            <span className="emergency-quick-action-title">Nearest PHC</span>
            <p className="emergency-quick-action-desc">2.5 km away</p>
          </button>
          <button className="emergency-quick-action-card">
            <User size={24} />
            <span className="emergency-quick-action-title">Available Doctors</span>
            <p className="emergency-quick-action-desc">{availableDoctorsCount} online</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyTab;