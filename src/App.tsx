/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  Download, 
  Zap, 
  Shield, 
  CheckCircle, 
  Menu, 
  X, 
  Search,
  Video,
  Music,
  Film,
  Smartphone
} from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">VidsSave</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-red-600 font-medium">YouTube</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">TikTok</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Instagram</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">EN</button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-red-600 bg-red-50">YouTube</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Facebook</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">TikTok</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [url, setUrl] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      alert(`Processing URL: ${url}`);
    }
  };

  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          YouTube Video Downloader
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Download YouTube videos in HD, Full HD, or MP3 format. Fast, free, and secure downloads to your device without installing any apps.
        </p>

        <form onSubmit={handleDownload} className="max-w-3xl mx-auto relative flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube link here..."
              className="block w-full pl-12 pr-32 py-4 sm:py-5 text-base sm:text-lg border-2 border-red-200 rounded-2xl focus:ring-0 focus:border-red-500 shadow-sm transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:px-8 rounded-xl transition-colors flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            <span className="hidden sm:inline">Download</span>
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          By using our service you accept our <a href="#" className="text-red-600 hover:underline">Terms of Service</a>.
        </p>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-red-500" />,
      title: "Fast & Easy",
      description: "Download videos in seconds. Just paste the link and click download. No technical skills required."
    },
    {
      icon: <Video className="h-8 w-8 text-red-500" />,
      title: "High Quality",
      description: "Save videos in 720p, 1080p, 2K, and 4K resolution. Get the best possible quality available."
    },
    {
      icon: <Music className="h-8 w-8 text-red-500" />,
      title: "MP3 Support",
      description: "Extract audio from videos and save them as high-quality MP3 files for offline listening."
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "100% Secure",
      description: "No software installation required. Our service is completely safe and free from viruses."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-500" />,
      title: "All Devices",
      description: "Works perfectly on PC, Mac, Android, and iOS devices. Download anywhere, anytime."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-500" />,
      title: "Free Forever",
      description: "Unlimited downloads without any cost. No registration or account creation needed."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose VidsSave?</h2>
          <p className="mt-4 text-lg text-gray-600">The best tool to download videos from YouTube</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportedPlatforms() {
  const platforms = [
    { name: "YouTube", icon: <Youtube className="h-8 w-8" />, color: "bg-red-100 text-red-600", desc: "Download YT videos in HD, Full HD, or MP3 format" },
    { name: "Facebook", icon: <Facebook className="h-8 w-8" />, color: "bg-blue-100 text-blue-600", desc: "Download Facebook videos, reels, and stories in MP4" },
    { name: "TikTok", icon: <Music className="h-8 w-8" />, color: "bg-gray-100 text-gray-900", desc: "Download TikTok videos without watermark in HD" },
    { name: "Instagram", icon: <Instagram className="h-8 w-8" />, color: "bg-pink-100 text-pink-600", desc: "Save Instagram videos, reels, and stories instantly" },
    { name: "Pinterest", icon: <Film className="h-8 w-8" />, color: "bg-red-100 text-red-600", desc: "Download Pinterest videos, images, and GIFs" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Supported Platforms</h2>
          <p className="mt-4 text-lg text-gray-600">Download videos from your favorite social media platforms</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a key={index} href="#" className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all group">
              <div className={`p-4 rounded-xl ${platform.color} mr-4 group-hover:scale-110 transition-transform`}>
                {platform.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{platform.name} Downloader</h3>
                <p className="text-sm text-gray-500">{platform.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedTools() {
  const tools = [
    "YT Music", "YT Movies", "YT MP3", "YT MP4", "YT Shorts"
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related To YT</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <a key={index} href="#" className="px-6 py-3 bg-gray-50 hover:bg-red-50 hover:text-red-600 text-gray-700 font-medium rounded-full border border-gray-200 transition-colors">
              {tool}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <Youtube className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">VidsSave</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The best free online video downloader. Save videos from YouTube, Facebook, Instagram, TikTok, and more in high quality.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">YouTube Downloader</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook Downloader</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok Downloader</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram Downloader</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VidsSave. All rights reserved.</p>
          <p className="mt-2">We are not affiliated with YouTube, Google, or any other platform mentioned.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <SupportedPlatforms />
        <RelatedTools />
      </main>
      <Footer />
    </div>
  );
}

