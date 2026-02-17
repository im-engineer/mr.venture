import { ShoppingCart, GraduationCap, Hospital } from 'lucide-react';

export const servicesData = [
  {
    slug: 'ecommerce-solutions',
    title: 'Ecommerce Solutions',
    subtitle: 'Scale Your Online Business',
    description: 'Build and scale your online empire with our AI-powered ecommerce platform. Complete with smart inventory management, seamless payment processing, advanced analytics, and omnichannel selling capabilities.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1533779541233-cad641399dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGNhcnR8ZW58MXx8fHwxNzY1ODA1MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Smart Analytics Dashboard',
      'Mobile-First Design',
      'Secure Payment Gateway',
      'Real-time Sales Tracking',
      'Inventory Management',
      'Multi-channel Integration',
      'Customer Analytics',
      'Marketing Automation'
    ],
    benefits: [
      'Increase sales by up to 300%',
      'Reduce operational costs by 40%',
      'Improve customer retention',
      'Streamline order processing'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: 'Custom'
    }
  },
  {
    slug: 'school-management',
    title: 'School Management System',
    subtitle: 'Modernize Education',
    description: 'Revolutionary educational platform that streamlines every aspect of school operations. Manage students, faculty, attendance, grades, and parent communication with powerful automation and insights.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGRpZ2l0YWwlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjU4MDUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-emerald-500 to-teal-500',
    features: [
      'Student Information Portal',
      'AI-Powered Attendance',
      'Grade Management',
      'Parent Communication Hub',
      'Teacher Dashboard',
      'Online Assignment Submission',
      'Library Management',
      'Fee Management System'
    ],
    benefits: [
      'Save 20+ hours per week on admin tasks',
      'Improve parent engagement by 85%',
      'Reduce paper usage by 90%',
      'Enhanced student tracking'
    ],
    technologies: ['React', 'Django', 'MongoDB', 'GraphQL', 'WebRTC', 'Azure'],
    pricing: {
      starter: '$149/month',
      professional: '$399/month',
      enterprise: 'Custom'
    }
  },
  {
    slug: 'hospital-management',
    title: 'Hospital Management System',
    subtitle: 'Transform Healthcare Delivery',
    description: 'Transform healthcare delivery with our comprehensive hospital management solution. From intelligent patient records to automated scheduling, billing integration, and complete pharmacy management.',
    icon: Hospital,
    image: 'https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1ODA1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Electronic Health Records',
      'Automated Scheduling',
      'Billing & Insurance System',
      'HIPAA Compliance',
      'Pharmacy Management',
      'Lab Integration',
      'Telemedicine Support',
      'Patient Portal'
    ],
    benefits: [
      'Reduce wait times by 50%',
      'Improve patient satisfaction',
      'Streamline billing processes',
      'Enhanced security and compliance'
    ],
    technologies: ['React', 'Java Spring', 'MySQL', 'FHIR API', 'HL7', 'Google Cloud'],
    pricing: {
      starter: '$499/month',
      professional: '$999/month',
      enterprise: 'Custom'
    }
  }
];
