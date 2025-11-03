import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, User, Building2, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { Button, Input } from '../../design';

const FormWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['border-light']};
  max-width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const StatusMessage = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const SuccessMessage = styled(StatusMessage)`
  background: ${({ theme }) => theme.colors.success}20;
  color: ${({ theme }) => theme.colors.success};
  border: 1px solid ${({ theme }) => theme.colors.success}40;
`;

const ErrorMessage = styled(StatusMessage)`
  background: ${({ theme }) => theme.colors.error}20;
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error}40;
`;

const LoadingSpinner = styled(Loader)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ConvertKitForm = ({ 
  title = "Join Early Access",
  subtitle = "Get exclusive access to ParkPro and start saving 10+ hours per client.",
  formId = "default",
  buttonText = "Join Early Access",
  showCompany = false,
  showPhone = false,
  className
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setMessage('');

    try {
      // ConvertKit API integration
      const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: import.meta.env.VITE_CONVERTKIT_API_KEY,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          fields: {
            company: formData.company,
            phone: formData.phone
          }
        })
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining! Check your email for next steps.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: ''
        });
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper className={className}>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>{subtitle}</FormSubtitle>
      
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <FormLabel htmlFor="firstName">
              <User size={16} style={{ marginRight: '8px', display: 'inline' }} />
              First Name *
            </FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder="Enter your first name"
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="lastName">
              <User size={16} style={{ marginRight: '8px', display: 'inline' }} />
              Last Name *
            </FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder="Enter your last name"
            />
          </FormGroup>
        </FormRow>

        <FormGroup>
          <FormLabel htmlFor="email">
            <Mail size={16} style={{ marginRight: '8px', display: 'inline' }} />
            Email Address *
          </FormLabel>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email address"
          />
        </FormGroup>

        {showCompany && (
          <FormGroup>
            <FormLabel htmlFor="company">
              <Building2 size={16} style={{ marginRight: '8px', display: 'inline' }} />
              Company Name
            </FormLabel>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company name"
            />
          </FormGroup>
        )}

        {showPhone && (
          <FormGroup>
            <FormLabel htmlFor="phone">
              Phone Number
            </FormLabel>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </FormGroup>
        )}

        <SubmitButton 
          type="submit" 
          variant="primary" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size={20} />
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </SubmitButton>

        {status === 'success' && (
          <SuccessMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle size={20} />
            {message}
          </SuccessMessage>
        )}

        {status === 'error' && (
          <ErrorMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle size={20} />
            {message}
          </ErrorMessage>
        )}
      </form>
    </FormWrapper>
  );
};

export default ConvertKitForm;
