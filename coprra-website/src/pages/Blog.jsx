import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Blog = ({ language }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const isRTL = language === 'ar';

  const texts = {
    ar: {
      title: 'مدونة CopRRA',
      subtitle: 'آخر الأخبار والنصائح حول التسوق الذكي ومقارنة الأسعار',
      search: 'البحث في المقالات...',
      allCategories: 'جميع الفئات',
      readMore: 'اقرأ المزيد',
      by: 'بواسطة',
      minRead: 'دقيقة قراءة',
      noArticles: 'لا توجد مقالات متاحة حالياً',
      noResults: 'لا توجد مقالات تطابق البحث',
      categories: {
        tips: 'نصائح التسوق',
        reviews: 'مراجعات المنتجات',
        news: 'أخبار التقنية',
        guides: 'أدلة الشراء'
      },
      featuredArticle: 'مقال مميز',
      latestArticles: 'أحدث المقالات'
    },
    en: {
      title: 'CopRRA Blog',
      subtitle: 'Latest news and tips about smart shopping and price comparison',
      search: 'Search articles...',
      allCategories: 'All Categories',
      readMore: 'Read More',
      by: 'By',
      minRead: 'min read',
      noArticles: 'No articles available at the moment',
      noResults: 'No articles match your search',
      categories: {
        tips: 'Shopping Tips',
        reviews: 'Product Reviews',
        news: 'Tech News',
        guides: 'Buying Guides'
      },
      featuredArticle: 'Featured Article',
      latestArticles: 'Latest Articles'
    }
  };

  const t = texts[language];

  // Sample articles data
  useEffect(() => {
    const sampleArticles = [
      {
        id: 1,
        title: language === 'ar' ? 'كيفية العثور على أفضل الصفقات في الجمعة البيضاء' : 'How to Find the Best Black Friday Deals',
        excerpt: language === 'ar' ? 'نصائح وحيل للحصول على أفضل الخصومات والعروض في موسم التسوق الأكبر في السنة' : 'Tips and tricks to get the best discounts and offers in the biggest shopping season of the year',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed',
        date: '2024-01-15',
        readTime: 5,
        category: 'tips',
        image: '/api/placeholder/600/300',
        featured: true,
        tags: [language === 'ar' ? 'تسوق' : 'shopping', language === 'ar' ? 'خصومات' : 'discounts', language === 'ar' ? 'جمعة بيضاء' : 'black friday']
      },
      {
        id: 2,
        title: language === 'ar' ? 'مراجعة شاملة لهاتف Samsung Galaxy S24' : 'Comprehensive Review of Samsung Galaxy S24',
        excerpt: language === 'ar' ? 'تقييم مفصل لأحدث هاتف من سامسونج مع مقارنة الأسعار من مختلف المتاجر' : 'Detailed evaluation of Samsung\'s latest phone with price comparison from different stores',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'سارة أحمد' : 'Sarah Ahmed',
        date: '2024-01-12',
        readTime: 8,
        category: 'reviews',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: [language === 'ar' ? 'سامسونج' : 'samsung', language === 'ar' ? 'هواتف' : 'phones', language === 'ar' ? 'مراجعة' : 'review']
      },
      {
        id: 3,
        title: language === 'ar' ? 'أفضل أجهزة الكمبيوتر المحمولة لعام 2024' : 'Best Laptops for 2024',
        excerpt: language === 'ar' ? 'دليل شامل لأفضل أجهزة الكمبيوتر المحمولة المتاحة في السوق مع مقارنة الأسعار والمواصفات' : 'Comprehensive guide to the best laptops available in the market with price and specification comparison',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'محمد علي' : 'Mohammed Ali',
        date: '2024-01-10',
        readTime: 12,
        category: 'guides',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: [language === 'ar' ? 'كمبيوتر محمول' : 'laptop', language === 'ar' ? 'دليل' : 'guide', language === 'ar' ? '2024' : '2024']
      },
      {
        id: 4,
        title: language === 'ar' ? 'أحدث اتجاهات التقنية في 2024' : 'Latest Tech Trends in 2024',
        excerpt: language === 'ar' ? 'نظرة على أهم التطورات التقنية المتوقعة هذا العام وتأثيرها على أسعار المنتجات' : 'A look at the most important technological developments expected this year and their impact on product prices',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'فاطمة حسن' : 'Fatima Hassan',
        date: '2024-01-08',
        readTime: 6,
        category: 'news',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: [language === 'ar' ? 'تقنية' : 'technology', language === 'ar' ? 'اتجاهات' : 'trends', language === 'ar' ? '2024' : '2024']
      },
      {
        id: 5,
        title: language === 'ar' ? 'نصائح لتوفير المال عند شراء الأجهزة المنزلية' : 'Tips for Saving Money When Buying Home Appliances',
        excerpt: language === 'ar' ? 'استراتيجيات ذكية للحصول على أفضل الأسعار عند شراء الأجهزة المنزلية الكبيرة' : 'Smart strategies to get the best prices when buying large home appliances',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'خالد عبدالله' : 'Khalid Abdullah',
        date: '2024-01-05',
        readTime: 7,
        category: 'tips',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: [language === 'ar' ? 'أجهزة منزلية' : 'appliances', language === 'ar' ? 'توفير' : 'saving', language === 'ar' ? 'نصائح' : 'tips']
      },
      {
        id: 6,
        title: language === 'ar' ? 'مقارنة بين iPhone 15 و Samsung Galaxy S24' : 'iPhone 15 vs Samsung Galaxy S24 Comparison',
        excerpt: language === 'ar' ? 'مقارنة شاملة بين أحدث هواتف آبل وسامسونج من ناحية المواصفات والأسعار والأداء' : 'Comprehensive comparison between Apple and Samsung\'s latest phones in terms of specifications, prices and performance',
        content: language === 'ar' ? 'محتوى المقال الكامل...' : 'Full article content...',
        author: language === 'ar' ? 'نورا سالم' : 'Nora Salem',
        date: '2024-01-03',
        readTime: 10,
        category: 'reviews',
        image: '/api/placeholder/600/300',
        featured: false,
        tags: [language === 'ar' ? 'آيفون' : 'iphone', language === 'ar' ? 'سامسونج' : 'samsung', language === 'ar' ? 'مقارنة' : 'comparison']
      }
    ];
    setArticles(sampleArticles);
    setFilteredArticles(sampleArticles);
  }, [language]);

  // Filter articles based on search and category
  useEffect(() => {
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    setFilteredArticles(filtered);
  }, [articles, searchQuery, selectedCategory]);

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'tips', label: t.categories.tips },
    { value: 'reviews', label: t.categories.reviews },
    { value: 'news', label: t.categories.news },
    { value: 'guides', label: t.categories.guides }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const ArticleCard = ({ article, featured = false }) => (
    <Card className={`group hover:shadow-lg transition-shadow duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`relative ${featured ? 'md:w-1/2' : ''}`}>
          <img
            src={article.image}
            alt={article.title}
            className={`w-full object-cover ${featured ? 'h-64 md:h-full' : 'h-48'} rounded-t-lg ${featured ? 'md:rounded-l-lg md:rounded-t-none' : ''}`}
          />
          {featured && (
            <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
              {t.featuredArticle}
            </Badge>
          )}
        </div>
        
        <CardContent className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} {t.minRead}</span>
            </div>
          </div>

          <Badge variant="secondary" className="mb-3">
            {t.categories[article.category]}
          </Badge>

          <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {article.title}
          </h3>

          <p className={`text-gray-600 mb-4 ${featured ? 'text-lg' : ''}`}>
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>{t.by} {article.author}</span>
            </div>
            <Button variant="outline" size="sm">
              {t.readMore}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-5 h-5`} />
            <Input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3`}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-8">
            {/* Featured Article */}
            {featuredArticle && selectedCategory === 'all' && !searchQuery && (
              <div className="mb-12">
                <ArticleCard article={featuredArticle} featured={true} />
              </div>
            )}

            {/* Regular Articles */}
            {regularArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.latestArticles}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchQuery || selectedCategory !== 'all' ? t.noResults : t.noArticles}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || selectedCategory !== 'all' 
                ? 'جرب تغيير البحث أو الفلاتر' 
                : 'سنقوم بنشر مقالات جديدة قريباً'
              }
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                مسح الفلاتر
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

