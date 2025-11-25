"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Trophy, Target, BarChart3, Instagram, Facebook, Twitter, Youtube, Zap, Users, Award } from "lucide-react";

export default function HomePage() {
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
            { name: "About", id: "/about" },
            { name: "Team", id: "/team" },
            { name: "Programs", id: "/programs" },
            { name: "Schedule", id: "/schedule" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Oreol"
          button={{ text: "Join Team", href: "/contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Team Oreol"
          description="Building champions on and off the court through dedication, teamwork, and excellence in basketball"
          tag="Basketball Excellence"
          tagIcon={Trophy}
          imageSrc="https://pixabay.com/get/ge4ec0b15aa2c53fe968bd86bfd718ea51343408f5a607140d7976dff03bab24024bafb8409f64fb955b9dd4b93c24f5a9d62082c8b5569a9f94fb2b9aca95cb5_1280.jpg"
          imageAlt="Team Oreol basketball players"
          imagePosition="right"
          buttons={[
            { text: "Join Our Team", href: "/contact" },
            { text: "Learn More", href: "/about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Mission"
          description="At Team Oreol, we believe basketball is more than just a game. We develop not only skilled athletes but also strong leaders and team players who excel both on the court and in life. Our commitment to excellence, sportsmanship, and community involvement makes us a premier basketball organization."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Our Programs"
          description="Comprehensive basketball development for all skill levels"
          tag="Training Programs"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            { title: "Skills Training", icon: Zap },
            { title: "Youth Development", icon: Users },
            { title: "Competition Teams", icon: Award }
          ]}
          buttons={[
            { text: "View All Programs", href: "/programs" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Achievements"
          description="Numbers that showcase our success"
          tag="Success Stats"
          tagIcon={BarChart3}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            { id: "1", value: "250+", description: "Players Developed" },
            { id: "2", value: "15", description: "Championships Won" },
            { id: "3", value: "98%", description: "Player Satisfaction" },
            { id: "4", value: "10", description: "Years Experience" }
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