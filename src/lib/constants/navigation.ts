import {
  Home,
  TrendingUp,
  CreditCard,
  RefreshCcw,
  User,
  PieChart,
} from 'lucide-react';

export const TAB_ROUTES = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Invest', href: '/invest', icon: TrendingUp },
  { name: 'Payments', href: '/payments', icon: CreditCard },
  { name: 'Swap', href: '/swap', icon: RefreshCcw },
];

export const HEADER_ROUTES = {
  profile: { name: 'Profile', href: '/profile', icon: User },
  cards: { name: 'Cards', href: '/cards', icon: CreditCard },
  stats: { name: 'Stats', href: '/stats', icon: PieChart },
};
