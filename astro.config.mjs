import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import astroExpressiveCode from 'astro-expressive-code';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'HUMPRO',
    defaultLocale: 'id',
    locales: {
      en: {
        label: 'English',
      },
      id: {
        label: 'Bahasa',
        lang: 'id'
      }
    },
    logo: {
      light: '/src/assets/mms-logo-lite.svg',
      dark: '/src/assets/mms-logo-dark.svg'
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Pendahuluan',
      translations: {
        en: 'Introduction'
      },
      items: [
        {
          label: 'Latar Belakang',
          link: '/pendahuluan/latarbelakang/',
          translations: {
            en: 'Background'
          }
        },
        {
          label: 'Pengertian',
          link: '/pendahuluan/pengertian/',
          translations: {
            en: 'Definition'
          }
        }]
    }, {
      label: 'Antar Muka',
      translations: {
        en: 'Interface'
      },
      items: [
        {
          label: 'Akses Aplikasi',
          link: '/antarmuka/akses/',
          translations: {
            en: 'App Access'
          }
        }, {
          label: 'Halaman Labuh',
          link: '/antarmuka/landingpage/',
          translations: {
            en: 'Landing Page'
          }
        }, {
          label: 'Halaman Masuk',
          link: '/antarmuka/loginpage/',
          translations: {
            en: 'Login Page'
          }
        }, {
          label: 'Daftar Menu',
          link: '/antarmuka/menu/',
          translations: {
            en: 'Menu'
          }
        }]
    }, {
      label: 'Hubungkan Aset',
      translations: {
        en: 'Connecting Assets'
      },
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Ringkasan',
          link: '/medsos/assetoverview/',
          translations: {
            en: 'Overview'
          }
        }, {
          label: 'Facebook',
          link: '/medsos/koneksi-fb/'
        }, {
          label: 'Instagram',
          link: '/medsos/koneksi-ig/'
        }, {
          label: 'X (Twitter)',
          link: '/medsos/koneksi-x/'
        }, {
          label: 'Tiktok',
          link: '/medsos/koneksi-tt/'
        }, {
          label: 'Youtube',
          link: '/medsos/koneksi-yt/'
        }]
    }, {
      label: 'Laporkan Kegiatan',
      translations: {
        en: 'Report Activity'
      },
      autogenerate: {
        directory: 'kegiatan'
      }
    }, {
      label: 'Dashboard',
      autogenerate: {
        directory: 'reference'
      }
    }],
    customCss: process.env.NO_GRADIENTS ? ['./src/styles/_global.css'] : ['./src/styles/landing.css', './src/styles/_global.css'],
    // customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  }), astroExpressiveCode(), mdx()]
});