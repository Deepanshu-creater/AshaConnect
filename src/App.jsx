import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PaitentApp from './PatientApp';
import {
  Users, Stethoscope, FileText, Heart, Settings, LogOut,
  Calendar, Bell, Menu, X, Search, Mic, Video, Camera,
  MessageCircle, BookOpen, UserPlus, Download, Upload,
  Languages, AlertTriangle, Pill, Clock, MapPin, ChevronRight,
  Plus, Filter, MoreVertical, Play, StopCircle, Send,
  Shield, ArrowRight, CheckCircle, Trash2, Edit3,
  Star, TrendingUp, Activity, Phone, Mail, Map, Edit3,
  Book, HelpCircle, Mic2, Volume2, FileDown, Share2,
  User, Home, ClipboardList, MessageSquare, CheckCircle, AlertCircle, XCircle, Paperclip, Trash2,
  Key, Users as UsersIcon, FolderPlus
} from 'lucide-react';
import './App.css';
// Login Component
const handleHealthRecord = () => {
  window.open("https://health-form-henna.vercel.app/", "_blank");
  // "_blank" → opens in new tab
  // "_self" → opens in same tab
};
const translations = {
  en: {
    // Existing
    dashboard: "Dashboard",
    updateHealthRecord: "Update Health Record",
    registerPatient: "Register Patient",
    generateFamilyId: "Generate Family ID",
    updateFamilyRecords: "Update Family Records",
    symptomCheck: "AI Chatbot",
    medicineStock: "Medicine Stock",
    healthLibrary: "Health Library",
    visitSchedule: "Visit Schedule",
    settings: "Settings",
    logout: "Logout",
    welcome: "Namaste, {name}! 👋",
    dedication: "Your dedication to community health is making a difference every day.",
    totalPatients: "Total Patients",
    activeCases: "Active Tasks",
    completedVisits: "Completed Visits",
    pendingTasks: "Pending Tasks",
    quickActions: "Quick Actions",
    searchPlaceholder: "Search patients, records...",
    // Login
    appTitle: "AshaConnect",
    loginTitle: "ASHA Worker Login",
    loginSubtitle: "Enter your credentials to access the portal",
    errorBoth: "Please enter both ASHA ID and Date of Birth",
    errorId: "Please enter a valid ASHA ID",
    labelAshaId: "ASHA Worker ID",
    placeholderAshaId: "Enter your ASHA ID",
    labelDob: "Date of Birth",
    loginButton: "Login to Portal",
    helpText: "Need help? Contact your supervisor",
    // Family ID Generator
    familyTitle: "Generate Family ID",
    familySubtitle: "Create a unique family ID to link family members together",
    headLabel: "Head of Family Patient ID *",
    headPlaceholder: "Enter patient ID of family head",
    membersTitle: "Family Members",
    addMember: "Add Member",
    patientIdLabel: "Patient ID",
    patientIdPlaceholder: "Enter patient ID",
    relationLabel: "Relation to Head",
    relationPlaceholder: "Select Relation",
    relationSpouse: "Spouse",
    relationChild: "Child",
    relationParent: "Parent",
    relationSibling: "Sibling",
    relationGrandchild: "Grandchild",
    relationOther: "Other",
    generateButton: "Generate Family ID",
    generatedTitle: "Generated Family ID",
    copyButton: "Copy ID",
    noteText: "Note: Share this Family ID with all family members for linking their records.",
    alertHeadId: "Please enter Head of Family Patient ID",
    // Update Family Records
    updateFamilyTitle: "Update Family Records",
    updateFamilySubtitle: "Update health records for entire family using Family ID",
    familyIdPlaceholder: "Enter Family ID",
    searchFamily: "Search Family",
    familyHeader: "Family: ",
    membersCount: " Members",
    headRole: "(Head)",
    patientInfo: "Patient ID: {id} • {age} years • {gender}",
    bpLabel: "Blood Pressure",
    bpPlaceholder: "e.g., 120/80",
    sugarLabel: "Blood Sugar",
    sugarPlaceholder: "e.g., 120 mg/dL",
    weightLabel: "Weight",
    weightPlaceholder: "e.g., 65 kg",
    updateAll: "Update All Records",
    alertFamilyId: "Please enter a Family ID",
    successUpdate: "Family records updated successfully!",
    // Chatbot
    chatHeader: "AI Chatbot",
    statusOnline: "Online",
    statusOffline: "Offline",
    chatPlaceholder: "Describe your symptoms in English or Hindi...",
    disclaimer: "⚠️ This is not medical advice. Consult a healthcare professional.",
    speakerPlay: "Listen to this message",
    speakerStop: "Stop playback",
    micTitle: "Speak in Hindi",
    sendIcon: "➤",
    speechNotSupported: "Speech recognition is not supported in your browser. Please use Chrome or Edge.",
    ttsNotSupported: "Text-to-speech is not supported in your browser.",
    audioError: "Error playing audio. Please try again.",
    // Medicine Tracker
    phcTitle: "PHC Medicine Stock",
    phcSubtitle: "Check medicine availability at government pharmacy",
    searchMedicines: "Search medicines...",
    filterAll: "All",
    filterLow: "Low Stock",
    filterAdequate: "Adequate",
    statusGood: "Adequate",
    statusMedium: "Moderate",
    statusLow: "Low Stock",
    requestMore: "Request More",
    reportIssue: "Report Issue",
    // Health Library
    libraryTitle: "Health Education Library",
    librarySubtitle: "Access educational resources for patient care",
    filterAllTopics: "All Topics",
    filterMaternal: "Maternal Health",
    filterChild: "Child Care",
    filterChronic: "Chronic Diseases",
    readMore: "Read More",
    // Schedule
    scheduleTitle: "ASHA Work Schedule",
    filterToday: "Today's Tasks",
    filterUpcoming: "Upcoming",
    homeVisit: "Home Visit",
    vaccinationDrive: "Vaccination Drive",
    healthCamp: "Health Camp",
    followUp: "Follow-up Visit",
    completed: "Completed",
    pending: "Pending",
    tasksPerformed: "Tasks to be performed:",
    markComplete: "Mark Complete",
    reschedule: "Reschedule",
    noTasksTitle: "No tasks scheduled",
    noTasksSubtitle: "No tasks scheduled for this period",
    todayTasks: "Today's Tasks",
    highPriority: "High Priority",
    // Notifications
    notifTitle: "Notifications",
    notifSubtitle: "Your recent alerts and updates",
    // Bottom Nav
    home: "Home",
    records: "Records",
    familyIdNav: "Family ID",
    scheduleNav: "Schedule",
    // Quick Actions Subtitles
    registerPatientSub: "Add new patient to your care",
    symptomCheckSub: "AI-powered health assessment",
    medicineStockSub: "Check PHC medicine availability",
    updateHealthRecordSub: "Update patient health information",
    generateFamilyIdSub: "Create family group for records",
    healthLibrarySub: "Access educational resources and official PHC videos",
    // Welcome Actions
    registerNewPatient: "Register New Patient",
    updateHealthRecords: "Update Health Records"
  },
  hi: {
    // Existing
    dashboard: "डैशबोर्ड",
    updateHealthRecord: "स्वास्थ्य रिकॉर्ड अपडेट करें",
    registerPatient: "मरीज पंजीकरण",
    generateFamilyId: "परिवार आईडी जनरेट करें",
    updateFamilyRecords: "परिवार रिकॉर्ड अपडेट करें",
    symptomCheck: "एआई चैटबॉट",
    medicineStock: "दवा स्टॉक",
    healthLibrary: "स्वास्थ्य लाइब्रेरी",
    visitSchedule: "यात्रा कार्यक्रम",
    settings: "सेटिंग्स",
    logout: "लॉगआउट",
    welcome: "नमस्ते, {name}! 👋",
    dedication: "समुदाय के स्वास्थ्य के प्रति आपका समर्पण हर दिन बदलाव ला रहा है।",
    totalPatients: "कुल मरीज",
    activeCases: "सक्रिय मामले",
    completedVisits: "पूर्ण यात्राएं",
    pendingTasks: "लंबित कार्य",
    quickActions: "त्वरित कार्य",
    searchPlaceholder: "मरीज, रिकॉर्ड खोजें...",
    // Login
    appTitle: "चिकित्सा365",
    loginTitle: "आशा कार्यकर्ता लॉगिन",
    loginSubtitle: "पोर्टल तक पहुंचने के लिए अपनी साख दर्ज करें",
    errorBoth: "कृपया आशा आईडी और जन्म तिथि दोनों दर्ज करें",
    errorId: "कृपया वैध आशा आईडी दर्ज करें",
    labelAshaId: "आशा कार्यकर्ता आईडी",
    placeholderAshaId: "अपनी आशा आईडी दर्ज करें",
    labelDob: "जन्म तिथि",
    loginButton: "पोर्टल में लॉगिन करें",
    helpText: "मदद चाहिए? अपने पर्यवेक्षक से संपर्क करें",
    // Family ID Generator
    familyTitle: "परिवार आईडी जनरेट करें",
    familySubtitle: "परिवार के सदस्यों को जोड़ने के लिए अद्वितीय परिवार आईडी बनाएं",
    headLabel: "परिवार के मुखिया का मरीज आईडी *",
    headPlaceholder: "परिवार के मुखिया का मरीज आईडी दर्ज करें",
    membersTitle: "परिवार के सदस्य",
    addMember: "सदस्य जोड़ें",
    patientIdLabel: "मरीज आईडी",
    patientIdPlaceholder: "मरीज आईडी दर्ज करें",
    relationLabel: "मुखिया से संबंध",
    relationPlaceholder: "संबंध चुनें",
    relationSpouse: "पति/पत्नी",
    relationChild: "बच्चा",
    relationParent: "माता-पिता",
    relationSibling: "भाई-बहन",
    relationGrandchild: "पोता/पोती",
    relationOther: "अन्य",
    generateButton: "परिवार आईडी जनरेट करें",
    generatedTitle: "जनरेट की गई परिवार आईडी",
    copyButton: "आईडी कॉपी करें",
    noteText: "नोट: रिकॉर्ड लिंक करने के लिए इस परिवार आईडी को सभी परिवार के सदस्यों के साथ साझा करें।",
    alertHeadId: "कृपया परिवार के मुखिया का मरीज आईडी दर्ज करें",
    // Update Family Records
    updateFamilyTitle: "परिवार रिकॉर्ड अपडेट करें",
    updateFamilySubtitle: "परिवार आईडी का उपयोग करके पूरे परिवार के स्वास्थ्य रिकॉर्ड अपडेट करें",
    familyIdPlaceholder: "परिवार आईडी दर्ज करें",
    searchFamily: "परिवार खोजें",
    familyHeader: "परिवार: ",
    membersCount: " सदस्य",
    headRole: "(मुखिया)",
    patientInfo: "मरीज आईडी: {id} • {age} वर्ष • {gender}",
    bpLabel: "रक्तचाप",
    bpPlaceholder: "उदाहरण, 120/80",
    sugarLabel: "रक्त शर्करा",
    sugarPlaceholder: "उदाहरण, 120 mg/dL",
    weightLabel: "वजन",
    weightPlaceholder: "उदाहरण, 65 kg",
    updateAll: "सभी रिकॉर्ड अपडेट करें",
    alertFamilyId: "कृपया परिवार आईडी दर्ज करें",
    successUpdate: "परिवार रिकॉर्ड सफलतापूर्वक अपडेट हो गए!",
    // Chatbot
    chatHeader: "एआई चैटबॉट",
    statusOnline: "ऑनलाइन",
    statusOffline: "ऑफलाइन",
    chatPlaceholder: "अपने लक्षणों का वर्णन अंग्रेजी या हिंदी में करें...",
    disclaimer: "⚠️ यह चिकित्सा सलाह नहीं है। स्वास्थ्य पेशेवर से परामर्श करें।",
    speakerPlay: "इस संदेश को सुनें",
    speakerStop: "प्लेबैक रोकें",
    micTitle: "हिंदी में बोलें",
    sendIcon: "➤",
    speechNotSupported: "आपके ब्राउज़र में स्पीच रिकग्निशन समर्थित नहीं है। कृपया क्रोम या एज का उपयोग करें।",
    ttsNotSupported: "आपके ब्राउज़र में टेक्स्ट-टू-स्पीच समर्थित नहीं है।",
    audioError: "ऑडियो चलाने में त्रुटि। कृपया पुनः प्रयास करें।",
    // Medicine Tracker
    phcTitle: "पीएचसी दवा स्टॉक",
    phcSubtitle: "सरकारी फार्मेसी में दवा की उपलब्धता जांचें",
    searchMedicines: "दवाओं की खोज...",
    filterAll: "सभी",
    filterLow: "कम स्टॉक",
    filterAdequate: "पर्याप्त",
    statusGood: "पर्याप्त",
    statusMedium: "मध्यम",
    statusLow: "कम स्टॉक",
    requestMore: "और मांगें",
    reportIssue: "समस्या रिपोर्ट करें",
    // Health Library
    libraryTitle: "स्वास्थ्य शिक्षा लाइब्रेरी",
    librarySubtitle: "रोगी देखभाल के लिए शैक्षिक संसाधनों तक पहुंचें",
    filterAllTopics: "सभी विषय",
    filterMaternal: "मातृ स्वास्थ्य",
    filterChild: "बाल देखभाल",
    filterChronic: "दीर्घकालिक रोग",
    readMore: "और पढ़ें",
    // Schedule
    scheduleTitle: "आशा कार्य अनुसूची",
    filterToday: "आज के कार्य",
    filterUpcoming: "आगामी",
    homeVisit: "घरेलू यात्रा",
    vaccinationDrive: "टीकाकरण अभियान",
    healthCamp: "स्वास्थ्य शिविर",
    followUp: "फॉलो-अप यात्रा",
    completed: "पूर्ण",
    pending: "लंबित",
    tasksPerformed: "निष्पादित करने के लिए कार्य:",
    markComplete: "पूर्ण चिह्नित करें",
    reschedule: "पुनर्निर्धारित करें",
    noTasksTitle: "कोई कार्य अनुसूचित नहीं",
    noTasksSubtitle: "इस अवधि के लिए कोई कार्य अनुसूचित नहीं",
    todayTasks: "आज के कार्य",
    highPriority: "उच्च प्राथमिकता",
    // Notifications
    notifTitle: "सूचनाएं",
    notifSubtitle: "आपकी हाल की अलर्ट और अपडेट",
    // Bottom Nav
    home: "होम",
    records: "रिकॉर्ड",
    familyIdNav: "परिवार आईडी",
    scheduleNav: "अनुसूची",
    // Quick Actions Subtitles
    registerPatientSub: "अपनी देखभाल में नया मरीज जोड़ें",
    symptomCheckSub: "एआई-संचालित स्वास्थ्य मूल्यांकन",
    medicineStockSub: "पीएचसी दवा उपलब्धता जांचें",
    updateHealthRecordSub: "मरीज स्वास्थ्य जानकारी अपडेट करें",
    generateFamilyIdSub: "रिकॉर्ड के लिए परिवार समूह बनाएं",
    healthLibrarySub: "शैक्षिक संसाधनों और आधिकारिक पीएचसी वीडियो तक पहुंचें",
    // Welcome Actions
    registerNewPatient: "नया मरीज पंजीकृत करें",
    updateHealthRecords: "स्वास्थ्य रिकॉर्ड अपडेट करें"
  },
  pa: {
    // Existing
    dashboard: "ਡੈਸ਼ਬੋਰਡ",
    updateHealthRecord: "ਸਿਹਤ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ",
    registerPatient: "ਰੋਗੀ ਨਿਰਧਾਰਣ",
    generateFamilyId: "ਪਰਿਵਾਰ ID ਜਨਰੇਟ ਕਰੋ",
    updateFamilyRecords: "ਪਰਿਵਾਰ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ",
    symptomCheck: "ਏਆਈ ਚੈਟਬਾਟ",
    medicineStock: "ਦਵਾਈ ਸਟਾਕ",
    healthLibrary: "ਸਿਹਤ ਲਾਇਬ੍ਰੇਰੀ",
    visitSchedule: "ਵਿਜ਼ਿਟ ਸ਼ੈਡਿਊਲ",
    settings: "ਸੈਟਿੰਗਜ਼",
    logout: "ਲੌਗਆਊਟ",
    welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, {name}! 👋",
    dedication: "ਕਮਿਊਨਿਟੀ ਸਿਹਤ ਲਈ ਤੁਹਾਡੀ ਭਗਤੀ ਹਰ ਦਿਨ ਫ਼ਰਕ ਪੈਦਾ ਕਰ ਰਹੀ ਹੈ।",
    totalPatients: "ਕੁੱਲ ਰੋਗੀ",
    activeCases: "ਸਕਰੀਅ ਕੇਸ",
    completedVisits: "ਪੂਰੀ ਵਿਜ਼ਿਟਾਂ",
    pendingTasks: "ਲੰਬੇ ਕੰਮ",
    quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
    searchPlaceholder: "ਰੋਗੀਆਂ, ਰਿਕਾਰਡ ਖੋਜੋ...",
    // Login
    appTitle: "ਚਿਕਿਤਸਾ365",
    loginTitle: "ਆਸ਼ਾ ਵਰਕਰ ਲੌਗਇਨ",
    loginSubtitle: "ਪੋਰਟਲ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਆਪਣੀਆਂ ਗਿਣਤੀਆਂ ਦਰਜ ਕਰੋ",
    errorBoth: "ਕਿਰਪਾ ਕਰਕੇ ਆਸ਼ਾ ID ਅਤੇ ਜਨਮ ਮਿਤੀ ਦੋਵੇਂ ਦਰਜ ਕਰੋ",
    errorId: "ਕਿਰਪਾ ਕਰਕੇ ਵੈਧ ਆਸ਼ਾ ID ਦਰਜ ਕਰੋ",
    labelAshaId: "ਆਸ਼ਾ ਵਰਕਰ ID",
    placeholderAshaId: "ਆਪਣੀ ਆਸ਼ਾ ID ਦਰਜ ਕਰੋ",
    labelDob: "ਜਨਮ ਮਿਤੀ",
    loginButton: "ਪੋਰਟਲ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ",
    helpText: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਆਪਣੇ ਸੁਪਰਵਾਈਜ਼ਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    // Family ID Generator
    familyTitle: "ਪਰਿਵਾਰ ID ਜਨਰੇਟ ਕਰੋ",
    familySubtitle: "ਪਰਿਵਾਰ ਨੂੰ ਜੋੜਨ ਲਈ ਵਿਲੱਖਣ ਪਰਿਵਾਰ ID ਬਣਾਓ",
    headLabel: "ਪਰਿਵਾਰ ਦੇ ਸਰਬਧਾਰੀ ਦਾ ਰੋਗੀ ID *",
    headPlaceholder: "ਪਰਿਵਾਰ ਦੇ ਸਰਬਧਾਰੀ ਦਾ ਰੋਗੀ ID ਦਰਜ ਕਰੋ",
    membersTitle: "ਪਰਿਵਾਰ ਨੂੰ",
    addMember: "ਸਦਸ਼ੀ ਜੋੜੋ",
    patientIdLabel: "ਰੋਗੀ ID",
    patientIdPlaceholder: "ਰੋਗੀ ID ਦਰਜ ਕਰੋ",
    relationLabel: "ਸਰਬਧਾਰੀ ਨਾਲ ਸਬੰਧ",
    relationPlaceholder: "ਸਬੰਧ ਚੁਣੋ",
    relationSpouse: "ਭਾਬੀ/ਭਰਾ",
    relationChild: "ਬੱਚਾ",
    relationParent: "ਮਾਪੇ",
    relationSibling: "ਭਰਾ/ਭੈਣ",
    relationGrandchild: "ਪੋਤਾ/ਪੋਤੀ",
    relationOther: "ਹੋਰ",
    generateButton: "ਪਰਿਵਾਰ ID ਜਨਰੇਟ ਕਰੋ",
    generatedTitle: "ਜਨਰੇਟ ਕੀਤੀ ਪਰਿਵਾਰ ID",
    copyButton: "ID ਕਾਪੀ ਕਰੋ",
    noteText: "ਨੋਟ: ਰਿਕਾਰਡ ਜੋੜਨ ਲਈ ਇਸ ਪਰਿਵਾਰ ID ਨੂੰ ਸਾਰੇ ਪਰਿਵਾਰ ਨੂੰ ਨਾਲ ਸਾਂਝਾ ਕਰੋ।",
    alertHeadId: "ਕਿਰਪਾ ਕਰਕੇ ਪਰਿਵਾਰ ਦੇ ਸਰਬਧਾਰੀ ਦਾ ਰੋਗੀ ID ਦਰਜ ਕਰੋ",
    // Update Family Records
    updateFamilyTitle: "ਪਰਿਵਾਰ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ",
    updateFamilySubtitle: "ਪੂਰੇ ਪਰਿਵਾਰ ਦੇ ਸਿਹਤ ਰਿਕਾਰਡ ਨੂੰ ਪਰਿਵਾਰ ID ਨਾਲ ਅਪਡੇਟ ਕਰੋ",
    familyIdPlaceholder: "ਪਰਿਵਾਰ ID ਦਰਜ ਕਰੋ",
    searchFamily: "ਪਰਿਵਾਰ ਖੋਜੋ",
    familyHeader: "ਪਰਿਵਾਰ: ",
    membersCount: " ਨੂੰ",
    headRole: "(ਸਰਬਧਾਰੀ)",
    patientInfo: "ਰੋਗੀ ID: {id} • {age} ਸਾਲ • {gender}",
    bpLabel: "ਰਕਤ ਪ੍ਰੈਸ਼ਰ",
    bpPlaceholder: "ਉਦਾਹਰਨ, 120/80",
    sugarLabel: "ਰਕਤ ਸ਼ੂਗਰ",
    sugarPlaceholder: "ਉਦਾਹਰਨ, 120 mg/dL",
    weightLabel: "ਭਾਰ",
    weightPlaceholder: "ਉਦਾਹਰਨ, 65 kg",
    updateAll: "ਸਾਰੇ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ",
    alertFamilyId: "ਕਿਰਪਾ ਕਰਕੇ ਪਰਿਵਾਰ ID ਦਰਜ ਕਰੋ",
    successUpdate: "ਪਰਿਵਾਰ ਰਿਕਾਰਡ ਸਫਲਤਾਪੂਰਵਕ ਅਪਡੇਟ ਹੋ ਗਏ!",
    // Chatbot
    chatHeader: "ਏਆਈ ਚੈਟਬਾਟ",
    statusOnline: "ਆਨਲਾਈਨ",
    statusOffline: "ਆਫਲਾਈਨ",
    chatPlaceholder: "ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਰਣਨ ਅੰਗਰੇਜ਼ੀ ਜਾਂ ਹਿੰਦੀ ਵਿੱਚ ਕਰੋ...",
    disclaimer: "⚠️ ਇਹ ਚਿਕਿਤਸਾ ਸਲਾਹ ਨਹੀਂ ਹੈ। ਸਿਹਤ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
    speakerPlay: "ਇਸ ਸੁਨੇਹੇ ਨੂੰ ਸੁਣੋ",
    speakerStop: "ਪਲੇਬੈਕ ਰੋਕੋ",
    micTitle: "ਹਿੰਦੀ ਵਿੱਚ ਬੋਲੋ",
    sendIcon: "➤",
    speechNotSupported: "ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸਪੀਚ ਰਿਕਗਨੀਸ਼ਨ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਕ੍ਰੋਮ ਜਾਂ ਐਜ਼ ਦਾ ਉਪਯੋਗ ਕਰੋ।",
    ttsNotSupported: "ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਟੈਕਸਟ-ਟੂ-ਸਪੀਚ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।",
    audioError: "ਆਡੀਓ ਵਾਜਣ ਵਿੱਚ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    // Medicine Tracker
    phcTitle: "ਪੀਐਚਸੀ ਦਵਾਈ ਸਟਾਕ",
    phcSubtitle: "ਸਰਕਾਰੀ ਫਾਰਮੇਸੀ ਵਿੱਚ ਦਵਾਈ ਦੀ ਉਪਲਬਧਤਾ ਜਾਂਚੋ",
    searchMedicines: "ਦਵਾਈਆਂ ਖੋਜੋ...",
    filterAll: "ਸਭ",
    filterLow: "ਘੱਟ ਸਟਾਕ",
    filterAdequate: "ਪੂਰੀ ਤਰ੍ਹਾਂ",
    statusGood: "ਪੂਰੀ ਤਰ੍ਹਾਂ",
    statusMedium: "ਮੱਧਮ",
    statusLow: "ਘੱਟ ਸਟਾਕ",
    requestMore: "ਹੋਰ ਮੰਗੋ",
    reportIssue: "ਸਮੱਸਿਆ ਦੱਸੋ",
    // Health Library
    libraryTitle: "ਸਿਹਤ ਸਿੱਖਿਆ ਲਾਇਬ੍ਰੇਰੀ",
    librarySubtitle: "ਰੋਗੀ ਦੇਖਭਾਲ ਲਈ ਸਿੱਖਿਆਤਮਕ ਸਰੋਤਾਂ ਤੱਕ ਪਹੁੰਚੋ",
    filterAllTopics: "ਸਾਰੇ ਵਿਸ਼ੇ",
    filterMaternal: "ਮਾਤਾ ਸਿਹਤ",
    filterChild: "ਬਾਲ ਦੇਖਭਾਲ",
    filterChronic: "ਲੰਬੇ ਸਮੇਂ ਦੇ ਬਿਮਾਰੀਆਂ",
    readMore: "ਹੋਰ ਪੜ੍ਹੋ",
    // Schedule
    scheduleTitle: "ਆਸ਼ਾ ਕੰਮ ਸ਼ੈਡਿਊਲ",
    filterToday: "ਅੱਜ ਦੇ ਕੰਮ",
    filterUpcoming: "ਆਉਣ ਵਾਲੇ",
    homeVisit: "ਘਰੇਲੂ ਵਿਜ਼ਿਟ",
    vaccinationDrive: "ਵੈਕਸੀਨੇਸ਼ਨ ਡਰਾਈਵ",
    healthCamp: "ਸਿਹਤ ਕੈਂਪ",
    followUp: "ਫਾਲੋ-ਅਪ ਵਿਜ਼ਿਟ",
    completed: "ਪੂਰਾ",
    pending: "ਲੰਬਾ",
    tasksPerformed: "ਕਰਨ ਲਈ ਕੰਮ:",
    markComplete: "ਪੂਰਾ ਚਿੰਨ੍ਹਿਤ ਕਰੋ",
    reschedule: "ਫਿਰ ਨਿਰਧਾਰਿਤ ਕਰੋ",
    noTasksTitle: "ਕੋਈ ਕੰਮ ਨਿਰਧਾਰਿਤ ਨਹੀਂ",
    noTasksSubtitle: "ਇਸ ਅਵਧੀ ਲਈ ਕੋਈ ਕੰਮ ਨਿਰਧਾਰਿਤ ਨਹੀਂ",
    todayTasks: "ਅੱਜ ਦੇ ਕੰਮ",
    highPriority: "ਉੱਚ ਪ੍ਰਾਥਮਿਕਤਾ",
    // Notifications
    notifTitle: "ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ",
    notifSubtitle: "ਤੁਹਾਡੀਆਂ ਹਾਲੀਆ ਅਲਰਟ ਅਤੇ ਅਪਡੇਟ",
    // Bottom Nav
    home: "ਘਰ",
    records: "ਰਿਕਾਰਡ",
    familyIdNav: "ਪਰਿਵਾਰ ID",
    scheduleNav: "ਸ਼ੈਡਿਊਲ",
    // Quick Actions Subtitles
    registerPatientSub: "ਆਪਣੀ ਦੇਖਭਾਲ ਵਿੱਚ ਨਵਾਂ ਰੋਗੀ ਜੋੜੋ",
    symptomCheckSub: "ਏਆਈ-ਸੰਚਾਲਿਤ ਸਿਹਤ ਮੁਲਾਂਕਣ",
    medicineStockSub: "ਪੀਐਚਸੀ ਦਵਾਈ ਉਪਲਬਧਤਾ ਜਾਂਚੋ",
    updateHealthRecordSub: "ਰੋਗੀ ਸਿਹਤ ਜਾਣਕਾਰੀ ਅਪਡੇਟ ਕਰੋ",
    generateFamilyIdSub: "ਰਿਕਾਰਡ ਲਈ ਪਰਿਵਾਰ ਗਰੁੱਪ ਬਣਾਓ",
    healthLibrarySub: "ਸਿੱਖਿਆਤਮਕ ਸਰੋਤਾਂ ਅਤੇ ਅਧਿਕਾਰਕ ਪੀਐਚਸੀ ਵੀਡੀਓਆਂ ਤੱਕ ਪਹੁੰਚੋ",
    // Welcome Actions
    registerNewPatient: "ਨਵਾਂ ਰੋਗੀ ਨਿਰਧਾਰਿਤ ਕਰੋ",
    updateHealthRecords: "ਸਿਹਤ ਰਿਕਾਰਡ ਅਪਡੇਟ ਕਰੋ"
  },
  te: {
    // Existing
    dashboard: "డాష్‌బోర్డ్",
    updateHealthRecord: "ఆరోగ్య రికార్డ్ అప్‌డేట్ చేయండి",
    registerPatient: "రోగి రిజిస్టర్",
    generateFamilyId: "కుటుంబ ID జనరేట్ చేయండి",
    updateFamilyRecords: "కుటుంబ రికార్డ్ అప్‌డేట్ చేయండి",
    symptomCheck: "AI చాట్‌బాట్",
    medicineStock: "మందుల స్టాక్",
    healthLibrary: "ఆరోగ్య లైబ్రరీ",
    visitSchedule: "సందర్శన తారతమ్యం",
    settings: "సెట్టింగ్స్",
    logout: "లాగ్అవుట్",
    welcome: "నమస్కారం, {name}! 👋",
    dedication: "సమాజ ఆరోగ్యానికి మీ అంకితభావం ప్రతి రోజు మార్పు తీసుకురుచుంది.",
    totalPatients: "మొత్తం రోగులు",
    activeCases: "సక్రియ కేసులు",
    completedVisits: "పూర్తి సందర్శనలు",
    pendingTasks: "పెండింగ్ టాస్క్‌లు",
    quickActions: "త్వరిత చర్యలు",
    searchPlaceholder: "రోగులు, రికార్డులు శోధించండి...",
    // Login
    appTitle: "చికిత్స365",
    loginTitle: "ఆశా వర్కర్ లాగిన్",
    loginSubtitle: "పోర్టల్‌కు ప్రవేశించడానికి మీ గుర్తింపు వివరాలను నమోదు చేయండి",
    errorBoth: "ఆశా ID మరియు పుట్టిన తేదీ రెండింటినీ నమోదు చేయండి",
    errorId: "వాలిడ్ ఆశా ID నమోదు చేయండి",
    labelAshaId: "ఆశా వర్కర్ ID",
    placeholderAshaId: "మీ ఆశా ID నమోదు చేయండి",
    labelDob: "పుట్టిన తేదీ",
    loginButton: "పోర్టల్‌లో లాగిన్ చేయండి",
    helpText: "సహాయం కావాలా? మీ సూపర్‌వైజర్‌ను సంప్రదించండి",
    // Family ID Generator
    familyTitle: "కుటుంబ ID జనరేట్ చేయండి",
    familySubtitle: "కుటుంబ సభ్యులను లింక్ చేయడానికి యూనిక్ కుటుంబ ID సృష్టించండి",
    headLabel: "కుటుంబ ప్రధాని రోగి ID *",
    headPlaceholder: "కుటుంబ ప్రధాని రోగి ID నమోదు చేయండి",
    membersTitle: "కుటుంబ సభ్యులు",
    addMember: "సభ్యుడిని జోడించండి",
    patientIdLabel: "రోగి ID",
    patientIdPlaceholder: "రోగి ID నమోదు చేయండి",
    relationLabel: "ప్రధానికి సంబంధం",
    relationPlaceholder: "సంబంధాన్ని ఎంచుకోండి",
    relationSpouse: "భర్త/భార్య",
    relationChild: "బిడ్డ",
    relationParent: "తల్లిదండ్రులు",
    relationSibling: "సోదరుడు/సోదరి",
    relationGrandchild: "త్క్కుడు/త్క్కురాలు",
    relationOther: "ఇతర",
    generateButton: "కుటుంబ ID జనరేట్ చేయండి",
    generatedTitle: "జనరేట్ చేసిన కుటుంబ ID",
    copyButton: "ID కాపీ చేయండి",
    noteText: "గమనిక: రికార్డులను లింక్ చేయడానికి ఈ కుటుంబ IDను అన్ని కుటుంబ సభ్యులతో పంచుకోండి.",
    alertHeadId: "కుటుంబ ప్రధాని రోగి ID నమోదు చేయండి",
    // Update Family Records
    updateFamilyTitle: "కుటుంబ రికార్డులు అప్‌డేట్ చేయండి",
    updateFamilySubtitle: "కుటుంబ IDని ఉపయోగించి మొత్తం కుటుంబ ఆరోగ్య రికార్డులను అప్‌డేట్ చేయండి",
    familyIdPlaceholder: "కుటుంబ ID నమోదు చేయండి",
    searchFamily: "కుటుంబాన్ని శోధించండి",
    familyHeader: "కుటుంబ: ",
    membersCount: " సభ్యులు",
    headRole: "(ప్రధాని)",
    patientInfo: "రోగి ID: {id} • {age} సంవత్సరాలు • {gender}",
    bpLabel: "రక్తపోటు",
    bpPlaceholder: "ఉదా., 120/80",
    sugarLabel: "రక్త షుగర్",
    sugarPlaceholder: "ఉదా., 120 mg/dL",
    weightLabel: "బరువు",
    weightPlaceholder: "ఉదా., 65 kg",
    updateAll: "అన్ని రికార్డులను అప్‌డేట్ చేయండి",
    alertFamilyId: "కుటుంబ ID నమోదు చేయండి",
    successUpdate: "కుటుంబ రికార్డులు సక్సెస్‌ఫుల్‌గా అప్‌డేట్ అయ్యాయి!",
    // Chatbot
    chatHeader: "AI చాట్‌బాట్",
    statusOnline: "ఆన్‌లైన్",
    statusOffline: "ఆఫ్‌లైన్",
    chatPlaceholder: "మీ లక్షణాలను ఇంగ్లీష్ లేదా హిందీలో వివరించండి...",
    disclaimer: "⚠️ ఇది వైద్య సలహా కాదు. ఆరోగ్య విద్యార్థిని సంప్రదించండి.",
    speakerPlay: "ఈ సందేశాన్ని వినండి",
    speakerStop: "ప్లేబ్యాక్ ఆపండి",
    micTitle: "హిందీలో మాట్లాడండి",
    sendIcon: "➤",
    speechNotSupported: "మీ బ్రౌజర్‌లో స్పీచ్ రికగ్నిషన్ సపోర్ట్ లేదు. క్రోమ్ లేదా ఎడ్జ్ ఉపయోగించండి.",
    ttsNotSupported: "మీ బ్రౌజర్‌లో టెక్స్ట్-టు-స్పీచ్ సపోర్ట్ లేదు.",
    audioError: "ఆడియో ప్లే చేయడంలో ఎర్రర్. మళ్లీ ట్రై చేయండి.",
    // Medicine Tracker
    phcTitle: "పీహెచ్‌సి మందుల స్టాక్",
    phcSubtitle: "ప్రభుత్వ ఔషధాల షాపులో మందుల లభ్యతను తనిఖీ చేయండి",
    searchMedicines: "మందులను శోధించండి...",
    filterAll: "అన్నీ",
    filterLow: "తక్కువ స్టాక్",
    filterAdequate: "పర్యాప్తం",
    statusGood: "పర్యాప్తం",
    statusMedium: "మధ్యస్థం",
    statusLow: "తక్కువ స్టాక్",
    requestMore: "ఇంకా అభ్యర్థించండి",
    reportIssue: "సమస్యను నివేదించండి",
    // Health Library
    libraryTitle: "ఆరోగ్య విద్య లైబ్రరీ",
    librarySubtitle: "రోగి సంరక్షణకు విద్యా సాధనాలకు ప్రవేశం",
    filterAllTopics: "అన్ని అంశాలు",
    filterMaternal: "మాతృ సంరక్షణ",
    filterChild: "బాల సంరక్షణ",
    filterChronic: "క్రానిక్ డిసీజెస్",
    readMore: "మరిన్ని చదవండి",
    // Schedule
    scheduleTitle: "ఆశా పని షెడ్యూల్",
    filterToday: "ఈ రోజు పనులు",
    filterUpcoming: "రాబోయేవి",
    homeVisit: "హోమ్ విజిట్",
    vaccinationDrive: "వ్యాక్సినేషన్ డ్రైవ్",
    healthCamp: "ఆరోగ్య క్యాంప్",
    followUp: "ఫాలో-అప్ విజిట్",
    completed: "పూర్తి",
    pending: "పెండింగ్",
    tasksPerformed: "చేయాల్సిన పనులు:",
    markComplete: "పూర్తి అని గుర్తించండి",
    reschedule: "పునఃనిర్ణయం చేయండి",
    noTasksTitle: "ఎటువంటి పనులు షెడ్యూల్ చేయబడలేదు",
    noTasksSubtitle: "ఈ కాలానికి ఎటువంటి పనులు షెడ్యూల్ చేయబడలేదు",
    todayTasks: "ఈ రోజు పనులు",
    highPriority: "అధిక ప్రాధాన్యత",
    // Notifications
    notifTitle: "నోటిఫికేషన్లు",
    notifSubtitle: "మీ ఇటీవలి అలర్ట్‌లు మరియు అప్‌డేట్‌లు",
    // Bottom Nav
    home: "హోమ్",
    records: "రికార్డులు",
    familyIdNav: "కుటుంబ ID",
    scheduleNav: "షెడ్యూల్",
    // Quick Actions Subtitles
    registerPatientSub: "మీ సంరక్షణలో కొత్త రోగిని జోడించండి",
    symptomCheckSub: "AI-ఆధారిత ఆరోగ్య మూల్యాంకనం",
    medicineStockSub: "పీహెచ్‌సి మందుల లభ్యతను తనిఖీ చేయండి",
    updateHealthRecordSub: "రోగి ఆరోగ్య సమాచారాన్ని అప్‌డేట్ చేయండి",
    generateFamilyIdSub: "రికార్డుల కోసం కుటుంబ గ్రూప్‌ను సృష్టించండి",
    healthLibrarySub: "విద్యా సాధనాలు మరియు అధికారిక పీహెచ్‌సి వీడియోలకు ప్రవేశం",
    // Welcome Actions
    registerNewPatient: "కొత్త రోగిని రిజిస్టర్ చేయండి",
    updateHealthRecords: "ఆరోగ్య రికార్డులను అప్‌డేట్ చేయండి"
  }
};
const LoginPage = ({ onLogin, currentLanguage }) => {
  const [ashaId, setAshaId] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!ashaId.trim() || !dob) {
      setError(translations[currentLanguage].errorBoth);
      return;
    }
    if (ashaId.length < 3) {
      setError(translations[currentLanguage].errorId);
      return;
    }
    onLogin({ ashaId, dob });
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <h1>{translations[currentLanguage].appTitle}</h1>
            <div className="logo-icon">🏥</div>
          </div>
          <h2>{translations[currentLanguage].loginTitle}</h2>
          <p>{translations[currentLanguage].loginSubtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              <AlertCircle size={16} />
              {error}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="ashaId">{translations[currentLanguage].labelAshaId}</label>
            <input
              type="text"
              id="ashaId"
              value={ashaId}
              onChange={(e) => setAshaId(e.target.value)}
              placeholder={translations[currentLanguage].placeholderAshaId}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">{translations[currentLanguage].labelDob}</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            <Key size={18} />
            {translations[currentLanguage].loginButton}
          </button>
        </form>
        <div className="login-footer">
          <p>{translations[currentLanguage].helpText}</p>
        </div>
      </div>
    </div>
  );
};
// Family ID Generator Component
const FamilyIdGenerator = () => {
  const [headPatientId, setHeadPatientId] = useState('');
  const [isHofVerified, setIsHofVerified] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(''); // 'verifying', 'verified', 'failed'
  const [familyMembers, setFamilyMembers] = useState([
    { patientId: '', relation: '' }
  ]);
  const [generatedId, setGeneratedId] = useState('');
  // Mock function to verify Head of Family ID
  const verifyHeadOfFamily = async () => {
    if (!headPatientId.trim()) {
      alert('Please enter Head of Family Patient ID');
      return;
    }
    setVerificationStatus('verifying');
   
    // Simulate API call to verify patient ID
    try {
      // Mock verification - in real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
     
      // Simulate successful verification for demo
      // In real app, check response from backend
      const isValid = headPatientId.length >= 3; // Simple validation for demo
     
      if (isValid) {
        setIsHofVerified(true);
        setVerificationStatus('verified');
      } else {
        setIsHofVerified(false);
        setVerificationStatus('failed');
        alert('Invalid Head of Family Patient ID. Please check and try again.');
      }
    } catch (error) {
      setIsHofVerified(false);
      setVerificationStatus('failed');
      alert('Verification failed. Please try again.');
    }
  };
  const resetVerification = () => {
    setIsHofVerified(false);
    setVerificationStatus('');
    setHeadPatientId('');
    setFamilyMembers([{ patientId: '', relation: '' }]);
  };
  const addFamilyMember = () => {
    if (isHofVerified) {
      setFamilyMembers([...familyMembers, { patientId: '', relation: '' }]);
    }
  };
  const removeFamilyMember = (index) => {
    if (familyMembers.length > 1) {
      const updated = familyMembers.filter((_, i) => i !== index);
      setFamilyMembers(updated);
    }
  };
  const updateFamilyMember = (index, field, value) => {
    const updated = familyMembers.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setFamilyMembers(updated);
  };
  const generateFamilyId = () => {
    if (!isHofVerified) {
      alert('Please verify Head of Family ID first');
      return;
    }
    if (!headPatientId.trim()) {
      alert('Please enter Head of Family Patient ID');
      return;
    }
    // Validate family members
    const validMembers = familyMembers.filter(member =>
      member.patientId.trim() && member.relation.trim()
    );
    if (validMembers.length === 0) {
      alert('Please add at least one family member with Patient ID and Relation');
      return;
    }
    const timestamp = new Date().getTime().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    const familyId = `FAM-${headPatientId.toUpperCase()}-${timestamp}-${random}`.toUpperCase();
   
    setGeneratedId(familyId);
  };
  return (
    <div className="tab-content">
      <div className="tab-header">
        <h2>Generate Family ID</h2>
        <p>Create a unique family ID to link family members together</p>
      </div>
      <section className="section">
        <div className="family-form">
          {/* Head of Family Section */}
          <div className="hof-section">
            <div className="section-header">
              <h4>Head of Family Verification</h4>
              {isHofVerified && (
                <span className="verification-badge verified">
                  <CheckCircle size={16} />
                  Verified
                </span>
              )}
            </div>
           
            <div className="hof-input-group">
              <div className="form-group full-width">
                <label>Head of Family Patient ID *</label>
                <div className="input-with-verification">
                  <input
                    type="text"
                    value={headPatientId}
                    onChange={(e) => {
                      setHeadPatientId(e.target.value);
                      // Reset verification if ID changes
                      if (isHofVerified) {
                        setIsHofVerified(false);
                        setVerificationStatus('');
                      }
                    }}
                    placeholder="Enter patient ID of family head"
                    required
                    disabled={verificationStatus === 'verifying'}
                  />
                  {!isHofVerified && (
                    <button
                      type="button"
                      onClick={verifyHeadOfFamily}
                      disabled={!headPatientId.trim() || verificationStatus === 'verifying'}
                      className="verify-btn"
                    >
                      {verificationStatus === 'verifying' ? (
                        <>Verifying...</>
                      ) : (
                        <>Verify ID</>
                      )}
                    </button>
                  )}
                  {isHofVerified && (
                    <button
                      type="button"
                      onClick={resetVerification}
                      className="reset-verification-btn"
                    >
                      <XCircle size={16} />
                      Change ID
                    </button>
                  )}
                </div>
                {verificationStatus === 'failed' && (
                  <p className="error-text">Invalid Patient ID. Please check and try again.</p>
                )}
              </div>
            </div>
          </div>
          {/* Family Members Section - Only show if HOF is verified */}
          {isHofVerified && (
            <div className="family-members-section">
              <div className="section-header">
                <h4>Family Members</h4>
                <button
                  type="button"
                  onClick={addFamilyMember}
                  className="btn-outline"
                >
                  <Plus size={16} />
                  Add Member
                </button>
              </div>
              <div className="members-list">
                {familyMembers.map((member, index) => (
                  <div key={index} className="family-member-row">
                    <div className="form-group">
                      <label>Patient ID</label>
                      <input
                        type="text"
                        value={member.patientId}
                        onChange={(e) => updateFamilyMember(index, 'patientId', e.target.value)}
                        placeholder="Enter patient ID"
                      />
                    </div>
                    <div className="form-group">
                      <label>Relation to Head</label>
                      <select
                        value={member.relation}
                        onChange={(e) => updateFamilyMember(index, 'relation', e.target.value)}
                      >
                        <option value="">Select Relation</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {familyMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFamilyMember(index)}
                        className="remove-member-btn"
                        title="Remove member"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  onClick={generateFamilyId}
                  className="btn-primary"
                >
                  <FolderPlus size={16} />
                  Generate Family ID
                </button>
              </div>
            </div>
          )}
          {generatedId && (
            <div className="generated-id-section">
              <h4>Generated Family ID</h4>
              <div className="family-id-display">
                <code>{generatedId}</code>
                <button
                  onClick={() => navigator.clipboard.writeText(generatedId)}
                  className="btn-sm primary"
                >
                  Copy ID
                </button>
              </div>
              <p className="note">
                Note: Share this Family ID with all family members for linking their records.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
// Update Family Records Component
const UpdateFamilyRecords = ({ currentLanguage }) => {
  const [familyId, setFamilyId] = useState('');
  const [familyData, setFamilyData] = useState(null);
  const [updates, setUpdates] = useState({});
  const fetchFamilyData = () => {
    if (!familyId.trim()) {
      alert(translations[currentLanguage].alertFamilyId);
      return;
    }
    const mockFamilyData = {
      familyId: familyId,
      head: {
        name: 'Ramesh Kumar',
        patientId: 'PAT002',
        age: 65,
        gender: 'Male'
      },
      members: [
        { name: 'Sita Devi', patientId: 'PAT003', relation: 'spouse', age: 62, gender: 'Female' },
        { name: 'Amit Kumar', patientId: 'PAT004', relation: 'child', age: 35, gender: 'Male' },
        { name: 'Priya Kumar', patientId: 'PAT005', relation: 'child', age: 32, gender: 'Female' }
      ]
    };
    setFamilyData(mockFamilyData);
  };
  const handleUpdate = (patientId, field, value) => {
    setUpdates(prev => ({
      ...prev,
      [patientId]: {
        ...prev[patientId],
        [field]: value
      }
    }));
  };
  const submitUpdates = () => {
    console.log('Updates to submit:', updates);
    alert(translations[currentLanguage].successUpdate);
    setUpdates({});
  };
  return (
    <div className="tab-content">
      <div className="tab-header">
        <h2>{translations[currentLanguage].updateFamilyTitle}</h2>
        <p>{translations[currentLanguage].updateFamilySubtitle}</p>
      </div>
      <section className="section">
        <div className="family-search">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              value={familyId}
              onChange={(e) => setFamilyId(e.target.value)}
              placeholder={translations[currentLanguage].familyIdPlaceholder}
            />
            <button onClick={fetchFamilyData} className="btn-primary">
              {translations[currentLanguage].searchFamily}
            </button>
          </div>
        </div>
        {familyData && (
          <div className="family-records">
            <div className="family-header">
              <h3>{translations[currentLanguage].familyHeader}{familyData.familyId}</h3>
              <div className="family-stats">
                <span>{familyData.members.length + 1} {translations[currentLanguage].membersCount}</span>
              </div>
            </div>
            <div className="family-members-list">
              <div className="family-member-card">
                <div className="member-header">
                  <div className="member-info">
                    <UsersIcon size={20} />
                    <div>
                      <h4>{familyData.head.name} {translations[currentLanguage].headRole}</h4>
                      <p>{translations[currentLanguage].patientInfo.replace('{id}', familyData.head.patientId).replace('{age}', familyData.head.age).replace('{gender}', familyData.head.gender)}</p>
                    </div>
                  </div>
                </div>
                <div className="health-updates">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>{translations[currentLanguage].bpLabel}</label>
                      <input
                        type="text"
                        placeholder={translations[currentLanguage].bpPlaceholder}
                        onChange={(e) => handleUpdate(familyData.head.patientId, 'bp', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>{translations[currentLanguage].sugarLabel}</label>
                      <input
                        type="text"
                        placeholder={translations[currentLanguage].sugarPlaceholder}
                        onChange={(e) => handleUpdate(familyData.head.patientId, 'sugar', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>{translations[currentLanguage].weightLabel}</label>
                      <input
                        type="text"
                        placeholder={translations[currentLanguage].weightPlaceholder}
                        onChange={(e) => handleUpdate(familyData.head.patientId, 'weight', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {familyData.members.map((member, index) => (
                <div key={member.patientId} className="family-member-card">
                  <div className="member-header">
                    <div className="member-info">
                      <User size={20} />
                      <div>
                        <h4>{member.name} ({member.relation})</h4>
                        <p>{translations[currentLanguage].patientInfo.replace('{id}', member.patientId).replace('{age}', member.age).replace('{gender}', member.gender)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="health-updates">
                    <div className="form-grid">
                      <div className="form-group">
                        <label>{translations[currentLanguage].bpLabel}</label>
                        <input
                          type="text"
                          placeholder={translations[currentLanguage].bpPlaceholder}
                          onChange={(e) => handleUpdate(member.patientId, 'bp', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>{translations[currentLanguage].sugarLabel}</label>
                        <input
                          type="text"
                          placeholder={translations[currentLanguage].sugarPlaceholder}
                          onChange={(e) => handleUpdate(member.patientId, 'sugar', e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>{translations[currentLanguage].weightLabel}</label>
                        <input
                          type="text"
                          placeholder={translations[currentLanguage].weightPlaceholder}
                          onChange={(e) => handleUpdate(member.patientId, 'weight', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="form-actions">
              <button onClick={submitUpdates} className="btn-primary">
                <FileText size={16} />
                {translations[currentLanguage].updateAll}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
const ChatBot = ({ isOpen, onClose, currentLanguage }) => {
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            content: 'Hello! I\'m your symptom checker assistant. Please describe your symptoms and I\'ll try to help you understand them better. Remember, I\'m not a replacement for professional medical advice.',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [isListening, setIsListening] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const messagesEndRef = React.useRef(null)
    const recognitionRef = React.useRef(null)
    const speechSynthesisRef = React.useRef(null)
    const offlineSymptomsHindi = {
        'योजना': {
            info: 'हाँ ,जैसा कि ऐप के नवीनतम अपडेट और सरकारी योजनाओं के अनुभाग में लिखा गया है कि आयुष्मान भारत के अंतर्गत 70 वर्ष या उससे अधिक आयु के नागरिक, चाहे उनकी आर्थिक स्थिति कुछ भी हो, अब आयुष्मान वय वंदना कार्ड के माध्यम से 5 लाख रुपये तक के मुफ्त इलाज के लिए पात्र हैं।',
            suggestions: ['अपने नजदीकी सरकारी अस्पताल, सीएससी (कॉमन सर्विस सेंटर), या पीएचसी में जाकर पंजीकरण कराएं और अपना आयुष्मान कार्ड प्राप्त करें।आधार, आयु प्रमाण और पता प्रमाण लेकर जाएँ — पंजीकरण तेज़ और मुफ्त है।']
        },
        'सिरदर्द': {
            info: 'सिरदर्द तनाव, निर्जलीकरण, आंखों के तनाव या नींद की कमी के कारण हो सकता है। एक शांत, अंधेरे कमरे में आराम करने और हाइड्रेटेड रहने का प्रयास करें।',
            suggestions: ['अंधेरे कमरे में आराम करें', 'हाइड्रेटेड रहें', 'ठंडा सेक लगाएं', 'ओवर-द-काउंटर दर्द निवारक पर विचार करें']
        },
        'बुखार': {
            info: 'बुखार अक्सर एक संकेत है कि आपका शरीर संक्रमण से लड़ रहा है। अपने तापमान की निगरानी करें और हाइड्रेटेड रहें।',
            suggestions: ['आराम और नींद लें', 'भरपूर तरल पदार्थ पिएं', 'नियमित रूप से तापमान लें', 'यदि बुखार अधिक या लगातार है तो चिकित्सक की सलाह लें']
        },
        'खांसी': {
            info: 'खांसी सूखी या उत्पादक हो सकती है और यह संक्रमण, एलर्जी या जलन के कारण हो सकती है।',
            suggestions: ['हाइड्रेटेड रहें', 'आराम के लिए शहद का उपयोग करें', 'जलन पैदा करने वाली चीजों से बचें', 'यदि लगातार खांसी है तो डॉक्टर से मिलें']
        },
        'गले में खराश': {
            info: 'गले में खराश आमतौर पर वायरल संक्रमण, बैक्टीरियल संक्रमण या जलन के कारण होती है।',
            suggestions: ['गर्म नमक के पानी से गरारे करें', 'हाइड्रेटेड रहें', 'गले की लोज़ेंजेस का उपयोग करें', 'अपनी आवाज़ को आराम दें']
        },
        'मतली': {
            info: 'मतली मोशन सिकनेस, फूड पॉइजनिंग या तनाव सहित विभिन्न कारकों से हो सकती है।',
            suggestions: ['छोटे, हल्के भोजन खाएं', 'छोटे घूंट में हाइड्रेटेड रहें', 'ताज़ी हवा लें', 'आरामदायक स्थिति में आराम करें']
        },
        'चक्कर आना': {
            info: 'चक्कर निर्जलीकरण, आंतरिक कान की समस्याओं या अचानक स्थिति परिवर्तन के कारण हो सकते हैं।',
            suggestions: ['तुरंत बैठ जाएं या लेट जाएं', 'हाइड्रेटेड रहें', 'स्थिति बदलते समय धीरे-धीरे चलें', 'अचानक हरकतों से बचें']
        },
        'थकान': {
            info: 'थकान नींद की कमी, तनाव, खराब आहार या अंतर्निहित स्वास्थ्य स्थितियों के कारण हो सकती है।',
            suggestions: ['पर्याप्त नींद सुनिश्चित करें', 'नियमित नींद का समय बनाए रखें', 'संतुलित भोजन खाएं', 'हल्के व्यायाम पर विचार करें']
        },
        'पेट दर्द': {
            info: 'पेट दर्द के कई कारण हो सकते हैं जिनमें अपच, गैस या अधिक गंभीर स्थितियां शामिल हैं।',
            suggestions: ['मसालेदार या चिकना भोजन से बचें', 'हल्की गर्मी का उपयोग करें', 'हाइड्रेटेड रहें', 'छोटे, लगातार भोजन खाएं']
        }
    }
    const offlineSymptomsEnglish = {
        'headache': {
            info: 'Headaches can be caused by stress, dehydration, eye strain, or lack of sleep. Try resting in a quiet, dark room and staying hydrated.',
            suggestions: ['Rest in a dark room', 'Stay hydrated', 'Apply cold compress', 'Consider over-the-counter pain relief']
        },
        'fever': {
            info: 'A fever is often a sign your body is fighting an infection. Monitor your temperature and stay hydrated.',
            suggestions: ['Rest and sleep', 'Drink plenty of fluids', 'Take temperature regularly', 'Seek medical attention if fever is high or persistent']
        },
        'cough': {
            info: 'Coughs can be dry or productive and may be caused by infections, allergies, or irritants.',
            suggestions: ['Stay hydrated', 'Use honey for soothing', 'Avoid irritants', 'Consider seeing a doctor if persistent']
        },
        'sore throat': {
            info: 'Sore throats are commonly caused by viral infections, bacterial infections, or irritation.',
            suggestions: ['Gargle with warm salt water', 'Stay hydrated', 'Use throat lozenges', 'Rest your voice']
        },
        'nausea': {
            info: 'Nausea can be caused by various factors including motion sickness, food poisoning, or stress.',
            suggestions: ['Eat small, bland meals', 'Stay hydrated with small sips', 'Get fresh air', 'Rest in a comfortable position']
        },
        'dizziness': {
            info: 'Dizziness can result from dehydration, inner ear issues, or sudden position changes.',
            suggestions: ['Sit or lie down immediately', 'Stay hydrated', 'Move slowly when changing positions', 'Avoid sudden movements']
        },
        'fatigue': {
            info: 'Fatigue can be caused by lack of sleep, stress, poor diet, or underlying health conditions.',
            suggestions: ['Ensure adequate sleep', 'Maintain regular sleep schedule', 'Eat balanced meals', 'Consider light exercise']
        },
        'stomach pain': {
            info: 'Stomach pain can have many causes including indigestion, gas, or more serious conditions.',
            suggestions: ['Avoid spicy or fatty foods', 'Try gentle heat application', 'Stay hydrated', 'Eat small, frequent meals']
        }
    }
    React.useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine)
        window.addEventListener('online', handleOnlineStatus)
        window.addEventListener('offline', handleOnlineStatus)
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            recognitionRef.current = new SpeechRecognition()
            recognitionRef.current.continuous = false
            recognitionRef.current.interimResults = false
            recognitionRef.current.lang = 'hi-IN'
            recognitionRef.current.onstart = () => {
                setIsListening(true)
            }
            recognitionRef.current.onend = () => {
                setIsListening(false)
            }
            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript
                setInputValue(prev => prev + transcript)
            }
            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error)
                setIsListening(false)
            }
        }
        speechSynthesisRef.current = window.speechSynthesis
        return () => {
            window.removeEventListener('online', handleOnlineStatus)
            window.removeEventListener('offline', handleOnlineStatus)
            if (recognitionRef.current) {
                recognitionRef.current.stop()
            }
            if (speechSynthesisRef.current) {
                speechSynthesisRef.current.cancel()
            }
        }
    }, [])
    React.useEffect(() => {
        scrollToBottom()
    }, [messages])
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const detectLanguage = (text) => {
        const hindiRegex = /[\u0900-\u097F]/
        return hindiRegex.test(text) ? 'hindi' : 'english'
    }
    const findSymptomMatch = (input, language) => {
        const lowercaseInput = input.toLowerCase()
        const symptomsData = language === 'hindi' ? offlineSymptomsHindi : offlineSymptomsEnglish
      
        for (const [symptom, data] of Object.entries(symptomsData)) {
            if (lowercaseInput.includes(symptom.toLowerCase()) ||
                lowercaseInput.includes(symptom.toLowerCase().replace(' ', ''))) {
                return { symptom, ...data, language }
            }
        }
        return null
    }
    const searchWikipedia = async (query, language = 'en') => {
        try {
            const wikiLang = language === 'hindi' ? 'hi' : 'en'
            const searchResponse = await fetch(
                `https://${wikiLang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
            )
            if (!searchResponse.ok) {
                throw new Error('Wikipedia search failed')
            }
            const data = await searchResponse.json()
            return {
                title: data.title,
                extract: data.extract,
                url: data.content_urls?.desktop?.page
            }
        } catch (error) {
            console.error('Wikipedia API error:', error)
            return null
        }
    }
    const speakText = (text, language = 'hindi') => {
        if (!speechSynthesisRef.current) {
            alert(translations[currentLanguage].ttsNotSupported);
            return
        }
        speechSynthesisRef.current.cancel()
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = language === 'hindi' ? 'hi-IN' : 'en-US'
        utterance.rate = 0.9
        utterance.pitch = 1.0
        utterance.volume = 1.0
        const voices = speechSynthesisRef.current.getVoices()
        const hindiVoice = voices.find(voice =>
            voice.lang === 'hi-IN' || voice.lang.startsWith('hi')
        )
        const englishVoice = voices.find(voice =>
            voice.lang === 'en-US' || voice.lang.startsWith('en')
        )
        if (language === 'hindi' && hindiVoice) {
            utterance.voice = hindiVoice
        } else if (englishVoice) {
            utterance.voice = englishVoice
        }
        utterance.onstart = () => {
            setIsSpeaking(true)
        }
        utterance.onend = () => {
            setIsSpeaking(false)
        }
        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error)
            setIsSpeaking(false)
            alert(translations[currentLanguage].audioError);
        }
        speechSynthesisRef.current.speak(utterance)
    }
    const stopSpeaking = () => {
        if (speechSynthesisRef.current) {
            speechSynthesisRef.current.cancel()
            setIsSpeaking(false)
        }
    }
    const generateBotResponse = async (userMessage) => {
        setIsTyping(true)
        try {
            const language = detectLanguage(userMessage)
            const symptomMatch = findSymptomMatch(userMessage, language)
            if (isOnline) {
                let wikiQuery
                if (language === 'hindi') {
                    wikiQuery = userMessage.toLowerCase().includes('लक्षण')
                        ? userMessage.replace(/लक्षण|लक्षणों/gi, '').trim()
                        : `${userMessage} लक्षण`
                } else {
                    wikiQuery = userMessage.toLowerCase().includes('symptom')
                        ? userMessage.replace(/symptom|symptoms/gi, '').trim()
                        : `${userMessage} symptoms`
                }
                const wikiData = await searchWikipedia(wikiQuery, language)
                if (symptomMatch) {
                    let response = ''
                    if (language === 'hindi') {
                        if (symptomMatch.symptom === 'योजना') {
                            response = `${symptomMatch.info}\n\n`
                        } else {
                            response = `आपके लक्षणों के आधार पर, मुझे यह जानकारी मिली:\n\n${symptomMatch.info}\n\n`
                        }
                        response += `**सुझाव:**\n${symptomMatch.suggestions.map(s => `• ${s}`).join('\n')}\n\n`
                    } else {
                        response = `Based on your symptoms, here's what I found:\n\n${symptomMatch.info}\n\n`
                        response += `**Suggestions:**\n${symptomMatch.suggestions.map(s => `• ${s}`).join('\n')}\n\n`
                    }
                    if (wikiData && wikiData.extract) {
                        response += language === 'hindi'
                            ? `**अतिरिक्त जानकारी:**\n${wikiData.extract.substring(0, 300)}...\n\n`
                            : `**Additional Information:**\n${wikiData.extract.substring(0, 300)}...\n\n`
                        if (wikiData.url) {
                            response += language === 'hindi'
                                ? `[विकिपीडिया पर और जानें](${wikiData.url})`
                                : `[Learn more on Wikipedia](${wikiData.url})`
                        }
                    }
                    return response
                } else if (wikiData && wikiData.extract) {
                    return language === 'hindi'
                        ? `मुझे "${wikiData.title}" के बारे में कुछ सामान्य जानकारी मिली:\n\n${wikiData.extract}\n\n**महत्वपूर्ण:** यह सामान्य जानकारी है। कृपया उचित निदान और उपचार के लिए स्वास्थ्य देखभाल पेशेवर से परामर्श लें.\n\n${wikiData.url ? `[विकिपीडिया पर और जानें](${wikiData.url})` : ''}`
                        : `I found some general information about "${wikiData.title}":\n\n${wikiData.extract}\n\n**Important:** This is general information. Please consult a healthcare professional for proper diagnosis and treatment.\n\n${wikiData.url ? `[Learn more on Wikipedia](${wikiData.url})` : ''}`
                }
            }
            if (symptomMatch) {
                let response = ''
                if (language === 'hindi') {
                    if (symptomMatch.symptom === 'योजना') {
                        response = `${symptomMatch.info}\n\n`
                    } else {
                        response = `आपके लक्षणों के बारे में मेरी जानकारी:\n\n${symptomMatch.info}\n\n`
                    }
                    response += `**सुझाव:**\n${symptomMatch.suggestions.map(s => `• ${s}`).join('\n')}\n\n`
                    response += `**नोट:** वर्तमान में ऑफलाइन - सीमित जानकारी उपलब्ध है।`
                } else {
                    response = `Here's what I know about your symptoms:\n\n${symptomMatch.info}\n\n`
                    response += `**Suggestions:**\n${symptomMatch.suggestions.map(s => `• ${s}`).join('\n')}\n\n`
                    response += `**Note:** Currently offline - limited information available.`
                }
                return response
            }
            return language === 'hindi'
                ? `मैं समझता हूं कि आपको कुछ लक्षणों का अनुभव हो रहा है। जबकि मेरे पास आपके द्वारा वर्णित के बारे में विशिष्ट जानकारी नहीं है, यहां कुछ सामान्य सिफारिशें दी गई हैं:\n\n• अपने लक्षणों पर नज़र रखें\n• हाइड्रेटेड रहें\n• पर्याप्त आराम लें\n• ज्ञात ट्रिगर्स से बचें\n• यदि लक्षण बने रहते हैं या बिगड़ते हैं तो स्वास्थ्य देखभाल पेशेवर से परामर्श लें\n\n**महत्वपूर्ण:** मैं पेशेवर चिकित्सा सलाह का विकल्प नहीं हूं। कृपया उचित निदान और उपचार के लिए डॉक्टर से मिलें।`
                : `I understand you're experiencing some symptoms. While I don't have specific information about what you're describing, here are some general recommendations:\n\n• Monitor your symptoms\n• Stay hydrated\n• Get adequate rest\n• Avoid known triggers\n• Consult a healthcare professional if symptoms persist or worsen\n\n**Important:** I'm not a substitute for professional medical advice. Please see a doctor for proper diagnosis and treatment.`
        } finally {
            setIsTyping(false)
        }
    }
    const toggleSpeechRecognition = () => {
        if (!recognitionRef.current) {
            alert(translations[currentLanguage].speechNotSupported);
            return
        }
        if (isListening) {
            recognitionRef.current.stop()
        } else {
            recognitionRef.current.start()
        }
    }
    const handleBotMessageSpeak = (messageContent, messageIndex) => {
        const language = detectLanguage(messageContent)
        const cleanText = messageContent
            .replace(/\*\*/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/\n/g, '. ')
            .replace(/•/g, '')
        if (isSpeaking) {
            stopSpeaking()
        } else {
            speakText(cleanText, language)
        }
    }
    const handleSendMessage = async () => {
        if (!inputValue.trim()) return
        const userMessage = {
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        }
        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        const botResponse = await generateBotResponse(inputValue)
        const botMessage = {
            type: 'bot',
            content: botResponse,
            timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }
    const formatMessage = (content) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('**') && line.endsWith('**')) {
                return <div key={index} className="message-heading">{line.replace(/\*\*/g, '')}</div>
            }
            if (line.startsWith('• ')) {
                return <div key={index} className="message-bullet">{line}</div>
            }
            if (line.includes('[') && line.includes('](')) {
                const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/)
                if (linkMatch) {
                    return (
                        <div key={index}>
                            <a href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="message-link">
                                {linkMatch[1]}
                            </a>
                        </div>
                    )
                }
            }
            return line ? <div key={index}>{line}</div> : <br key={index} />
        })
    }
    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="header-content">
                            <div className="bot-avatar">🏥</div>
                            <div className="header-text">
                                <h3>{translations[currentLanguage].chatHeader}</h3>
                                <span className={`status ${isOnline ? 'online' : 'offline'}`}>
                                    {isOnline ? translations[currentLanguage].statusOnline : translations[currentLanguage].statusOffline}
                                </span>
                            </div>
                        </div>
                        <button
                            className="close-btn"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.type}`}>
                                <div className="message-content">
                                    {formatMessage(message.content, index)}
                                    {message.type === 'bot' && (
                                        <button
                                            className={`speaker-btn ${isSpeaking ? 'speaking' : ''}`}
                                            onClick={() => handleBotMessageSpeak(message.content, index)}
                                            title={isSpeaking ? translations[currentLanguage].speakerStop : translations[currentLanguage].speakerPlay}
                                        >
                                            {isSpeaking ? '⏹️' : '🔊'}
                                        </button>
                                    )}
                                </div>
                                <div className="message-time">
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message bot typing">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chat-input">
                        <div className="input-container">
                            <textarea
                                className='message-input'
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={translations[currentLanguage].chatPlaceholder}
                                rows="1"
                            />
                            <button
                                onClick={toggleSpeechRecognition}
                                className={`mic-btn ${isListening ? 'listening' : ''}`}
                                type="button"
                                title={translations[currentLanguage].micTitle}
                            >
                                🎤
                            </button>
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="send-btn"
                            >
                                {translations[currentLanguage].sendIcon}
                            </button>
                        </div>
                        <div className="disclaimer">
                            {translations[currentLanguage].disclaimer}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
const handleRegisterPatient = () => {
    window.open('https://registration-flame-psi.vercel.app/', '_blank');
};
const handleUpdateHealthRecord = () => {
    window.open('https://asha-voice-form.vercel.app/', '_blank');
};
const AshaConnectApp = () => {
    const { t, i18n } = useTranslation();
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activePatient, setActivePatient] = useState(null);
    const [showChatbot, setShowChatbot] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
  
    const switchLanguage = (lang) => {
   setCurrentLanguage(lang);
     };
  
    const [patients] = useState([
        {
            id: 1,
            uniqueId: 'PAT001',
            name: 'Priya Sharma',
            age: 28,
            gender: 'Female',
            lastVisit: '2025-09-15',
            status: 'Pregnant',
            phone: '+91 9876543210',
            address: 'House No. 123, Rajaji Nagar, Bangalore',
            conditions: ['Pregnancy', 'Anemia'],
            nextVisit: '2025-10-05',
            priority: 'high',
            healthRecords: [
                { date: '2025-09-15', bp: '110/70', sugar: '120', weight: '58kg', notes: 'Regular checkup, advised iron supplements' }
            ]
        },
        {
            id: 2,
            uniqueId: 'PAT002',
            name: 'Ramesh Kumar',
            age: 65,
            gender: 'Male',
            lastVisit: '2025-09-18',
            status: 'Diabetes',
            phone: '+91 8765432109',
            address: 'No. 45, Gandhi Road, Chennai',
            conditions: ['Diabetes', 'Hypertension'],
            nextVisit: '2025-10-10',
            priority: 'medium',
            healthRecords: [
                { date: '2025-09-18', bp: '140/90', sugar: '180', weight: '72kg', notes: 'Blood sugar high, advised diet control' }
            ]
        },
    ]);
    const [healthMetrics] = useState({
        totalPatients: 45,
        activeCases: 12,
        completedVisits: 28,
        pendingTasks: 8
    });
    const [medicineStock] = useState([
        { id: 1, name: 'Paracetamol', dosage: '500mg', stock: 1500, required: 2000, status: 'low' },
        { id: 2, name: 'Metformin', dosage: '500mg', stock: 800, required: 1000, status: 'medium' },
        { id: 3, name: 'Iron Tablets', dosage: '100mg', stock: 1200, required: 1500, status: 'medium' },
        { id: 4, name: 'Amoxicillin', dosage: '250mg', stock: 3000, required: 2500, status: 'good' },
        { id: 5, name: 'Vitamin B Complex', dosage: '100mg', stock: 500, required: 1000, status: 'low' }
    ]);
    const [healthLibraryTopics] = useState([
        { id: 1, title: 'Pregnancy Care', content: 'Complete guide for expecting mothers...', category: 'Maternal Health' },
        { id: 2, title: 'Diabetes Management', content: 'Managing blood sugar levels...', category: 'Chronic Care' },
        { id: 3, title: 'Child Nutrition', content: 'Nutrition guide for children...', category: 'Pediatric Care' },
    ]);
    const [notifications] = useState([
        { id: 1, message: 'Medicine stock low for Paracetamol', time: '10 min ago', read: false, type: 'stock' },
        { id: 2, message: 'Health record updated for Ramesh Kumar', time: '1 hour ago', read: true, type: 'update' },
    ]);
    const handleLogin = (credentials) => {
        const mockUser = {
            id: 1,
            name: 'Anita Desai',
            email: 'anita.desai@asha.org',
            phone: '+91 9876543210',
            location: 'Bangalore, Karnataka',
            patientsCount: patients.length,
            rating: 4.9,
            joinedDate: '2022-03-15',
            designation: 'Senior ASHA Worker',
            ashaId: credentials.ashaId
        };
        setUser(mockUser);
        setIsLoggedIn(true);
    };
    useEffect(() => {
        const savedUser = localStorage.getItem('ashaUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsLoggedIn(true);
        }
    }, []);
    useEffect(() => {
        if (user) {
            localStorage.setItem('ashaUser', JSON.stringify(user));
        }
    }, [user]);
    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('ashaUser');
        setActiveTab('dashboard');
    };
    const DashboardTab = () => (
        <div className="tab-content">
            <section className="welcome-section">
                <div className="welcome-content">
                    <div className="welcome-text">
                          <h2>{translations[currentLanguage].welcome.replace('{name}', user?.name)}</h2>
  <p>{translations[currentLanguage].dedication}</p>
  <div className="asha-info">
    <span>ASHA ID: {user?.ashaId}</span>
    <span>Location: {user?.location}</span>
  </div>
                    </div>
                    <div className="welcome-actions">
                        <button className="btn-primary" onClick={handleRegisterPatient}>
                            <UserPlus size={16} />
                            {translations[currentLanguage].registerNewPatient}
                        </button>
                        <button className="btn-primary" onClick={() => setActiveTab('family-id')}>
                            <FolderPlus size={16} />
                            {translations[currentLanguage].generateFamilyId}
                        </button>
                        <button className="btn-primary" onClick={handleHealthRecord}>
                            <UsersIcon size={16} />
                            {translations[currentLanguage].updateHealthRecords}
                        </button>
                    </div>
                </div>
          
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon-wrapper teal">
                            <Users className="stat-icon" />
                        </div>
                        <div className="stat-content">
                              <h3>{healthMetrics.totalPatients}</h3>
  <p>{translations[currentLanguage].totalPatients}</p>
                            <span className="stat-trend positive">
                                <TrendingUp size={14} />
                                +5% this month
                            </span>
                        </div>
                    </div>
              
                    <div className="stat-card">
                        <div className="stat-icon-wrapper aqua">
                            <Activity className="stat-icon" />
                        </div>
                        <div className="stat-content">
                           <h3>{healthMetrics.activeCases}</h3>
  <p>{translations[currentLanguage].activeCases}</p>
                            <span className="stat-trend positive">
                                <TrendingUp size={14} />
                                +2 today
                            </span>
                        </div>
                    </div>
              
                    <div className="stat-card">
                        <div className="stat-icon-wrapper mint">
                            <ClipboardList className="stat-icon" />
                        </div>
                        <div className="stat-content">
                            <h3>{healthMetrics.completedVisits}</h3>
  <p>{translations[currentLanguage].completedVisits}</p>
                            <span className="stat-trend positive">
                                <TrendingUp size={14} />
                                98% success rate
                            </span>
                        </div>
                    </div>
              
                    <div className="stat-card">
                        <div className="stat-icon-wrapper cyan">
                            <Clock className="stat-icon" />
                        </div>
                        <div className="stat-content">
                            <h3>{healthMetrics.pendingTasks}</h3>
  <p>{translations[currentLanguage].pendingTasks}</p>
                            <span className="stat-trend">
                                Due today: 3
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="section-header">
                    <h3 className="section-title">{translations[currentLanguage].quickActions}</h3>
                </div>
                <div className="quick-actions-grid">
                    <button className="action-card" onClick={handleRegisterPatient}>
                        <div className="action-icon-wrapper teal">
                            <UserPlus className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].registerPatient}</span>
                        <p>{translations[currentLanguage].registerPatientSub}</p>
                    </button>
              
                    <button className="action-card" onClick={() => setShowChatbot(true)}>
                        <div className="action-icon-wrapper aqua">
                            <Stethoscope className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].symptomCheck}</span>
                        <p>{translations[currentLanguage].symptomCheckSub}</p>
                    </button>
              
                    <button className="action-card" onClick={() => setActiveTab('medicine')}>
                        <div className="action-icon-wrapper red">
                            <Pill className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].medicineStock}</span>
                        <p>{translations[currentLanguage].medicineStockSub}</p>
                    </button>
                    <button className="action-card" onClick={handleHealthRecord}>
                        <div className="action-icon-wrapper mint">
                            <FileText className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].updateHealthRecord}</span>
                        <p>{translations[currentLanguage].updateHealthRecordSub}</p>
                    </button>
              
                    <button className="action-card" onClick={() => setActiveTab('family-id')}>
                        <div className="action-icon-wrapper purple">
                            <FolderPlus className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].generateFamilyId}</span>
                        <p>{translations[currentLanguage].generateFamilyIdSub}</p>
                    </button>
              
                    <button className="action-card" onClick={() => setActiveTab('library')}>
                        <div className="action-icon-wrapper blue">
                            <BookOpen className="action-icon" />
                        </div>
                        <span>{translations[currentLanguage].healthLibrary}</span>
                        <p>{translations[currentLanguage].healthLibrarySub}</p>
                    </button>
                </div>
            </section>
        </div>
    );
    const MedicineTrackerTab = () => (
        <div className="tab-content">
            <div className="tab-header">
                <h2>{translations[currentLanguage].phcTitle}</h2>
                <p>{translations[currentLanguage].phcSubtitle}</p>
            </div>
          
            <section className="section">
                <div className="search-filter-bar">
                    <div className="search-box">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder={translations[currentLanguage].searchMedicines}
                            className="search-input"
                        />
                    </div>
                    <div
  className="filter-buttons"
  style={{
    display: "flex",
    justifyContent: "space-between", // equal distribution
    gap: "12px", // equal gap
    padding: "16px",
  }}
>
  <button
    className="filter-btn active"
    style={{
      flex: 1, // makes all buttons same width
      padding: "10px 16px",
    }}
  >
    {translations[currentLanguage].filterAll}
  </button>
  <button
    className="filter-btn"
    style={{
      flex: 1,
      padding: "10px 16px",
    }}
  >
    {translations[currentLanguage].filterLow}
  </button>
  <button
    className="filter-btn"
    style={{
      flex: 1,
      padding: "10px 16px",
    }}
  >
    {translations[currentLanguage].filterAdequate}
  </button>
</div>
                </div>
                 <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
      }}
    >
      {medicineStock.map((medicine) => (
        <div
          key={medicine.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            border: "1px solid #e0e7ff",
            borderRadius: "12px",
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            transition: "0.3s ease",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "12px",
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1e3a8a", // deep blue
                }}
              >
                {medicine.name}
              </h3>
              <p
                style={{
                  margin: "4px 0",
                  fontSize: "14px",
                  color: "#475569",
                }}
              >
                {medicine.dosage}
              </p>
              <div style={{ fontSize: "13px", color: "#334155" }}>
                <span style={{ marginRight: "12px" }}>
                  <strong>Stock:</strong> {medicine.stock}
                </span>
                <span>
                  <strong>Required:</strong> {medicine.required}
                </span>
              </div>
            </div>
            <div
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "600",
                background:
                  medicine.status === "good"
                    ? "#d1fae5"
                    : medicine.status === "medium"
                    ? "#fef9c3"
                    : "#fee2e2",
                color:
                  medicine.status === "good"
                    ? "#065f46"
                    : medicine.status === "medium"
                    ? "#92400e"
                    : "#991b1b",
              }}
            >
              {medicine.status === "good"
                ? translations[currentLanguage].statusGood
                : medicine.status === "medium"
                ? translations[currentLanguage].statusMedium
                : translations[currentLanguage].statusLow}
            </div>
          </div>
          {/* Progress Bar */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#e0e7ff",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.min(
                    (medicine.stock / medicine.required) * 100,
                    100
                  )}%`,
                  height: "100%",
                  background:
                    medicine.status === "good"
                      ? "#2563eb"
                      : medicine.status === "medium"
                      ? "#facc15"
                      : "#ef4444",
                  transition: "0.4s ease",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                marginTop: "4px",
                color: "#475569",
              }}
            >
              <span>0</span>
              <span>{medicine.required}</span>
            </div>
          </div>
          {/* Actions */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "8px 12px",
                border: "1px solid #2563eb",
                borderRadius: "8px",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f0f9ff")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              <FileDown size={16} /> {translations[currentLanguage].requestMore}
            </button>
            <button
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "8px 12px",
                border: "1px solid #2563eb",
                borderRadius: "8px",
                background: "white",
                color: "#2563eb",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f0f9ff")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              <Share2 size={16} /> {translations[currentLanguage].reportIssue}
            </button>
          </div>
        </div>
      ))}
    </div>
            </section>
        </div>
    );
    const HealthLibraryTab = () => (
      
        <div className="tab-content">
            <div className="tab-header">
                <h2>{translations[currentLanguage].libraryTitle}</h2>
                <p>{translations[currentLanguage].librarySubtitle}</p>
            </div>
            <section className="section">
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
                <div className="library-filters">
                    <button className="filter-btn active">{translations[currentLanguage].filterAllTopics}</button>
                    <button className="filter-btn">{translations[currentLanguage].filterMaternal}</button>
                    <button className="filter-btn">{translations[currentLanguage].filterChild}</button>
                    <button className="filter-btn">{translations[currentLanguage].filterChronic}</button>
                </div>
                <div className="library-grid">
                    {healthLibraryTopics.map(topic => (
                        <div key={topic.id} className="library-card">
                            <div className="library-card-header">
                                <div className="topic-category">{topic.category}</div>
                                <Book size={20} className="topic-icon" />
                            </div>
                            <h3>{topic.title}</h3>
                            <p>{topic.content}</p>
                            <button className="btn-primary">{translations[currentLanguage].readMore}</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
   const Schedule = () => {
    const [activeFilter, setActiveFilter] = useState('today');
    const [selectedDrive, setSelectedDrive] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    
    // Vaccination drives by ward/area
    const vaccinationDrives = [
        {
            id: 1,
            type: 'routine_immunization',
            ward_number: 'Ward 12',
            area: 'Sector 5, Urban Area',
            location: 'Anganwadi Center, Block C',
            target_population: 245,
            coverage_goal: '95%',
            time: '09:00 AM - 02:00 PM',
            date: '2024-01-15',
            duration: '5 hours',
            priority: 'high',
            status: 'pending',
            vaccines: ['BCG', 'OPV', 'DPT', 'Hepatitis B', 'Measles'],
            target_age_group: '0-5 years',
            households_covered: 45,
            children_registered: 67,
            tasks: [
                'Cold chain maintenance',
                'Vaccine administration',
                'Registration of beneficiaries',
                'AEFI monitoring',
                'Documentation and reporting'
            ],
            supplies_required: [
                'Vaccine carriers',
                'Ice packs',
                'Syringes (0.5ml & 2ml)',
                'AD syringes',
                'Diluents',
                'Cotton & Spirit',
                'MMR kits',
                'Reporting forms'
            ],
            health_worker_assigned: 'ASHA Sunita',
            supervisor: 'ANM Rajeshwari',
            special_instructions: 'Focus on left-out and drop-out children. Check migration families.'
        },
        {
            id: 2,
            type: 'special_campaign',
            ward_number: 'Ward 8',
            area: 'Sector 3, Rural Cluster',
            location: 'Primary School Building',
            target_population: 180,
            coverage_goal: '100%',
            time: '10:00 AM - 04:00 PM',
            date: '2024-01-16',
            duration: '6 hours',
            priority: 'medium',
            status: 'pending',
            vaccines: ['MR Vaccine', 'Vitamin A'],
            target_age_group: '9 months - 15 years',
            households_covered: 32,
            children_registered: 89,
            tasks: [
                'Community mobilization',
                'Line listing of children',
                'Vaccine administration',
                'Vitamin A supplementation',
                'Adverse event monitoring'
            ],
            supplies_required: [
                'MR vaccine vials',
                'Vitamin A capsules',
                'Syringes & needles',
                'Antiseptic solution',
                'AEFI kit',
                'Muster rolls'
            ],
            health_worker_assigned: 'ASHA Priya',
            supervisor: 'MO Dr. Verma',
            special_instructions: 'Coordinate with school teachers. Ensure session microplan is followed.'
        },
        {
            id: 3,
            type: 'outreach_session',
            ward_number: 'Ward 15',
            area: 'Tribal Hamlet',
            location: 'Sub-Center Building',
            target_population: 95,
            coverage_goal: '90%',
            time: '08:00 AM - 01:00 PM',
            date: '2024-01-17',
            duration: '5 hours',
            priority: 'high',
            status: 'upcoming',
            vaccines: ['All Routine Vaccines'],
            target_age_group: '0-5 years & Pregnant Women',
            households_covered: 28,
            children_registered: 42,
            tasks: [
                'Pre-session preparation',
                'Vaccine transportation',
                'Beneficiary registration',
                'Immunization services',
                'Record updating'
            ],
            supplies_required: [
                'Vaccine carrier with ice packs',
                'Immunization register',
                'Mother-child protection cards',
                'Weighing scale',
                'Health education materials'
            ],
            health_worker_assigned: 'ASHA Laxmi',
            supervisor: 'ANM Geeta',
            special_instructions: 'Focus on hard-to-reach areas. Track defaulters.'
        }
    ];

    const getDrivesByFilter = () => {
        const today = '2024-01-15';
        switch (activeFilter) {
            case 'today':
                return vaccinationDrives.filter(drive => drive.date === today);
            case 'upcoming':
                return vaccinationDrives.filter(drive => drive.status === 'upcoming' || drive.date > today);
            case 'completed':
                return vaccinationDrives.filter(drive => drive.status === 'completed');
            default:
                return vaccinationDrives;
        }
    };

    const getPriorityStyles = (priority) => {
        const styles = {
            high: { background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' },
            medium: { background: '#fffbeb', color: '#d97706', borderColor: '#fed7aa' },
            low: { background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }
        };
        return styles[priority] || styles.medium;
    };

    const getTypeIcon = (type) => {
        const icons = {
            routine_immunization: Shield,
            special_campaign: Users,
            outreach_session: MapPin,
            catch_up: Target
        };
        const IconComponent = icons[type] || Shield;
        return <IconComponent size={16} />;
    };

    const getTypeLabel = (type) => {
        const labels = {
            routine_immunization: 'Routine Immunization',
            special_campaign: 'Special Campaign',
            outreach_session: 'Outreach Session',
            catch_up: 'Catch-up Drive'
        };
        return labels[type] || 'Vaccination Drive';
    };

    const handleMarkComplete = (driveId) => {
        // API call to mark drive as completed
        console.log('Marking drive as complete:', driveId);
    };

    const totalChildrenCovered = vaccinationDrives.reduce((sum, drive) => 
        sum + (drive.children_registered || 0), 0
    );

    const totalHouseholds = vaccinationDrives.reduce((sum, drive) => 
        sum + (drive.households_covered || 0), 0
    );

    return (
        <div className="tab-content">
            <div className="tab-header">
                <h2>Vaccination Drive Schedule</h2>
                <p>ASHA Worker Immunization Sessions by Ward</p>
            </div>

            <section className="section">
                <div className="schedule-header">
                    <div className="schedule-filters">
                        {[
                            { key: 'today', label: "Today's Drives" },
                            { key: 'upcoming', label: 'Upcoming Sessions' },
                            { key: 'completed', label: 'Completed' }
                        ].map(filter => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="schedule-list">
                    {getDrivesByFilter().map(drive => (
                        <div key={drive.id} className="schedule-card">
                            <div className="schedule-card-header">
                                <div className="task-type">
                                    <div className="type-badge" style={getPriorityStyles(drive.priority)}>
                                        {getTypeIcon(drive.type)}
                                        {getTypeLabel(drive.type)}
                                    </div>
                                    <div className="ward-badge">
                                        {drive.ward_number}
                                    </div>
                                </div>
                                <div className="task-time">
                                    <Clock size={14} />
                                    {drive.time} • {drive.duration}
                                </div>
                            </div>

                            <div className="task-details">
                                <h4>{drive.area}</h4>
                                <div className="task-location">
                                    <MapPin size={14} />
                                    <span>{drive.location}</span>
                                </div>
                                <div className="drive-stats">
                                    <div className="stat-item">
                                        <Users size={14} />
                                        <span>Target: {drive.target_population} children</span>
                                    </div>
                                    <div className="stat-item">
                                        <Target size={14} />
                                        <span>Goal: {drive.coverage_goal} coverage</span>
                                    </div>
                                </div>
                            </div>

                            <div className="vaccine-list">
                                <p><strong>Vaccines:</strong></p>
                                <div className="tasks-container">
                                    {drive.vaccines.map((vaccine, index) => (
                                        <span key={index} className="vaccine-tag">
                                            {vaccine}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="task-list">
                                <p><strong>ASHA Tasks:</strong></p>
                                <div className="tasks-container">
                                    {drive.tasks.map((task, index) => (
                                        <span key={index} className="task-tag">
                                            {task}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="drive-meta">
                                <div className="meta-item">
                                    <span>Health Worker:</span>
                                    <strong>{drive.health_worker_assigned}</strong>
                                </div>
                                <div className="meta-item">
                                    <span>Supervisor:</span>
                                    <strong>{drive.supervisor}</strong>
                                </div>
                            </div>

                            {drive.status !== 'completed' && (
                                <div className="task-actions">
                                    <button 
                                        className="btn-primary"
                                        onClick={() => handleMarkComplete(drive.id)}
                                    >
                                        <CheckCircle size={14} />
                                        Mark Session Complete
                                    </button>
                                    <button 
                                        className="btn-outline"
                                        onClick={() => {
                                            setSelectedDrive(drive);
                                            setShowDetailsModal(true);
                                        }}
                                    >
                                        <Info size={14} />
                                        View Details
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {getDrivesByFilter().length === 0 && (
                    <div className="empty-state">
                        <Calendar size={48} />
                        <h3>No Vaccination Drives Scheduled</h3>
                        <p>There are no immunization sessions scheduled for the selected period.</p>
                    </div>
                )}
            </section>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-content">
                        <h3>{getDrivesByFilter().length}</h3>
                        <p>Scheduled Drives</p>
                    </div>
                    <Users className="stat-icon" />
                </div>
                <div className="stat-card">
                    <div className="stat-content">
                        <h3>{totalChildrenCovered}</h3>
                        <p>Children Registered</p>
                    </div>
                    <Target className="stat-icon" />
                </div>
                <div className="stat-card">
                    <div className="stat-content">
                        <h3>{totalHouseholds}</h3>
                        <p>Households Covered</p>
                    </div>
                    <Home className="stat-icon" />
                </div>
                <div className="stat-card">
                    <div className="stat-content">
                        <h3>
                            {vaccinationDrives.filter(d => d.priority === 'high').length}
                        </h3>
                        <p>High Priority Wards</p>
                    </div>
                    <AlertCircle className="stat-icon" />
                </div>
            </div>

            {/* Drive Details Modal */}
            {showDetailsModal && selectedDrive && (
                <DriveDetailsModal 
                    drive={selectedDrive}
                    onClose={() => setShowDetailsModal(false)}
                    onComplete={handleMarkComplete}
                />
            )}
        </div>
    );
};

// Additional modal component for drive details
const DriveDetailsModal = ({ drive, onClose, onComplete }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Vaccination Drive Details - {drive.ward_number}</h3>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                
                <div className="modal-body">
                    <div className="drive-sections">
                        <div className="section">
                            <h4>Session Information</h4>
                            <div className="info-grid">
                                <div className="info-item">
                                    <span>Location:</span>
                                    <strong>{drive.location}, {drive.area}</strong>
                                </div>
                                <div className="info-item">
                                    <span>Date & Time:</span>
                                    <strong>{drive.date} • {drive.time}</strong>
                                </div>
                                <div className="info-item">
                                    <span>Target Population:</span>
                                    <strong>{drive.target_population} children ({drive.target_age_group})</strong>
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <h4>Vaccines & Supplies</h4>
                            <div className="supplies-list">
                                {drive.supplies_required.map((supply, index) => (
                                    <div key={index} className="supply-item">
                                        <CheckCircle size={14} />
                                        {supply}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section">
                            <h4>Special Instructions</h4>
                            <p className="instructions">{drive.special_instructions}</p>
                        </div>
                    </div>
                </div>

                <div className="modal-actions">
                    <button className="btn-primary" onClick={() => onComplete(drive.id)}>
                        <CheckCircle size={16} />
                        Mark Session Complete
                    </button>
                    <button className="btn-outline" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
    const NotificationsTab = () => (
        <div className="tab-content">
            <div className="tab-header">
                <h2>{translations[currentLanguage].notifTitle}</h2>
                <p>{translations[currentLanguage].notifSubtitle}</p>
            </div>
            <section className="section">
                <div className="notifications-list">
                    {notifications.map(notification => (
                        <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
                            <div className="notification-icon">
                                <Bell size={20} />
                            </div>
                            <div className="notification-content">
                                <p>{notification.message}</p>
                                <span className="notification-time">{notification.time}</span>
                            </div>
                            {!notification.read && <div className="unread-indicator"></div>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
    const renderTabContent = () => {
        switch(activeTab) {
            case 'dashboard': return <DashboardTab />;
            case 'patients': return <PaitentApp/>;
            case 'medicine': return <MedicineTrackerTab />;
            case 'library': return <HealthLibraryTab />;
            case 'schedule': return <Schedule/>;
            case 'notifications': return <NotificationsTab />;
            case 'family-id': return <FamilyIdGenerator currentLanguage={currentLanguage} />;
            case 'family-records': return <UpdateFamilyRecords currentLanguage={currentLanguage} />;
            default: return <DashboardTab />;
        }
    };
    if (!isLoggedIn) {
        return <LoginPage onLogin={handleLogin} currentLanguage={currentLanguage} />;
    }
    return (
        <div className="chikitsa-mitra-app">
            <header className="app-header">
                <div className="header-content">
                    <div className="header-left">
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="logo">
                            <h1 className="app-title">{translations[currentLanguage].appTitle}</h1>
                        </div>
                    </div>
              
                    <div className="header-right">
                        <div className="search-bar">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder={translations[currentLanguage].searchPlaceholder}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                  
                        <div className="header-actions">
                           <div className="language-selector">
  <Languages size={18} />
  <select
    value={currentLanguage}
    onChange={(e) => switchLanguage(e.target.value)}
  >
    <option value="en">English</option>
    <option value="hi">हिंदी</option>
    <option value="pa">ਪੰਜਾਬੀ</option>
    <option value="te">తెలుగు</option>
  </select>
</div>
                      
                            <div className="notification-wrapper">
                                <button
                                    className="notification-btn"
                                    onClick={() => setActiveTab('notifications')}
                                >
                                    <Bell size={20} />
                                    {notifications.filter(n => !n.read).length > 0 && (
                                        <span className="notification-badge">
                                            {notifications.filter(n => !n.read).length}
                                        </span>
                                    )}
                                </button>
                            </div>
                      
                            <div className="user-profile">
                                <div className="user-avatar">
                                    {user?.name?.charAt(0)}
                                </div>
                                <div className="user-info">
                                    <span className="user-name">{user?.name}</span>
                                    <span className="user-role">{user?.designation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="app-layout">
                <nav className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <div className="sidebar-content">
                        <div className="sidebar-menu">
  <button className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
    onClick={() => setActiveTab('dashboard')}>
    <div className="menu-icon"><Home size={20} /></div>
    <span>{translations[currentLanguage].dashboard}</span>
  </button>
  <button className={`menu-item ${activeTab === 'patients' ? 'active' : ''}`}
    onClick={handleHealthRecord}>
    <div className="menu-icon"><User size={20} /></div>
    <span>{translations[currentLanguage].updateHealthRecord}</span>
  </button>
  <button className="menu-item" onClick={handleRegisterPatient}>
    <div className="menu-icon"><UserPlus size={20} /></div>
    <span>{translations[currentLanguage].registerPatient}</span>
  </button>
  <button className={`menu-item ${activeTab === 'family-id' ? 'active' : ''}`}
    onClick={() => setActiveTab('family-id')}>
    <div className="menu-icon"><FolderPlus size={20} /></div>
    <span>{translations[currentLanguage].generateFamilyId}</span>
  </button>
  <button className={`menu-item ${showChatbot ? 'active' : ''}`}
    onClick={() => setShowChatbot(true)}>
    <div className="menu-icon"><Stethoscope size={20} /></div>
    <span>{translations[currentLanguage].symptomCheck}</span>
  </button>
  <button className={`menu-item ${activeTab === 'medicine' ? 'active' : ''}`}
    onClick={() => setActiveTab('medicine')}>
    <div className="menu-icon"><Pill size={20} /></div>
    <span>{translations[currentLanguage].medicineStock}</span>
  </button>
  <button className={`menu-item ${activeTab === 'library' ? 'active' : ''}`}
    onClick={() => setActiveTab('library')}>
    <div className="menu-icon"><BookOpen size={20} /></div>
    <span>{translations[currentLanguage].healthLibrary}</span>
  </button>
  <button className={`menu-item ${activeTab === 'schedule' ? 'active' : ''}`}
    onClick={() => setActiveTab('schedule')}>
    <div className="menu-icon"><Calendar size={20} /></div>
    <span>{translations[currentLanguage].visitSchedule}</span>
  </button>
</div>
                       <div className="sidebar-footer">
  <button className="menu-item">
    <div className="menu-icon">
      <Settings size={20} />
    </div>
    <span>{translations[currentLanguage].settings}</span>
  </button>
  <button className="menu-item logout" onClick={handleLogout}>
    <div className="menu-icon">
      <LogOut size={20} />
    </div>
    <span>{translations[currentLanguage].logout}</span>
  </button>
</div>
                    </div>
                </nav>
                <main className="main-content">
                    {renderTabContent()}
                </main>
            </div>
            <ChatBot isOpen={showChatbot} onClose={() => setShowChatbot(false)} currentLanguage={currentLanguage} />
            <nav className="bottom-nav">
                <button
                    className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('dashboard')}
                >
                    <Home size={20} />
                    <span>{translations[currentLanguage].home}</span>
                </button>
                <button
                    className={`nav-item ${activeTab === 'patients' ? 'active' : ''}`}
                    onClick={handleHealthRecord}
                >
                    <User size={20} />
                    <span>{translations[currentLanguage].records}</span>
                </button>
                <button
                    className={`nav-item ${activeTab === 'family-id' ? 'active' : ''}`}
                    onClick={() => setActiveTab('family-id')}
                >
                    <FolderPlus size={20} />
                    <span>{translations[currentLanguage].familyIdNav}</span>
                </button>
                <button
                    className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => setActiveTab('schedule')}
                >
                    <Calendar size={20} />
                    <span>{translations[currentLanguage].scheduleNav}</span>
                </button>
            </nav>
        </div>
    );
};
export default AshaConnectApp;