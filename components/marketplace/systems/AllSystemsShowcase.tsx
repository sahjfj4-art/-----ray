import React, { useState } from 'react';
import {
  Store, Utensils, Home, Car, Stethoscope, Dumbbell,
  Wrench, Shirt, Scissors, Pill, Briefcase,
  ArrowRight, CheckCircle, Sparkles, TrendingUp, Users, Zap,
  BarChart3, Layers, Rocket, Globe
} from 'lucide-react';
import { systemsData } from '../data';

interface AllSystemsShowcaseProps {
  onSystemSelect: (systemId: string) => void;
}

const AllSystemsShowcase: React.FC<AllSystemsShowcaseProps> = ({ onSystemSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // تحويل systemsData إلى مصفوفة
  const allSystems = Object.values(systemsData);

  // تصنيفات الأنظمة
  const categories = [
    { id: 'all', name: 'جميع الأنظمة', count: allSystems.length },
    { id: 'retail', name: 'التجارة والمحلات', count: 3 },
    { id: 'health', name: 'الصحة والجمال', count: 4 },
    { id: 'services', name: 'الخدمات', count: 4 }
  ];

  // تصفية الأنظمة
  const filteredSystems = allSystems.filter(system => {
    const matchesSearch = system.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-200 dark:border-blue-800">
            <Globe className="w-4 h-4" />
            منصة راي المتكاملة
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
            أكثر من <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">23 نظام</span>
            <br />
            لكل أنواع الأعمال
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            منصة راي توفر حلولاً متكاملة لإدارة أعمالك. من المطاعم والمحلات، إلى العيادات والصالونات، وحتى الخدمات والعقارات. كل نظام مصمم خصيصاً لاحتياجاتك.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold">
            <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" /> مجاني تماماً
            </span>
            <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" /> تفعيل فوري
            </span>
            <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" /> دعم 24/7
            </span>
            <span className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="w-5 h-5" /> بدون رسوم مخفية
            </span>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن نظام..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition text-lg"
            />
            <Zap className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.name}
                <span className="ml-2 text-sm opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSystems.map((system) => (
            <div
              key={system.id}
              className="group bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Top Color Bar */}
              <div className={`h-1 bg-gradient-to-r ${system.color}`}></div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${system.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <system.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                    {system.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {system.description}
                </p>

                {/* Features Preview */}
                <div className="mb-6 space-y-2">
                  {system.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature.title}</span>
                    </div>
                  ))}
                  {system.features.length > 2 && (
                    <div className="text-xs text-gray-500 dark:text-gray-500 pl-6">
                      +{system.features.length - 2} مميزات أخرى
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-t border-gray-100 dark:border-gray-800 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{system.features.length}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">مميزات</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600 dark:text-green-400">∞</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">إمكانيات</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSystemSelect(system.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                >
                  <span>ابدأ الآن</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSystems.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg font-bold">لم نجد نظاماً متطابقاً</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">جرب البحث عن شيء آخر</p>
          </div>
        )}
      </div>

      {/* Why Choose Ray Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
            لماذا تختار <span className="text-blue-600 dark:text-blue-400">راي</span>؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition">
              <Rocket className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">تفعيل فوري</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">ابدأ في دقائق بدون معقدات أو تأخير</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition">
              <Zap className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">مجاني تماماً</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">بدون رسوم اشتراك أو رسوم مخفية</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition">
              <Users className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">دعم مصري</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">فريق متخصص جاهز لمساعدتك 24/7</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition">
              <BarChart3 className="w-10 h-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">تقارير متقدمة</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">تحليلات شاملة لتطوير عملك</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
            جاهز لتطوير عملك؟
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            اختر النظام المناسب لك الآن واحصل على لوحة تحكم كاملة مجاناً
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <Sparkles className="w-6 h-6" />
            <span>استكشف جميع الأنظمة</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllSystemsShowcase;
