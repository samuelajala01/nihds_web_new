import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  const communityCards = [
    {
      image: '/assets/free-com.png',
      title: 'Free Community',
      description: 'Connect with like minds to get tips on our AI trends',
      hasButton: true,
      bgWhite: false
    },
    {
      image: '/assets/online-com.png',
      title: 'Online Community',
      description: 'Join our Community',
      bgWhite: true
    },
    {
      image: '/assets/ai-trends.png',
      title: 'AI trends',
      description: 'Connect with the like-minded',
      bgWhite: true
    },
    {
      image: '/assets/blogs.png',
      title: 'Blogs',
      description: 'Get insights on advanced tools',
      bgWhite: true
    }
  ];

  return (
    <section className="bg-gray-600 px-6 py-12 md:p-16 text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-wide">
          NIHDS Community
        </p>
        
        <h2 className="my-6 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-2xl">
          Connect to our AI community platforms
        </h2>
        
        <p className="max-w-2xl text-lg mb-12">
          Join our community and connect with like-minded individuals dedicated
          to advancing health and wellness through innovation. Stay informed,
          share insights, and be part of the future of health technology.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityCards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-lg p-4 flex flex-col items-center ${
                card.bgWhite ? 'bg-white text-black' : 'text-white'
              }`}
            >
              <div className="w-full aspect-square relative mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-lg mb-2">{card.title}</p>
                <p className="text-sm mb-4">{card.description}</p>
                {card.hasButton && (
                  <button className="border-2 rounded-md border-white hover:bg-white hover:text-gray-600 transition-colors duration-200 w-full py-2 px-4">
                    Join our free community
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;