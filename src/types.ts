export type CategoryId =
  | 'all'
  | 'day-bam-dau'
  | 'draw-cord'
  | 'day-luon-dep'
  | 'day-rope-du'
  | 'webbing-tape'
  | 'macrame-cotton'
  | 'elastic-tron'
  | 'day-khoa-keo'
  | 'thun-ban'
  | 'day-vien-thun'
  | 'day-du-lau-kinh';

export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  englishName?: string;
  category: CategoryId;
  categoryLabel: string;
  tag?: string;
  tagColor?: 'orange' | 'red' | 'blue' | 'emerald' | 'amber' | 'purple';
  description: string;
  fullDescription: string;
  image: string;
  material: string;
  width: string;
  moq: string;
  leadTime: string;
  tippingOptions?: string[];
  tensileStrength?: string;
  colorOptions?: string[];
  customColorAvailable?: boolean;
  applications: string[];
  keyFeatures: string[];
  specsTable: ProductSpec[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  productSku: string;
  quantity: string;
  unit: string;
  tippingType?: string;
  customColor: string;
  destination: string;
  notes: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  specialties: string[];
  tippingTypes: string[];
}
