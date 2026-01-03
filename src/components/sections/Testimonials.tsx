"use client";
import React, { useState, useEffect } from 'react';
import { Star, Quote, Sparkles, Award, Check, Zap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  before: string[];
  after: string[];
  rating: number;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Bennani',
    role: 'Directrice Marketing',
    treatment: 'Implants & Esthétique',
    text: "Une transformation radicale. Le Dr. Zairi a su recréer une harmonie parfaite. Je n'ai plus peur de sourire pleinement.",
before: ["/image/testii1before.jpeg", "/image/testi1before.jpeg"],
    after: ["/image/testii1after.jpeg", "/image/testi1after.jpeg"],
    rating: 5,
  },
  {
    name: 'Sara Alami',
    role: 'Entrepreneur',
    treatment: 'Facettes E-max HD',
    text: "Le résultat dépasse mes espérances. On ne voit aucune différence avec des dents naturelles.",
before: ["/image/testi2before.jpeg", ],
    after: ["/image/testi2after.jpeg", ],
    rating: 5,
  },
  {
  name: 'Nadia Cherkaoui',
  role: 'Avocate d’affaires',
  treatment: 'Implants dentaires complets',
  text: "Après avoir perdu plusieurs dents, je ne pensais pas retrouver un jour un sourire aussi naturel et fonctionnel. Le Dr. Zairi et son équipe m’ont redonné bien plus qu’un sourire : ils m’ont rendu ma sérénité.",
  before: ["/image/testi3before.jpeg"],
  after: ["/image/testi3after.jpeg"],
  rating: 5,
},
 {
  name: 'Hanane benali',
  role: 'Avocate d’affaires',
  treatment: 'Implants dentaires complets',
  text: "Après avoir perdu plusieurs dents, je ne pensais pas retrouver un jour un sourire aussi naturel et fonctionnel. Le Dr. Zairi et son équipe m’ont redonné bien plus qu’un sourire : ils m’ont rendu ma sérénité.",
  before: ["/image/testi4before.jpeg"],
  after: ["/image/testi4after.jpeg"],
  rating: 5,
},

];

export  function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [beforeIndex, setBeforeIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setBeforeIndex(0);
    setAfterIndex(0);
    setProgress(0);
  }, [activeIndex]);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1;
      });
    }, 70);
    return () => clearInterval(interval);
  }, [activeIndex, isHovering]);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setShowContent(true);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setShowContent(true);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const handleDotClick = (index: number) => {
    if (isFlipping || index === activeIndex) return;
    setIsFlipping(true);
    setShowContent(false);
    setTimeout(() => {
      setActiveIndex(index);
      setShowContent(true);
      setTimeout(() => setIsFlipping(false), 500);
    }, 400);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A4D5C]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-300/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #0A4D5C 1px, transparent 1px),
            linear-gradient(to bottom, #0A4D5C 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="max-w-7xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full border border-[#0A4D5C]/20 shadow-xl animate-fade-in">
            <Sparkles className="w-5 h-5 text-[#0A4D5C] animate-pulse" />
            <span className="text-[#0A4D5C] font-bold tracking-wider uppercase text-sm">Témoignages Authentiques</span>
            <Award className="w-5 h-5 text-[#0A4D5C]" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-[#0A4D5C] via-teal-600 to-[#0A4D5C] bg-clip-text text-transparent">
              Transformations
            </span>
            <br />
            <span className="text-slate-800">Qui Parlent d'Elles-Mêmes</span>
          </h2>

          <p className="text-slate-600 text-xl max-w-2xl mx-auto animate-fade-in-delayed">
            Des résultats exceptionnels · Plus de 500 sourires transformés avec excellence
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`relative transition-all duration-700 ${isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50">
              
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-50">
                <div 
                  className="h-full bg-gradient-to-r from-[#0A4D5C] via-teal-500 to-[#0A4D5C] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#0A4D5C]/5 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-teal-500/5 to-transparent rounded-tl-full" />

              <div className="relative p-8 md:p-12">
                <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  
                  {/* Before/After Section - Redesigned */}
                  <div className="space-y-8">
                    {/* Section Header */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0A4D5C]/30 to-[#0A4D5C]/30" />
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0A4D5C] to-teal-600 rounded-full shadow-lg">
                        <Zap className="w-5 h-5 text-white" />
                        <span className="text-white font-bold text-sm uppercase tracking-wider">Transformation</span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#0A4D5C]/30 to-[#0A4D5C]/30" />
                    </div>

                    {/* Before Image */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-300 rounded-2xl opacity-50 group-hover:opacity-75 transition blur" />
                      <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: '280px' }}>
                        {currentTestimonial.before.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Avant ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 grayscale-[30%]"
                            style={{ opacity: idx === beforeIndex ? 1 : 0 }}
                          />
                        ))}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full">
                          <span className="text-white font-bold text-xs uppercase">
                            Avant ({beforeIndex + 1}/{currentTestimonial.before.length})
                          </span>
                        </div>

                        {currentTestimonial.before.length > 1 && (
                          <>
                            <button 
                              onClick={() => setBeforeIndex((prev) => (prev - 1 + currentTestimonial.before.length) % currentTestimonial.before.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-5 h-5 text-slate-700" />
                            </button>
                            <button 
                              onClick={() => setBeforeIndex((prev) => (prev + 1) % currentTestimonial.before.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-5 h-5 text-slate-700" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {currentTestimonial.before.map((_, idx) => (
                                <div 
                                  key={idx} 
                                  className={`h-1.5 rounded-full transition-all ${idx === beforeIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/50'}`} 
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Center Arrow */}
                    <div className="flex justify-center -my-4 relative z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#0A4D5C]/20 blur-xl rounded-full animate-pulse" />
                        <div className="relative bg-gradient-to-br from-[#0A4D5C] to-teal-600 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-transform">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#0A4D5C] via-teal-500 to-[#0A4D5C] rounded-2xl opacity-75 group-hover:opacity-100 transition blur-sm" />
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '280px' }}>
                        {currentTestimonial.after.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Après ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 brightness-105 contrast-105"
                            style={{ opacity: idx === afterIndex ? 1 : 0 }}
                          />
                        ))}
                        
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
                        
                        <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#0A4D5C] to-teal-600 rounded-full shadow-lg">
                          <span className="text-white font-bold text-xs uppercase">
                            Après ({afterIndex + 1}/{currentTestimonial.after.length})
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#0A4D5C] animate-pulse" />
                          <span className="text-xs font-bold text-[#0A4D5C]">Excellence</span>
                        </div>

                        {currentTestimonial.after.length > 1 && (
                          <>
                            <button 
                              onClick={() => setAfterIndex((prev) => (prev - 1 + currentTestimonial.after.length) % currentTestimonial.after.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-5 h-5 text-[#0A4D5C]" />
                            </button>
                            <button 
                              onClick={() => setAfterIndex((prev) => (prev + 1) % currentTestimonial.after.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-5 h-5 text-[#0A4D5C]" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {currentTestimonial.after.map((_, idx) => (
                                <div 
                                  key={idx} 
                                  className={`h-1.5 rounded-full transition-all ${idx === afterIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/50'}`} 
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="space-y-8 lg:pl-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0A4D5C]/10 to-teal-500/10 rounded-full border border-[#0A4D5C]/20">
                      <div className="w-2 h-2 bg-[#0A4D5C] rounded-full animate-pulse" />
                      <span className="text-[#0A4D5C] font-semibold text-sm">{currentTestimonial.treatment}</span>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 w-16 h-16 text-[#0A4D5C]/10" />
                      <p className="text-slate-700 text-2xl md:text-3xl leading-relaxed font-light italic pl-8 relative z-10">
                        {currentTestimonial.text}
                      </p>
                      <Quote className="absolute -bottom-4 -right-4 w-16 h-16 text-[#0A4D5C]/10 rotate-180" />
                    </div>

                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-7 h-7 fill-[#0A4D5C] text-[#0A4D5C] animate-star-pop" 
                          style={{ animationDelay: `${i * 0.1}s` }} 
                        />
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-200">
                      <h4 className="text-2xl font-bold text-slate-900 mb-1">{currentTestimonial.name}</h4>
                      <p className="text-[#0A4D5C] text-sm uppercase tracking-widest font-medium">{currentTestimonial.role}</p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-700 text-sm font-semibold">Patient Vérifié</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button 
              onClick={handlePrev}
              disabled={isFlipping}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-[#0A4D5C] hover:border-[#0A4D5C] transition-all disabled:opacity-50 group active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 text-[#0A4D5C] group-hover:text-white transition-colors" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === activeIndex 
                      ? 'w-16 bg-gradient-to-r from-[#0A4D5C] to-teal-500 shadow-lg' 
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              disabled={isFlipping}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-[#0A4D5C] hover:border-[#0A4D5C] transition-all disabled:opacity-50 group active:scale-90"
            >
              <ChevronRight className="w-6 h-6 text-[#0A4D5C] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(30px) scale(1.05); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes star-pop {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.3) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); opacity: 1; }
          }
          
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
          .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
          .animate-fade-in-delayed { animation: fade-in 1s ease-out 0.3s forwards; opacity: 0; }
          .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
          .animate-star-pop { animation: star-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        `
      }} />
    </section>
  );
}