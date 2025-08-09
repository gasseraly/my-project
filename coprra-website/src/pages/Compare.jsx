import { useState } from 'react';
import { X, Plus, Star, Check, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Compare = ({ compareItems, removeFromCompare, language }) => {
  const [showSpecs, setShowSpecs] = useState(true);

  const isRTL = language === 'ar';

  const texts = {
    ar: {
      title: 'مقارنة المنتجات',
      subtitle: 'قارن بين المنتجات المختلفة لاتخاذ قرار شراء مدروس',
      noItems: 'لا توجد منتجات للمقارنة',
      noItemsDesc: 'أضف منتجات من صفحة المنتجات لبدء المقارنة',
      addProducts: 'تصفح المنتجات',
      remove: 'إزالة',
      price: 'السعر',
      rating: 'التقييم',
      reviews: 'مراجعة',
      specifications: 'المواصفات',
      features: 'المميزات',
      pros: 'المميزات',
      cons: 'العيوب',
      buyNow: 'اشتري الآن',
      addToCart: 'أضف للسلة',
      showSpecs: 'عرض المواصفات',
      hideSpecs: 'إخفاء المواصفات',
      winner: 'الأفضل',
      bestPrice: 'أفضل سعر',
      bestRating: 'أعلى تقييم'
    },
    en: {
      title: 'Product Comparison',
      subtitle: 'Compare different products to make an informed purchase decision',
      noItems: 'No products to compare',
      noItemsDesc: 'Add products from the products page to start comparing',
      addProducts: 'Browse Products',
      remove: 'Remove',
      price: 'Price',
      rating: 'Rating',
      reviews: 'reviews',
      specifications: 'Specifications',
      features: 'Features',
      pros: 'Pros',
      cons: 'Cons',
      buyNow: 'Buy Now',
      addToCart: 'Add to Cart',
      showSpecs: 'Show Specifications',
      hideSpecs: 'Hide Specifications',
      winner: 'Best Choice',
      bestPrice: 'Best Price',
      bestRating: 'Highest Rating'
    }
  };

  const t = texts[language];

  // Sample specifications for demonstration
  const getProductSpecs = (productId) => {
    const specs = {
      1: { // Samsung Galaxy S24
        display: '6.2" Dynamic AMOLED 2X',
        processor: 'Exynos 2400',
        ram: '8GB',
        storage: '256GB',
        camera: '50MP + 12MP + 10MP',
        battery: '4000mAh',
        os: 'Android 14'
      },
      2: { // iPhone 15 Pro
        display: '6.1" Super Retina XDR',
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB',
        camera: '48MP + 12MP + 12MP',
        battery: '3274mAh',
        os: 'iOS 17'
      },
      3: { // MacBook Air M3
        display: '13.6" Liquid Retina',
        processor: 'Apple M3',
        ram: '16GB',
        storage: '512GB SSD',
        graphics: '10-core GPU',
        battery: '18 hours',
        os: 'macOS Sonoma'
      },
      4: { // Dell XPS 13
        display: '13.4" InfinityEdge',
        processor: 'Intel Core i7-1360P',
        ram: '16GB',
        storage: '512GB SSD',
        graphics: 'Intel Iris Xe',
        battery: '12 hours',
        os: 'Windows 11'
      }
    };
    return specs[productId] || {};
  };

  const getProductFeatures = (productId) => {
    const features = {
      1: {
        pros: [
          language === 'ar' ? 'شاشة عالية الجودة' : 'High-quality display',
          language === 'ar' ? 'كاميرا ممتازة' : 'Excellent camera',
          language === 'ar' ? 'أداء سريع' : 'Fast performance'
        ],
        cons: [
          language === 'ar' ? 'البطارية متوسطة' : 'Average battery life',
          language === 'ar' ? 'السعر مرتفع' : 'High price'
        ]
      },
      2: {
        pros: [
          language === 'ar' ? 'نظام iOS مستقر' : 'Stable iOS system',
          language === 'ar' ? 'جودة بناء ممتازة' : 'Excellent build quality',
          language === 'ar' ? 'أداء فائق' : 'Superior performance'
        ],
        cons: [
          language === 'ar' ? 'سعر مرتفع جداً' : 'Very high price',
          language === 'ar' ? 'قيود النظام' : 'System limitations'
        ]
      },
      3: {
        pros: [
          language === 'ar' ? 'أداء ممتاز' : 'Excellent performance',
          language === 'ar' ? 'بطارية طويلة المدى' : 'Long battery life',
          language === 'ar' ? 'تصميم أنيق' : 'Elegant design'
        ],
        cons: [
          language === 'ar' ? 'منافذ محدودة' : 'Limited ports',
          language === 'ar' ? 'سعر مرتفع' : 'High price'
        ]
      },
      4: {
        pros: [
          language === 'ar' ? 'تصميم جميل' : 'Beautiful design',
          language === 'ar' ? 'شاشة ممتازة' : 'Excellent display',
          language === 'ar' ? 'أداء جيد' : 'Good performance'
        ],
        cons: [
          language === 'ar' ? 'بطارية متوسطة' : 'Average battery',
          language === 'ar' ? 'مروحة صاخبة' : 'Noisy fan'
        ]
      }
    };
    return features[productId] || { pros: [], cons: [] };
  };

  // Find best price and rating
  const bestPrice = compareItems.length > 0 ? Math.min(...compareItems.map(item => item.price)) : 0;
  const bestRating = compareItems.length > 0 ? Math.max(...compareItems.map(item => item.rating)) : 0;

  if (compareItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-gray-400 text-6xl mb-6">⚖️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.noItems}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.noItemsDesc}
          </p>
          <Button size="lg" asChild>
            <a href="/products">{t.addProducts}</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900 w-48">
                    {/* Empty header for row labels */}
                  </th>
                  {compareItems.map((item) => (
                    <th key={item.id} className="text-center p-6 min-w-80">
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute top-0 right-0 text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                        
                        <div className="space-y-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-lg mx-auto"
                          />
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-gray-600">{item.brand}</p>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              
              <tbody>
                {/* Price Row */}
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-semibold text-gray-900">
                    {t.price}
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-6 text-center">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-2xl font-bold text-blue-600">
                            ${item.price}
                          </span>
                          {item.price === bestPrice && (
                            <Badge className="bg-green-500 text-white">
                              {t.bestPrice}
                            </Badge>
                          )}
                        </div>
                        {item.originalPrice > item.price && (
                          <span className="text-gray-400 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Rating Row */}
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-semibold text-gray-900">
                    {t.rating}
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 font-semibold">{item.rating}</span>
                        </div>
                        <span className="text-gray-600">
                          ({item.reviews} {t.reviews})
                        </span>
                        {item.rating === bestRating && (
                          <Badge className="bg-green-500 text-white">
                            {t.bestRating}
                          </Badge>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Specifications */}
                {showSpecs && (
                  <>
                    <tr className="bg-gray-50">
                      <td colSpan={compareItems.length + 1} className="p-4">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {t.specifications}
                        </h3>
                      </td>
                    </tr>
                    
                    {/* Dynamic spec rows */}
                    {Object.keys(getProductSpecs(compareItems[0]?.id) || {}).map((specKey) => (
                      <tr key={specKey} className="border-b border-gray-100">
                        <td className="p-6 font-medium text-gray-700 capitalize">
                          {specKey.replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        {compareItems.map((item) => (
                          <td key={item.id} className="p-6 text-center text-gray-900">
                            {getProductSpecs(item.id)[specKey] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}

                {/* Features */}
                <tr className="bg-gray-50">
                  <td colSpan={compareItems.length + 1} className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {t.features}
                    </h3>
                  </td>
                </tr>

                {/* Pros */}
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-semibold text-green-600">
                    {t.pros}
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-6">
                      <ul className="space-y-2">
                        {getProductFeatures(item.id).pros.map((pro, index) => (
                          <li key={index} className="flex items-center text-sm text-green-600">
                            <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Cons */}
                <tr className="border-b border-gray-100">
                  <td className="p-6 font-semibold text-red-600">
                    {t.cons}
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-6">
                      <ul className="space-y-2">
                        {getProductFeatures(item.id).cons.map((con, index) => (
                          <li key={index} className="flex items-center text-sm text-red-600">
                            <Minus className="w-4 h-4 mr-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Action Buttons */}
                <tr>
                  <td className="p-6 font-semibold text-gray-900">
                    {/* Empty cell */}
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-6 text-center">
                      <div className="space-y-2">
                        <Button className="w-full">
                          {t.buyNow}
                        </Button>
                        <Button variant="outline" className="w-full">
                          {t.addToCart}
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Toggle Specifications */}
        <div className="text-center mt-6">
          <Button
            variant="outline"
            onClick={() => setShowSpecs(!showSpecs)}
          >
            {showSpecs ? t.hideSpecs : t.showSpecs}
          </Button>
        </div>

        {/* Add More Products */}
        {compareItems.length < 3 && (
          <div className="text-center mt-8">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <Plus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  أضف منتجات أخرى للمقارنة
                </h3>
                <p className="text-gray-600 mb-4">
                  يمكنك مقارنة حتى 3 منتجات في نفس الوقت
                </p>
                <Button asChild>
                  <a href="/products">{t.addProducts}</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;

