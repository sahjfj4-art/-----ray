import React from 'react';
import { 
  ShoppingBag, Users, DollarSign, ShoppingCart, Star, 
  Package, Menu, LayoutDashboard, Store,
  ChefHat, Calendar, Home, Key, Car, Wrench,
  Stethoscope, Activity, Dumbbell, ClipboardList,
  Utensils, Clock, CheckCircle, Plus, FileText,
  Truck, Map, QrCode, CreditCard, Tag, 
  Briefcase, PenTool, Camera, ShieldCheck, HeartPulse,
  Syringe, Pill, School, GraduationCap, Video,
  Shirt, Droplets, Waves, Scissors, Ticket, Layers,
  Sparkles, Grid, LayoutGrid, BarChart3, HardHat, Warehouse, FileSpreadsheet,
  Settings, Bell, AlertCircle, Lightbulb, Zap, Calculator, Shield, TrendingUp, Leaf
} from 'lucide-react';

export type BusinessType = 'general' | 'restaurant' | 'retail' | 'realestate' | 'cars' | 'clinic' | 'gym' | 'services' | 'laundry' | 'clothing' | 'salon' | 'pharmacy' | 'contracting' | 'plumbing' | 'painting' | 'hardware' | 'electrical' | 'construction' | 'carwash' | 'logistics' | 'agriculture' | 'admin';

export interface DashboardConfig {
  type: BusinessType;
  title: string;
  themeColor: string;
  navItems: { id: string; label: string; icon: any }[];
  stats: { label: string; value: string; trend: number; icon: any }[];
  quickActions: { label: string; icon: any; action: string }[];
  tableHeaders: string[];
  data: any[];
}

export const dashboardConfigs: Record<BusinessType, DashboardConfig> = {
  contracting: {
    type: 'contracting',
    title: 'شركة التعمير للمقاولات',
    themeColor: 'orange',
    navItems: [
      { id: 'overview', label: 'مركز العمليات', icon: LayoutDashboard },
      { id: 'projects', label: 'المشاريع الجارية', icon: HardHat },
      { id: 'tenders', label: 'المناقصات والعروض', icon: FileSpreadsheet },
      { id: 'warehouse', label: 'المخازن والتوريد', icon: Warehouse },
      { id: 'labor', label: 'العمالة والمقاولين', icon: Users },
      { id: 'finance', label: 'المستخلصات والمالية', icon: DollarSign },
      { id: 'procurement', label: 'المشتريات', icon: Truck },
    ],
    stats: [
      { label: 'مشاريع نشطة', value: '5', trend: 0, icon: HardHat },
      { label: 'نسبة الإنجاز', value: '68%', trend: 5, icon: Activity },
      { label: 'قيمة المستخلصات', value: '2.4M', trend: 12, icon: DollarSign },
      { label: 'مواد في الموقع', value: '450k', trend: -2, icon: Package },
    ],
    quickActions: [
      { label: 'مشروع جديد', icon: Plus, action: 'new_project' },
      { label: 'طلب توريد', icon: Truck, action: 'supply_request' },
      { label: 'صرف خامات', icon: Warehouse, action: 'issue_material' },
      { label: 'إضافة مستخلص', icon: FileText, action: 'new_invoice' },
      { label: 'تسجيل عمالة', icon: Users, action: 'add_labor' },
    ],
    tableHeaders: ['المشروع', 'العميل', 'المرحلة الحالية', 'نسبة الإنجاز', 'تاريخ التسليم', 'الحالة'],
    data: [
      { id: 'PRJ-101', col1: 'أبراج العاصمة', col2: 'هيئة المجتمعات', col3: 'التشطيبات الداخلية', status: 'in_progress', time: '2025-12-30' },
      { id: 'PRJ-102', col1: 'فيلا د. خالد', col2: 'قطاع خاص', col3: 'تأسيس سباكة وكهرباء', status: 'active', time: '2025-06-15' },
      { id: 'PRJ-103', col1: 'مول الشروق', col2: 'مجموعة الفطيم', col3: 'صب الخرسانة', status: 'delayed', time: '2026-01-01' },
    ]
  },
  general: {
    type: 'general',
    title: 'مركز القيادة الموحد',
    themeColor: 'slate',
    navItems: [
      { id: 'overview', label: 'نظرة عامة', icon: LayoutGrid },
      { id: 'analytics', label: 'التحليلات المجمعة', icon: Activity },
      { id: 'users', label: 'المستخدمين والصلاحيات', icon: Users },
      { id: 'billing', label: 'الاشتراكات والفواتير', icon: CreditCard },
      { id: 'reports', label: 'التقارير المركزية', icon: BarChart3 },
    ],
    stats: [
      { label: 'إجمالي الإيرادات', value: '1.2M ج.م', trend: 15, icon: DollarSign },
      { label: 'الطلبات النشطة', value: '342', trend: 8, icon: ShoppingBag },
      { label: 'العملاء الجدد', value: '128', trend: 12, icon: Users },
      { label: 'الأنظمة النشطة', value: '11', trend: 0, icon: Store },
    ],
    quickActions: [],
    tableHeaders: [],
    data: []
  },
  restaurant: {
    type: 'restaurant',
    title: 'مطعم النور للمأكولات',
    themeColor: 'orange',
    navItems: [
      { id: 'overview', label: 'لوحة القيادة', icon: LayoutDashboard },
      { id: 'pos', label: 'كاشير الصالة', icon: DollarSign },
      { id: 'orders', label: 'إدارة الطلبات', icon: ShoppingBag },
      { id: 'kitchen', label: 'شاشة المطبخ (KDS)', icon: ChefHat },
      { id: 'menu', label: 'قائمة الطعام', icon: Menu },
      { id: 'tables', label: 'خريطة الطاولات', icon: Utensils },
      { id: 'reservations', label: 'دفتر الحجوزات', icon: Calendar },
      { id: 'delivery', label: 'فريق التوصيل', icon: Truck },
      { id: 'inventory', label: 'المخزون والمقادير', icon: Package },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '4,850 ج.م', trend: 15, icon: DollarSign },
      { label: 'الطلبات النشطة', value: '12', trend: 8, icon: ShoppingBag },
      { label: 'طاولات مشغولة', value: '8/15', trend: -2, icon: Utensils },
      { label: 'وقت التحضير', value: '18 دقيقة', trend: -5, icon: Clock },
    ],
    quickActions: [
      { label: 'طلب جديد', icon: Plus, action: 'new_order' },
      { label: 'حجز طاولة', icon: Calendar, action: 'book_table' },
      { label: 'إغلاق الوردية', icon: CheckCircle, action: 'close_shift' },
      { label: 'مصروفات', icon: DollarSign, action: 'expense' },
      { label: 'نواقص المطبخ', icon: Package, action: 'kitchen_stock' },
      { label: 'طباعة باركود', icon: QrCode, action: 'print_qr' },
    ],
    tableHeaders: ['رقم الطلب', 'نوع الطلب', 'العميل', 'المبلغ', 'الحالة', 'الوقت المنقضي'],
    data: [
      { id: '#1847', col1: 'توصيل', col2: 'محمد علي', col3: '230 ج', status: 'preparing', time: '12 دقيقة' },
      { id: '#1846', col1: 'صالة - T4', col2: 'عائلة سمير', col3: '540 ج', status: 'completed', time: '45 دقيقة' },
      { id: '#1845', col1: 'تيك أواي', col2: 'سارة أحمد', col3: '120 ج', status: 'ready', time: '20 دقيقة' },
      { id: '#1844', col1: 'توصيل', col2: 'كريم محمود', col3: '310 ج', status: 'delivering', time: '35 دقيقة' },
    ]
  },
  
  retail: {
    type: 'retail',
    title: 'سوبر ماركت البركة',
    themeColor: 'blue',
    navItems: [
      { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
      { id: 'pos', label: 'نقطة البيع (POS)', icon: ShoppingBag },
      { id: 'products', label: 'المنتجات والأسعار', icon: Tag },
      { id: 'inventory', label: 'المخزون والجرد', icon: ClipboardList },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء والديون', icon: Users },
      { id: 'reports', label: 'التقارير المالية', icon: FileText },
      { id: 'offers', label: 'العروض والخصومات', icon: Star },
    ],
    stats: [
      { label: 'إيراد اليوم', value: '15,200 ج', trend: 5, icon: DollarSign },
      { label: 'عدد الفواتير', value: '142', trend: 10, icon: FileText },
      { label: 'منتجات تنفذ', value: '8', trend: -2, icon: Package },
      { label: 'قيمة المخزون', value: '450k ج', trend: 0, icon: Store },
    ],
    quickActions: [
      { label: 'فاتورة بيع', icon: ShoppingBag, action: 'new_sale' },
      { label: 'فاتورة شراء', icon: Truck, action: 'purchase_order' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
      { label: 'جرد سريع', icon: QrCode, action: 'inventory_check' },
      { label: 'مرتجع', icon: CheckCircle, action: 'return' },
      { label: 'تسديد مورد', icon: DollarSign, action: 'pay_supplier' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'طريقة الدفع', 'الحالة'],
    data: [
      { id: '#INV-990', col1: 'عميل نقدي', col2: '5 قطع', col3: '150 ج', status: 'paid', time: 'منذ دقيقة' },
      { id: '#INV-989', col1: 'أحمد كمال', col2: '12 قطعة', col3: '1,200 ج', status: 'paid', time: 'منذ 10 د' },
      { id: '#INV-988', col1: 'سارة علي', col2: '3 قطع', col3: '85 ج', status: 'credit', time: 'منذ 15 د' },
      { id: '#INV-987', col1: 'محمود حسن', col2: '1 قطعة', col3: '20 ج', status: 'cancelled', time: 'منذ 30 د' },
    ]
  },

  realestate: {
    type: 'realestate',
    title: 'أملاك للتطوير العقاري',
    themeColor: 'green',
    navItems: [
      { id: 'overview', label: 'لوحة المعلومات', icon: LayoutDashboard },
      { id: 'properties', label: 'وحدات البيع', icon: Home },
      { id: 'rentals', label: 'وحدات الإيجار', icon: Key },
      { id: 'map', label: 'الخريطة العقارية', icon: Map },
      { id: 'leads', label: 'العملاء المحتملين', icon: Users },
      { id: 'showings', label: 'جدول المعاينات', icon: Calendar },
      { id: 'contracts', label: 'العقود والأقساط', icon: FileText },
      { id: 'marketing', label: 'الحملات الإعلانية', icon: Star },
    ],
    stats: [
      { label: 'المبيعات (Q3)', value: '3.2M ج.م', trend: 5, icon: DollarSign },
      { label: 'وحدات متاحة', value: '45', trend: -1, icon: Home },
      { label: 'معاينات اليوم', value: '8', trend: 12, icon: Users },
      { label: 'أقساط مستحقة', value: '120k ج', trend: 0, icon: FileText },
    ],
    quickActions: [
      { label: 'إضافة وحدة', icon: Home, action: 'add_property' },
      { label: 'عميل جديد', icon: Users, action: 'add_lead' },
      { label: 'حجز معاينة', icon: Calendar, action: 'schedule_viewing' },
      { label: 'إنشاء عقد', icon: FileText, action: 'create_contract' },
      { label: 'حاسبة أقساط', icon: DollarSign, action: 'calc' },
      { label: 'جولة 360', icon: Camera, action: 'tour_360' },
    ],
    tableHeaders: ['كود الوحدة', 'العنوان', 'النوع', 'السعر', 'العميل المهتم', 'حالة المعاينة'],
    data: [
      { id: 'APT-101', col1: 'التجمع الخامس - حي اللوتس', col2: 'شقة 180م', col3: '3.5M ج', status: 'scheduled', time: 'أحمد محمود' },
      { id: 'VIL-205', col1: 'الشيخ زايد - بيفرلي', col2: 'فيلا مستقلة', col3: '12M ج', status: 'completed', time: 'شركة الفرسان' },
      { id: 'SHP-003', col1: 'المعادي - شارع 9', col2: 'محل تجاري', col3: '45,000/ش', status: 'pending', time: 'د. سارة' },
      { id: 'LND-55', col1: 'العاصمة الإدارية', col2: 'أرض تجارية', col3: '8M ج', status: 'sold', time: 'مجموعة الصفا' },
    ]
  },

  cars: {
    type: 'cars',
    title: 'أوتو ستار للسيارات',
    themeColor: 'red',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'inventory', label: 'معرض السيارات', icon: Car },
      { id: 'inspection', label: 'فحص فني', icon: ClipboardList },
      { id: 'test_drives', label: 'تجارب القيادة', icon: Key },
      { id: 'sales', label: 'المبيعات والفواتير', icon: DollarSign },
      { id: 'installments', label: 'نظام التقسيط', icon: FileText },
      { id: 'maintenance', label: 'مركز الصيانة', icon: Wrench },
      { id: 'insurance', label: 'التأمين والترخيص', icon: ShieldCheck },
    ],
    stats: [
      { label: 'سيارات مباعة', value: '12', trend: 20, icon: Car },
      { label: 'متاح في المعرض', value: '58', trend: 5, icon: Store },
      { label: 'طلبات تجربة', value: '6', trend: 15, icon: Key },
      { label: 'أقساط مستحقة', value: '150k ج.م', trend: 0, icon: DollarSign },
    ],
    quickActions: [
      { label: 'إضافة سيارة', icon: Car, action: 'add_car' },
      { label: 'حجز تجربة', icon: Key, action: 'book_test' },
      { label: 'حاسبة قسط', icon: DollarSign, action: 'calc_installment' },
      { label: 'عقد بيع', icon: FileText, action: 'sale_contract' },
      { label: 'أمر صيانة', icon: Wrench, action: 'service_order' },
      { label: 'تقييم استبدال', icon: CheckCircle, action: 'trade_in' },
    ],
    tableHeaders: ['الموديل', 'سنة الصنع', 'السعر', 'اللون', 'الحالة', 'ملاحظات'],
    data: [
      { id: 'Kia-Spt', col1: 'Kia Sportage', col2: '2024', col3: '1.8M ج', status: 'available', time: 'أحمر' },
      { id: 'Hyun-Tuc', col1: 'Hyundai Tucson', col2: '2025', col3: '2.1M ج', status: 'sold', time: 'أسود' },
      { id: 'Corolla', col1: 'Toyota Corolla', col2: '2023', col3: '1.3M ج', status: 'reserved', time: 'فضي - عربون' },
      { id: 'Merc-C180', col1: 'Mercedes C180', col2: '2024', col3: '3.5M ج', status: 'available', time: 'أبيض' },
    ]
  },

  clinic: {
    type: 'clinic',
    title: 'عيادات الشفاء التخصصية',
    themeColor: 'teal',
    navItems: [
      { id: 'overview', label: 'الاستقبال', icon: LayoutDashboard },
      { id: 'appointments', label: 'جدول المواعيد', icon: Calendar },
      { id: 'patients', label: 'ملفات المرضى', icon: Users },
      { id: 'prescriptions', label: 'الروشتات الطبية', icon: FileText },
      { id: 'lab', label: 'التحاليل والأشعة', icon: Activity },
      { id: 'pharmacy', label: 'صيدلية العيادة', icon: Pill },
      { id: 'finance', label: 'الحسابات والتأمين', icon: DollarSign },
    ],
    stats: [
      { label: 'حالات اليوم', value: '24', trend: 10, icon: Users },
      { label: 'في الانتظار', value: '3', trend: -5, icon: Clock },
      { label: 'إيراد العيادة', value: '12,500 ج', trend: 8, icon: DollarSign },
      { label: 'عمليات', value: '2', trend: 0, icon: HeartPulse },
    ],
    quickActions: [
      { label: 'حجز كشف', icon: Calendar, action: 'book_appointment' },
      { label: 'مريض جديد', icon: Users, action: 'add_patient' },
      { label: 'روشتة', icon: FileText, action: 'new_rx' },
      { label: 'طلب تحليل', icon: Activity, action: 'lab_request' },
      { label: 'متابعة', icon: Clock, action: 'follow_up' },
      { label: 'تطعيم', icon: Syringe, action: 'vaccine' },
    ],
    tableHeaders: ['رقم الملف', 'المريض', 'نوع الكشف', 'الطبيب', 'الحالة', 'الموعد'],
    data: [
      { id: '#PT-902', col1: 'منى زكي', col2: 'استشارة باطنة', col3: 'د. أحمد', status: 'waiting', time: '10:30 ص' },
      { id: '#PT-903', col1: 'كريم عبد العزيز', col2: 'كشف جديد', col3: 'د. سارة', status: 'in_progress', time: '11:00 ص' },
      { id: '#PT-904', col1: 'أحمد حلمي', col2: 'متابعة دورية', col3: 'د. أحمد', status: 'completed', time: '09:15 ص' },
      { id: '#PT-905', col1: 'ياسمين صبري', col2: 'جلدية', col3: 'د. نورهان', status: 'scheduled', time: '01:00 م' },
    ]
  },

  gym: {
    type: 'gym',
    title: 'باور جيم (Power Gym)',
    themeColor: 'yellow',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'members', label: 'سجل الأعضاء', icon: Users },
      { id: 'access', label: 'الدخول والخروج', icon: QrCode },
      { id: 'classes', label: 'حصص التدريب', icon: Dumbbell },
      { id: 'trainers', label: 'المدربين', icon: Star },
      { id: 'subscriptions', label: 'الباقات والاشتراكات', icon: FileText },
      { id: 'diet', label: 'أنظمة التغذية', icon: Utensils },
      { id: 'store', label: 'متجر المكملات', icon: ShoppingBag },
    ],
    stats: [
      { label: 'حضور اليوم', value: '145', trend: 12, icon: Users },
      { label: 'اشتراكات جديدة', value: '8', trend: 25, icon: CreditCard },
      { label: 'اشتراكات تنتهي', value: '12', trend: -5, icon: Clock },
      { label: 'مبيعات المتجر', value: '3,200 ج', trend: 10, icon: DollarSign },
    ],
    quickActions: [
      { label: 'عضو جديد', icon: Plus, action: 'new_member' },
      { label: 'تجديد اشتراك', icon: CreditCard, action: 'renew_sub' },
      { label: 'تسجيل دخول', icon: QrCode, action: 'checkin' },
      { label: 'بيع منتج', icon: ShoppingBag, action: 'sell_item' },
      { label: 'قياس InBody', icon: Activity, action: 'inbody' },
      { label: 'حجز كلاس', icon: Dumbbell, action: 'book_class' },
    ],
    tableHeaders: ['رقم العضوية', 'العضو', 'الباقة', 'تاريخ الانتهاء', 'حالة الاشتراك', 'آخر حضور'],
    data: [
      { id: 'GM-101', col1: 'عمرو دياب', col2: 'سنوي VIP', col3: '01/01/2026', status: 'active', time: 'الآن' },
      { id: 'GM-102', col1: 'تامر حسني', col2: 'شهري', col3: '25/11/2025', status: 'expiring', time: 'أمس' },
      { id: 'GM-103', col1: 'محمد رمضان', col2: '3 شهور', col3: '10/10/2025', status: 'expired', time: 'منذ 3 أيام' },
      { id: 'GM-104', col1: 'شيرين', col2: 'حصص خاصة', col3: '15/12/2025', status: 'active', time: 'اليوم 10 ص' },
    ]
  },

  services: {
    type: 'services',
    title: 'تكنو فيكس للصيانة',
    themeColor: 'blue',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'jobs', label: 'أوامر الشغل', icon: ClipboardList },
      { id: 'requests', label: 'الطلبات الواردة', icon: Wrench },
      { id: 'schedule', label: 'جدول الفنيين', icon: Calendar },
      { id: 'technicians', label: 'فريق العمل', icon: Users },
      { id: 'spare_parts', label: 'قطع الغيار', icon: Settings },
      { id: 'invoices', label: 'الفواتير والضمان', icon: FileText },
    ],
    stats: [
      { label: 'طلبات جديدة', value: '15', trend: 8, icon: Bell },
      { label: 'قيد التنفيذ', value: '7', trend: 0, icon: Wrench },
      { label: 'فنيين متاحين', value: '3/10', trend: -2, icon: Users },
      { label: 'إيراد الأسبوع', value: '25,000 ج', trend: 12, icon: DollarSign },
    ],
    quickActions: [
      { label: 'طلب صيانة', icon: Wrench, action: 'new_request' },
      { label: 'تعيين فني', icon: Users, action: 'assign_tech' },
      { label: 'صرف قطعة غيار', icon: Settings, action: 'issue_part' },
      { label: 'إنهاء أمر شغل', icon: CheckCircle, action: 'close_order' },
    ],
    tableHeaders: ['رقم الطلب', 'العميل', 'الجهاز', 'العطل', 'الحالة', 'الفني المسؤول'],
    data: [
      { id: '#SRV-551', col1: 'فندق الماسة', col2: 'تكييف مركزي', col3: 'صيانة دورية', status: 'in_progress', time: 'م. حسن' },
      { id: '#SRV-552', col1: 'مطعم حضرموت', col2: 'ثلاجة عرض', col3: 'لا تعمل', status: 'pending', time: 'لم يحدد' },
      { id: '#SRV-550', col1: 'فيلا 15', col2: 'شبكة مياه', col3: 'تسريب', status: 'completed', time: 'فني محمد' },
    ]
  },

  laundry: {
    type: 'laundry',
    title: 'مغسلة كلين أند واش',
    themeColor: 'teal',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'received', label: 'الاستلام (Received)', icon: ShoppingBag },
      { id: 'processing', label: 'التشغيل (Washing)', icon: Waves },
      { id: 'ironing', label: 'الكي والتجهيز', icon: Shirt },
      { id: 'ready', label: 'جاهز للتسليم', icon: CheckCircle },
      { id: 'delivery', label: 'التوصيل', icon: Truck },
      { id: 'subscriptions', label: 'الاشتراكات', icon: Ticket },
    ],
    stats: [
      { label: 'قطع مستلمة', value: '150', trend: 10, icon: Shirt },
      { label: 'في الغسيل', value: '45', trend: 5, icon: Waves },
      { label: 'جاهز للتسليم', value: '32', trend: 0, icon: CheckCircle },
      { label: 'مبيعات اليوم', value: '3,500 ج', trend: 12, icon: DollarSign },
    ],
    quickActions: [
      { label: 'استلام ملابس', icon: ShoppingBag, action: 'receive' },
      { label: 'تسليم عميل', icon: CheckCircle, action: 'deliver' },
      { label: 'طلب مستعجل', icon: Clock, action: 'urgent' },
      { label: 'اشتراك جديد', icon: Ticket, action: 'new_sub' },
      { label: 'طباعة تاج', icon: Tag, action: 'print_tag' },
    ],
    tableHeaders: ['رقم الإيصال', 'العميل', 'عدد القطع', 'المرحلة', 'الموعد', 'الحالة'],
    data: [
      { id: '#LND-101', col1: 'أحمد محمد', col2: '5 قطع', col3: 'غسيل', status: 'in_progress', time: 'اليوم 5 م' },
      { id: '#LND-102', col1: 'فندق النيل', col2: '50 قطعة', col3: 'كي وتجهيز', status: 'preparing', time: 'غداً 10 ص' },
      { id: '#LND-103', col1: 'سارة علي', col2: 'فستان سهرة', col3: 'جاهز', status: 'ready', time: 'جاهز' },
    ]
  },

  clothing: {
    type: 'clothing',
    title: 'فاشون ستايل (Fashion Style)',
    themeColor: 'pink',
    navItems: [
      { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
      { id: 'shop', label: 'المتجر (POS)', icon: Store },
      { id: 'products', label: 'المنتجات', icon: Shirt },
      { id: 'inventory', label: 'المخزون', icon: Layers },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'reports', label: 'المبيعات', icon: FileText },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '12,400 ج', trend: 18, icon: DollarSign },
      { label: 'قطع مباعة', value: '45', trend: 10, icon: Shirt },
      { label: 'نواقص المقاسات', value: '12', trend: -5, icon: Scissors },
      { label: 'عملاء جدد', value: '8', trend: 2, icon: Users },
    ],
    quickActions: [
      { label: 'بيع جديد', icon: ShoppingBag, action: 'new_sale' },
      { label: 'إضافة موديل', icon: Shirt, action: 'add_product' },
      { label: 'جرد سريع', icon: QrCode, action: 'stock_check' },
      { label: 'طباعة باركود', icon: Tag, action: 'print_barcode' },
      { label: 'مرتجع', icon: CheckCircle, action: 'return' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد القطع', 'الإجمالي', 'الحالة', 'التاريخ'],
    data: [
      { id: '#INV-2024', col1: 'عميل نقدي', col2: '3 قطع', col3: '1,200 ج', status: 'paid', time: 'منذ 5 د' },
      { id: '#INV-2023', col1: 'منى أحمد', col2: '1 فستان', col3: '850 ج', status: 'paid', time: 'منذ ساعة' },
      { id: '#INV-2022', col1: 'علي حسن', col2: '2 بنطلون', col3: '900 ج', status: 'pending', time: 'منذ ساعتين' },
    ]
  },

  salon: {
    type: 'salon',
    title: 'صالون اللوتس للتجميل',
    themeColor: 'pink',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'appointments', label: 'المواعيد', icon: Calendar },
      { id: 'pos', label: 'كاشير وخدمات', icon: DollarSign },
      { id: 'customers', label: 'العميلات', icon: Users },
      { id: 'staff', label: 'فريق العمل', icon: Sparkles },
      { id: 'inventory', label: 'المخزون', icon: Package },
    ],
    stats: [
      { label: 'مواعيد اليوم', value: '18', trend: 5, icon: Calendar },
      { label: 'مبيعات الخدمات', value: '3,200 ج', trend: 12, icon: DollarSign },
      { label: 'عميلات جدد', value: '4', trend: 0, icon: Users },
      { label: 'منتجات مباعة', value: '12', trend: -5, icon: ShoppingBag },
    ],
    quickActions: [
      { label: 'حجز موعد', icon: Calendar, action: 'book_appt' },
      { label: 'فاتورة خدمة', icon: DollarSign, action: 'new_sale' },
      { label: 'عميلة جديدة', icon: Users, action: 'new_client' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
    ],
    tableHeaders: ['رقم الحجز', 'العميلة', 'الخدمة', 'الموظفة', 'الموعد', 'الحالة'],
    data: [
      { id: '#APT-881', col1: 'سارة أحمد', col2: 'قص وسيشوار', col3: 'م. نادين', status: 'confirmed', time: '10:00 ص' },
      { id: '#APT-882', col1: 'هبة محمود', col2: 'صبغة شعر', col3: 'م. ريهام', status: 'in_progress', time: '11:30 ص' },
      { id: '#APT-883', col1: 'منى زكي', col2: 'مانيكير وباديكير', col3: 'م. سها', status: 'waiting', time: '12:00 م' },
    ]
  },

  pharmacy: {
    type: 'pharmacy',
    title: 'صيدلية الشفاء',
    themeColor: 'teal',
    navItems: [
      { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
      { id: 'pos', label: 'الكاشير (POS)', icon: ShoppingBag },
      { id: 'products', label: 'الأدوية والمخزون', icon: Pill },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'reports', label: 'التقارير', icon: FileText },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '8,500 ج', trend: 8, icon: DollarSign },
      { label: 'روشتات مصروفة', value: '45', trend: 12, icon: FileText },
      { label: 'أدوية تنفذ', value: '12', trend: -2, icon: AlertCircle },
      { label: 'عملاء جدد', value: '15', trend: 5, icon: Users },
    ],
    quickActions: [
      { label: 'بيع جديد', icon: ShoppingBag, action: 'new_sale' },
      { label: 'صرف روشتة', icon: FileText, action: 'dispense_rx' },
      { label: 'طلب نواقص', icon: Truck, action: 'order_stock' },
      { label: 'البدائل', icon: Tag, action: 'search_alternatives' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'طريقة الدفع', 'الحالة'],
    data: [
      { id: '#PH-101', col1: 'عميل نقدي', col2: '3 أدوية', col3: '450 ج', status: 'paid', time: 'منذ 10 د' },
      { id: '#PH-102', col1: 'أحمد محمد', col2: '1 دواء', col3: '85 ج', status: 'paid', time: 'منذ 30 د' },
      { id: '#PH-103', col1: 'شركة التأمين', col2: 'روشتة كاملة', col3: '1,200 ج', status: 'credit', time: 'منذ ساعة' },
    ]
  },

  plumbing: {
    type: 'plumbing',
    title: 'محل المواسير الذهبية',
    themeColor: 'blue',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'products', label: 'المنتجات', icon: Package },
      { id: 'inventory', label: 'المخزون', icon: ClipboardList },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'orders', label: 'الطلبات والتوصيل', icon: ShoppingBag },
      { id: 'invoices', label: 'الفواتير', icon: FileText },
      { id: 'installations', label: 'تركيبات', icon: Wrench },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '12,500 ج', trend: 15, icon: DollarSign },
      { label: 'منتجات متاحة', value: '245', trend: 5, icon: Package },
      { label: 'طلبات اليوم', value: '18', trend: 12, icon: ShoppingBag },
      { label: 'تركيبات مجدولة', value: '6', trend: 8, icon: Wrench },
    ],
    quickActions: [
      { label: 'بيع جديد', icon: ShoppingBag, action: 'new_sale' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
      { label: 'طلب توريد', icon: Truck, action: 'order_supply' },
      { label: 'جدولة تركيب', icon: Calendar, action: 'schedule_install' },
      { label: 'فحص مخزون', icon: ClipboardList, action: 'check_stock' },
      { label: 'فاتورة عميل', icon: FileText, action: 'new_invoice' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'الحالة', 'التاريخ'],
    data: [
      { id: '#PL-101', col1: 'مقاول محمد', col2: '8 قطع', col3: '2,450 ج', status: 'paid', time: 'منذ 5 د' },
      { id: '#PL-102', col1: 'أحمد علي', col2: '3 قطع', col3: '850 ج', status: 'credit', time: 'منذ ساعة' },
      { id: '#PL-103', col1: 'شركة المباني', col2: '15 قطعة', col3: '5,200 ج', status: 'paid', time: 'منذ ساعتين' },
    ]
  },

  painting: {
    type: 'painting',
    title: 'دهانات الألوان المميزة',
    themeColor: 'purple',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'products', label: 'الدهانات والألوان', icon: Package },
      { id: 'colors', label: 'مزج الألوان', icon: Droplets },
      { id: 'inventory', label: 'المخزون', icon: ClipboardList },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'orders', label: 'الطلبات', icon: ShoppingBag },
      { id: 'projects', label: 'مشاريع دهان', icon: PenTool },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '8,200 ج', trend: 10, icon: DollarSign },
      { label: 'ألوان متاحة', value: '156', trend: 8, icon: Droplets },
      { label: 'طلبات اليوم', value: '12', trend: 15, icon: ShoppingBag },
      { label: 'مشاريع نشطة', value: '4', trend: 2, icon: PenTool },
    ],
    quickActions: [
      { label: 'بيع دهان', icon: ShoppingBag, action: 'new_sale' },
      { label: 'مزج لون جديد', icon: Droplets, action: 'mix_color' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
      { label: 'طلب مشروع', icon: PenTool, action: 'new_project' },
      { label: 'فحص مخزون', icon: ClipboardList, action: 'check_stock' },
      { label: 'حاسبة كميات', icon: Calculator, action: 'calc_quantities' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'الحالة', 'التاريخ'],
    data: [
      { id: '#PT-101', col1: 'مقاول سالم', col2: '5 دلاء', col3: '1,800 ج', status: 'paid', time: 'منذ 10 د' },
      { id: '#PT-102', col1: 'أحمد خالد', col2: '2 لون', col3: '650 ج', status: 'paid', time: 'منذ ساعة' },
      { id: '#PT-103', col1: 'شركة الديكور', col2: '10 دلاء', col3: '3,200 ج', status: 'credit', time: 'منذ ساعتين' },
    ]
  },

  hardware: {
    type: 'hardware',
    title: 'الأدوات والمعدات المتخصصة',
    themeColor: 'gray',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'products', label: 'الأدوات والمعدات', icon: Package },
      { id: 'inventory', label: 'المخزون', icon: ClipboardList },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'rentals', label: 'التأجير', icon: Clock },
      { id: 'repairs', label: 'الصيانة', icon: Wrench },
      { id: 'services', label: 'خدمات', icon: Settings },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '15,600 ج', trend: 12, icon: DollarSign },
      { label: 'أدوات متاحة', value: '320', trend: 3, icon: Package },
      { label: 'تأجير نشط', value: '8', trend: 5, icon: Clock },
      { label: 'صيانات اليوم', value: '4', trend: -2, icon: Wrench },
    ],
    quickActions: [
      { label: 'بيع أداة', icon: ShoppingBag, action: 'new_sale' },
      { label: 'تأجير عدة', icon: Clock, action: 'rent_tool' },
      { label: 'إصلاح عدة', icon: Wrench, action: 'repair_tool' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
      { label: 'طلب قطعة غيار', icon: Truck, action: 'order_part' },
      { label: 'جدول صيانة', icon: Calendar, action: 'maintenance_schedule' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'الحالة', 'التاريخ'],
    data: [
      { id: '#HW-101', col1: 'مقاول عماد', col2: '4 أدوات', col3: '3,200 ج', status: 'paid', time: 'منذ 15 د' },
      { id: '#HW-102', col1: 'فني أحمد', col2: '1 أداة', col3: '450 ج', status: 'paid', time: 'منذ ساعة' },
      { id: '#HW-103', col1: 'شركة الصيانة', col2: '8 أدوات', col3: '2,800 ج', status: 'paid', time: 'منذ ساعتين' },
    ]
  },

  electrical: {
    type: 'electrical',
    title: 'محل الكهرباء والإضاءة',
    themeColor: 'yellow',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'products', label: 'المنتجات الكهربائية', icon: Package },
      { id: 'inventory', label: 'المخزون', icon: ClipboardList },
      { id: 'suppliers', label: 'الموردين', icon: Truck },
      { id: 'customers', label: 'العملاء', icon: Users },
      { id: 'installations', label: 'التركيبات', icon: Wrench },
      { id: 'maintenance', label: 'الصيانة', icon: Settings },
      { id: 'lighting', label: 'أنظمة الإضاءة', icon: Lightbulb },
      { id: 'settings', label: 'الإعدادات', icon: Settings },
    ],
    stats: [
      { label: 'مبيعات اليوم', value: '9,800 ج.م', trend: 8, icon: DollarSign },
      { label: 'منتجات متاحة', value: '180', trend: 6, icon: Package },
      { label: 'تركيبات اليوم', value: '5', trend: 10, icon: Wrench },
      { label: 'صيانات مجدولة', value: '3', trend: 0, icon: Settings },
    ],
    quickActions: [
      { label: 'بيع منتج', icon: ShoppingCart, action: 'sell_product' },
      { label: 'جدولة تركيب', icon: Calendar, action: 'schedule_installation' },
      { label: 'طلب صيانة', icon: Settings, action: 'request_maintenance' },
      { label: 'إضافة منتج', icon: Package, action: 'add_product' },
      { label: 'تصميم إضاءة', icon: Lightbulb, action: 'design_lighting' },
      { label: 'فحص كهرباء', icon: Zap, action: 'electrical_check' },
    ],
    tableHeaders: ['رقم الفاتورة', 'العميل', 'عدد الأصناف', 'الإجمالي', 'الحالة', 'التاريخ'],
    data: [
      { id: '#EL-101', col1: 'مقاول رامي', col2: '6 قطع', col3: '2,100 ج', status: 'paid', time: 'منذ 20 د' },
      { id: '#EL-102', col1: 'أحمد سالم', col2: '3 قطع', col3: '750 ج', status: 'paid', time: 'منذ ساعة' },
      { id: '#EL-103', col1: 'شركة الإنشاءات', col2: '10 قطع', col3: '4,200 ج', status: 'credit', time: 'منذ ساعتين' },
    ]
  },
  construction: {
    type: 'construction',
    title: 'إدارة مشاريع البناء',
    themeColor: 'yellow',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'projects', label: 'المشاريع', icon: HardHat },
      { id: 'materials', label: 'المواد والمستلزمات', icon: Package },
      { id: 'schedule', label: 'جدول العمال', icon: Calendar },
      { id: 'team', label: 'فريق العمل', icon: Users },
      { id: 'alerts', label: 'التنبيهات', icon: AlertCircle },
      { id: 'invoices', label: 'الفواتير والعقود', icon: FileText },
    ],
    stats: [
      { label: 'المشاريع النشطة', value: '12', trend: 2, icon: HardHat },
      { label: 'العمال', value: '48', trend: 5, icon: Users },
      { label: 'المواد المتوفرة', value: '156', trend: 8, icon: Package },
      { label: 'التنبيهات', value: '3', trend: -1, icon: AlertCircle },
    ],
    quickActions: [
      { label: 'مشروع جديد', icon: Plus, action: 'new_project' },
      { label: 'إضافة مواد', icon: Package, action: 'add_materials' },
      { label: 'جدولة عمال', icon: Calendar, action: 'schedule_workers' },
      { label: 'فاتورة جديدة', icon: FileText, action: 'new_invoice' },
    ],
    tableHeaders: ['المشروع', 'التقدم', 'العمال', 'المواد', 'الحالة'],
    data: [
      { id: 'PRJ-001', col1: 'مشروع سكني #1', col2: '65%', col3: '12', col4: '450 وحدة', status: 'in_progress' },
      { id: 'PRJ-002', col1: 'مشروع تجاري #2', col2: '45%', col3: '18', col4: '200 وحدة', status: 'active' },
      { id: 'PRJ-003', col1: 'مشروع إداري #3', col2: '80%', col3: '8', col4: '100 وحدة', status: 'in_progress' },
    ]
  },
  carwash: {
    type: 'carwash',
    title: 'محطة غسيل السيارات',
    themeColor: 'cyan',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'bookings', label: 'الحجوزات', icon: Calendar },
      { id: 'services', label: 'الخدمات', icon: Zap },
      { id: 'staff', label: 'الموظفين', icon: Users },
      { id: 'orders', label: 'الطلبات', icon: ClipboardList },
      { id: 'loyalty', label: 'برنامج الولاء', icon: Star },
      { id: 'invoices', label: 'الفواتير', icon: FileText },
    ],
    stats: [
      { label: 'الحجوزات اليوم', value: '24', trend: 8, icon: Calendar },
      { label: 'الموظفين', value: '8', trend: 0, icon: Users },
      { label: 'الخدمات', value: '6', trend: 2, icon: Zap },
      { label: 'الإيرادات', value: '2,450 ج', trend: 12, icon: DollarSign },
    ],
    quickActions: [
      { label: 'حجز جديد', icon: Calendar, action: 'new_booking' },
      { label: 'إضافة خدمة', icon: Plus, action: 'add_service' },
      { label: 'تسجيل موظف', icon: Users, action: 'add_staff' },
      { label: 'فاتورة', icon: FileText, action: 'new_invoice' },
    ],
    tableHeaders: ['الحجز', 'السيارة', 'الخدمة', 'الوقت', 'الحالة'],
    data: [
      { id: 'BK-001', col1: 'سيارة #1', col2: 'غسيل كامل', col3: '10:00 صباحاً', status: 'confirmed' },
      { id: 'BK-002', col1: 'سيارة #2', col2: 'غسيل سريع', col3: '11:30 صباحاً', status: 'pending' },
      { id: 'BK-003', col1: 'سيارة #3', col2: 'تلميع', col3: '02:00 مساءً', status: 'confirmed' },
    ]
  },
  logistics: {
    type: 'logistics',
    title: 'إدارة الشحن واللوجستيات',
    themeColor: 'green',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'shipments', label: 'الشحنات', icon: Package },
      { id: 'fleet', label: 'الأسطول', icon: Truck },
      { id: 'tracking', label: 'التتبع', icon: Map },
      { id: 'drivers', label: 'السائقين', icon: Users },
      { id: 'issues', label: 'المشاكل', icon: AlertCircle },
      { id: 'invoices', label: 'الفواتير', icon: FileText },
    ],
    stats: [
      { label: 'الشحنات النشطة', value: '156', trend: 12, icon: Package },
      { label: 'السيارات', value: '24', trend: 0, icon: Truck },
      { label: 'السائقين', value: '32', trend: 3, icon: Users },
      { label: 'التأخيرات', value: '2', trend: -1, icon: AlertCircle },
    ],
    quickActions: [
      { label: 'شحنة جديدة', icon: Package, action: 'new_shipment' },
      { label: 'تتبع شحنة', icon: Map, action: 'track_shipment' },
      { label: 'إضافة سائق', icon: Users, action: 'add_driver' },
      { label: 'تقرير', icon: FileText, action: 'generate_report' },
    ],
    tableHeaders: ['الشحنة', 'المصدر', 'الوجهة', 'الحالة', 'التقدم'],
    data: [
      { id: 'SHP-001', col1: 'القاهرة', col2: 'الإسكندرية', col3: 'قيد التوصيل', col4: '75%' },
      { id: 'SHP-002', col1: 'الجيزة', col2: 'الفيوم', col3: 'قيد التوصيل', col4: '45%' },
      { id: 'SHP-003', col1: 'القاهرة', col2: 'السويس', col3: 'في الطريق', col4: '60%' },
    ]
  },
  agriculture: {
    type: 'agriculture',
    title: 'إدارة المزارع والزراعة',
    themeColor: 'green',
    navItems: [
      { id: 'overview', label: 'الرئيسية', icon: LayoutDashboard },
      { id: 'crops', label: 'المحاصيل', icon: Leaf },
      { id: 'irrigation', label: 'الري', icon: Droplets },
      { id: 'productivity', label: 'الإنتاجية', icon: TrendingUp },
      { id: 'issues', label: 'المشاكل', icon: AlertCircle },
      { id: 'staff', label: 'الموظفين', icon: Users },
      { id: 'sales', label: 'المبيعات', icon: FileText },
    ],
    stats: [
      { label: 'المحاصيل النشطة', value: '8', trend: 2, icon: Leaf },
      { label: 'المساحة المزروعة', value: '45 فدان', trend: 5, icon: TrendingUp },
      { label: 'الري اليومي', value: '2,400 م³', trend: 8, icon: Droplets },
      { label: 'الإنتاجية', value: '85%', trend: 3, icon: CheckCircle },
    ],
    quickActions: [
      { label: 'محصول جديد', icon: Plus, action: 'new_crop' },
      { label: 'جدولة ري', icon: Droplets, action: 'schedule_irrigation' },
      { label: 'تقرير إنتاجية', icon: FileText, action: 'productivity_report' },
      { label: 'تسجيل عامل', icon: Users, action: 'add_staff' },
    ],
    tableHeaders: ['المحصول', 'الحالة', 'المساحة', 'التقدم', 'الحصاد المتوقع'],
    data: [
      { id: 'CRP-001', col1: 'القمح', col2: 'نمو', col3: '15 فدان', col4: '65%', status: 'growing' },
      { id: 'CRP-002', col1: 'الذرة', col2: 'حصاد قريب', col3: '20 فدان', col4: '90%', status: 'ready' },
      { id: 'CRP-003', col1: 'الطماطم', col2: 'إثمار', col3: '10 فدان', col4: '45%', status: 'fruiting' },
    ]
  },
  admin: {
    type: 'admin',
    title: 'مركز التحكم الإداري',
    themeColor: 'slate',
    navItems: [
      { id: 'overview', label: 'لوحة التحكم', icon: LayoutDashboard },
      { id: 'users', label: 'المستخدمين والصلاحيات', icon: Users },
      { id: 'roles', label: 'الأدوار والمجموعات', icon: Shield },
      { id: 'reports', label: 'التقارير المجمعة', icon: FileText },
      { id: 'analytics', label: 'التحليلات والإحصائيات', icon: BarChart3 },
      { id: 'performance', label: 'الأداء والمؤشرات', icon: TrendingUp },
      { id: 'shipping', label: 'إدارة الشحنات', icon: Truck },
      { id: 'delivery', label: 'التوصيل والتوزيع', icon: Map },
      { id: 'warehouses', label: 'المخازن والمستودعات', icon: Warehouse },
      { id: 'settings', label: 'إعدادات النظام', icon: Settings },
      { id: 'alerts', label: 'التنبيهات والإنذارات', icon: AlertCircle },
      { id: 'audit', label: 'سجل النشاطات', icon: Clock },
    ],
    stats: [
      { label: 'إجمالي المستخدمين', value: '1,245', trend: 12, icon: Users },
      { label: 'الأنشطة التجارية', value: '20', trend: 8, icon: Shield },
      { label: 'إجمالي الإيرادات', value: '2.8M ج', trend: 18, icon: DollarSign },
      { label: 'الشحنات النشطة', value: '156', trend: -5, icon: Truck },
    ],
    quickActions: [
      { label: 'إدارة المستخدمين', icon: Users, action: 'manage_users' },
      { label: 'التقارير المجمعة', icon: FileText, action: 'generate_reports' },
      { label: 'إدارة الشحنات', icon: Truck, action: 'manage_shipping' },
      { label: 'التوصيل والتوزيع', icon: Map, action: 'manage_delivery' },
      { label: 'إعدادات النظام', icon: Settings, action: 'system_settings' },
      { label: 'سجل النشاطات', icon: Clock, action: 'audit_logs' },
    ],
    tableHeaders: ['المعرف', 'النوع', 'الحالة', 'المستخدم', 'الوقت', 'الإجراءات'],
    data: [
      { id: 'LOG-001', col1: 'security', col2: 'success', col3: 'أحمد محمد', col4: '10:30', col5: 'عرض' },
      { id: 'LOG-002', col1: 'data', col2: 'success', col3: 'سارة أحمد', col4: '09:15', col5: 'عرض' },
      { id: 'LOG-003', col1: 'system', col2: 'info', col3: 'النظام', col4: '08:00', col5: 'عرض' },
    ]
  }
};

export const colorClasses: Record<string, any> = {
  slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', btn: 'bg-slate-800 hover:bg-slate-900', lightBtn: 'bg-slate-100 text-slate-800' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', btn: 'bg-orange-600 hover:bg-orange-700', lightBtn: 'bg-orange-100 text-orange-700' },
  blue: { bg: 'bg-blue-50', text: 'text-ray-blue', border: 'border-blue-200', btn: 'bg-ray-blue hover:bg-blue-900', lightBtn: 'bg-blue-100 text-blue-800' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', btn: 'bg-green-600 hover:bg-green-700', lightBtn: 'bg-green-100 text-green-700' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', btn: 'bg-red-600 hover:bg-red-700', lightBtn: 'bg-red-100 text-red-700' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', btn: 'bg-teal-600 hover:bg-teal-700', lightBtn: 'bg-teal-100 text-teal-700' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', btn: 'bg-yellow-600 hover:bg-yellow-700', lightBtn: 'bg-yellow-100 text-yellow-800' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', btn: 'bg-cyan-600 hover:bg-cyan-700', lightBtn: 'bg-cyan-100 text-cyan-700' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', btn: 'bg-pink-600 hover:bg-pink-700', lightBtn: 'bg-pink-100 text-pink-700' },
};
