
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Unlock } from "lucide-react";

interface RegistrationFormProps {
  buttonText?: string | React.ReactNode;
  className?: string;
  variant?: "default" | "hero" | "cta";
}

const RegistrationForm = ({ buttonText = "Register for Early Access", className = "", variant = "default" }: RegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/manjljeq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center p-6 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <p className="text-green-800 font-semibold">Thank you for registering!</p>
        <p className="text-green-600 text-sm mt-2">We'll notify you when ReTokenize launches.</p>
      </div>
    );
  }

  // For inline button variants (hero and cta), show just the button that opens a modal
  if (variant === "hero" || variant === "cta") {
    return (
      <div className={className}>
        <Button 
          onClick={() => {
            // Create and show a modal with the registration form
            const modalHtml = `
              <div id="registration-modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; padding: 2rem; border-radius: 1rem; max-width: 400px; width: 90%; max-height: 90vh; overflow-y: auto;">
                  <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: #1f2937;">Register for Early Access</h3>
                  <form action="https://formspree.io/f/manjljeq" method="POST" style="space-y: 1rem;">
                    <div style="margin-bottom: 1rem;">
                      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem; color: #374151;">Your email:</label>
                      <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                      <label style="display: block; font-weight: 500; margin-bottom: 0.5rem; color: #374151;">Your message (optional):</label>
                      <textarea name="message" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    <input type="hidden" name="_subject" value="ReTokenize Early Access Registration">
                    <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                      <button type="button" onclick="document.getElementById('registration-modal').remove()" style="padding: 0.75rem 1.5rem; background: #6b7280; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Cancel</button>
                      <button type="submit" style="padding: 0.75rem 1.5rem; background: linear-gradient(to right, #2563eb, #4f46e5); color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
          }}
          size={variant === "hero" ? "lg" : "lg"}
          className={variant === "hero" 
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-8"
          }
        >
          {variant === "hero" && (
            <div className="flex items-center">
              <Unlock className="mr-3 h-5 w-5" />
              {typeof buttonText === 'string' ? buttonText : 'Coming Soon — Register for Early Access'}
            </div>
          )}
          {variant === "cta" && (
            <>
              {buttonText}
              <ArrowRight className="ml-4 h-6 w-6" />
            </>
          )}
        </Button>
      </div>
    );
  }

  // Default form variant for standalone use
  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <Label htmlFor="email">Your email:</Label>
        <Input 
          type="email" 
          name="email" 
          id="email"
          required 
          disabled={isSubmitting}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="message">Your message (optional):</Label>
        <Textarea 
          name="message" 
          id="message"
          disabled={isSubmitting}
          className="mt-1"
          rows={3}
        />
      </div>
      <input type="hidden" name="_subject" value="ReTokenize Early Access Registration" />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Registering..." : "Register for Early Access"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default RegistrationForm;
