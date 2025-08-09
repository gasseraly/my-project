import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = ({ language }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const isRTL = language === 'ar';

  const texts = {
    ar: {
      welcome: 'مرحباً بك في CopRRA',
      subtitle: 'سجل دخولك للوصول إلى حسابك والاستفادة من جميع المميزات',
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب جديد',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      phone: 'رقم الهاتف',
      rememberMe: 'تذكرني',
      forgotPassword: 'نسيت كلمة المرور؟',
      loginButton: 'تسجيل الدخول',
      registerButton: 'إنشاء حساب',
      noAccount: 'ليس لديك حساب؟',
      haveAccount: 'لديك حساب بالفعل؟',
      signUp: 'سجل الآن',
      signIn: 'سجل دخولك',
      orContinueWith: 'أو تابع باستخدام',
      google: 'Google',
      facebook: 'Facebook',
      apple: 'Apple',
      terms: 'بإنشاء حساب، أنت توافق على',
      termsLink: 'شروط الاستخدام',
      and: 'و',
      privacyLink: 'سياسة الخصوصية',
      benefits: {
        title: 'مميزات الحساب',
        compare: 'حفظ المقارنات',
        wishlist: 'قائمة الأمنيات',
        alerts: 'تنبيهات الأسعار',
        history: 'تاريخ البحث'
      }
    },
    en: {
      welcome: 'Welcome to CopRRA',
      subtitle: 'Sign in to your account to access all features',
      login: 'Sign In',
      register: 'Create Account',
      email: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone Number',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginButton: 'Sign In',
      registerButton: 'Create Account',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      signUp: 'Sign up',
      signIn: 'Sign in',
      orContinueWith: 'Or continue with',
      google: 'Google',
      facebook: 'Facebook',
      apple: 'Apple',
      terms: 'By creating an account, you agree to our',
      termsLink: 'Terms of Service',
      and: 'and',
      privacyLink: 'Privacy Policy',
      benefits: {
        title: 'Account Benefits',
        compare: 'Save Comparisons',
        wishlist: 'Wishlist',
        alerts: 'Price Alerts',
        history: 'Search History'
      }
    }
  };

  const t = texts[language];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    // Handle login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', registerData);
    // Handle registration logic here
  };

  const benefits = [
    {
      icon: '⚖️',
      title: t.benefits.compare,
      description: language === 'ar' ? 'احفظ مقارناتك للرجوع إليها لاحقاً' : 'Save your comparisons for later reference'
    },
    {
      icon: '❤️',
      title: t.benefits.wishlist,
      description: language === 'ar' ? 'أضف المنتجات المفضلة لديك' : 'Add your favorite products'
    },
    {
      icon: '🔔',
      title: t.benefits.alerts,
      description: language === 'ar' ? 'احصل على تنبيهات عند انخفاض الأسعار' : 'Get alerts when prices drop'
    },
    {
      icon: '📊',
      title: t.benefits.history,
      description: language === 'ar' ? 'تتبع تاريخ بحثك ومشترياتك' : 'Track your search and purchase history'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Benefits */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t.welcome}
            </h1>
            <p className="text-xl text-gray-600">
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {t.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Forms */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CopRRA</span>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t.login}</TabsTrigger>
                  <TabsTrigger value="register">{t.register}</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.email}</Label>
                      <div className="relative">
                        <Mail className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">{t.password}</Label>
                      <div className="relative">
                        <Lock className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}`}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'} text-gray-400 hover:text-gray-600`}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm">
                          {t.rememberMe}
                        </Label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                        {t.forgotPassword}
                      </Link>
                    </div>

                    <Button type="submit" className="w-full">
                      {t.loginButton}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">
                        {t.orContinueWith}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </Button>
                  </div>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register" className="space-y-4">
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.firstName}</Label>
                        <div className="relative">
                          <User className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                          <Input
                            id="firstName"
                            type="text"
                            value={registerData.firstName}
                            onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                            className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.lastName}</Label>
                        <div className="relative">
                          <User className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                          <Input
                            id="lastName"
                            type="text"
                            value={registerData.lastName}
                            onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                            className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">{t.email}</Label>
                      <div className="relative">
                        <Mail className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="registerEmail"
                          type="email"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.phone}</Label>
                      <div className="relative">
                        <Phone className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="phone"
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">{t.password}</Label>
                      <div className="relative">
                        <Lock className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="registerPassword"
                          type={showPassword ? 'text' : 'password'}
                          value={registerData.password}
                          onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}`}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'} text-gray-400 hover:text-gray-600`}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
                      <div className="relative">
                        <Lock className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                          className={`${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}`}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'} text-gray-400 hover:text-gray-600`}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-gray-600">
                      {t.terms}{' '}
                      <Link to="/terms" className="text-blue-600 hover:underline">
                        {t.termsLink}
                      </Link>{' '}
                      {t.and}{' '}
                      <Link to="/privacy" className="text-blue-600 hover:underline">
                        {t.privacyLink}
                      </Link>
                    </div>

                    <Button type="submit" className="w-full">
                      {t.registerButton}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

