import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import ParkProLogo from "../assets/Park Pro White_Long.svg?url";


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
      ? 'rgba(0, 0, 0, 0.98)'
      : 'rgba(0, 0, 0, 0.95)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.fontBody};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.3)' : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    height: 72px;
  }

  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
    height: 68px;
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
  flex-shrink: 0;

  &:hover {
    transform: scale(1.02);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
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

  @media (max-width: 475px) {
    height: 42px;
  }
`;

const NavSpacer = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

const DropdownWrapper = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-family: ${({ theme }) => theme.typography.fontBody};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const ChevronIcon = styled(motion.span)`
  display: flex;
  align-items: center;
  line-height: 0;
`;

const DropdownMenu = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 240px;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow: hidden;
`;

const DropdownSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

const DropdownSectionLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xs};
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ $isActive }) => $isActive ? 'white' : 'rgba(255, 255, 255, 0.75)'};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  background: ${({ $isActive }) => $isActive ? 'rgba(245, 194, 73, 0.1)' : 'transparent'};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: -2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const DropdownExternalItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.fast};
  min-height: 40px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: -2px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;

const SubItemIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.xs};
  color: rgba(255, 255, 255, 0.25);
`;

const ActiveDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #F5C249;
  flex-shrink: 0;
`;

const DropdownDemoButton = styled(Link)`
  display: block;
  margin: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: #F5C249;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: #E9B029;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

/* ============================================================
   DESKTOP NAV — Superhuman-tier proper desktop navigation
   ============================================================ */
const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 48px;
  margin-left: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontBody};
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)')};
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: ${({ $isActive }) => ($isActive ? 'rgba(245, 194, 73, 0.08)' : 'transparent')};
  border: none;

  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const NavTrigger = styled.button`
  font-family: ${({ theme }) => theme.typography.fontBody};
  font-size: 14px;
  font-weight: 500;
  color: ${({ $isOpen }) => ($isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)')};
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: ${({ $isOpen }) => ($isOpen ? 'rgba(255, 255, 255, 0.06)' : 'transparent')};
  border: none;

  &:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }

  svg {
    transition: transform 180ms ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const Flyout = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop),
})`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: #151519;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

const FlyoutLink = styled(Link)`
  display: block;
  padding: 10px 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 8px;
  transition: all 150ms ease;
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.fontBody};

  &:hover {
    color: #FFFFFF;
    background: rgba(245, 194, 73, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: -2px;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavTextLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontBody};
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 150ms ease;

  &:hover {
    color: #FFFFFF;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const NavCTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.typography.fontBody};
  font-size: 14px;
  font-weight: 600;
  color: #0B0B0C;
  background: #F5C249;
  border-radius: 10px;
  text-decoration: none;
  transition: all 180ms ease;

  &:hover {
    background: #F8D86B;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(245, 194, 73, 0.3);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

/* ---- Mobile ---- */

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
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
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileSectionLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xs};
`;

const MobileNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ $isActive }) =>
    $isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  border-left: 3px solid ${({ $isActive }) =>
    $isActive ? '#F5C249' : 'transparent'};
  min-height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const MobileExternalLink = styled.a`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  border-left: 3px solid transparent;
  min-height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const MobileDemoButton = styled(Link)`
  display: block;
  margin: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: #F5C249;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #E9B029;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const productRef = useRef(null);
  const resourcesRef = useRef(null);
  const location = useLocation();

  // Close desktop flyouts on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) setProductOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) setResourcesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close desktop flyouts on route change
  useEffect(() => {
    setProductOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isDropdownOpen) setIsDropdownOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isDropdownOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        $isScrolled={isScrolled}
      >
        {/* Left: Logo */}
        <LogoWrapper to="/" aria-label="ParkPro Home">
          <Logo src={ParkProLogo} alt="ParkPro Logo" loading="eager" />
        </LogoWrapper>

        {/* Desktop nav — hidden on mobile via media query */}
        <DesktopNav aria-label="Primary">
          <NavLinks>
            <NavItem
              ref={productRef}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <NavTrigger
                type="button"
                aria-haspopup="true"
                aria-expanded={productOpen}
                $isOpen={productOpen}
                onClick={() => setProductOpen((p) => !p)}
                onFocus={() => setProductOpen(true)}
              >
                Product
                <ChevronDown size={14} />
              </NavTrigger>
              <AnimatePresence>
                {productOpen && (
                  <Flyout
                    role="menu"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FlyoutLink to="/features" role="menuitem">Features</FlyoutLink>
                    <FlyoutLink to="/solutions" role="menuitem">Solutions</FlyoutLink>
                    <FlyoutLink to="/demo" role="menuitem">Demo</FlyoutLink>
                    <FlyoutLink to="/faq" role="menuitem">FAQ</FlyoutLink>
                  </Flyout>
                )}
              </AnimatePresence>
            </NavItem>

            <NavItem>
              <NavLink to="/pricing" $isActive={isActive("/pricing")}>Pricing</NavLink>
            </NavItem>

            <NavItem
              ref={resourcesRef}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <NavTrigger
                type="button"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                $isOpen={resourcesOpen}
                onClick={() => setResourcesOpen((p) => !p)}
                onFocus={() => setResourcesOpen(true)}
              >
                Resources
                <ChevronDown size={14} />
              </NavTrigger>
              <AnimatePresence>
                {resourcesOpen && (
                  <Flyout
                    role="menu"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <FlyoutLink to="/comparison" role="menuitem">Comparison</FlyoutLink>
                    <FlyoutLink to="/contact" role="menuitem">Contact</FlyoutLink>
                  </Flyout>
                )}
              </AnimatePresence>
            </NavItem>

            <NavItem>
              <NavLink to="/about" $isActive={isActive("/about")}>About</NavLink>
            </NavItem>
          </NavLinks>

          <NavActions>
            <NavTextLink href="https://app.parkproit.com/agent/login" target="_blank" rel="noopener noreferrer">
              Log in
            </NavTextLink>
            <NavCTAButton to="/request-access">Get Started</NavCTAButton>
          </NavActions>
        </DesktopNav>

        {/* Mobile hamburger — unchanged */}
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>

      {/* Mobile fullscreen menu */}
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
            <MobileNavLink to="/pricing" $isActive={isActive("/pricing")}>
              Pricing
            </MobileNavLink>
            <MobileNavLink to="/features" $isActive={isActive("/features")}>
              Features
            </MobileNavLink>
            <MobileNavLink to="/comparison" $isActive={isActive("/comparison")}>
              Why ParkPro
            </MobileNavLink>
            <MobileNavLink to="/faq" $isActive={isActive("/faq")}>
              FAQ
            </MobileNavLink>
            <MobileNavLink to="/about" $isActive={isActive("/about")}>
              About
            </MobileNavLink>
            <MobileNavLink to="/contact" $isActive={isActive("/contact")}>
              Contact
            </MobileNavLink>

            <MobileSectionLabel>Solutions</MobileSectionLabel>
            <MobileNavLink to="/solutions/solo-agents" $isActive={isActive("/solutions/solo-agents")}>
              Solo Agents
            </MobileNavLink>
            <MobileNavLink to="/solutions/agencies" $isActive={isActive("/solutions/agencies")}>
              Agencies
            </MobileNavLink>
            <MobileNavLink to="/solutions/enterprise" $isActive={isActive("/solutions/enterprise")}>
              Enterprise
            </MobileNavLink>

            <MobileExternalLink href="https://app.parkproit.com/agent/login" target="_blank" rel="noopener noreferrer">
              Log In
            </MobileExternalLink>

            <MobileDemoButton to="/demo">
              Book a Demo
            </MobileDemoButton>

          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
