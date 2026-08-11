import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/projects';

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');


    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/5 blur-[100px] pointer-events-none z-0"></div>

        <div className="flex items-center justify-between p-6 border-b border-white/5 relative z-10">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>
            <p className="text-sm text-slate-400 mt-1">Directly to {profile.email}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 relative z-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
              <p className="text-slate-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-black/20 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30 focus:bg-black/40 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-black/20 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30 focus:bg-black/40 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-black/20 border border-white/5 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/30 focus:bg-black/40 transition-all resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="group relative w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {status === 'loading' ? (
                  <Loader2 size={18} className="animate-spin text-cyan-400" />
                ) : (
                  <>
                    <span>Send Message</span> 
                    <Send size={16} className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
