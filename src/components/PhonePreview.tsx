// src/components/PhonePreview.tsx
import { LinkItem } from '@/types/link';
import React from 'react';


interface PhonePreviewProps {
  links: LinkItem[];
  profileName: string;
  profileBio: string;
}

export default function PhonePreview({ links, profileName, profileBio }: PhonePreviewProps) {
  return (
    <div className="flex justify-center items-start pt-10 sticky top-0 h-screen">
      {/* Phone Frame */}
      <div className="w-[300px] h-[600px] border-[12px] border-black rounded-[40px] overflow-hidden bg-gray-100 shadow-2xl relative">
        
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-5 bg-black rounded-b-2xl w-32 mx-auto z-10"></div>

        {/* Screen Content */}
        <div className="w-full h-full overflow-y-auto px-4 py-12 flex flex-col items-center bg-gradient-to-b from-purple-100 to-white">
          
          {/* Avatar Dummy */}
          <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
          
          <h2 className="font-bold text-lg text-gray-900">{profileName || '@username'}</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">{profileBio}</p>

          {/* Render Links Realtime */}
          <div className="w-full space-y-3">
            {links.filter(link => link.isActive).map((link) => (
              <a
                key={link.id}
                href={link.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-white text-center rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition font-medium text-gray-800"
              >
                {link.title || 'Untitled Link'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}