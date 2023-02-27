import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BannerFour from '../component/banner/BannerFour';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CounterUpOne from '../component/counterup/CounterUpOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';
import { ServiceDark } from '../component/service/ServiceDark';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const HomeStartup = () => {

    return (
        <>
        <SEO title="Home Startup"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderOne />
        <BannerFour />
        <ServiceDark />
        <ProjectOne />
        <CounterUpOne/>
        <TestimonialOne />
        <BrandOne />
        <BlogOne />
        <CtaLayoutOne />
        <FooterOne />
        </main>
        </>
    )
}

export default HomeStartup;

