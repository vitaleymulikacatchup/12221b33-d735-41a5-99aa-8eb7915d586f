"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Users, MessageSquare, Handshake, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function TeamPage() {
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
            { name: "Programs", id: "/programs" },
            { name: "Schedule", id: "/schedule" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Oreol"
          button={{ text: "Join Team", href: "/contact" }}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced coaches and staff dedicated to your success"
          tag="Our Coaches"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "1",
              name: "Coach Marcus",
              role: "Head Coach",
              imageSrc: "https://pixabay.com/get/gd55278e37e8ad70ca3a08f2b1a02e470e86ca66d5d985f6508339c0703ebc60e53dc7a2c6c834557b1c3216f4db2d159bd8cdac3389d619a1f3fefe6e5b414da_1280.jpg",
              imageAlt: "Coach Marcus portrait"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Skills Trainer",
              imageSrc: "https://pixabay.com/get/gff1be077fc5de96bcf992a9f5666733e152cf9e518588df719352a158a9a54bf72db15252e77b5dc1a432fc02ef3b17860a1fe6039161163ab4dd2b88ffaa479_1280.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "3",
              name: "Mike Davis",
              role: "Youth Coordinator",
              imageSrc: "https://pixabay.com/get/gb6d8248d9462760e51c3ab515dcf6e0d7f4c3ccd1091e2d2d988d0f608488983af1a1a83323e285f66a43526ed1e5935be4fe7e2808d6098eea264460668f3b5_1280.jpg",
              imageAlt: "Mike Davis portrait"
            },
            {
              id: "4",
              name: "Lisa Chen",
              role: "Fitness Coach",
              imageSrc: "https://pixabay.com/get/g7405989495d8dea9e7b8609e38761a51c73a1700528c1b8cca71da6b3a05ff64ba4c79221bc17123d265399ef2164569870776e5994e77681205667ee5432095_1280.jpg",
              imageAlt: "Lisa Chen portrait"
            },
            {
              id: "5",
              name: "Tony Rodriguez",
              role: "Assistant Coach",
              imageSrc: "https://pixabay.com/get/g3d9ea567639824a24e85dfca5a631314aae3f5e713604e9d2b72f14421d5a711961cddc99af0853b97a252030fcee1feb0daf5d9dd686b1c75cfceddb495f780_1280.jpg",
              imageAlt: "Tony Rodriguez portrait"
            },
            {
              id: "6",
              name: "Jennifer Lee",
              role: "Team Manager",
              imageSrc: "https://pixabay.com/get/ge60a3af1866efc47588b46b495c64b846ad9a286b3d1fe2e110126b1b1b1743851c30e46b892e130d741d96c71035103110adc655cc2dcd2c4e5f2d7d5205988_1280.jpg",
              imageAlt: "Jennifer Lee portrait"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What People Say"
          description="Hear from our players, parents, and community"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Parent",
              company: "Team Oreol Family",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb864e20af20420fad25663ab9a4b4507c0a5270dea813909b5c4a16d6af093d5b7ebf632575e7d058060b74ee9e91380017d77ab49a302ddc492433a06bcd680_1280.jpg",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "2",
              name: "Coach Thompson",
              role: "Former Player",
              company: "College Basketball",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g21cca15ab2dedde68ca92dc7300dec2dfccb690a495ff38f613a7a9f6bc337464bc7bee3a197fcd4a99fb1e737670f87eb728b303e75956cb7210beffeca595f_1280.jpg",
              imageAlt: "Coach Thompson"
            },
            {
              id: "3",
              name: "Alex Kim",
              role: "Alumni",
              company: "Professional Player",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8039c3a2bb7d01b881d6d09de718c6be5d40e2ebad4aef23f74afcb9757c1bd49f16120345404779ca7e69d700d179c72ee9eea42b3b06a9af9b1f7bc50fd3c1_1280.jpg",
              imageAlt: "Alex Kim"
            },
            {
              id: "4",
              name: "Janet Wilson",
              role: "Community Leader",
              company: "Local Sports Council",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf58660a24795185c0b3c6f0be681649d0fdc373d3e75fee0399c2348bcfe911b85212a6c39bfe8e2b9133654e062b5aadc66ddc1db0ac01685ad8c4c6bf87aab_1280.jpg",
              imageAlt: "Janet Wilson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Proud to work with leading sports brands"
          tag="Our Sponsors"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/gef2e3015a6895dba957539577a05661201ecda232222119061f911d25fe4355f4de04cb722a66b7e560b268915ee6d6e7b7eafe651d06f27db55aedd086ae2a2_1280.jpg",
            "https://pixabay.com/get/gfe547148798c2d77d8a9dc66855861ab995fa8aa109d3bed251bf3e9a89e459b50d94ebd2b31de8ae032405d77d04074b2fb14568a63bfd45295ceff580a48bd_1280.jpg",
            "https://pixabay.com/get/ge342c88386d96572c11e304808589ed32609e163a0f2bda6da68068f28c7dfab039869935dac07911b2ea30fc3b8f878c31d6e26a51496a10ace4fc5ecec185a_1280.jpg",
            "https://pixabay.com/get/gac08b24829b89f920e85a4e959a0a10cbdf96adbefed76ca2165fe6aa5302d986ac7ced6a8fcd71961cde6a6c610cad0465e971453e0a167a7ec2e2d56796e83_1280.jpg",
            "https://pixabay.com/get/gb370d5f3c68c354356bb9512d3fde3a6723b0515147ac3bcdc9dd6cacb95539eef87c346e93fa536872435af1f187cd20e9b855f7beaba79c08d7151848e2992_1280.jpg",
            "https://pixabay.com/get/gb606a0a5f12aae1abed574c0c28f83b85ba21b3c1fd561a394ccca565e14ff6d28c9f9b783c6443806b61477f4fd40a9e67bcd942dc7f744407c197ce9bdcf09_1280.jpg",
            "https://pixabay.com/get/g14f6af29e3d57eafa1f9d584772ad9c7db299eaeed81ee5022ce23fd1894ff2fc38a53c0df5e805efec71a712f463c185aca1381164e5ea78456a741e6598aa1_1280.jpg"
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