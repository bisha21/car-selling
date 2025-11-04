import { useState } from 'react';
import { Edit2 } from 'lucide-react';

// Interface defining the shape of a user's profile
interface UserProfile {
  name: string;
  address: string;
  phone: string;
  email: string;
  age: number;
  image: string;
}

// Default profile data
const defaultProfile: UserProfile = {
  name: 'Jonathan Den',
  address: 'Nevada, USA',
  phone: '+1-1234567890',
  email: 'johnden@gmail.com',
  age: 37,
  image:
    'https://scontent.fkep3-1.fna.fbcdn.net/v/t39.30808-6/486675996_2306283139753191_3056215986891467393_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEryvjiFXqCGQP5kCx6luTDf2OnTtp0rip_Y6dO2nSuKiRtd7jcdVgzuOCdm8Li9Ohq87hJ8z0Xmy44VYYwoQIo&_nc_ohc=5tb6crND6xYQ7kNvwEk92_2&_nc_oc=Admt2pSJOVtubvWeH5x8rS77IzL052LGfqtAqHNRNl-3Uyn0h7OGULRdNbyvTOn4tr4&_nc_zt=23&_nc_ht=scontent.fkep3-1.fna&_nc_gid=GYjOTMRtUaH0PM1ffH5j5w&oh=00_AfjT_Im3fAvYLk4cnkvQtwTvgJNS3bDAj7KW2LIJAiGABw&oe=690FA008',
};

export default function ProfileInfo() {
  // State for storing the current profile info
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for holding form inputs while editing
  const [formData, setFormData] = useState(profile);

  // Handle input changes in the edit form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number.parseInt(value) : value, // Convert age to number
    }));
  };

  // Save changes to profile
  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  // Cancel editing and revert form data
  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <section className="py-12 px-4 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Your Profile
        </h2>

        <div className="rounded-lg flex items-center justify-center p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="shrink-0">
              <img
                src={profile.image} // Use actual profile image
                alt={profile.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Profile Details */}
            <div className="flex-1">
              {isEditing ? (
                // Edit mode: show input fields
                <div className="space-y-4">
                  {['name', 'address', 'phone', 'email', 'age'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={
                          field === 'age'
                            ? 'number'
                            : field === 'email'
                            ? 'email'
                            : 'text'
                        }
                        name={field}
                        value={formData[field as keyof UserProfile]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}

                  {/* Save & Cancel buttons */}
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
                // View mode: show profile info
                <div className="space-y-4">
                  {Object.entries(profile).map(
                    ([key, value]) =>
                      key !== 'image' && (
                        <div key={key} className="flex items-center gap-4">
                          <span className="font-semibold text-gray-700 w-24">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                          <span className="text-gray-900 font-bold">
                            : {value}
                          </span>
                        </div>
                      )
                  )}

                  {/* Edit Profile button */}
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
