import React, { useState, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Search, X } from 'lucide-react';
import { designTokens } from '../tokens.js';

// Input wrapper component
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${designTokens.spacing[2]};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

// Input label component
const InputLabel = styled.label`
  font-size: ${designTokens.typography.sizes.sm};
  font-weight: ${designTokens.typography.weights.medium};
  color: ${designTokens.colors['text-primary']};
  margin-bottom: ${designTokens.spacing[1]};
`;

// Input container component
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  /* Size variants */
  ${({ size }) => {
    const sizeConfig = designTokens.components.input.sizes[size];
    return css`
      height: ${sizeConfig.height};
    `;
  }}
  
  /* Icon positioning */
  ${({ hasIcon, iconPosition }) => hasIcon && css`
    ${iconPosition === 'left' ? css`
      .input-icon {
        left: ${designTokens.spacing[3]};
      }
      .input-field {
        padding-left: ${designTokens.spacing[10]};
      }
    ` : css`
      .input-icon {
        right: ${designTokens.spacing[3]};
      }
      .input-field {
        padding-right: ${designTokens.spacing[10]};
      }
    `}
  `}
`;

// Styled input component
const StyledInput = styled(motion.input).withConfig({
  shouldForwardProp: (prop) => !['size', 'variant', 'hasIcon', 'iconPosition'].includes(prop)
})`
  /* Base styles */
  width: 100%;
  border: none;
  outline: none;
  font-family: ${designTokens.typography.fontBody};
  font-size: ${designTokens.typography.sizes.base};
  color: ${designTokens.colors['text-primary']};
  background: ${designTokens.colors.white};
  border-radius: ${designTokens.radius.lg};
  transition: ${designTokens.transitions.normal};
  
  /* Size variants */
  ${({ size }) => {
    const sizeConfig = designTokens.components.input.sizes[size];
    return css`
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      height: ${sizeConfig.height};
    `;
  }}
  
  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css`
          border: 1px solid ${designTokens.colors['border-medium']};
          
          &:focus {
            border-color: ${designTokens.colors.gold};
            box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.1);
          }
        `;
        
      case 'error':
        return css`
          border: 1px solid ${designTokens.colors.error};
          
          &:focus {
            border-color: ${designTokens.colors.error};
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
          }
        `;
        
      case 'success':
        return css`
          border: 1px solid ${designTokens.colors.success};
          
          &:focus {
            border-color: ${designTokens.colors.success};
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
          }
        `;
        
      case 'warning':
        return css`
          border: 1px solid ${designTokens.colors.warning};
          
          &:focus {
            border-color: ${designTokens.colors.warning};
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
          }
        `;
        
      default:
        return css`
          border: 1px solid ${designTokens.colors['border-medium']};
        `;
    }
  }}
  
  /* Disabled state */
  ${({ disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    background: ${designTokens.colors['gray-100']};
  `}
  
  /* Placeholder styles */
  &::placeholder {
    color: ${designTokens.colors['text-tertiary']};
    font-style: italic;
  }
  
  /* Search input styles */
  &[type="search"] {
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
`;

// Input icon component
const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${designTokens.colors['text-tertiary']};
  pointer-events: none;
  z-index: 1;
`;

// Input action button (clear, password toggle)
const InputAction = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ position }) => position === 'right' ? designTokens.spacing[3] : 'auto'};
  left: ${({ position }) => position === 'left' ? designTokens.spacing[3] : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  color: ${designTokens.colors['text-tertiary']};
  cursor: pointer;
  border-radius: ${designTokens.radius.sm};
  transition: ${designTokens.transitions.fast};
  
  &:hover {
    color: ${designTokens.colors['text-secondary']};
    background: ${designTokens.colors['gray-100']};
  }
  
  &:focus-visible {
    outline: 2px solid ${designTokens.colors.gold};
    outline-offset: 2px;
  }
`;

// Helper text component
const HelperText = styled.div`
  font-size: ${designTokens.typography.sizes.sm};
  margin-top: ${designTokens.spacing[1]};
  
  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          color: ${designTokens.colors.error};
        `;
      case 'success':
        return css`
          color: ${designTokens.colors.success};
        `;
      case 'warning':
        return css`
          color: ${designTokens.colors.warning};
        `;
      default:
        return css`
          color: ${designTokens.colors['text-secondary']};
        `;
    }
  }}
`;

// Main Input component
const Input = forwardRef(({
  type = 'text',
  size = 'md',
  variant = 'default',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  fullWidth = false,
  label,
  helperText,
  errorText,
  successText,
  icon,
  iconPosition = 'left',
  clearable = false,
  showPasswordToggle = false,
  className,
  onChange,
  onFocus,
  onBlur,
  onClear,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  name,
  id,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const currentValue = value !== undefined ? value : internalValue;
  const currentVariant = errorText ? 'error' : successText ? 'success' : variant;
  const hasIcon = !!icon;
  const hasAction = clearable || showPasswordToggle;
  
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };
  
  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };
  
  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
    onClear?.();
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const inputType = type === 'password' && showPassword ? 'text' : type;
  
  return (
    <InputWrapper fullWidth={fullWidth} className={className}>
      {label && (
        <InputLabel htmlFor={id}>
          {label}
          {required && <span style={{ color: designTokens.colors.error }}> *</span>}
        </InputLabel>
      )}
      
      <InputContainer
        size={size}
        variant={currentVariant}
        disabled={disabled}
        hasIcon={hasIcon}
        iconPosition={iconPosition}
      >
        {icon && (
          <InputIcon position={iconPosition} className="input-icon">
            {icon}
          </InputIcon>
        )}
        
        <StyledInput
          ref={ref}
          type={inputType}
          size={size}
          variant={currentVariant}
          hasIcon={hasIcon}
          iconPosition={iconPosition}
          placeholder={placeholder}
          value={currentValue}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          name={name}
          id={id}
          className="input-field"
          {...props}
        />
        
        {hasAction && (
          <>
            {clearable && currentValue && (
              <InputAction
                type="button"
                position="right"
                onClick={handleClear}
                aria-label="Clear input"
              >
                <X size={16} />
              </InputAction>
            )}
            
            {showPasswordToggle && type === 'password' && (
              <InputAction
                type="button"
                position="right"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </InputAction>
            )}
          </>
        )}
      </InputContainer>
      
      {(helperText || errorText || successText) && (
        <HelperText variant={currentVariant}>
          {errorText || successText || helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

// Search input component
const SearchInput = forwardRef((props, ref) => (
  <Input
    ref={ref}
    type="search"
    icon={<Search size={16} />}
    {...props}
  />
));

SearchInput.displayName = 'SearchInput';

// Password input component
const PasswordInput = forwardRef((props, ref) => (
  <Input
    ref={ref}
    type="password"
    showPasswordToggle
    {...props}
  />
));

PasswordInput.displayName = 'PasswordInput';

// Export components
export { Input, SearchInput, PasswordInput };
export default Input;

