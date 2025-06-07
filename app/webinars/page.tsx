'use client'; // Add this directive at the very top

import React from 'react';
interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
}


function App() {
  
  const webinars: Webinar[] = [
    {
      id: 1,
      title: "Understanding Toddler Sleep Patterns",
      speaker: "Dr. Sumitra Meena",
      date: "June 15, 2025"
    },
    {
      id: 2,
      title: "Positive Parenting Techniques for Challenging Behaviors",
      speaker: "Dr. Alok Sharma",
      date: "June 22, 2025"
    },
    {
      id: 3,
      title: "Nutrition Essentials for Growing Kids",
      speaker: "Ms. Priya Singh (Registered Dietitian)",
      date: "June 29, 2025"
    },
    {
      id: 4,
      title: "Mindful Parenting: Reducing Stress",
      speaker: "Dr. Kavita Devi",
      date: "July 06, 2025"
    },
    {
      id: 5,
      title: "First Aid for Parents: What You Need to Know",
      speaker: "Nurse Rina Gupta",
      date: "July 13, 2025"
    },
  ];

  
  interface WebinarCardProps {
    webinar: Webinar;
  }

  
  const WebinarCard = ({ webinar }: WebinarCardProps) => {
    // 3. Add Interactivity: Function to handle "View Details" button click.
    const handleViewDetails = () => {
      console.log(`Viewing details for webinar ID: ${webinar.id}`);
    
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
        {/* Webinar title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{webinar.title}</h3>
        {/* Speaker and Date information */}
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium">Speaker:</span> {webinar.speaker}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          <span className="font-medium">Date:</span> {webinar.date}
        </p>
        {/* View Details button */}
        <button
          onClick={handleViewDetails}
          className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View Details
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-8 font-inter">
      {/* Page Title */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Upcoming Webinars</h1>
        {/* Corrected unescaped apostrophe here */}
        <p className="text-lg text-gray-700">Simple and clear list of what&apos;s available for busy parents.</p>
      </header>

      {/* 2. Fetch & Display Data: Render mock data as a list of styled cards. */}
      {/* Responsive grid layout for webinar cards */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {webinars.map((webinar) => (
          // Use webinar.id as key for efficient rendering
          <WebinarCard key={webinar.id} webinar={webinar} />
        ))}
      </main>

     
      
    </div>
  );
}

export default App;
