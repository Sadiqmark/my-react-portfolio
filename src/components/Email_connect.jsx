import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

// This is the main component for the contact form
const Email = () => {
  // State to hold the email input value
  const [email, setEmail] = useState('');
  // State for the form submission status and messages
  const [status, setStatus] = useState({ message: '', type: '' });
  
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    if (!email) {
      setStatus({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }
  

    // Simulate a form submission
    const templateParams = {
        email: email,
      };
    
  
      emailjs.send(
        'service_vtjhxra', // Your service ID
        'template_9flooru', 
         templateParams,
        'IXp3QVoarXm6xYgPc' // Get from Account → Integration
      )
      .then(() => {
        console.log(email);
        setStatus({ 
          message: 'Thank you for connecting! I will get in touch with you soon.', 
          type: 'success' 
        });
        setEmail('');
      })
      .catch(() => {
        setStatus({ 
          message: 'Failed to connect. Please try again.', 
          type: 'error' 
        });
      });
  };

  return (
    <div className="app-container">
      
      <div className="contact-card">
        
        {/* Title and subtitle for the form */}
        <div className="form-title">
          <h2>Let's connect</h2>
          <p>
            I'd love to hear from you. Enter your email below to get in touch.
          </p>
        </div>

        {/* Form section */}
        <form onSubmit={handleSubmit} className="relative">
          {/* Email input container */}
          <div className="form-input-container">
            <Mail  className="form-input-icon" />
            <input
              className="form-input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            
            {/* Submit button with icon */}
            <button
              type="submit"
              aria-label="Submit email"
              className="form-button"
            >
              <ArrowRight className="form-button-icon" />
            </button>
          </div>
        </form>

        {/* Status message display */}
        {status.message && (
          <div className={`status-message ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
