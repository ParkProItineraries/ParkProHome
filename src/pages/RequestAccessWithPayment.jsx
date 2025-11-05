import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Check,
  Users,
  Clock,
  Star,
  Shield,
  Zap,
  Mail,
  Phone,
  Building,
  User,
  MessageSquare,
  ArrowRight,
  CreditCard,
  Lock,
  AlertCircle,
  CheckCircle,
  Loader,
  Eye,
  EyeOff
} from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import { flexCenter } from "../styles/mixins";
import { fetchConfig } from "../config/environment";

// Stripe will be initialized after fetching config from backend
let stripePromise = null;
let apiUrl = null;

const RequestAccessWrapper = styled.div`
  padding-top: 88px;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const Badge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const FormCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${flexCenter}
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  
  ${({ $active, $completed, theme }) => {
    if ($completed) {
      return `
        background: ${theme.colors.green};
        color: white;
      `;
    }
    if ($active) {
      return `
        background: linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors['gold-muted']});
        color: ${theme.colors.black};
        box-shadow: ${theme.shadows.gold};
      `;
    }
    return `
      background: ${theme.colors['gray-200']};
      color: ${theme.colors['gray-600']};
    `;
  }}
`;

const StepLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ $active, theme }) => $active ? theme.colors.gold : theme.colors['gray-600']};
  font-weight: ${({ $active, theme }) => $active ? theme.typography.weights.semibold : theme.typography.weights.normal};
`;

const StepConnector = styled.div`
  width: 60px;
  height: 2px;
  background: ${({ $completed, theme }) => $completed ? theme.colors.green : theme.colors['gray-300']};
  margin-top: -20px;
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FormSubtitle = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-900']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  height: 40px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right ${({ theme }) => theme.spacing.sm} center;
  background-repeat: no-repeat;
  background-size: 16px 12px;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  height: 40px;
  appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.normal};
  min-height: 60px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.gold};
`;

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: underline;
    
    &:hover {
      color: ${({ theme }) => theme.colors['gold-muted']};
    }
  }
`;

const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  ${({ $variant, theme }) => {
    if ($variant === 'success') {
      return `
        background: ${theme.colors.green}10;
        color: ${theme.colors.green};
        border: 1px solid ${theme.colors.green}20;
      `;
    }
    if ($variant === 'error') {
      return `
        background: ${theme.colors.red}10;
        color: ${theme.colors.red};
        border: 1px solid ${theme.colors.red}20;
      `;
    }
    if ($variant === 'info') {
      return `
        background: #3b82f610;
        color: #3b82f6;
        border: 1px solid #3b82f620;
      `;
    }
  }}
`;

const PlanCard = styled.div`
  border: 2px solid ${({ $selected, theme }) => $selected ? theme.colors.gold : theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $selected, theme }) => $selected ? `${theme.colors.gold}05` : theme.colors.white};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PlanName = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PlanPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  
  span {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    color: ${({ theme }) => theme.colors['gray-600']};
    font-weight: ${({ theme }) => theme.typography.weights.normal};
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0 0 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ButtonBase = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.gold};
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: white;
  color: ${({ theme }) => theme.colors['gray-700']};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors['gray-50']};
    border-color: ${({ theme }) => theme.colors['gray-400']};
  }
`;

const PaymentFormWrapper = styled.div`
  background: ${({ theme }) => theme.colors['gray-50']};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(to right, #10b98110, #3b82f610);
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid #10b98120;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

// Payment Form Component
const PaymentForm = ({ onSuccess, selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw new Error(submitError.message);
      }

      const { error: confirmError, setupIntent } = await stripe.confirmSetup({
        elements,
        redirect: 'if_required',
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      onSuccess(setupIntent.payment_method);
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SecurityBadge>
        <Lock size={16} />
        <span>Secured by Stripe • Bank-level encryption • PCI compliant</span>
      </SecurityBadge>

      <div style={{ marginBottom: '1rem' }}>
        <PaymentElement options={{
          layout: {
            type: 'accordion',
            defaultCollapsed: false,
            radios: true,
          }
        }} />
      </div>

      {error && (
        <Alert $variant="error">
          <AlertCircle size={18} />
          <span>{error}</span>
        </Alert>
      )}

      <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.5' }}>
        💡 <strong>Note:</strong> Your subscription will be <strong>pending approval</strong>. You'll only be charged after our team approves your access. If denied, you'll receive a full refund immediately.
      </div>

      <ButtonRow>
        <PrimaryButton type="submit" disabled={!stripe || processing}>
          {processing ? (
            <>Processing...</>
          ) : (
            <>
              <Lock size={18} />
              Complete Request
            </>
          )}
        </PrimaryButton>
      </ButtonRow>
    </form>
  );
};

// Main Component
const RequestAccessWithPayment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
    agencySize: "",
    monthlyClients: "",
    message: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [setupIntentClientSecret, setSetupIntentClientSecret] = useState(null);
  const [paymentMethodId, setPaymentMethodId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [configLoaded, setConfigLoaded] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);

  // Fetch ALL configuration from backend on mount (from AWS SSM)
  useEffect(() => {
    const initializeConfig = async () => {
      try {
        const config = await fetchConfig();
        
        // Set the global apiUrl
        apiUrl = config.apiUrl;
        
        // Initialize Stripe with the publishable key from backend
        stripePromise = loadStripe(config.stripePublishableKey);
        
        setConfigLoaded(true);
        console.log('✅ All configuration loaded from backend (AWS SSM)');
      } catch (error) {
        console.error('❌ Failed to load configuration:', error);
        setErrorMessage('Failed to load application configuration. Please try again later.');
      }
    };

    initializeConfig();
  }, []);

  // Available plans (fetch from backend in production)
  const plans = [
    {
      id: "admin_test",
      name: "Admin Test (Free)",
      price: 0,
      interval: "month",
      features: [
        "Full platform access",
        "All features enabled",
        "For testing purposes only",
        "No payment required"
      ],
      isTest: true
    },
    {
      id: "itinerary_starter_tier1",
      name: "Itinerary Starter",
      price: 147,
      interval: "month",
      features: [
        "5 itineraries per month",
        "Basic customization",
        "Email support",
        "PDF exports"
      ]
    },
    {
      id: "itinerary_pro_tier2",
      name: "Itinerary Pro",
      price: 247,
      interval: "month",
      features: [
        "25 itineraries per month",
        "Advanced customization",
        "Priority support",
        "PDF & digital exports",
        "Client branding"
      ],
      recommended: true
    },
    {
      id: "itinerary_enterprise_tier3",
      name: "Itinerary Enterprise",
      price: 497,
      interval: "month",
      features: [
        "Unlimited itineraries",
        "Full white-label",
        "Dedicated support",
        "All export formats",
        "Custom integrations",
        "Multi-agent access"
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleStep1Next = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword || !formData.role || !formData.acceptTerms) {
      setErrorMessage("Please fill in all required fields and accept the terms.");
      return;
    }

    // Validate username
    if (formData.username.length < 3) {
      setErrorMessage("Username must be at least 3 characters long.");
      return;
    }

    // Validate password
    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Check password strength
    const hasUpperCase = /[A-Z]/.test(formData.password);
    const hasLowerCase = /[a-z]/.test(formData.password);
    const hasNumber = /[0-9]/.test(formData.password);
    
    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
      setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }

    setCurrentStep(2);
  };

  const handlePlanSelect = async (plan) => {
    setSelectedPlan(plan);
    setErrorMessage("");
    setLoadingPlan(true);

    // If plan is free ($0), skip payment and submit directly
    if (plan.price === 0) {
      await handleFreeSignup(plan);
      setLoadingPlan(false);
      return;
    }

    // Create a SetupIntent on the backend for paid plans
    try {
      if (!apiUrl) {
        throw new Error('Configuration not loaded. Please refresh the page.');
      }
      
      const response = await fetch(`${apiUrl}/api/stripe/create-setup-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          metadata: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            planId: plan.id,
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSetupIntentClientSecret(data.clientSecret);
        setCurrentStep(3); // Move to payment step
      } else {
        throw new Error(data.message || "Failed to initialize payment");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoadingPlan(false);
    }
  };

  const handleFreeSignup = async (plan) => {
    setIsSubmitting(true);
    setErrorMessage("");

    if (!apiUrl) {
      setErrorMessage('Configuration not loaded. Please refresh the page.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/signup-with-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          planId: plan.id,
          paymentMethodId: null, // No payment method for free plan
          source: "landing-page-paid-access"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setCurrentStep(4);
      } else {
        throw new Error(data.message || "Signup failed");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (paymentMethodId) => {
    setPaymentMethodId(paymentMethodId);
    setIsSubmitting(true);
    setErrorMessage("");

    if (!apiUrl) {
      setErrorMessage('Configuration not loaded. Please refresh the page.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/signup-with-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          planId: selectedPlan.id,
          paymentMethodId,
          source: "landing-page-paid-access"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setCurrentStep(4);
      } else {
        throw new Error(data.message || "Signup failed");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep1 = () => (
    <Form onSubmit={handleStep1Next}>
      <FormTitle>Tell Us About Yourself</FormTitle>
      <FormSubtitle>
        Start your journey to automated Disney planning
      </FormSubtitle>

      <FormRow>
        <FormGroup>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="username">Username *</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder="Choose a username (min 3 characters)"
          minLength="3"
        />
      </FormGroup>

      <FormRow>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <div style={{ position: 'relative' }}>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Min 8 characters"
              minLength="8"
              style={{ paddingRight: '2.5rem' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#374151'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            Must include uppercase, lowercase, and number
          </p>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <div style={{ position: 'relative' }}>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm password"
              minLength="8"
              style={{ paddingRight: '2.5rem' }}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#374151'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="company">Agency Name</Label>
        <Input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your agency name"
        />
      </FormGroup>

      <FormRow>
        <FormGroup>
          <Label htmlFor="role">Your Role *</Label>
          <Select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select your role</option>
            <option value="solo-agent">Solo Travel Agent</option>
            <option value="agency-owner">Agency Owner</option>
            <option value="agency-manager">Agency Manager</option>
            <option value="travel-consultant">Travel Consultant</option>
            <option value="other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="agencySize">Agency Size</Label>
          <Select
            id="agencySize"
            name="agencySize"
            value={formData.agencySize}
            onChange={handleChange}
          >
            <option value="">Select agency size</option>
            <option value="1-5">1-5 agents</option>
            <option value="6-20">6-20 agents</option>
            <option value="21-50">21-50 agents</option>
            <option value="50+">50+ agents</option>
          </Select>
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="monthlyClients">Monthly Disney Clients</Label>
        <Select
          id="monthlyClients"
          name="monthlyClients"
          value={formData.monthlyClients}
          onChange={handleChange}
        >
          <option value="">Select range</option>
          <option value="1-10">1-10 clients</option>
          <option value="11-25">11-25 clients</option>
          <option value="26-50">26-50 clients</option>
          <option value="50+">50+ clients</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Tell us about your agency (optional)</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What challenges do you face with Disney planning? What would make your job easier?"
        />
      </FormGroup>

      <CheckboxGroup>
        <Checkbox
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
        />
        <CheckboxLabel htmlFor="acceptTerms">
          I agree to the{" "}
          <a href="/business/terms-of-service" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/business/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </CheckboxLabel>
      </CheckboxGroup>

      {errorMessage && (
        <Alert $variant="error">
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </Alert>
      )}

      <ButtonRow>
        <PrimaryButton type="submit">
          Continue to Plans
          <ArrowRight size={18} />
        </PrimaryButton>
      </ButtonRow>
    </Form>
  );

  const renderStep2 = () => (
    <>
      <FormTitle>Choose Your Plan</FormTitle>
      <FormSubtitle>
        Select the plan that best fits your agency's needs
      </FormSubtitle>

      <Alert $variant="info">
        <AlertCircle size={18} />
        <div>
          <p style={{ marginBottom: '0.5rem' }}>
            💡 <strong>Prices exclude taxes.</strong> Sales tax will be calculated based on your billing address.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
            {selectedPlan?.price === 0 
              ? "✨ Free plan - you'll skip the payment step!"
              : "💳 After selecting a paid plan, you'll enter your payment details on the next screen. Your subscription will be pending approval - you won't be charged until our team approves your access!"
            }
          </p>
        </div>
      </Alert>

      {/* Loading Indicator */}
      {loadingPlan && (
        <Alert $variant="info" style={{ marginTop: '1rem' }}>
          <Loader className="w-5 h-5 animate-spin" />
          <span>
            {selectedPlan?.price === 0 
              ? "Processing your free signup..."
              : "Initializing secure payment form..."
            }
          </span>
        </Alert>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            $selected={selectedPlan?.id === plan.id}
            onClick={() => !loadingPlan && handlePlanSelect(plan)}
            style={{ 
              opacity: loadingPlan ? 0.6 : 1, 
              cursor: loadingPlan ? 'wait' : 'pointer',
              pointerEvents: loadingPlan ? 'none' : 'auto'
            }}
          >
            <PlanHeader>
              <div>
                <PlanName>
                  {plan.name}
                  {plan.isTest && (
                    <span style={{ 
                      marginLeft: '0.5rem', 
                      padding: '0.25rem 0.5rem', 
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)', 
                      color: '#fff', 
                      fontSize: '0.75rem', 
                      borderRadius: '9999px',
                      fontWeight: 'bold'
                    }}>
                      🧪 TESTING
                    </span>
                  )}
                  {plan.recommended && (
                    <span style={{ 
                      marginLeft: '0.5rem', 
                      padding: '0.25rem 0.5rem', 
                      background: 'linear-gradient(135deg, #C9A227, #A67C00)', 
                      color: '#000', 
                      fontSize: '0.75rem', 
                      borderRadius: '9999px',
                      fontWeight: 'bold'
                    }}>
                      RECOMMENDED
                    </span>
                  )}
                </PlanName>
              </div>
              <PlanPrice>
                {plan.price === 0 ? (
                  <span style={{ color: '#10b981' }}>FREE</span>
                ) : (
                  <>
                    ${plan.price}<span>/{plan.interval}</span>
                  </>
                )}
              </PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              {plan.features.map((feature, idx) => (
                <PlanFeature key={idx}>
                  <Check size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span>{feature}</span>
                </PlanFeature>
              ))}
            </PlanFeatures>
          </PlanCard>
        ))}
      </div>

      {errorMessage && (
        <Alert $variant="error" style={{ marginTop: '1rem' }}>
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </Alert>
      )}

      <ButtonRow>
        <SecondaryButton onClick={() => setCurrentStep(1)}>
          Back
        </SecondaryButton>
      </ButtonRow>
    </>
  );

  const renderStep3 = () => (
    <>
      <FormTitle>Payment Information</FormTitle>
      <FormSubtitle>
        Secure your subscription to {selectedPlan.name} - ${selectedPlan.price}/{selectedPlan.interval}
      </FormSubtitle>

      <Alert $variant="info">
        <AlertCircle size={18} />
        <div>
          <strong>How it works:</strong>
          <ol style={{ margin: '0.5rem 0 0 1.25rem', lineHeight: '1.6' }}>
            <li>Enter your payment information securely</li>
            <li>Your request is submitted for admin review</li>
            <li>If approved: Your subscription activates and you get access!</li>
            <li>If denied: You receive a full refund immediately with no questions asked</li>
          </ol>
        </div>
      </Alert>

      {setupIntentClientSecret && (
        <PaymentFormWrapper>
          <Elements stripe={stripePromise} options={{ clientSecret: setupIntentClientSecret }}>
            <PaymentForm onSuccess={handlePaymentSuccess} selectedPlan={selectedPlan} />
          </Elements>
        </PaymentFormWrapper>
      )}

      {errorMessage && (
        <Alert $variant="error" style={{ marginTop: '1rem' }}>
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </Alert>
      )}

      <ButtonRow>
        <SecondaryButton onClick={() => {
          setCurrentStep(2);
          setSetupIntentClientSecret(null);
        }}>
          Back to Plans
        </SecondaryButton>
      </ButtonRow>
    </>
  );

  const renderStep4 = () => (
    <>
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          margin: '0 auto 1.5rem', 
          background: 'linear-gradient(135deg, #10b981, #059669)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <CheckCircle size={48} color="white" />
        </div>

        <FormTitle>Request Submitted Successfully!</FormTitle>
        <FormSubtitle>
          Your subscription to {selectedPlan.name} is pending approval
        </FormSubtitle>

        <Alert $variant="success" style={{ marginTop: '1.5rem' }}>
          <CheckCircle size={18} />
          <div>
            <strong>What happens next:</strong>
            <ol style={{ margin: '0.5rem 0 0 1.25rem', lineHeight: '1.6', textAlign: 'left' }}>
              <li>Our team has been notified of your request</li>
              <li>You'll receive an email at <strong>{formData.email}</strong> within 24 hours</li>
              <li>If approved: Your subscription activates and you can log in immediately</li>
              <li>If denied: You'll receive a full refund automatically</li>
            </ol>
          </div>
        </Alert>

        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: '#f9fafb', 
          borderRadius: '0.5rem', 
          border: '1px solid #e5e7eb' 
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
            <strong>Plan:</strong> {selectedPlan.name} - ${selectedPlan.price}/{selectedPlan.interval}
            <br />
            <strong>Email:</strong> {formData.email}
            <br />
            <strong>Status:</strong> <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Pending Approval</span>
          </p>
        </div>
      </div>
    </>
  );

  return (
    <RequestAccessWrapper>
      <Section>
        <Container>
          <Header>
            <Badge>Paid Subscription</Badge>
            <Title>Get Access to ParkPro</Title>
            <Subtitle>
              Subscribe now and start automating your Disney itineraries. Access pending approval.
            </Subtitle>
          </Header>

          <FormContainer>
            <FormCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Step Indicator */}
              <StepIndicator>
                <Step>
                  <StepNumber $active={currentStep === 1} $completed={currentStep > 1}>
                    {currentStep > 1 ? <Check size={16} /> : '1'}
                  </StepNumber>
                  <StepLabel $active={currentStep === 1}>Info</StepLabel>
                </Step>
                <StepConnector $completed={currentStep > 1} />
                <Step>
                  <StepNumber $active={currentStep === 2} $completed={currentStep > 2}>
                    {currentStep > 2 ? <Check size={16} /> : '2'}
                  </StepNumber>
                  <StepLabel $active={currentStep === 2}>Plan</StepLabel>
                </Step>
                <StepConnector $completed={currentStep > 2} />
                <Step>
                  <StepNumber $active={currentStep === 3} $completed={currentStep > 3}>
                    {currentStep > 3 ? <Check size={16} /> : '3'}
                  </StepNumber>
                  <StepLabel $active={currentStep === 3}>Payment</StepLabel>
                </Step>
                <StepConnector $completed={currentStep > 3} />
                <Step>
                  <StepNumber $active={currentStep === 4} $completed={currentStep === 4}>
                    {currentStep === 4 ? <Check size={16} /> : '4'}
                  </StepNumber>
                  <StepLabel $active={currentStep === 4}>Done</StepLabel>
                </Step>
              </StepIndicator>

              {/* Content */}
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </FormCard>
          </FormContainer>
        </Container>
      </Section>
    </RequestAccessWrapper>
  );
};

export default RequestAccessWithPayment;

