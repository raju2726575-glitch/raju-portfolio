import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('SaaS Platform');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'SaaS Platform',
    'Custom Design System',
    'Developer Tooling',
    'High-Performance Refactor',
    'Other Creative Project',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!subject.trim()) newErrors.subject = 'Subject line is required';
    if (!message.trim()) newErrors.message = 'Please provide a project brief or message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setCategory('SaaS Platform');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#080f17]/85 backdrop-blur-md cursor-pointer"
            id="contact-overlay-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-full max-w-2xl bg-[#1E293B] border border-white/10 rounded-xl shadow-2xl relative z-10 overflow-hidden"
            id="contact-modal-card"
          >
            {/* Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-tertiary to-secondary" />

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#0F172A]/40">
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">
                  Initiate a Project
                </h2>
                <p className="font-sans text-xs text-on-surface-variant">
                  Let’s collaborate to build something engineered to perfection.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-on-surface-variant hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full cursor-pointer"
                id="contact-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Form */}
            <div className="p-8 max-h-[75vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    id="contact-project-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                          }}
                          placeholder="Jane Doe"
                          className={`bg-[#0F172A] border ${
                            errors.name ? 'border-error/60 focus:border-error' : 'border-white/10 focus:border-primary/60'
                          } text-on-surface rounded-lg px-4 py-3 text-sm focus:outline-none transition-all`}
                          id="contact-input-name"
                        />
                        {errors.name && (
                          <span className="text-[11px] text-error flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                          }}
                          placeholder="jane@company.com"
                          className={`bg-[#0F172A] border ${
                            errors.email ? 'border-error/60 focus:border-error' : 'border-white/10 focus:border-primary/60'
                          } text-on-surface rounded-lg px-4 py-3 text-sm focus:outline-none transition-all`}
                          id="contact-input-email"
                        />
                        {errors.email && (
                          <span className="text-[11px] text-error flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Category Dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                          Project Scope
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="bg-[#0F172A] border border-white/10 text-on-surface rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60 transition-all cursor-pointer"
                          id="contact-select-category"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat} className="bg-[#1E293B]">
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                          Subject Line
                        </label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                            if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
                          }}
                          placeholder="New SaaS Platform architecture"
                          className={`bg-[#0F172A] border ${
                            errors.subject ? 'border-error/60 focus:border-error' : 'border-white/10 focus:border-primary/60'
                          } text-on-surface rounded-lg px-4 py-3 text-sm focus:outline-none transition-all`}
                          id="contact-input-subject"
                        />
                        {errors.subject && (
                          <span className="text-[11px] text-error flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Brief */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-xs font-semibold text-secondary uppercase tracking-wider">
                        Project Brief / Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                        }}
                        rows={4}
                        placeholder="Detail the target goals, core constraints, or specific platform objectives..."
                        className={`bg-[#0F172A] border ${
                          errors.message ? 'border-error/60 focus:border-error' : 'border-white/10 focus:border-primary/60'
                        } text-on-surface rounded-lg px-4 py-3 text-sm focus:outline-none transition-all resize-none`}
                        id="contact-input-message"
                      />
                      {errors.message && (
                        <span className="text-[11px] text-error flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary-gradient py-4 rounded-full font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-on-primary" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Proposal...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Screen */
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-8 px-4"
                    id="contact-success-screen"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center text-primary mb-6 animate-pulse">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
                      Proposal Sent Successfully!
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant max-w-md leading-relaxed mb-8">
                      Thank you for initiating contact. We have received your project details and will conduct an initial feasibility review. Expect a detailed analysis report within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        onClose();
                      }}
                      className="btn-ghost px-8 py-3 rounded-full uppercase tracking-wider text-xs font-semibold cursor-pointer"
                      id="contact-success-dismiss"
                    >
                      Dismiss View
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
