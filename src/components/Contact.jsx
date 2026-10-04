import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  AlertCircle, 
  Info, 
  ExternalLink,
  MapPin,
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all required fields.', 'info');
      return;
    }

    // Build mailto query
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personal.contact.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');

    setSubmitted(true);
    onShowToast('Opened mail client with your drafted inquiry!', 'success');
  };

  const handleCopyMessage = () => {
    const text = `To: ${personal.contact.email}\nName: ${formData.name || '[Your Name]'}\nEmail: ${formData.email || '[Your Email]'}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\n\n${formData.message || '[Message text]'}`;
    navigator.clipboard.writeText(text);
    onShowToast('Drafted message copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Interested in discussing full-time opportunities, technical interviews, or engineering collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>Direct Channels</span>
            </h3>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-sky-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                  <a
                    href={`mailto:${personal.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-sky-300 break-all transition-colors block mt-0.5"
                  >
                    {personal.contact.email}
                  </a>
                  <span className="text-[11px] text-slate-400 mt-1 block">Replies typically within 24 hours</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.contact.email, 'Email')}
                className="p-2 rounded-lg bg-navy-950/80 border border-slate-700/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === 'Email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Phone / Mobile</span>
                  <a
                    href={`tel:${personal.contact.phone}`}
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors block mt-0.5"
                  >
                    {personal.contact.formattedPhone}
                  </a>
                  <span className="text-[11px] text-slate-400 mt-1 block">Direct calling / WhatsApp</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.contact.phone, 'Phone number')}
                className="p-2 rounded-lg bg-navy-950/80 border border-slate-700/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedField === 'Phone number' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                  <a
                    href={personal.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-sky-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>linkedin.com/in/megharajan15</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-[11px] text-slate-400 mt-1 block">Connect for professional inquiries</span>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-purple-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                  <a
                    href={personal.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>github.com/Megharajan1528</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-[11px] text-slate-400 mt-1 block">Explore public repositories</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Transparent Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Send a Message</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">Direct Dispatch</span>
              </div>

              {/* Transparent notice stating backend policy */}
              <div className="my-4 p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 text-xs text-slate-300 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-sky-300 block">Client-Side Architecture Notice:</span>
                  <p className="text-slate-400 leading-relaxed">
                    To maintain data privacy and transparent delivery without an arbitrary unconfigured third-party server backend, clicking <strong className="text-slate-200">"Send Message"</strong> opens your device's email client directly pre-filled, or you can copy the drafted message to your clipboard.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineering Opportunity / Interview"
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note, job requirements, or project details..."
                    className="w-full px-3.5 py-2.5 bg-navy-950/80 border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-navy-950/90 border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <Copy className="w-4 h-4 text-sky-400" />
                    <span>Copy Drafted Text</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
