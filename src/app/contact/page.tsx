"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Mail, Newspaper, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function ContactPage() {
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
            { name: "Programs", id: "/programs" },
            { name: "Schedule", id: "/schedule" }
          ]}
          brandName="Oreol"
          button={{ text: "Join Team", href: "/contact" }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          title="Ready to Start Your Basketball Journey?"
          description="Contact Team Oreol today to learn more about our programs and get started on your path to basketball excellence"
          tagIcon={Mail}
          imageSrc="https://pixabay.com/get/gc9e58ab6648daa54a2d791895e17a28a15ba63c262ea7c8961434aac667f5b4578784e559d387e007f1676acfef5bc018ce4c3dd875a2e2b16bf93e1d0f87fbf_1280.jpg"
          imageAlt="Basketball gym facility"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By signing up, you agree to receive updates about our programs and events."
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest News"
          description="Stay updated with Team Oreol news and basketball insights"
          tag="Blog"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Training",
              title: "Essential Basketball Drills for Beginners",
              excerpt: "Discover the fundamental drills every new player should master to build a solid foundation",
              imageSrc: "https://pixabay.com/get/gab598234dabff21b05a0b5779adf0fbd4bd9786896d1cb8ab5f20a16fb3b462a311ba90f98340aeb13f4cc934d779ce3_1280.jpg",
              imageAlt: "Basketball training drills",
              authorName: "Coach Marcus",
              authorAvatar: "https://pixabay.com/get/gd55278e37e8ad70ca3a08f2b1a02e470e86ca66d5d985f6508339c0703ebc60e53dc7a2c6c834557b1c3216f4db2d159bd8cdac3389d619a1f3fefe6e5b414da_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Equipment",
              title: "Choosing the Right Basketball Gear",
              excerpt: "A comprehensive guide to selecting the best equipment for optimal performance and safety",
              imageSrc: "https://pixabay.com/get/g175070d6cd0e46e7199a132f64c7caa250c304ef404eb3f0a6006429e78fac59e27c3a8ccf28d18caa2c34e272e1a793374c8c086541dcf7ff13f7d3d5d54a76_1280.jpg",
              imageAlt: "Basketball equipment guide",
              authorName: "Mike Davis",
              authorAvatar: "https://pixabay.com/get/gb6d8248d9462760e51c3ab515dcf6e0d7f4c3ccd1091e2d2d988d0f608488983af1a1a83323e285f66a43526ed1e5935be4fe7e2808d6098eea264460668f3b5_1280.jpg",
              date: "10 Jan 2025"
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