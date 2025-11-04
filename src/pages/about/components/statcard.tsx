import React from 'react';

// Define props for StatsCard
type StatsCardProps = {
  icon: React.ElementType; // The icon component to display (e.g., from Heroicons or Lucide)
  number: string | number; // The main statistic number
  label: string; // The label describing the statistic
};

export default function StatsCard({
  icon: Icon, // Destructure and rename icon prop to Icon for rendering
  number,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      {/* Icon Circle */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          {/* Render the passed Icon component */}
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Main statistic number */}
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{number}</h3>

      {/* Label describing the statistic */}
      <p className="text-sm text-gray-700 font-medium">{label}</p>
    </div>
  );
}
