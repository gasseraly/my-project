import { useState, useEffect } from 'react';
import { Search, Filter, Star, Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Products = ({ addToCompare, language }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const isRTL = language === 'ar';

  const texts = {
    ar: {
      title: 'جميع المنتجات',
      subtitle: 'اكتشف آلاف المنتجات بأفضل الأسعار',
      search: 'البحث في المنتجات...',
      filters: 'الفلاتر',
      category: 'الفئة',
      brand: 'العلامة التجارية',
      priceRange: 'نطاق السعر',
      sortBy: 'ترتيب حسب',
      allCategories: 'جميع الفئات',
      allBrands: 'جميع العلامات التجارية',
      phones: 'الهواتف الذكية',
      laptops: 'أجهزة الكمبيوتر المحمولة',
      appliances: 'الأجهزة المنزلية',
      featured: 'مميز',
      priceLowToHigh: 'السعر: من الأقل إلى الأعلى',
      priceHighToLow: 'السعر: من الأعلى إلى الأقل',
      rating: 'التقييم',
      newest: 'الأحدث',
      addToCompare: 'أضف للمقارنة',
      viewDetails: 'عرض التفاصيل',
      noProducts: 'لا توجد منتجات تطابق البحث',
      showingResults: 'عرض {count} منتج',
      clearFilters: 'مسح الفلاتر'
    },
    en: {
      title: 'All Products',
      subtitle: 'Discover thousands of products at the best prices',
      search: 'Search products...',
      filters: 'Filters',
      category: 'Category',
      brand: 'Brand',
      priceRange: 'Price Range',
      sortBy: 'Sort By',
      allCategories: 'All Categories',
      allBrands: 'All Brands',
      phones: 'Smartphones',
      laptops: 'Laptops',
      appliances: 'Home Appliances',
      featured: 'Featured',
      priceLowToHigh: 'Price: Low to High',
      priceHighToLow: 'Price: High to Low',
      rating: 'Rating',
      newest: 'Newest',
      addToCompare: 'Add to Compare',
      viewDetails: 'View Details',
      noProducts: 'No products match your search',
      showingResults: 'Showing {count} products',
      clearFilters: 'Clear Filters'
    }
  };

  const t = texts[language];

  // Sample products data
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: 'Samsung Galaxy S24',
        brand: 'Samsung',
        category: 'phones',
        price: 799.00,
        originalPrice: 899.00,
        rating: 4.5,
        reviews: 1250,
        image: '/api/placeholder/300/300',
        discount: 11,
        featured: true
      },
      {
        id: 2,
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        category: 'phones',
        price: 999.00,
        originalPrice: 1099.00,
        rating: 4.8,
        reviews: 2100,
        image: '/api/placeholder/300/300',
        discount: 9,
        featured: true
      },
      {
        id: 3,
        name: 'MacBook Air M3',
        brand: 'Apple',
        category: 'laptops',
        price: 1199.00,
        originalPrice: 1299.00,
        rating: 4.7,
        reviews: 890,
        image: '/api/placeholder/300/300',
        discount: 8,
        featured: true
      },
      {
        id: 4,
        name: 'Dell XPS 13',
        brand: 'Dell',
        category: 'laptops',
        price: 899.00,
        originalPrice: 999.00,
        rating: 4.4,
        reviews: 650,
        image: '/api/placeholder/300/300',
        discount: 10,
        featured: false
      },
      {
        id: 5,
        name: 'Samsung QLED TV 55"',
        brand: 'Samsung',
        category: 'appliances',
        price: 1299.00,
        originalPrice: 1499.00,
        rating: 4.6,
        reviews: 420,
        image: '/api/placeholder/300/300',
        discount: 13,
        featured: false
      },
      {
        id: 6,
        name: 'LG Refrigerator',
        brand: 'LG',
        category: 'appliances',
        price: 899.00,
        originalPrice: 999.00,
        rating: 4.3,
        reviews: 280,
        image: '/api/placeholder/300/300',
        discount: 10,
        featured: false
      },
      {
        id: 7,
        name: 'HP Pavilion 15',
        brand: 'HP',
        category: 'laptops',
        price: 649.00,
        originalPrice: 749.00,
        rating: 4.2,
        reviews: 340,
        image: '/api/placeholder/300/300',
        discount: 13,
        featured: false
      },
      {
        id: 8,
        name: 'Google Pixel 8',
        brand: 'Google',
        category: 'phones',
        price: 699.00,
        originalPrice: 799.00,
        rating: 4.4,
        reviews: 580,
        image: '/api/placeholder/300/300',
        discount: 13,
        featured: false
      }
    ];
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'priceLowToHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        filtered.sort((a, b) => b.featured - a.featured);
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, selectedBrand, sortBy, priceRange]);

  const categories = [
    { value: 'all', label: t.allCategories },
    { value: 'phones', label: t.phones },
    { value: 'laptops', label: t.laptops },
    { value: 'appliances', label: t.appliances }
  ];

  const brands = [
    { value: 'all', label: t.allBrands },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Apple', label: 'Apple' },
    { value: 'Dell', label: 'Dell' },
    { value: 'HP', label: 'HP' },
    { value: 'LG', label: 'LG' },
    { value: 'Google', label: 'Google' }
  ];

  const sortOptions = [
    { value: 'featured', label: t.featured },
    { value: 'priceLowToHigh', label: t.priceLowToHigh },
    { value: 'priceHighToLow', label: t.priceHighToLow },
    { value: 'rating', label: t.rating },
    { value: 'newest', label: t.newest }
  ];

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSortBy('featured');
    setPriceRange([0, 2000]);
  };

  const ProductCard = ({ product }) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className={`p-4 ${viewMode === 'list' ? 'flex space-x-4' : ''}`}>
        <div className={`relative ${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'mb-4'}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover rounded-lg ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
          />
          {product.discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white">
              -{product.discount}%
            </Badge>
          )}
        </div>
        
        <div className={`space-y-2 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
          
          <div className={`flex space-x-2 pt-2 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
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
  );

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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  {t.filters}
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'right-3' : 'left-3'} text-gray-400 w-4 h-4`} />
                    <Input
                      type="text"
                      placeholder={t.search}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.category}
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.brand}
                  </label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand.value} value={brand.value}>
                          {brand.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.priceRange}
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                      className="w-20"
                    />
                  </div>
                </div>

                <Button variant="outline" onClick={clearFilters} className="w-full">
                  {t.clearFilters}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="text-gray-600">
                {t.showingResults.replace('{count}', filteredProducts.length)}
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.noProducts}
                </h3>
                <p className="text-gray-600 mb-4">
                  جرب تغيير الفلاتر أو البحث عن شيء آخر
                </p>
                <Button onClick={clearFilters}>
                  {t.clearFilters}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

