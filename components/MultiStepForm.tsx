import React, { useState } from 'react';
import { Truck, Car, Snowflake, Wrench, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

type AssetType = 'RV / Camper' | 'Trailer' | 'Truck / Fleet' | 'Snowplow' | 'Custom Fabrication';

interface FormData {
  assetType: AssetType | '';
  problemType: string;
  details: string;
  name: string;
  phone: string;
  email: string;
  companyName: string;
}

const INITIAL_DATA: FormData = {
  assetType: '',
  problemType: '',
  details: '',
  name: '',
  phone: '',
  email: '',
  companyName: '',
};

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAssetSelect = (asset: AssetType) => {
    setFormData({ ...formData, assetType: asset });
    setStep(2);
  };

  const handleProblemSelect = (problem: string) => {
    setFormData({ ...formData, problemType: problem });
    setStep(3);
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getProblemOptions = (asset: AssetType | '') => {
    switch (asset) {
      case 'RV / Camper':
        return ['Engine/Mechanical', 'Interior/Exterior', 'Systems (Solar/AC)', 'General Maintenance'];
      case 'Truck / Fleet':
        return ['Routine Maintenance', 'DOT Inspection', 'Emergency Repair'];
      case 'Snowplow':
        return ['Installation', 'Repair', 'Parts'];
      case 'Trailer':
        return ['Brakes/Bearings', 'Electrical/Lights', 'Welding/Structural', 'General Service'];
      case 'Custom Fabrication':
        return ['New Build', 'Modification', 'Repair', 'Consultation'];
      default:
        return ['General Inquiry'];
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center text-white animate-fade-in-up">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-gray-200 mb-6">
          Thanks for reaching out. One of our service advisors will review your request and get back to you shortly with an estimate.
        </p>
        <Button variant="primary" onClick={() => { setIsSuccess(false); setStep(1); setFormData(INITIAL_DATA); }}>
          Start New Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 text-white shadow-2xl animate-fade-in-up">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          {step > 1 && (
            <button onClick={goBack} className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={20} />
            </button>
          )}
          <span className="text-sm font-medium text-gray-300">Step {step} of 4</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-bear-accent' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step 1: Asset Selector */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-2">What can we help you with?</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: 'RV / Camper', icon: Truck }, // Using Truck as generic for now, ideally Caravan
              { label: 'Trailer', icon: Car },
              { label: 'Truck / Fleet', icon: Truck },
              { label: 'Snowplow', icon: Snowflake },
              { label: 'Custom Fabrication', icon: Wrench },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleAssetSelect(item.label as AssetType)}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/20 border border-white/10 hover:border-bear-accent transition-all group text-left"
              >
                <div className="p-2 rounded-lg bg-bear-800 text-bear-accent group-hover:bg-bear-accent group-hover:text-bear-900 transition-colors">
                  <item.icon size={24} />
                </div>
                <span className="font-semibold text-lg">{item.label}</span>
                <ChevronRight className="ml-auto text-gray-500 group-hover:text-white" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Problem Selector */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-2">What's the issue?</h3>
          <p className="text-gray-300 text-sm mb-4">Selected: {formData.assetType}</p>
          <div className="grid grid-cols-1 gap-3">
            {getProblemOptions(formData.assetType).map((option) => (
              <button
                key={option}
                onClick={() => handleProblemSelect(option)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/20 border border-white/10 hover:border-bear-accent transition-all text-left"
              >
                <span className="font-semibold text-lg">{option}</span>
                <ChevronRight className="text-gray-500" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <form onSubmit={handleDetailsSubmit} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Tell us more</h3>
            <p className="text-gray-300 text-sm mb-4">Briefly describe the issue (e.g., 'Slide-out stuck' or 'Need hitch installation').</p>
            <textarea
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full h-32 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-bear-accent focus:ring-1 focus:ring-bear-accent transition-all resize-none"
              placeholder="Describe your problem here..."
            />
          </div>
          <Button type="submit" variant="primary" className="w-full py-4 text-lg">
            Next Step
          </Button>
        </form>
      )}

      {/* Step 4: Contact */}
      {step === 4 && (
        <form onSubmit={handleFinalSubmit} className="space-y-4">
          <h3 className="text-2xl font-bold mb-2">Where should we send your quote?</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:border-bear-accent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:border-bear-accent transition-all"
                placeholder="(303) 555-0123"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:border-bear-accent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Company Name (Optional)</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white placeholder-gray-400 focus:outline-none focus:border-bear-accent transition-all"
                placeholder="Bear Country Inc."
              />
            </div>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-4 text-lg mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get My Estimate'}
          </Button>
          
          <p className="text-xs text-center text-gray-400 mt-4">
            By submitting, you agree to receive updates about your quote. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
};
