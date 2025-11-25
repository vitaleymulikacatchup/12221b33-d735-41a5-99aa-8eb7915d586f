"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Circle, DollarSign, HelpCircle, Instagram, Facebook, Twitter, Youtube, Sparkles, Award, Crown } from "lucide-react";

export default function ProgramsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Team", id: "/team" },
            { name: "Schedule", id: "/schedule" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Oreol"
          button={{ text: "Join Team", href: "/contact" }}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Training Programs"
          description="Choose the perfect program for your basketball journey"
          tag="Programs"
          tagIcon={Circle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Fundamentals Training",
              price: "$150/month",
              imageSrc: "https://pixabay.com/get/gbcf55c1cd0295061052f036ff36a143a7af186984f46e5d4d3a3dbcb499b263c65f63b0767b63d26b0ea3692d554baa107096b24b8a8f6623f922d330e80d51b_1280.jpg",
              imageAlt: "Basketball fundamentals training"
            },
            {
              id: "2",
              name: "Youth Development",
              price: "$120/month",
              imageSrc: "https://pixabay.com/get/g54148fea49262cbbb6b2b446711576bb48502b2f5a57ffe791541d7c23a3a3a91c66dc8eb8b420ef7d586719612cc0117de91989b0169c50d66f8a6ff96e8e5d_1280.jpg",
              imageAlt: "Youth basketball development"
            },
            {
              id: "3",
              name: "Competitive League",
              price: "$200/month",
              imageSrc: "https://pixabay.com/get/gc238ee4bec416fabaa4eedbf545a70c929b1867012a961545b4e618135ba8dd5358bac7d75377ea497725774bbec3302_1280.jpg",
              imageAlt: "Basketball competition league"
            },
            {
              id: "4",
              name: "Elite Coaching",
              price: "$300/month",
              imageSrc: "https://pixabay.com/get/ga89e9fac99bb33446fb26a1b6adeb77902d053af4d5380fb25161eed03fc01c39dc0c68a1c6a7692368d389c4de96a468847f31a430b17b32bcfb5d8b58dc00c_1280.jpg",
              imageAlt: "Elite basketball coaching"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Membership Plans"
          description="Flexible pricing options for every player"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Beginner",
              badgeIcon: Sparkles,
              price: "$120/month",
              subtitle: "Perfect for new players",
              features: [
                "2 training sessions per week",
                "Basic skills development",
                "Team uniform included",
                "Access to facilities"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$200/month",
              subtitle: "For competitive players",
              features: [
                "4 training sessions per week",
                "Advanced skill coaching",
                "Competition team access",
                "Individual performance analysis",
                "Nutrition guidance"
              ]
            },
            {
              id: "elite",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$300/month",
              subtitle: "Elite player development",
              features: [
                "Unlimited training access",
                "1-on-1 coaching sessions",
                "Priority tournament selection",
                "College recruitment support",
                "Mental performance coaching"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Team Oreol"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What age groups do you accept?",
              content: "We welcome players from ages 8 to 18, with programs tailored for different age groups and skill levels."
            },
            {
              id: "2",
              title: "Do I need prior basketball experience?",
              content: "Not at all! We have beginner programs for those just starting, as well as advanced training for experienced players."
            },
            {
              id: "3",
              title: "What equipment do I need?",
              content: "We provide team uniforms and some training equipment. Players need basketball shoes, water bottle, and practice clothes."
            },
            {
              id: "4",
              title: "How often are practices?",
              content: "Practice frequency varies by program level, from 2 sessions per week for beginners to daily training for elite players."
            },
            {
              id: "5",
              title: "Do you offer scholarship opportunities?",
              content: "Yes, we have need-based scholarships available for qualified families. Contact us to learn more about our financial assistance programs."
            },
            {
              id: "6",
              title: "What safety measures do you have in place?",
              content: "Player safety is our top priority. All coaches are certified, we have medical staff on-site, and follow comprehensive safety protocols."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="Team Oreol"
          copyrightText="© 2025 Team Oreol Basketball. All rights reserved."
          columns={[
            {
              title: "Programs",
              items: [
                { label: "Youth Development", href: "/programs" },
                { label: "Skills Training", href: "/programs" },
                { label: "Competition Teams", href: "/programs" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "/about" },
                { label: "Coaches", href: "/team" },
                { label: "Facilities", href: "/facilities" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Scholarships", href: "/scholarships" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/teamoreol", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/teamoreol", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com/teamoreol", ariaLabel: "Follow us on Twitter" },
            { icon: Youtube, href: "https://youtube.com/teamoreol", ariaLabel: "Subscribe to our YouTube channel" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}