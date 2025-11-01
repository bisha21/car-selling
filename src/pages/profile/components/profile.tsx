
import type React from 'react';

import { useState } from 'react';
import { Edit2 } from 'lucide-react';

interface UserProfile {
  name: string;
  address: string;
  phone: string;
  email: string;
  age: number;
  image: string;
}

const defaultProfile: UserProfile = {
  name: 'Jonathan Den',
  address: 'Nevada, USA',
  phone: '+1-1234567890',
  email: 'johnden@gmail.com',
  age: 37,
  image: '/profile-user-avatar.jpg',
};

export default function ProfileInfo() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number.parseInt(value) : value,
    }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <section className="py-12 px-4 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Your Profile
        </h2>

        <div className=" rounded-lg  flex items-center justify-center p-8 ">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="shrink-0">
              <img
                src='https://static.vecteezy.com/system/resources/previews/025/185/764/non_2x/confident-businessman-in-suit-successful-corporate-professional-standing-generated-by-ai-free-photo.jpg'
                alt={profile.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg "
              />
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-24">
                      Name
                    </span>
                    <span className="text-gray-900 font-bold">
                      : {profile.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-24">
                      Address
                    </span>
                    <span className="text-gray-900 font-bold">
                      : {profile.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-24">
                      Phone
                    </span>
                    <span className="text-gray-900 font-bold">
                      : {profile.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-24">
                      Email
                    </span>
                    <span className="text-gray-900 font-bold">
                      : {profile.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 w-24">
                      Age
                    </span>
                    <span className="text-gray-900 font-bold">
                      : {profile.age}
                    </span>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                    >
                      <Edit2 size={18} />
                      Edit Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
