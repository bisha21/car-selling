import StatsCard from './statcard';
import { Car, Users, Building2 } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Car, number: '1000+', label: 'cars sold' },
    { icon: Users, number: '2000+', label: 'satisfied customers' },
    { icon: Building2, number: '10+', label: 'offices globally' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
