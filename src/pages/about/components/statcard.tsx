import React from 'react';

type StatsCardProps = {
  icon: React.ElementType; 
  number: string | number; 
  label: string; 
};

export default function StatsCard({
  icon: Icon,
  number,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{number}</h3>
      <p className="text-sm text-gray-700 font-medium">{label}</p>
    </div>
  );
}
