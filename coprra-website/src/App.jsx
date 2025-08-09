import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Compare from './pages/Compare';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './App.css';

// قائمة اللغات المدعومة
const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' }
];

// قائمة العملات مجمعة حسب اللغات
const CURRENCIES_BY_LANGUAGE = {
  'en': [ // الإنجليزية
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', country: 'United States' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', country: 'United Kingdom' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', country: 'Canada' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', country: 'Australia' },
    { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿', country: 'New Zealand' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦', country: 'South Africa' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', country: 'Singapore' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰', country: 'Hong Kong' }
  ],
  'ar': [ // العربية
    { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س', flag: '🇸🇦', country: 'Saudi Arabia' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪', country: 'UAE' },
    { code: 'EGP', name: 'Egyptian Pound', symbol: 'ج.م', flag: '🇪🇬', country: 'Egypt' },
    { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.أ', flag: '🇯🇴', country: 'Jordan' },
    { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼', country: 'Kuwait' },
    { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', flag: '🇶🇦', country: 'Qatar' },
    { code: 'BHD', name: 'Bahraini Dinar', symbol: 'د.ب', flag: '🇧🇭', country: 'Bahrain' },
    { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع', flag: '🇴🇲', country: 'Oman' },
    { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل', flag: '🇱🇧', country: 'Lebanon' },
    { code: 'SYP', name: 'Syrian Pound', symbol: 'ل.س', flag: '🇸🇾', country: 'Syria' },
    { code: 'IQD', name: 'Iraqi Dinar', symbol: 'د.ع', flag: '🇮🇶', country: 'Iraq' },
    { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م', flag: '🇲🇦', country: 'Morocco' },
    { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت', flag: '🇹🇳', country: 'Tunisia' },
    { code: 'DZD', name: 'Algerian Dinar', symbol: 'د.ج', flag: '🇩🇿', country: 'Algeria' },
    { code: 'LYD', name: 'Libyan Dinar', symbol: 'د.ل', flag: '🇱🇾', country: 'Libya' },
    { code: 'SDG', name: 'Sudanese Pound', symbol: 'ج.س', flag: '🇸🇩', country: 'Sudan' }
  ],
  'zh': [ // الصينية
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', country: 'China' },
    { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼', country: 'Taiwan' },
    { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰', country: 'Hong Kong' },
    { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP$', flag: '🇲🇴', country: 'Macau' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', country: 'Singapore' }
  ],
  'es': [ // الإسبانية
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇸', country: 'Spain' },
    { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽', country: 'Mexico' },
    { code: 'ARS', name: 'Argentine Peso', symbol: '$', flag: '🇦🇷', country: 'Argentina' },
    { code: 'COP', name: 'Colombian Peso', symbol: '$', flag: '🇨🇴', country: 'Colombia' },
    { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', flag: '🇵🇪', country: 'Peru' },
    { code: 'CLP', name: 'Chilean Peso', symbol: '$', flag: '🇨🇱', country: 'Chile' },
    { code: 'VES', name: 'Venezuelan Bolívar', symbol: 'Bs.', flag: '🇻🇪', country: 'Venezuela' },
    { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U', flag: '🇺🇾', country: 'Uruguay' },
    { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs', flag: '🇧🇴', country: 'Bolivia' },
    { code: 'PYG', name: 'Paraguayan Guaraní', symbol: '₲', flag: '🇵🇾', country: 'Paraguay' }
  ],
  'hi': [ // الهندية
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', country: 'India' }
  ],
  'pt': [ // البرتغالية
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷', country: 'Brazil' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇵🇹', country: 'Portugal' },
    { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz', flag: '🇦🇴', country: 'Angola' },
    { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT', flag: '🇲🇿', country: 'Mozambique' }
  ],
  'bn': [ // البنغالية
    { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩', country: 'Bangladesh' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', country: 'India (West Bengal)' }
  ],
  'ru': [ // الروسية
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺', country: 'Russia' },
    { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br', flag: '🇧🇾', country: 'Belarus' },
    { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸', flag: '🇰🇿', country: 'Kazakhstan' }
  ],
  'ja': [ // اليابانية
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', country: 'Japan' }
  ],
  'fr': [ // الفرنسية
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇫🇷', country: 'France' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', country: 'Canada' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland' },
    { code: 'XOF', name: 'West African CFA Franc', symbol: 'CFA', flag: '🌍', country: 'West Africa' }
  ],
  'de': [ // الألمانية
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇩🇪', country: 'Germany' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland' }
  ],
  'ko': [ // الكورية
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷', country: 'South Korea' }
  ],
  'tr': [ // التركية
    { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷', country: 'Turkey' }
  ],
  'it': [ // الإيطالية
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇮🇹', country: 'Italy' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland' }
  ],
  'vi': [ // الفيتنامية
    { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳', country: 'Vietnam' }
  ]
};

// قائمة جميع العملات المدعومة (مجمعة من جميع اللغات)
const ALL_SUPPORTED_CURRENCIES = Object.values(CURRENCIES_BY_LANGUAGE)
  .flat()
  .filter((currency, index, self) => 
    index === self.findIndex(c => c.code === currency.code)
  )
  .sort((a, b) => a.code.localeCompare(b.code));

// دالة للحصول على معلومات الموقع الجغرافي
const getLocationBasedDefaults = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const countryCode = data.country_code?.toLowerCase();
    
    const countryLanguageMap = {
      'us': 'en', 'gb': 'en', 'ca': 'en', 'au': 'en', 'nz': 'en',
      'cn': 'zh', 'tw': 'zh', 'hk': 'zh', 'sg': 'zh',
      'in': 'hi',
      'es': 'es', 'mx': 'es', 'ar': 'es', 'co': 'es', 'pe': 'es',
      'sa': 'ar', 'ae': 'ar', 'eg': 'ar', 'ma': 'ar', 'jo': 'ar',
      'br': 'pt', 'pt': 'pt',
      'bd': 'bn',
      'ru': 'ru', 'by': 'ru', 'kz': 'ru',
      'jp': 'ja',
      'fr': 'fr', 'be': 'fr', 'ch': 'fr',
      'de': 'de', 'at': 'de',
      'kr': 'ko',
      'tr': 'tr',
      'it': 'it',
      'vn': 'vi'
    };
    
    const countryCurrencyMap = {
      'us': 'USD', 'gb': 'GBP', 'ca': 'CAD', 'au': 'AUD',
      'cn': 'CNY', 'tw': 'CNY', 'hk': 'CNY', 'sg': 'CNY',
      'in': 'INR',
      'es': 'EUR', 'mx': 'USD', 'ar': 'USD', 'co': 'USD', 'pe': 'USD',
      'sa': 'SAR', 'ae': 'AED', 'eg': 'USD', 'ma': 'USD', 'jo': 'USD',
      'br': 'BRL', 'pt': 'EUR',
      'bd': 'USD',
      'ru': 'RUB', 'by': 'RUB', 'kz': 'RUB',
      'jp': 'JPY',
      'fr': 'EUR', 'be': 'EUR', 'ch': 'CHF',
      'de': 'EUR', 'at': 'EUR',
      'kr': 'KRW',
      'tr': 'TRY',
      'it': 'EUR',
      'vn': 'USD'
    };
    
    let defaultLanguage = 'en';
    let defaultCurrency = 'USD';
    
    if (countryCode && countryLanguageMap[countryCode]) {
      defaultLanguage = countryLanguageMap[countryCode];
    }
    
    if (countryCode && countryCurrencyMap[countryCode]) {
      defaultCurrency = countryCurrencyMap[countryCode];
    }
    
    return { language: defaultLanguage, currency: defaultCurrency };
  } catch (error) {
    console.error('Error detecting location:', error);
    return { language: 'en', currency: 'USD' };
  }
};

function App() {
  const [compareItems, setCompareItems] = useState([]);
  const [language, setLanguage] = useState('ar');
  const [currency, setCurrency] = useState('USD');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [isLocationDetected, setIsLocationDetected] = useState(false);

  // تحديد اللغة والعملة بناءً على الموقع الجغرافي عند التحميل الأول
  useEffect(() => {
    const detectLocation = async () => {
      const savedLanguage = localStorage.getItem('language');
      const savedCurrency = localStorage.getItem('currency');
      
      if (!savedLanguage || !savedCurrency) {
        const defaults = await getLocationBasedDefaults();
        
        if (!savedLanguage) {
          setLanguage(defaults.language);
          localStorage.setItem('language', defaults.language);
        } else {
          setLanguage(savedLanguage);
        }
        
        if (!savedCurrency) {
          setCurrency(defaults.currency);
          localStorage.setItem('currency', defaults.currency);
        } else {
          setCurrency(savedCurrency);
        }
      } else {
        setLanguage(savedLanguage);
        setCurrency(savedCurrency);
      }
      
      setIsLocationDetected(true);
    };
    
    detectLocation();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addToCompare = (product) => {
    if (compareItems.length < 3 && !compareItems.find(item => item.id === product.id)) {
      setCompareItems([...compareItems, product]);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareItems(compareItems.filter(item => item.id !== productId));
  };

  const toggleLanguage = (newLanguage) => {
    if (newLanguage) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    } else {
      // التبديل بين العربية والإنجليزية فقط للتوافق مع النظام القديم
      const newLang = language === 'ar' ? 'en' : 'ar';
      setLanguage(newLang);
      localStorage.setItem('language', newLang);
    }
  };

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // عدم عرض المحتوى حتى يتم تحديد الموقع الجغرافي
  if (!isLocationDetected) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري تحديد موقعك...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'} ${darkMode ? 'dark' : ''}`}>
        <Header 
          compareCount={compareItems.length}
          language={language}
          currency={currency}
          toggleLanguage={toggleLanguage}
          changeCurrency={changeCurrency}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          supportedLanguages={SUPPORTED_LANGUAGES}
          supportedCurrencies={CURRENCIES_BY_LANGUAGE[language] || CURRENCIES_BY_LANGUAGE['en']}
        />
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  addToCompare={addToCompare}
                  language={language}
                  currency={currency}
                  darkMode={darkMode}
                />
              } 
            />
            <Route 
              path="/products" 
              element={
                <Products 
                  addToCompare={addToCompare}
                  language={language}
                  currency={currency}
                  darkMode={darkMode}
                />
              } 
            />
            <Route 
              path="/blog" 
              element={<Blog language={language} currency={currency} darkMode={darkMode} />} 
            />
            <Route 
              path="/compare" 
              element={
                <Compare 
                  compareItems={compareItems}
                  removeFromCompare={removeFromCompare}
                  language={language}
                  currency={currency}
                  darkMode={darkMode}
                />
              } 
            />
            <Route 
              path="/login" 
              element={<Login language={language} currency={currency} darkMode={darkMode} />} 
            />
            <Route 
              path="/privacy" 
              element={<Privacy language={language} darkMode={darkMode} />} 
            />
            <Route 
              path="/terms" 
              element={<Terms language={language} darkMode={darkMode} />} 
            />
          </Routes>
        </main>
        <Footer language={language} darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;

