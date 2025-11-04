import StatsCard from './statcard'; // Import the reusable StatsCard component
import { Car, Users, Building2 } from 'lucide-react'; // Import icons from Lucide

export default function StatsSection() {
  // Array of statistics to display
  const stats = [
    { icon: Car, number: '1000+', label: 'cars sold' },
    { icon: Users, number: '2000+', label: 'satisfied customers' },
    { icon: Building2, number: '10+', label: 'offices globally' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            // Render a StatsCard for each statistic
            <StatsCard
              key={index} // Unique key for each element in the list
              icon={stat.icon} // Icon component to display
              number={stat.number} // Statistic number
              label={stat.label} // Description of the statistic
            />
          ))}
        </div>
      </div>
    </section>
  );
}
