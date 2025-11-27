import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SystemsFooter: React.FC = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">منصة راي</h3>
            <p className="text-gray-300 text-sm">
              منصة متكاملة لإدارة جميع أنواع الأنشطة التجارية. حلول ذكية مخصصة لكل عمل.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Support & Help */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400">الدعم والمساعدة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">المدونة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">عين السوق</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">سياسة استرداد الأموال</a></li>
            </ul>
          </div>

          {/* Career & Partners */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400">وظائف وشراكات</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">وظائف راي</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">برنامج شركاء راي</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">فرص التطوير</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">الانضمام كفريق</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition">برنامج التدريب</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">01012345678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">info@ray-eg.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Systems Showcase - Like Rakaz */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Booking Systems */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-yellow-400">أنظمة الحجوزات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الحجوزات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة صوالين التجميل والحلاقة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الحضانات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة مغاسل السيارات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الأكاديميات والأندية الرياضية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة حجوزات المطاعم</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المجمعات الطبية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة مكاتب المحاماة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الشركات الإستشارية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام ادارة حجوزات الشاليهات و المنتجعات</a></li>
              </ul>
            </div>

            {/* Service Systems */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-yellow-400">أنظمة الخدمات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة خدمات التنظيف</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الصيانة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة خدمات التوصيل</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المغاسل والدراي كلين</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الخدمات المنزلية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام الغسيل المتنقل</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة خدمات التنظيف</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة شركات الصيانة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الخدمات اللوجستية</a></li>
              </ul>
            </div>

            {/* Sales & Retail Systems */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-yellow-400">أنظمة المبيعات</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة محلات التجزئة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المطاعم</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة محلات الملابس</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة السيارات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الاشتراكات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة نقاط البيع</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المخزون</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المبيعات والمحاسبة</a></li>
              </ul>
            </div>

            {/* Professional & Other Systems */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-yellow-400">أنظمة المهن</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة العيادات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الصالونات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الأندية الرياضية</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة العقارات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة المقاولات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الزراعة</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الإنشاءات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة الورش والمصانع</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة شركات الكهرباء</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition text-sm">نظام إدارة شركات الدهانات</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} منصة راي. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-sm">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-sm">الشروط والأحكام</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition text-sm">سياسة الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SystemsFooter;
 