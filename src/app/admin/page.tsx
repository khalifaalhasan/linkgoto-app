// src/app/admin/page.tsx
'use client';

import React, { useState } from 'react';
import { Plus, GripVertical, Trash2, Edit2 } from 'lucide-react';

import PhonePreview from '@/components/PhonePreview';
import { LinkItem } from '@/types/link';

export default function AdminDashboard() {
  // Global State untuk Links
  const [links, setLinks] = useState<LinkItem[]>([
    { id: '1', title: 'Website Utama', url: 'https://banggapunyaweb.com', isActive: true, type: 'standard' },
    { id: '2', title: 'Shopee: Kopi Butterscotch', url: 'https://shopee.co.id', isActive: true, type: 'product' },
  ]);

  const [profileName, setProfileName] = useState('linkgoto.app');
  const [profileBio, setProfileBio] = useState('Katalog UMKM Digital');

  // Fungsi Tambah Link Baru
  const handleAddLink = () => {
    const newLink: LinkItem = {
      id: Date.now().toString(), // Simple ID generator for MVP
      title: '',
      url: '',
      isActive: true,
      type: 'standard',
    };
    setLinks([newLink, ...links]);
  };

  // Fungsi Update Value Link
  const handleUpdateLink = (id: string, field: keyof LinkItem, value: any) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ));
  };

  // Fungsi Hapus Link
  const handleDeleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F3F3F1] flex">
      
      {/* LEFT PANEL - Editor Area */}
      <div className="w-full lg:w-3/5 p-4 sm:p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Links</h1>
          
          <button 
            onClick={handleAddLink}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold flex justify-center items-center gap-2 mb-8 transition"
          >
            <Plus size={20} /> Add New Link
          </button>

          {/* List of Link Editor Cards */}
          <div className="space-y-4">
            {links.map((link) => (
              <div key={link.id} className="bg-white rounded-2xl shadow-sm p-4 flex gap-4">
                
                {/* Drag Handle Dummy */}
                <div className="flex flex-col justify-center text-gray-400 cursor-grab">
                  <GripVertical size={20} />
                </div>

                {/* Inputs Area */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Title" 
                      value={link.title}
                      onChange={(e) => handleUpdateLink(link.id, 'title', e.target.value)}
                      className="w-full font-semibold text-gray-800 border-none outline-none focus:ring-0 placeholder-gray-400"
                    />
                    <Edit2 size={14} className="text-gray-400" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="url" 
                      placeholder="URL" 
                      value={link.url}
                      onChange={(e) => handleUpdateLink(link.id, 'url', e.target.value)}
                      className="w-full text-sm text-gray-600 border-none outline-none focus:ring-0 placeholder-gray-400"
                    />
                    <Edit2 size={14} className="text-gray-400" />
                  </div>
                </div>

                {/* Actions (Toggle & Delete) */}
                <div className="flex flex-col items-end justify-between">
                  {/* Simple Toggle Switch Custom */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={link.isActive}
                      onChange={(e) => handleUpdateLink(link.id, 'isActive', e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>

                  <button 
                    onClick={() => handleDeleteLink(link.id)}
                    className="text-gray-400 hover:text-red-500 transition mt-4"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT PANEL - Realtime Preview */}
      <div className="hidden lg:block lg:w-2/5 border-l border-gray-200 bg-white">
        <PhonePreview 
          links={links} 
          profileName={profileName} 
          profileBio={profileBio} 
        />
      </div>

    </div>
  );
}