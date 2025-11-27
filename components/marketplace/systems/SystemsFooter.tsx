import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SystemsFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ray-gold">عن راي</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              منصة راي توفر حلولاً متكاملة لإدارة أعمالك بكفاءة واحترافية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-ray-gold transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ray-gold transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ray-gold transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ray-gold transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ray-gold">الدعم والمساعدة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  الدليل الشامل
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ray-gold">الشركة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  وظائف راي
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  برنامج الشركاء
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  عين السوق
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ray-gold">السياسات</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  سياسة استرجاع الأموال
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  سياسة الأمان
                </a>
              </li>
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-ray-gold">الأنظمة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  🍔 نظام المطاعم
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  🛒 نظام التجزئة
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  🏥 نظام الحجوزات الطبية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  ✂️ نظام الحجوزات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  المزيد...
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-ray-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-ray-gold" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">الهاتف</p>
              <p className="text-white font-medium">+20 (2) 2570 0000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-ray-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-ray-gold" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">البريد الإلكتروني</p>
              <p className="text-white font-medium">support@rayplatform.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-ray-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-ray-gold" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">العنوان</p>
              <p className="text-white font-medium">القاهرة، مصر</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 منصة راي. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">
              شروط الاستخدام
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">
              خريطة الموقع
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SystemsFooter;
