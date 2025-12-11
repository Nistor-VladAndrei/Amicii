import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Search, ShoppingCart, ChevronDown, Star, Sparkles } from 'lucide-react';
import logo from './logo (2).png';
import ShaormaFarfuriePui from './shaorma-farfurie-pui.png';
import GlovoImg from './glovo.png';
import WoltImg from './wolt.png';
import BoltImg from './bolt.png';
import bgShw from './bg-shw.png';

const ShaormaAmicii = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('toate');
  const [cart, setCart] = useState([]);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Shaorma Clasică',
      category: 'shaorma',
      price: 18,
      description: 'Carne la alegere (pui/vită), salată, roșii, ceapă, sosuri homemade',
      image: ShaormaFarfuriePui,
      popular: true
    },
    {
      id: 2,
      name: 'Shaorma Specială Amicii',
      category: 'shaorma',
      price: 24,
      description: 'Pui, bacon, cașcaval, cartofi prăjiți în shaorma, sos special',
      image: ShaormaFarfuriePui,
      popular: true
    },
    {
      id: 3,
      name: 'Crispy Box',
      category: 'crispy',
      price: 26,
      description: '2 bucăți crispy + cartofi + sos',
      image: logo,
      popular: true
    },
    {
      id: 4,
      name: 'Family Box',
      category: 'family',
      price: 41,
      description: 'Meniu pentru 3-4 persoane: 4 shaorme mici + cartofi + băuturi',
      image: logo,
      popular: true
    },
    {
      id: 5,
      name: 'Shaorma de Vită',
      category: 'shaorma',
      price: 20,
      description: 'Carne de vită marinată, legume proaspete, sos tzatziki',
      image: logo
    },
    {
      id: 6,
      name: 'Shaorma Vegetariană',
      category: 'shaorma',
      price: 16,
      description: 'Mix de legume la grătar, hummus, sos de usturoi',
      image: logo
    },
    {
      id: 7,
      name: 'Crispy Strips',
      category: 'crispy',
      price: 22,
      description: '5 bucăți crispy strips + cartofi + 2 sosuri',
      image: logo
    },
    {
      id: 8,
      name: 'Cartofi Prăjiți',
      category: 'garnituri',
      price: 8,
      description: 'Cartofi proaspeți prăjiți, crocanti și aurii',
      image: logo
    },
    {
      id: 9,
      name: 'Cartofi Wedges',
      category: 'garnituri',
      price: 10,
      description: 'Cartofi wedges condimentați cu ierburi',
      image: logo
    },
    {
      id: 10,
      name: 'Sos Extra',
      category: 'sosuri',
      price: 2,
      description: 'Homemade: usturoi, iute, tzatziki, BBQ, sweet chili',
      image: logo
    },
    {
      id: 11,
      name: 'Coca-Cola 330ml',
      category: 'bauturi',
      price: 5,
      description: 'Răcoritoare carbogazoasă',
      image: logo
    },
    {
      id: 12,
      name: 'Limonadă Naturală',
      category: 'bauturi',
      price: 8,
      description: 'Făcută în casă cu lămâi proaspete',
      image: logo
    }
  ];

  const locations = [
    {
      name: 'Craiova',
      address: 'Strada George Enescu, Nr. 100, Bl. 41A, Craiova',
      schedule: 'Luni-Duminică 10:00 - 23:00',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Strada+George+Enescu+100+Craiova'
    },
    {
      name: 'Pitești',
      address: 'Shaorma Amicii, Bulevardul Frații Golești 57, Pitești 110174',
      schedule: 'Luni-Duminică 11:00 - 22:30',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Pitesti'
    }
  ];

  const deliveryPlatforms = [
    { name: 'Glovo', color: '#FFC244', link: 'https://glovoapp.com/', image: GlovoImg },
    { name: 'Wolt', color: '#00C2E8', link: 'https://wolt.com/', image: WoltImg },
    { name: 'Bolt', color: '#FF6B6B', link: 'https://bolt.eu/', image: BoltImg }
  ];

  const features = [
    { icon: '🚀', title: 'Livrare Rapidă', desc: 'În max 30 minute' },
    { icon: '🥬', title: 'Ingrediente Proaspete', desc: 'Zilnic de la furnizori locali' },
    { icon: '🍯', title: 'Sosuri Homemade', desc: 'Rețete proprii, naturale' }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleContactSubmit = () => {
    alert(`Mesaj trimis! Vă vom contacta în curând.\nNume: ${contactForm.name}\nTelefon: ${contactForm.phone}`);
    setContactForm({ name: '', phone: '', message: '' });
  };

  const filteredMenu = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'toate' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const HomePage = () => (
    <>
      <section className="relative min-h-screen sm:h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
        {/* Parallax Background with Shawarma */}
        <div className="absolute inset-0 parallax-bg">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 opacity-90"></div>
          
          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(255, 112, 67, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 213, 79, 0.6) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(229, 57, 53, 0.6) 0%, transparent 50%)'
          }}></div>
          
          {/* Floating decorative shapes with glass effect */}
          <div className="absolute top-20 left-10 w-64 h-64 glass rounded-full blur-3xl opacity-20 floating-element"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 glass rounded-full blur-3xl opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
          
          {/* Modern background image with elegant positioning */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <img 
              src={bgShw} 
              alt="Shaorma background" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 h-96 w-96 md:h-screen md:w-auto md:right-0 object-contain opacity-15 md:opacity-20 pointer-events-none" 
              style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))' }}
            />
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo with glass card effect */}
          <div className="mb-4 sm:mb-8">
            <div className="inline-block glass-card rounded-3xl p-3 sm:p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 shimmer"></div>
              <img src={logo} alt="Shaorma Amicii" className="relative h-20 w-20 sm:h-32 sm:w-32 object-contain" />
            </div>
          </div>
          
          <h1 className="brand-text text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-tight drop-shadow-2xl relative hidden">
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50"></span>
              <span className="relative">Shaorma Amicii</span>
            </span>
          </h1>
          
          <p className="brand-text text-2xl sm:text-3xl md:text-5xl text-yellow-300 mb-6 sm:mb-10 font-bold drop-shadow-lg flex items-center justify-center gap-3 flex-wrap">
          {//  <Sparkles className="animate-pulse" size={32} />
          }
            Gustul prieteniei
           {//  <Sparkles className="animate-pulse" size={32} />
          }
          </p>
          
          {/* Main CTAs with liquid glass */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-6 sm:mb-10 w-full px-2">
            <button
              onClick={() => setCurrentPage('menu')}
              className="glass-button px-12 py-6 rounded-full text-xl font-bold text-white transform hover:scale-110 transition-all"
            >
              Vezi Meniul 📋
            </button>
            <a
              href="tel:+40770683949"
              className="glass-button px-12 py-6 rounded-full text-xl font-bold text-white flex items-center gap-3 transform hover:scale-110 transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(43, 43, 43, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)' }}
            >
              <Phone size={24} />
              Sună Acum
            </a>
          </div>

          {/* Delivery Platforms with enhanced glass effect */}
          <div className="mt-6 sm:mt-12 mb-20 sm:mb-8 glass-card rounded-3xl p-3 sm:p-8 shadow-2xl w-full max-w-3xl mx-auto relative overflow-hidden mx-2">
            <div className="absolute inset-0 shimmer"></div>
            <div className="relative z-10">
              <h3 className="brand-text text-xl sm:text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                <span className="text-2xl sm:text-3xl"></span>
                <span className="text-center">Comandă Online prin:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {deliveryPlatforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden glass-card rounded-2xl p-4 sm:p-6 text-white font-bold text-lg sm:text-xl transition-all transform hover:scale-105 hover:shadow-2xl"
                    style={{ 
                      background: `linear-gradient(135deg, ${platform.color}dd 0%, ${platform.color}aa 100%)`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                      <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0">
                        <img src={platform.image} alt={platform.name} className="h-full w-full object-contain p-2" />
                      </div>
                      <span className="brand-text text-center sm:text-left">{platform.name}</span>
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

         
        </div>
        
        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-white opacity-70" />
        </div>
      </section>

      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-10 text-6xl opacity-10 transform -rotate-12">🌯</div>
        <div className="absolute top-1/4 right-20 text-5xl opacity-10 transform rotate-45">🍟</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 floating-element">
              <span className="text-7xl">⭐</span>
            </div>
            <h2 className="brand-text text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-30"></span>
                <span className="relative">Preferatele Clienților</span>
              </span>
            </h2>
            <p className="text-xl text-gray-300">Cele mai comandate preparate</p>
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-20 h-1 glass-card rounded-full"></div>
              <span className="text-3xl floating-element" style={{ animationDelay: '1s' }}>🔥</span>
              <div className="w-20 h-1 glass-card rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.filter(item => item.popular).map((item, idx) => (
              <div
                key={item.id}
                className="glow-border glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 relative group"
              >
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                {/* Decorative glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-400 via-orange-500 to-transparent opacity-20 rounded-bl-full blur-xl"></div>
                
                  <div className="h-52 bg-gradient-to-br from-orange-500 via-red-600 to-yellow-600 flex items-center justify-center text-8xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  {item.image && typeof item.image === 'string' && item.image.includes('.png') ? (
                    <img src={item.image} alt={item.name} className="relative z-10 floating-element h-44 w-44 md:h-52 md:w-52 lg:h-56 lg:w-56 object-contain" style={{ animationDelay: `${idx * 0.5}s` }} />
                  ) : (
                    <span className="relative z-10 floating-element" style={{ animationDelay: `${idx * 0.5}s` }}>{item.image}</span>
                  )}
                  {/* Glass splash effect at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-20 glass-card"></div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="glass-card text-white text-xs px-2 py-1 rounded-full">(4.9)</span>
                  </div>
                  <h3 className="brand-text text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="brand-text text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {item.price} LEI
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      className="glass-button px-5 py-2 rounded-xl text-sm font-bold text-white transform hover:scale-105"
                    >
                      Comandă
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cartoon chef decoration */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-orange-500 to-red-600 opacity-50"></div>
              <button
                onClick={() => setCurrentPage('menu')}
                className="relative glass-button px-10 py-5 rounded-full font-bold text-xl text-white hover:scale-110 transition-all brand-text shadow-2xl"
              >
                Vezi Tot Meniul 📋
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Wavy decorative top */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gray-900" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)'
        }}></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 text-9xl transform rotate-12">🍔</div>
          <div className="absolute bottom-20 right-1/4 text-9xl transform -rotate-12">🥤</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all group">
                <div className="relative inline-block mb-6">
                  {/* Multi-layer glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative glass-card w-28 h-28 rounded-full flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform shadow-2xl glow-border">
                    <span className="text-6xl floating-element" style={{ animationDelay: `${index}s` }}>{feature.icon}</span>
                  </div>
                </div>
                <h3 className="brand-text text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.desc}</p>
                {/* Decorative underline with glass effect */}
                <div className="w-20 h-1 glass-card mx-auto mt-4 rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wavy decorative bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-900" style={{
          clipPath: 'polygon(0 50%, 100% 100%, 100% 100%, 0 100%)'
        }}></div>
      </section>

      <section id="locations" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 text-8xl opacity-5 transform rotate-12">📍</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-5 transform -rotate-12">🗺️</div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 floating-element">
              <span className="text-7xl">📍</span>
            </div>
            <h2 className="brand-text text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-500 to-yellow-400 opacity-40"></span>
                <span className="relative">Locațiile Noastre</span>
              </span>
            </h2>
            <p className="text-xl text-gray-300">Vino să ne vizitezi!</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-20 h-1 glass-card rounded-full"></div>
              <span className="text-3xl floating-element" style={{ animationDelay: '1.5s' }}>🏪</span>
              <div className="w-20 h-1 glass-card rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="glow-border glass-card rounded-3xl p-8 transition-all transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500 to-transparent rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="glass-button rounded-full p-4 shadow-lg">
                      <MapPin className="text-white" size={32} />
                    </div>
                    <h3 className="brand-text text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                      {location.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 text-gray-200 glass-card rounded-xl p-4">
                      <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                      <p className="font-medium">{location.address}</p>
                    </div>
                    <div className="flex items-start gap-3 text-gray-200 glass-card rounded-xl p-4">
                      <Clock className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                      <p className="font-medium">{location.schedule}</p>
                    </div>
                  </div>
                  
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button w-full py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl text-center block text-white brand-text text-lg"
                  >
                    Vezi pe hartă 🗺️
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center glow-border glass-card rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 floating-element">
              <div className="text-9xl">⚠️</div>
            </div>
            <div className="relative z-10">
              <p className="text-yellow-300 text-lg font-semibold brand-text">
                ⚠️ <strong>Atenție:</strong> Programul poate suferi modificări în zilele de sărbători legale. 
                <br />
                <span className="text-base mt-2 inline-block">Exemplu: În zilele de 1 și 2 ianuarie și de Paște program redus — verificați anunțurile.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 text-9xl floating-element">📞</div>
          <div className="absolute bottom-1/4 right-1/4 text-9xl floating-element" style={{ animationDelay: '2s' }}>✉️</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-6xl floating-element">📞</span>
            </div>
            <h2 className="brand-text text-4xl md:text-5xl font-bold text-white mb-4">
              Contactează-ne
            </h2>
            <p className="text-xl text-gray-400">Suntem aici pentru tine!</p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-16 h-1 glass-card rounded-full"></div>
              <span className="text-2xl">💬</span>
              <div className="w-16 h-1 glass-card rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="glow-border glass-card rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <h3 className="brand-text text-2xl font-bold text-white mb-6 relative z-10">Informații Contact</h3>
                <div className="space-y-6 relative z-10">
                  <a href="tel:+40770683949" className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group/item">
                    <div className="glass-button p-3 rounded-full group-hover/item:scale-110 transition-transform">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefon</p>
                      <p className="text-xl font-semibold">+40 770 683 949</p>
                    </div>
                  </a>
                  
                  <a href="mailto:foodcraiovita@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group/item">
                    <div className="glass-button p-3 rounded-full group-hover/item:scale-110 transition-transform">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-xl font-semibold">foodcraiovita@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="glow-border glass-card rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="brand-text text-2xl font-bold text-white mb-6 relative z-10">Trimite-ne un mesaj</h3>
              <div className="space-y-4 relative z-10">
                <input
                  type="text"
                  placeholder="Numele tău"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 glass-card rounded-lg text-white focus:outline-none transition-colors placeholder-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Număr de telefon"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full px-4 py-3 glass-card rounded-lg text-white focus:outline-none transition-colors placeholder-gray-400"
                />
                <textarea
                  placeholder="Mesajul tău"
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 glass-card rounded-lg text-white focus:outline-none transition-colors resize-none placeholder-gray-400"
                />
                <button
                  onClick={handleContactSubmit}
                  className="w-full glass-button px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 text-white brand-text"
                >
                  Trimite mesaj 📧
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const MenuPage = () => (
    <section className="py-20 bg-gray-900 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute top-1/4 right-10 text-9xl opacity-5 transform rotate-12">🍽️</div>
      <div className="absolute bottom-1/4 left-10 text-9xl opacity-5 transform -rotate-12">🥘</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 floating-element">
            <span className="text-8xl">📋</span>
          </div>
          <h1 className="brand-text text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-40"></span>
              <span className="relative">Meniul Nostru</span>
            </span>
          </h1>
          <p className="text-xl text-gray-300">Descoperă toate preparatele noastre delicioase</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-24 h-1 glass-card rounded-full"></div>
            <span className="text-4xl floating-element" style={{ animationDelay: '0.5s' }}>🍴</span>
            <div className="w-24 h-1 glass-card rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative glass-card rounded-2xl overflow-hidden">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Caută în meniu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent text-white focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {['toate', 'shaorma', 'crispy', 'family', 'garnituri', 'sosuri', 'bauturi'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`brand-text px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === cat
                    ? 'glass-button text-white shadow-lg'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map(item => (
            <div
              key={item.id}
              className="glow-border glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-3 hover:scale-105 relative group"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Decorative glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              
                <div className="h-60 bg-gradient-to-br from-orange-500 via-red-600 to-yellow-600 flex items-center justify-center text-9xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  {item.image && typeof item.image === 'string' && item.image.includes('.png') ? (
                  <img src={item.image} alt={item.name} className="relative z-10 transform group-hover:scale-110 transition-transform floating-element h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain" />
                ) : (
                  <span className="relative z-10 transform group-hover:scale-110 transition-transform floating-element">{item.image}</span>
                )}
                {item.popular && (
                  <div className="absolute top-4 right-4 glass-card px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg text-white animate-pulse">
                    <Star size={14} fill="currentColor" />
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="glass-card text-white text-xs px-2 py-1 rounded-full">(4.8)</span>
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="brand-text text-xl font-bold text-white flex-1">{item.name}</h3>
                  <span className="brand-text text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent ml-2">
                    {item.price} LEI
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full glass-button px-4 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-white"
                >
                  <span className="brand-text">Comandă</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">😔</div>
            <p className="text-gray-400 text-xl">Nu am găsit produse care să corespundă căutării tale</p>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
              <img src={logo} alt="Shaorma Amicii" className="h-16 w-16 object-contain shadow-lg group-hover:scale-110 transition-transform" />
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="text-white hover:text-orange-400 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => setCurrentPage('menu')} className="text-white hover:text-orange-400 transition-colors font-medium">
                Meniu
              </button>
              <a href="#locations" className="text-white hover:text-orange-400 transition-colors font-medium" onClick={() => setCurrentPage('home')}>
                Locații
              </a>
              <a href="#contact" className="text-white hover:text-orange-400 transition-colors font-medium" onClick={() => setCurrentPage('home')}>
                Contact
              </a>
              
              {/* Delivery Platforms - Glass mini buttons */}
              <div className="flex items-center gap-2 border-l border-white border-opacity-20 pl-4 ml-2">
                {deliveryPlatforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all transform hover:scale-110 shadow-lg overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${platform.color}dd, ${platform.color}99)`,
                      backdropFilter: 'blur(10px)'
                    }}
                    title={`Comandă pe ${platform.name}`}
                  >
                    <img src={platform.image} alt={platform.name} className="h-full w-full object-contain p-1" />
                  </a>
                ))}
              </div>

              <a
                href="tel:+40770683949"
                className="glass-button px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-white"
              >
                <Phone size={18} />
                Comandă
              </a>
              {cart.length > 0 && (
                <div className="relative glass-card rounded-full p-2">
                  <ShoppingCart className="text-orange-400" size={24} />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {cart.length}
                  </span>
                </div>
              )}
            </nav>

            <button
              className="lg:hidden text-white glass-card p-2 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white border-opacity-10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); window.scrollTo(0, 0); }} className="text-white hover:text-orange-400 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => { setCurrentPage('menu'); setIsMenuOpen(false); }} className="text-white hover:text-orange-400 transition-colors font-medium text-left">
                Meniu
              </button>
              <a href="#locations" className="text-white hover:text-orange-400 transition-colors font-medium" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>
                Locații
              </a>
              <a href="#contact" className="text-white hover:text-orange-400 transition-colors font-medium" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}>
                Contact
              </a>
              
              {/* Delivery Platforms Mobile */}
              <div className="pt-4 border-t border-white border-opacity-10">
                <p className="text-gray-400 text-sm mb-3 brand-text">Comandă prin:</p>
                <div className="grid grid-cols-3 gap-3">
                  {deliveryPlatforms.map((platform, idx) => (
                    <a
                      key={idx}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card py-3 rounded-xl text-white font-bold text-center transition-all hover:scale-105 flex items-center justify-center gap-2"
                      style={{ 
                        background: `linear-gradient(135deg, ${platform.color}dd, ${platform.color}99)`,
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <img src={platform.image} alt={platform.name} className="h-6 w-6 object-contain" />
                      <span className="brand-text">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="tel:+40770683949"
                className="glass-button px-6 py-3 rounded-full font-semibold transition-all text-center mt-2 text-white"
              >
                📞 Comandă acum
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {currentPage === 'home' ? <HomePage /> : <MenuPage />}
      </main>

      <footer className="bg-gray-950 py-12 border-t border-white border-opacity-10 relative overflow-hidden">
        {/* Background decoration with glass effect */}
        <div className="absolute top-0 right-0 w-64 h-64 glass rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 glass rounded-full blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Shaorma Amicii" className="h-14 w-14 object-contain shadow-lg" />
              </div>
              <p className="text-gray-400 mb-6">Gustul prieteniei, în fiecare mușcătură!</p>
              
              {/* Delivery platforms in footer with glass effect */}
              <div className="flex flex-wrap gap-3 mb-6">
                {deliveryPlatforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card px-4 py-2 rounded-full text-white text-sm font-semibold hover:scale-105 transition-all brand-text flex items-center gap-2"
                    style={{ 
                      background: `linear-gradient(135deg, ${platform.color}dd, ${platform.color}99)`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <img src={platform.image} alt={platform.name} className="h-5 w-5 object-contain" />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a href="tel:+40770683949" className="glass-card p-3 rounded-full text-orange-400 hover:text-orange-300 transition-colors hover:scale-110 transform">
                  <Phone size={20} />
                </a>
                <a href="mailto:foodcraiovita@gmail.com" className="glass-card p-3 rounded-full text-orange-400 hover:text-orange-300 transition-colors hover:scale-110 transform">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="brand-text text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Link-uri rapide
              </h4>
              <div className="space-y-2">
                <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </button>
                <button onClick={() => setCurrentPage('menu')} className="block text-gray-400 hover:text-orange-400 transition-colors">
                  Meniu
                </button>
                <a href="#locations" className="block text-gray-400 hover:text-orange-400 transition-colors" onClick={() => setCurrentPage('home')}>
                  Locații
                </a>
                <a href="#contact" className="block text-gray-400 hover:text-orange-400 transition-colors" onClick={() => setCurrentPage('home')}>
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="brand-text text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                Program general
              </h4>
              <p className="text-gray-400 mb-4">
                <span className="brand-text">Luni-Duminică</span><br />
                <span className="text-orange-400 font-semibold text-lg">10:00 - 23:00</span>
              </p>
              <p className="text-yellow-400 text-sm">
                * Programul poate suferi modificări în zilele de sărbători legale
              </p>
            </div>
          </div>

          <div className="border-t border-white border-opacity-10 pt-8 text-center">
            <p className="text-gray-500 mb-4">
              © 2024 Shaorma Amicii. Toate drepturile rezervate.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-4xl opacity-10 floating-element">
            
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        
        h1, h2, h3, .brand-text {
          font-family: 'Fredoka', 'Poppins', cursive, sans-serif;
          letter-spacing: -0.02em;
        }
        
        /* Liquid Glass Effect */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37),
                      inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .glass-button {
          background: linear-gradient(135deg, rgba(255, 112, 67, 0.9) 0%, rgba(229, 57, 53, 0.9) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 24px rgba(255, 112, 67, 0.4),
                      inset 0 1px 1px rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 32px rgba(255, 112, 67, 0.6),
                      inset 0 1px 1px rgba(255, 255, 255, 0.4);
        }
        
        .glow-border {
          position: relative;
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(43, 43, 43, 0.95), rgba(43, 43, 43, 0.8)) padding-box,
                      linear-gradient(135deg, #FF7043, #FFD54F, #E53935) border-box;
        }
        
        .floating-element {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* animate only on hover to reduce constant motion */
        .floating-element:hover {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 112, 67, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 112, 67, 0.8); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        /* Parallax effect */
        .parallax-bg {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #FF7043, #E53935);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #E53935, #FF7043);
        }
      `}</style>
    </div>
  );
};

export default ShaormaAmicii;