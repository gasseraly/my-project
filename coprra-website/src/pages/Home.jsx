import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = ({ addToCompare, language, currency, darkMode }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  const isRTL = language === 'ar';

  const texts = {
    ar: {
      heroTitle: 'اعثر على أفضل الأسعار في مكان واحد',
      heroSubtitle: 'قارن الأسعار من آلاف المتاجر واحصل على أفضل الصفقات للمنتجات التي تحبها',
      searchPlaceholder: 'ابحث عن المنتجات...',
      searchButton: 'بحث',
      featuredProducts: 'المنتجات المميزة',
      browseCategories: 'تصفح الفئات',
      phones: 'الهواتف الذكية',
      laptops: 'أجهزة الكمبيوتر المحمولة',
      appliances: 'الأجهزة المنزلية',
      featuredBrands: 'العلامات التجارية المميزة',
      whyChooseUs: 'لماذا تختار CopRRA؟',
      priceComparison: 'مقارنة الأسعار',
      priceComparisonDesc: 'قارن الأسعار من مئات المتاجر في ثوانٍ',
      trustedReviews: 'مراجعات موثوقة',
      trustedReviewsDesc: 'اقرأ مراجعات حقيقية من مستخدمين آخرين',
      fastDelivery: 'توصيل سريع',
      fastDeliveryDesc: 'احصل على منتجاتك بأسرع وقت ممكن',
      securePayment: 'دفع آمن',
      securePaymentDesc: 'معاملات آمنة ومحمية 100%',
      addToCompare: 'أضف للمقارنة',
      viewDetails: 'عرض التفاصيل',
      latestArticles: 'أحدث المقالات',
      noArticles: 'لا توجد مقالات متاحة حالياً',
      readMore: 'اقرأ المزيد',
      getStarted: 'ابدأ الآن'
    },
    en: {
      heroTitle: 'Find the Best Prices in One Place',
      heroSubtitle: 'Compare prices from thousands of stores and get the best deals on products you love',
      searchPlaceholder: 'Search for products...',
      searchButton: 'Search',
      featuredProducts: 'Featured Products',
      browseCategories: 'Browse Categories',
      phones: 'Smartphones',
      laptops: 'Laptops',
      appliances: 'Home Appliances',
      featuredBrands: 'Featured Brands',
      whyChooseUs: 'Why Choose CopRRA?',
      priceComparison: 'Price Comparison',
      priceComparisonDesc: 'Compare prices from hundreds of stores in seconds',
      trustedReviews: 'Trusted Reviews',
      trustedReviewsDesc: 'Read genuine reviews from other users',
      fastDelivery: 'Fast Delivery',
      fastDeliveryDesc: 'Get your products as fast as possible',
      securePayment: 'Secure Payment',
      securePaymentDesc: '100% secure and protected transactions',
      addToCompare: 'Add to Compare',
      viewDetails: 'View Details',
      latestArticles: 'Latest Articles',
      noArticles: 'No articles available at the moment',
      readMore: 'Read More',
      getStarted: 'Get Started'
    }
  };

  const t = texts[language];

  // Sample data
  useEffect(() => {
    setFeaturedProducts([
      {
        id: 1,
        name: 'Samsung Galaxy S24',
        brand: 'Samsung',
        price: 799.00,
        originalPrice: 899.00,
        rating: 4.5,
        reviews: 1250,
        image: '/api/placeholder/300/300',
        discount: 11
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        price: 999.00,
        originalPrice: 1099.00,
        rating: 4.8,
        reviews: 2100,
        image: '/api/placeholder/300/300',
        discount: 9
      },
      {
        id: 3,
        name: 'MacBook Air M3',
        brand: 'Apple',
        price: 1199.00,
        originalPrice: 1299.00,
        rating: 4.7,
        reviews: 890,
        image: '/api/placeholder/300/300',
        discount: 8
      },
      {
        id: 4,
        name: 'Dell XPS 13',
        brand: 'Dell',
        price: 899.00,
        originalPrice: 999.00,
        rating: 4.4,
        reviews: 650,
        image: '/api/placeholder/300/300',
        discount: 10
      }
    ]);

    setBrands([
      { name: 'Samsung', logo: '/api/placeholder/120/60' },
      { name: 'Apple', logo: '/api/placeholder/120/60' },
      { name: 'Dell', logo: '/api/placeholder/120/60' },
      { name: 'HP', logo: '/api/placeholder/120/60' },
      { name: 'Sony', logo: '/api/placeholder/120/60' },
      { name: 'LG', logo: '/api/placeholder/120/60' }
    ]);
  }, []);

  const categories = [
    {
      name: t.phones,
      icon: '📱',
      color: 'bg-blue-100 text-blue-600',
      count: '2,500+'
    },
    {
      name: t.laptops,
      icon: '💻',
      color: 'bg-green-100 text-green-600',
      count: '1,800+'
    },
    {
      name: t.appliances,
      icon: '🏠',
      color: 'bg-purple-100 text-purple-600',
      count: '3,200+'
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: t.priceComparison,
      description: t.priceComparisonDesc
    },
    {
      icon: Star,
      title: t.trustedReviews,
      description: t.trustedReviewsDesc
    },
    {
      icon: Zap,
      title: t.fastDelivery,
      description: t.fastDeliveryDesc
    },
    {
      icon: Shield,
      title: t.securePayment,
      description: t.securePaymentDesc
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t.heroSubtitle}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} text-gray-400 w-5 h-5`} />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 rounded-lg text-gray-900 text-lg focus:ring-4 focus:ring-blue-300 focus:outline-none`}
                  />
                </div>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  {t.searchButton}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Samsung Galaxy S24</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">iPhone 15</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">MacBook Air</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Dell XPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.featuredProducts}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.brand}</p>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCompare(product)}
                        className="flex-1"
                      >
                        {t.addToCompare}
                      </Button>
                      <Button size="sm" className="flex-1">
                        {t.viewDetails}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" variant="outline">
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.browseCategories}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.count} منتج
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChooseUs}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.featuredBrands}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ابدأ في توفير المال اليوم
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            انضم إلى آلاف المستخدمين الذين يوفرون المال مع CopRRA
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              {t.getStarted}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

