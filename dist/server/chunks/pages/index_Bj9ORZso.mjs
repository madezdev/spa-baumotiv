/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead, u as unescapeHTML } from '../astro_Pjo-NYIS.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$f = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/shared/Container.astro", void 0);

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerNav1 = [
    {
      itemText: "Inicio",
      itemLink: "#"
    },
    {
      itemText: "Servicios",
      itemLink: "#services"
    },
    {
      itemText: "Nosotros",
      itemLink: "#about-us"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"></div> <footer class="relative bg-ter dark:from-gray-900 pt-8 md:pt-28"> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col md:flex-row items-center justify-center md:justify-between relative"> <div class="h-auto flex flex-col md:basis-1/2"> <div class="h-full"> <a href="#" class="relative flex items-center gap-3"> <div class="relative overflow-hidden"> <img src="/logo/logo.png" alt="Baumotiv" class="object-cover w-[10rem]"> </div> </a> <ul class="mt-8 flex flex-col gap-2"> <li class="flex items-center gap-2 text-[#909395]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><g fill="#ED2B3C"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path></g></svg> <span>Teléfono: </span>011-2856-7186</li> <li class="flex items-center gap-2 text-[#909395]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#ED2B3C" d="M200 228h-60.28A263.7 263.7 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.7 263.7 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8M90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.77M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></path></svg> <span>Dirección oficina: </span><a href="https://www.google.com/maps/search/Intendente+Larghi+1390,+Bel%C3%A9n+de+Escobar.+4%C2%B0+piso/@-34.3579655,-58.7965029,17z/data=!3m1!4b1?authuser=0&entry=ttu" target="_blank">Intendente Larghi 1390, Belén de Escobar. 4° piso</a></li> <li class="flex items-center gap-2 text-[#909395]"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#ED2B3C" d="M200 228h-60.28A263.7 263.7 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.7 263.7 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8M90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.77M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></path></svg> <span>Dirección taller: </span><a href="https://www.google.com.ar/maps/place/G%C3%BCiraldes,+B1625+Bel%C3%A9n+de+Escobar,+Provincia+de+Buenos+Aires/@-34.3671534,-58.812337,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb61e8fa1b0a1b:0x29c418c7734b293d!8m2!3d-34.3671534!4d-58.8097621!16s%2Fg%2F1tn02dsv?entry=ttu" target="_blank">Güiraldes 43, Belén de Escobar</a></li> </ul> </div> <!-- social links --> <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8"> <div class="flex items-center justify-center gap-2"> <a href="https://www.linkedin.com/company/baumotiv/" target="_blank"> <div class="text-prim hover:text-sec hover:scale-110 transition-all duration-500 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path></svg> </div> </a> <a href="https://www.instagram.com/baumotiv/" target="_blank"> <div class="text-prim hover:text-sec hover:scale-110 transition-all duration-500 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></path></svg> </div> </a> <a href="https://www.facebook.com/Baumotiv" target="_blank"> <div class="text-prim hover:text-sec hover:scale-110 transition-all duration-500 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor"></path></svg> </div> </a> </div> </div> </div> <div class="flex gap-4"> ${footerNav1.map((item) => renderTemplate`<a${addAttribute(item.itemLink, "href")} class="duration-300 font-medium ease-linear hover:text-sec transition-colors text-lg dark:text-gray-300 hover:dark:text-sec"> ${item.itemText} </a>`)} </div> </div> ` })} <!-- <div class='bg-gradient-to-tl from-box-bg py-2 relative'>
    <Container>
      <div
        class='flex justify-between items-center gap-6 md:text-lg text-heading-3'>
        <div>
          &copy; <span id='year'></span>
        </div>
        <div>
          <a
            href='https://maps.app.goo.gl/bMeuDcPHiPwxcfcp8'
            target='_blank'
            class='font-light text-sm'
            >Yerbal 42, Piso 8 Departamento B CABA</a
          >
        </div>
      </div>
    </Container>
  </div> --> </footer>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/elements/Footer.astro", void 0);

const $$Astro$d = createAstro();
const $$BtnLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-white";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10`, "class")}> ${text} </span> </a>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/shared/BtnLink.astro", void 0);

const $$Astro$c = createAstro();
const $$Navitem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3"> ${text} </a> </li>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/shared/Navitem.astro", void 0);

const $$Astro$b = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navItems = [
    {
      href: "#",
      text: "Inicio"
    },
    {
      href: "#services",
      text: "Servicios"
    },
    {
      href: "#about-us",
      text: "Nosotros"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 animate-fade-in"> <div class="h-[48px] bg-ter mb-4 flex items-center justify-between px-[4vw]"> <div class="flex items-center justify-center gap-2"> <a href="https://www.linkedin.com/company/baumotiv/" target="_blank"> <div> <img src="/logo/linkeding.svg" alt="Ln" class="object-cover w-[1.45rem] hover:scale-105 transition-all duration-300"> </div> </a> <a href="https://www.instagram.com/baumotiv/" target="_blank"> <div> <img src="/logo/instagram.svg" alt="IG" class="object-cover w-[1.4rem] hover:scale-105 transition-all duration-300"> </div> </a> <a href="https://www.facebook.com/Baumotiv" target="_blank"> <div> <img src="/logo/facebook.svg" alt="F" class="object-cover w-[1.45rem] hover:scale-105 transition-all duration-300"> </div> </a> </div> <div class="flex items-center justify-center gap-x-1"> <img src="/icon/movil.svg" alt="011-2856-7186" class="object-cover w-[1.45rem] hover:scale-105 transition-all duration-300"> <span class="text-[1rem] text-white">011-2856-7186</span> </div> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <nav class="w-full flex justify-between gap-6 relative"> <!-- logo --> <div class="min-w-max inline-flex relative"> <a href="/" class="relative flex items-center gap-3"> <div class="relative overflow-hidden"> <img src="/logo/logo.png" alt="Baumotiv" class="object-cover w-[10rem]"> </div> </a> </div> <div data-nav-overlay aria-hidden="true" class="fixed hidden inset-0 lg:!hidden bg-box-bg bg-opacity-50 backdrop-filter backdrop-blur-xl"></div> <div data-navbar class="flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0"> <ul class="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center"> ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })} </ul> <div class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Contactanos", "href": "#cta", "className": "flex justify-center w-full sm:w-max", "variant": "primary" })} </div> </div> <div class="min-w-max flex items-center gap-x-3"> <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button data-toggle-nav data-open-nav="false" class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"> <span id="line1" class="w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line2" class="w-6 origin-center mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line3" class="w-6 mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> ` })} </header>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/elements/Navbar.astro", void 0);

const $$Astro$a = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="description" content="Somos un estudio de ingenier\xEDa y arquitectura especializado en el dise\xF1o, c\xE1lculo y proyecto de estructuras. Nuestro objetivo es resolver problemas de ingenier\xEDa atendiendo los aspectos t\xE9cnicos y econ\xF3micos de las obras acorde a las necesidades de cada cliente, ya que consideramos que una buena ingenier\xEDa es fundamental para que un proyecto resulte exitoso.\n      Trabajamos principalmente para constructoras y estudios, brindando servicios de ingenier\xEDa para proyectos de estructuras met\xE1licas y de hormig\xF3n. Nuestra amplia experiencia en este rubro, tambi\xE9n nos ha permitido desarrollar con \xE9xito m\xFAltiples proyectos de naves industriales y de log\xEDstica, desde las etapas de factibilidad hasta la culminaci\xF3n de la obra.\n      \n      Nuestra filosof\xEDa como estudio es cuidar a cada cliente mediante un trato directo y personalizado. Entendemos las obras como un proceso complejo, es por ello que acompa\xF1amos a nuestros clientes no solo en las etapas de dise\xF1o sino tambi\xE9n en las etapas de obra y fabricaci\xF3n.\n      \n      Priorizamos la formaci\xF3n profesional y permanente del equipo, lo que nos permite proponernos como una excelente alternativa en ingenier\xEDa estructural."><title>BAUMOTIV ', '</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">', "", '</head> <body class="overflow-hidden overflow-y-auto bg-body"> ', " ", " ", ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body>   </html> '])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 lg:pt-36"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col lg:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div id="default-carousel" class="relative w-full" data-carousel="slide"> <!-- Carousel wrapper --> <div class="relative h-56 overflow-hidden rounded-lg md:h-96"> <!-- Item 1 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/hero/banner-cons.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..."> </div> <!-- Item 2 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/hero/banner-ing.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..."> </div> <!-- Item 3 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/hero/banner.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..."> </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div>  ` })} </section>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/sections/Hero.astro", void 0);

const $$Astro$7 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-6xl text-ter"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/shared/Title.astro", void 0);

const $$Astro$6 = createAstro();
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Brands;
  const list = [
    "Portland",
    "Via Vento",
    "Vizora",
    "Sudamericana",
    "Dycasa",
    "VC. Muni Mor\xF3n",
    "Eparqs",
    "Ingalfa",
    "Cimtronic",
    "Maprin"
  ];
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-8" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Confían en nosotros ` })} </div> <div class="flex justify-center flex-wrap gap-4"> ${list.map((item) => renderTemplate`<div class=" p-4 "> <p class="text-4xl text-[#afb0b1] font-semibold ">${item}</p> </div>`)} </div> ` })} </section>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/sections/Brands.astro", void 0);

const $$Astro$5 = createAstro();
const $$Paragraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/shared/Paragraph.astro", void 0);

const $$Astro$4 = createAstro();
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl bg-gradient-to-t from-[#939496] to-[#d0d0d1] dark:from-gray-900 border border-box-border shadow-lg shadow-box-shadow relative overflow-hidden"> <div class="rounded-xl bg-sec/50 dark:bg-sec p-3 text-heading-1 w-max relative"> ${renderSlot($$result, $$slots["default"], renderTemplate`${unescapeHTML(icon)}`)} </div> <div class="mt-6 space-y-4 relative"> <h2 class="text-lg md:text-xl font-semibold text-black/70 dark:text-prim"> ${title} </h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })} </div> </div>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/cards/Service.astro", void 0);

const services = [
  {
    title: "INGENIERÍA",
    description: "Brindamos servicios de ingeniería para proyectos de estructuras metálicas, de hormigón y de madera. Nuestra experiencia en estos rubros nos ha permitido desarrollar con éxito múltiples proyectos desde las etapas de factibilidad hasta la culminación de la obra.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4M8 9a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-4.5-7c-.3 0-.5.21-.5.5v3h-1V3s-2.25.86-2.25 3.75c0 0-.75.14-.75 1.25h10c-.05-1.11-.75-1.25-.75-1.25C16.25 3.86 14 3 14 3v2.5h-1v-3c0-.29-.19-.5-.5-.5z"/></svg>`
  },
  {
    title: "ESTRUCTURAS METÁLICAS",
    description: "Realizamos proyectos de: Naves industriales de alma llena y reticuladas, entrepisos metálicos, steelframe, parrales de cañerías, carteles publicitarios, infraestructura para telecomunicaciones, refuerzos de estructuras metálicas y modelado BIM de estructuras.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16" {...props}><path fill="currentColor" fill-rule="evenodd" d="M14.217 15.949c.531.533.859.154 1.295-.281c.436-.435.814-.764.283-1.296c0 0-7.402-7.395-9.23-9.218L4.987 6.731zM2.048 8.015l.614-.604s-.271-.743.126-1.099s1.067-.136 1.067-.136L6.01 4.093s-.151-1.083.049-1.283c.2-.2 2.435-1.289 2.651-1.507L8.251.844s-3.128.376-3.467.714c-.199.2-1.688 1.704-2.75 2.766c0 0 .266.759-.084 1.109c-.351.351-1.141.1-1.141.1l-.623.622c-.263.265-.108.637.215.96l.686.686c.325.324.698.477.961.214m9.685-1.5c1.077.511 2.428.354 3.322-.54c.69-.69.964-1.639.817-2.531l-1.521 1.519l-1.294.321l-1.462-1.442l.343-1.337l1.507-1.488c-.893-.146-1.902.065-2.592.756c-.895.895-1.017 2.279-.506 3.357l-.994.993l1.388 1.385zm-4.301 4.604L5.927 9.615l-1.308 1.309a.822.822 0 0 0-.181.266c-.077-.03-.12-.031-.147-.02a2.504 2.504 0 0 0-.791-.139c-1.381 0-2.5 1.105-2.5 2.469c0 1.364 1.119 2.469 2.5 2.469S6 14.864 6 13.5c0-.283-.059-.551-.146-.804c-.005-.024-.006-.046-.02-.081a.853.853 0 0 0 .288-.188zM3.5 14.938c-.812 0-1.469-.643-1.469-1.438c0-.795.656-1.438 1.469-1.438c.813 0 1.469.643 1.469 1.438c0 .795-.657 1.438-1.469 1.438"/></svg>
       `
  },
  {
    title: "ESTRUCTURAS DE HORMIGÓN ARMADO",
    description: "orres de viviendas y oficinas, centros comerciales, viviendas, obras de saneamiento, tanques, silos, pisos industriales, pavimentos, diseño de fundaciones y refuerzos por cambios de uso y modelado BIM.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M172.416 41.021c-39.47.351-78.748 5.972-114.732 14.827c10.094 15.264 27.17 26.95 46.898 34.865c23.65 9.488 50.72 13.333 70.959 12.299c20.826-1.065 47.765-9.524 68.764-21.008c10.5-5.742 19.542-12.245 25.652-18.5c3.24-3.317 5.517-6.486 6.99-9.316c-30.874-8.778-63.696-12.865-96.635-13.167a438 438 0 0 0-7.896 0m111.541 33.877c-.372.396-.743.793-1.125 1.184c-7.888 8.075-18.231 15.34-29.889 21.715c-23.314 12.75-51.772 21.928-76.484 23.191c-23.227 1.188-52.158-2.967-78.58-13.568c-18.094-7.26-35.189-17.651-47.762-31.873C33.802 206.86 19.325 353.169 39.992 473.012c19.598 6.163 40.992 10.825 63.008 13.95V423h64v-64h109.957c-.024-3.013.152-6.295.486-9.97c.96-10.546 3.217-24.018 6.338-39.007c5.408-25.967 13.412-56.318 21.948-82.152c-4.95-49.133-12.133-100.876-21.772-152.973m152.682.59c-.909.002-1.93.107-2.87.137l-56.949 71.28c7.692 2.471 14.598 7.387 19.639 14.052l55.268-66.045c.901-2.06.935-7.813-2.174-12.293c-2.433-3.505-5.967-6.446-12.051-7.092q-.407-.041-.863-.039m-69.506 87.742a32 32 0 0 0-4.278 6.745c-3.85 8.26-4.52 17.07-3.816 24.61l.022.224l3.507 24.408a201 201 0 0 0-5.46.586c-11.149 1.362-23.392 3.885-31.805 6.601c-9.124 26.31-18.124 59.552-23.9 87.29c-3.034 14.562-5.182 27.607-6.034 36.966c-.268 2.945-.188 4.657-.203 6.729c2.338-1.204 5.048-2.731 8.326-4.871c9.674-6.317 22.502-16.22 36.13-27.565c25.535-21.259 53.706-47.399 71.997-65.816c-2.982-7.624-8.213-16.243-13.951-23.516c-6.682-8.469-14.49-15.144-16.53-16.408c-.057.008-.262-.026-.392-.04l-3.783-26.323c-.448-4.91.237-11.044 2.207-15.27c.975-2.092 2.012-3.727 3.46-4.951c-3.847-5.382-9.725-8.894-15.497-9.399M377 313v46h110v-46zm-192 64v46h110v-46zm128 0v46h110v-46zm128 0v46h46v-46zm-320 64v46h110v-46zm128 0v46h110v-46zm128 0v46h110v-46z"/></svg>`
  },
  {
    title: "PROYECTO",
    description: "Nuestra amplia experiencia en el campo de la ingeniería estructural nos permite desarrollar con éxito varios proyectos industriales y de logística, desde los esquemas preliminares, pasando por las etapas de anteproyecto, licitación y construcción de múltiples obras.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.5 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-1-2.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M11 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0M4 4.25A2.25 2.25 0 0 1 6.25 2h8a2.25 2.25 0 0 1 2.25 2.25V9.5h1.253a2.25 2.25 0 0 1 2.25 2.25v1.353c-.44.123-.835.354-1.155.661a3.2 3.2 0 0 0-.345-.742v-1.273a.75.75 0 0 0-.75-.75H15.75a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75V20h5.502c.014.504.116 1.016.322 1.5H4.75a.75.75 0 0 1-.75-.75zm14 10.5a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m1.5 5.125c0 1.556-1.071 3.125-3.75 3.125S12 21.437 12 19.875C12 18.84 12.72 18 13.607 18h4.286c.887 0 1.607.84 1.607 1.875m1.25-2.375a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m-.252 2.375a4.06 4.06 0 0 1-.582 2.124l.088.001c2.143 0 3-1.098 3-2.187c0-.725-.575-1.313-1.286-1.313h-1.54c.208.424.32.9.32 1.375"/></svg>`
  },
  {
    title: "DIRECCIÓN DE OBRAS",
    description: "Estudios de factibilidad, anteproyectos, proyectos licitatorios, estimación de costos y análisis de presupuestos. Cronogramas de obras. Asesoramiento y consultoría para proyectos de arquitectura e ingeniería. Gerenciamiento y dirección de obras.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.749 3a3.25 3.25 0 0 1 3.25 3.25v4.762a3.3 3.3 0 0 0-1.5.22V8.5h-15v9.249c0 .966.784 1.75 1.75 1.75h5.291l-.02.076l-.356 1.423H6.25A3.25 3.25 0 0 1 3 17.748V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5h-11.5A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75m-4.552 14.07l5.901-5.901a2.286 2.286 0 0 1 3.233 3.232l-5.902 5.902a2.7 2.7 0 0 1-1.248.706l-1.83.458a1.087 1.087 0 0 1-1.318-1.319l.457-1.83c.118-.472.362-.903.707-1.248M9 15.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m-4.25-4a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m4.25 0a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"/></svg>`
  },
  {
    title: "CONSTRUCCIÓN",
    description: "Diseñamos, proyectamos y construimos obras de arquitectura e industriales. Para eso realizamos un trabajo comprometido con nuestros clientes, que consiste en la supervisión, y correcta ejecución de tu proyecto. Abarcando administración económica, compra de materiales y personal de trabajo. Nos encargamos de redactar el plan de obra en base a las leyes vigentes en cada campo, garantizando la calidad y seguridad a lo largo de todo el proceso constructivo",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 15.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m0-1.5c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M7 8L5 5H2v2h3.13L8 11.3V20h2l2.57-5h1.98c.7-1.19 1.95-2 3.45-2c.88 0 1.69.29 2.35.78L22 8zm2.39 11H9v-6.2l.87 1.31c.36.53.95.85 1.58.89z"/></svg>`
  }
];

const $$Astro$3 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services"> ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:sapce-y-12" }, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-6xl mx-auto space-y-4"> <div class="animate-pulsing animate-delay-500"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`SERVICIOS` })} </div> ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Contamos con una planta industrial de 600 m2 para la fabricación de estructuras metálicas. Procesamos acero laminado y fabricamos nuestros propios elementos en sección de alma llena. Estamos equipados con puente grúa, pantógrafo CNC (plasma y oxicorte), plegadora, guillotina, torno, fresadora y equipos para la fabricación de zinguerías, lo que nos permite afrontar desafíos técnicos de gran complejidad
` })} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${services.map((service) => {
    return renderTemplate`${renderComponent($$result2, "Service", $$Service, { "title": service.title, "description": service.description, "icon": service.icon })}`;
  })} </div> ` })} </section>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/sections/Services.astro", void 0);

const $$Astro$2 = createAstro();
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${maybeRenderHead()}<section id="about-us"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col  midmd:flex-row gap-10 lg:gap-12 " }, { "default": ($$result2) => renderTemplate` <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> <img${addAttribute("/images/direccion-obra.jpg", "src")} alt="Imagen. Somos el futuro de la comunicación" width="1240" height="1385" class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover object-ceneter lg:max-h-none md:max-h-96 shadow-md mt-8 md:mt-0"> </div> </div> <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Somos el <span class="text-sec font-bold">futuro</span> de la construcción. ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Somos un equipo de ingeniería con más de 15 años de experiencia en el diseño, proyecto y construcción de obras civiles y de arquitectura. Participamos en más de 250 proyectos en todo el país, tanto en el área de ingeniería estructural, construcción y dirección de obra. Nuestros clientes son instituciones gubernamentales, grandes empresas, desarrolladores inmobiliarios, profesionales de la construcción y clientes particulares
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-4" }, { "default": ($$result3) => renderTemplate`
Entendemos las obras como un proceso complejo, es por ello que acompañamos a nuestros clientes no solo en las etapas de diseño, sino que también en las etapas de obra y fabricación. Enfocamos todo nuestro esfuerzo en realizar diseños que tengan un equilibrio entre el ahorro de materiales y la simplicidad constructiva, y nos caracterizamos por interiorizarnos en los procesos constructivos específicos de cada obra, por lo que adaptamos los diseños según los requerimientos y formas de trabajo solicitadas.
` })} <!-- <div
        class='pt-8 grid grid-cols-2 items-stretch gap-4 max-w-3xl md:max-w-[none]'>
        <Info
          description='Con herramientas avanzadas de relevamiento, podemos crear planes personalizados que se ajusten perfectamente a las necesidades de la audiencia'
          title='Ejecución a medida'>
          <span slot='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-4 h-4 sm:w-5 sm:h-5'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              ></path>
            </svg>
          </span>
        </Info>
        <Info
          description='Con amplia experiencia en centros de contacto, validamos datos, fortalecemos infraestructura y adoptamos tecnologías digitales para garantizar resultados.'
          title='Resultados comprobados'>
          <span slot='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-4 h-4 sm:w-5 sm:h-5'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
              ></path>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
            </svg>
          </span>
        </Info>
      </div> --> </div> ` })} </section>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/sections/AboutUs.astro", void 0);

const $$Astro$1 = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead()}<section id="features"> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Nuestra <span class="text-sec font-bold">Historia</span> ` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
SJoaquín comenzó este proyecto como profesional recién recibido de la
        Universidad Tecnológica Nacional, trabajando de forma independiente para
        grandes empresas de la construcción. Poco a poco la calidad técnica de
        sus trabajos lo llevaron a enfrentar desafíos cada vez más importantes y
        surgió la necesidad de ampliarse al campo de la construcción. Es allí
        que sumó a sus socios Victor y Mario con quienes pudo abarcar la
        dirección de obra y fabricación de estructuras. A la par del desarrollo
        humano también la empresa se fue ampliando y creciendo, primero con sede
        en Martinez para luego tener sus oficinas propias en Belén de Escobar.
        El taller de fabricación también se sitúa en esta localidad con un plan
        integral de ampliación año a año
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-4" }, { "default": ($$result3) => renderTemplate`
Nuestra filosofía como estudio es cuidar a cada cliente mediante un
        trato directo y personalizado. Priorizamos la formación profesional y
        permanente del equipo, lo que nos permite proponernos como una excelente
        alternativa en ingeniería estructural. Realizamos ingeniería acorde a la
        necesidad del cliente, desde esquemas conceptuales hasta ingeniería de
        detalle para la fabricación. Entendemos la obra como un todo, desde las
        ideas preliminares hasta la finalización de las obras. Por ello,
        acompañamos al cliente durante la fabricación apoyando al jefe de
        planta, despejando consultas del proyecto y ayudando a optimizar los
        procesos constructivos.
` })} </div> <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0 lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto"> <div class="w-full h-80 sm:h-96 midmd:h-full relative"> <img${addAttribute("/images/historia.jpeg", "src")} alt="Impulzá tus ventas con un equipo de experiencia comprobada." width="800" height="1385" class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover object-center lg:max-h-none max-h-96 shadow-md"> </div> </div> ` })} </section>`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/sections/Features.astro", void 0);

const Spinner = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(45 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.125s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(90 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.25s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(135 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.375s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(180 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.5s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(225 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.625s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(270 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.75s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "2",
            r: "0",
            fill: "currentColor",
            transform: "rotate(315 12 12)",
            children: /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0.875s",
                calcMode: "spline",
                dur: "1s",
                keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
                repeatCount: "indefinite",
                values: "0;2;0;0"
              }
            )
          }
        )
      ]
    }
  );
};

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData
    });
    console.log(response);
    const data = await response.json();
    setIsLoading(false);
    if (data.message) {
      setResponseMessage(data.message);
    }
    e.target.reset();
  }
  useEffect(() => {
    let timer;
    if (responseMessage) {
      timer = setTimeout(() => {
        setResponseMessage("");
      }, 3e3);
    }
    return () => clearTimeout(timer);
  }, [responseMessage]);
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "cta",
      className: "pb-20 mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5",
      children: /* @__PURE__ */ jsx("div", { className: "w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-ter/20 dark:from-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-xl md:max-w-5xl relative", children: [
        /* @__PURE__ */ jsx(
          "h6",
          {
            className: "text-3xl/tight sm:text-4xl/tight md:text-5xl/tight\n           font-bold text-heading-1 text-center mb-12 mt-1 text-ter",
            children: "Ponte en contacto con nosotros."
          }
        ),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: submit,
            className: "max-w-md mx-auto",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 md:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-4 group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                      placeholder: ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "name",
                      className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                      children: "Nombre"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-1 group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "surname",
                      name: "surname",
                      className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                      placeholder: ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "surname",
                      className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                      children: "Apellido"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    placeholder: ""
                  }
                ),
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "Correo electronico"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 md:gap-x-6 mb-5", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-1 group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                      placeholder: ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "phone",
                      className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                      children: "Teléfono"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-1 group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "company",
                      name: "company",
                      className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                      placeholder: ""
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "company",
                      className: "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                      children: "Nombre de tu empresa"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "relative z-0 w-full mb-5 group", children: /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "date",
                  name: "date",
                  className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "¿En qué momento podemos contactarte?" }),
                    /* @__PURE__ */ jsx("option", { value: "completo", children: "En cualquier momento del día" }),
                    /* @__PURE__ */ jsx("option", { value: "mañana", children: "Por la mañana (de 9 a 12 hs)" }),
                    /* @__PURE__ */ jsx("option", { value: "tarde", children: "Por la tarde (de 14 a 18 hs)" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "relative z-0 w-full mb-5 group", children: /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "contact",
                  name: "contact",
                  className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500  focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "¿Por qué medio preferís que te contactemos?" }),
                    /* @__PURE__ */ jsx("option", { value: "indestinto", children: "Es indestinto" }),
                    /* @__PURE__ */ jsx("option", { value: "email", children: "Correo electrónico" }),
                    /* @__PURE__ */ jsx("option", { value: "telefono", children: "Llamado telefónico" }),
                    /* @__PURE__ */ jsx("option", { value: "whatsapp", children: "Whatsapp" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-0 w-full mb-5 group", children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "",
                    id: "message",
                    className: "text-sm text-gray-900 dark:text-white ",
                    children: "Dejanos tu consulta"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    className: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ",
                  children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4", children: [
                    " ",
                    /* @__PURE__ */ jsx("p", { children: "Enviando" }),
                    " ",
                    /* @__PURE__ */ jsx(Spinner, {})
                  ] }) : /* @__PURE__ */ jsx("p", { children: "Consultar" })
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center items-center h-[3rem]", children: responseMessage && /* @__PURE__ */ jsx(
                "p",
                {
                  className: `response-message ${responseMessage.includes("Faltan campos requeridos") ? "bg-red-500 min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 rounded-md text-white text-center animate-fade-in" : "bg-green-500 min-w-[15rem] w-[20rem] max-w-[20rem]  px-5 py-2.5 rounded-md text-white text-center animate-fade-in"}`,
                  children: responseMessage
                }
              ) })
            ]
          }
        )
      ] }) })
    }
  );
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden animate-fade-in"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Form", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/components/react/Form.tsx", "client:component-export": "Form" })} </main> ` })}`;
}, "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/pages/index.astro", void 0);

const $$file = "/Users/madez/Documents/work/baumotiv/spa-baumotiv/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
