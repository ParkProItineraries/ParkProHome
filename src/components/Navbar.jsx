import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import ParkProLogo from "../assets/Park Pro Black_Long.svg";

const Nav = styled(motion.nav).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ $isScrolled }) => 
    $isScrolled 
      ? 'rgba(255, 255, 255, 0.98)' 
      : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.fontBody};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $isScrolled }) => 
    $isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    height: 72px;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
  object-fit: contain;
  display: block;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 48px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.black : theme.colors['gray-600']};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  padding: ${({ theme }) => theme.spacing.sm} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover::after {
    width: 100%;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 4px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors.black};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.black : theme.colors['gray-600']};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  border-left: 3px solid ${({ theme, $isActive }) => 
    $isActive ? theme.colors.gold : 'transparent'};

  &:hover {
    background: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors.black};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  margin-left: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      const mobileMenu = document.querySelector('[role="navigation"][aria-label="Mobile navigation"]');
      if (mobileMenu) {
        const focusableElements = mobileMenu.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        };

        document.addEventListener('keydown', handleTabKey);
        return () => document.removeEventListener('keydown', handleTabKey);
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/pricing", label: "Pricing" },
    { to: "/features", label: "Features" },
    { to: "/solutions", label: "Solutions" },
    { to: "/comparison", label: "Why ParkPro" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        $isScrolled={isScrolled}
      >
        <LogoWrapper to="/" aria-label="ParkPro Home">
          <Logo src={ParkProLogo} alt="ParkPro Logo" />
        </LogoWrapper>

        <NavLinks role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to}
              $isActive={isActive(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <ButtonGroup>
          <Button variant="ghost" size="sm" href="https://app.parkproit.com/login" target="_blank">
            Log In
          </Button>
          {/*<Button variant="outline" size="sm" to="/signup">
            Sign Up
          </Button>*/}
          <Button variant="gold" size="sm" to="/request-access">
            Request Access
            <Badge>Early Access</Badge>
          </Button>
        </ButtonGroup>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            id="mobile-navigation-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.to} 
                to={item.to}
                $isActive={isActive(item.to)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <MobileNavLink 
              href="https://app.parkproit.com/login" 
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </MobileNavLink>
            <Button variant="gold" size="sm" to="/request-access" onClick={() => setIsMobileMenuOpen(false)}>
              Request Access
              <Badge>Early Access</Badge>
            </Button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;