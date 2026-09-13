import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Code,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Validation function
  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Honest handling: validates inputs and displays validated summary with direct mail client transmission
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Soft Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Meaningful</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-4">
            I'm always interested in learning, collaborating, and exploring opportunities in AI, Machine Learning, Data Science and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Social Links & Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Contact Info */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-4 border border-slate-800/90 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Contact Channels</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, a research project to collaborate on, or just want to discuss machine learning architectures, feel free to reach out.
              </p>

              {/* LinkedIn Button Card */}
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900 border border-slate-700/70 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-950/80 text-cyan-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Professional Network</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded">
                  Connect &rarr;
                </span>
              </a>

              {/* GitHub Button Card */}
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900 border border-slate-700/70 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/80 text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Code &amp; Repositories</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-purple-300">
                      github.com/{PROFILE_DATA.githubUsername}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2 py-1 rounded">
                  Explore &rarr;
                </span>
              </a>

              {/* Email Card */}
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-700/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                      <a
                        href={`mailto:${PROFILE_DATA.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 font-medium hover:text-cyan-300 transition-colors"
                      >
                        {PROFILE_DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Dispatch Note */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" /> Frontend Inquiries
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfigModal(true)}
                  className="text-[11px] text-purple-400 hover:text-purple-300 underline font-mono"
                >
                  Integration Note
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Submitting this form validates your message client-side. You can transmit directly through your local mail client or connect a serverless handler (such as Formspree or Web3Forms).
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-glow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Ready!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-cyan-300">{formData.name}</span>. Your inquiry has been validated. Click below to launch your email client with your message prepared.
                </p>
                <div className="p-4 bg-dark-900/90 rounded-2xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Email:</strong> {formData.email}
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Subject:</strong> {formData.subject}
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Message:</strong> {formData.message}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                      formData.subject
                    )}&body=${encodeURIComponent(
                      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                    )}`}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Mail Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Recruiter / Collaborator"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. AI / ML Internship Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.subject
                        ? 'border-rose-500/80 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Hello Harini, I reviewed your UrbanFlow AI and TravelWise projects..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500/80 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Integration Note Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-dark-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-white text-base">Form Delivery Architecture</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-white text-xs font-mono bg-slate-800 px-2 py-1 rounded"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              This portfolio validates form fields locally without needing a paid backend server. If you want submissions to route automatically into your inbox in the future:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-cyan-300 block mb-1">Option: Formspree / Web3Forms</strong>
                <p className="text-slate-400">
                  Simply register at formspree.io or web3forms.com and add the endpoint to your form action or `.env`.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
