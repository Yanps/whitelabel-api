import { Whitelabel } from './shared/whitelabel';


export const WHITELABELS: any = {
    0: {
        id: 0,
        name: "suaigreja2",
        appId: "br.com.inchurch.testdrive",
        host: "suaigreja2.inchurch.com.br",
        imagesPath: "./assets/suaigreja2/images/",
        googleMapskey: "AIzaSyDqNWro82Is5lemYAoPNXvSsCH4qLG1Zqs",
        recaptchaKey: "6Lee8ekUAAAAAHo85_Fqq85yG_fD3EAQDya0Y6pY",
        facebookId: "860481957833913",
        mainColor: "#00112f",
        textColor: "#00112f",
        isMaster: false,
        isApp: false,
        placeholderImage: "./assets/suaigreja2/images/logo-placeholder.png",
        meta: {
            keywords: "Igreja, Deus, Senhor, Jesus Cristo, Espírito Santo, Bíblia, cristianismo, salvação, evangelismo, comunidade",
            title: "Site da Igreja",
            description: "Site modelo da plataforma inChurch. Totalmente integrado as funcionalidade do seu aplicativo.",
            name: "Site da Igreja"
        },
        routes: {
            preaches      : "palavras",
            news          : "noticias",
            readingPlans  : "planos-de-leitura", 
            downloads     : "para-baixar",
            live          : "ao-vivo",
            events        : "eventos",
            smallGroups   : "grupos",
            subscriptions : "assinaturas",
            prayRequest   : "pedidos-de-oracao",
            donations     : "doacoes",
            business      : "anuncios-e-cupons",
            contact       : "fale-conosco",
            findUs        : "onde-nos-encontrar",
            mybusiness    : "meus-anuncios",
            resume        : "curriculos",
            myResumes     : "meu-curriculo",
            page          : "pagina",
            myProfile     : "meu-perfil"
        }

    }
};

export const NAVIGATIONS = {
    0: {
        id: 0,
        whitelabelId: 0,
        whitelabel: 'suaigreja2',
        navigation: [
            {
                id: "content",
                title: "navigation.content.title",
                translate: "navigation.content.label",
                type: "submenu",
                protected: false,
                children: [
                    {
                        id: "preaches",
                        title: "navigation.preaches.title",
                        translate: "navigation.preaches.label",
                        type: "single",
                        protected: false,
                        url: "palavras"
                    },
                    {
                        id: "news",
                        title: "navigation.news.title",
                        translate: "navigation.news.label",
                        type: "single",
                        protected: false,
                        url: "noticias"
                    },
                    {
                        id: "reading-plans",
                        title: "navigation.reading-plans.title",
                        translate: "navigation.reading-plans.label",
                        type: "single",
                        protected: false,
                        url: "planos-de-leitura"
                    },
                    {
                        id: "downloads",
                        title: "navigation.downloads.title",
                        translate: "navigation.downloads.label",
                        type: "single",
                        protected: false,
                        url: "downloads"
                    }  
                ]
            },
            {
                id: "live",
                title: "navigation.live.title",
                translate: "navigation.live.label",
                type: "live",
                url: "ao-vivo",
                protected: false
            },
            {
                id: "participate",
                title: "navigation.participate.title",
                translate: "navigation.participate.label",
                type: "submenu",
                protected: false,
                children: [
                    {
                        id: "events",
                        title: "navigation.events.title",
                        translate: "navigation.events.label",
                        type: "single",
                        protected: false,
                        url: "eventos"
                    },
                    {
                        id: "small-groups",
                        title: "navigation.small-groups.title",
                        translate: "navigation.small-groups.label",
                        type: "single",
                        protected: false,
                        url: "grupos"
                    },
                    {
                        id: "subscriptions",
                        title: "navigation.subscriptions.title",
                        translate: "navigation.subscriptions.label",
                        type: "single",
                        protected: false,
                        url: "assinaturas"
                    },
                    {
                        id: "pray-request",
                        title: "navigation.pray-request.title",
                        translate: "navigation.pray-request.label",
                        type: "single",
                        protected: false,
                        url: "pedidos-de-oracao"
                    }  
                ]
            },
            {
                id: "donations",
                title: "navigation.donations.title",
                translate: "navigation.donations.label",
                type: "single",
                protected: false,
                url: "doacoes"
            },
            {
                id: "business",
                title: "navigation.business.title",
                translate: "navigation.business.label",
                type: "submenu",
                protected: false,
                children: [
                    {
                        
                        id: "advs-cupons",
                        title: "navigation.advs-cupons.title",
                        translate: "navigation.advs-cupons.label",
                        type: "single",
                        protected: false,
                        url: "anuncios-e-cupons"
                    },
                    {
                        id: "resume",
                        title: "navigation.resume.title",
                        translate: "navigation.resume.label",
                        type: "single",
                        protected: false,
                        url: "curriculos"
                    }
                ]
            },
            {
                id: "contact",
                title: "navigation.contact.title",
                translate: "navigation.contact.label",
                type: "submenu",
                protected: false,
                children: [        
                    {
                        id: "contact-us",
                        title: "navigation.contact-us.title",
                        translate: "navigation.contact-us.label",
                        type: "single",
                        protected: false,
                        url: "fale-conosco"
                    },
                    {
                        id: "find-us",
                        title: "navigation.find-us.title",
                        translate: "navigation.find-us.label",
                        type: "single",
                        protected: false,
                        url: "onde-nos-encontrar"
                    }
                ]
            },
            {
                id: "profile",
                title: null,
                translate: null,
                profile: true,
                type: "profile",
                protected: true,
                children: [
                    {
                        id: "my-profile",
                        title: "navigation.profile.my-profile.label",
                        translate: "navigation.profile.my-profile.label",
                        type: "single",
                        url: "meu-perfil",
                        protected: true
                    },
                    {
                        id: "my-tickets",
                        title: "navigation.profile.my-tickets.label",
                        translate: "navigation.profile.my-tickets.label",
                        type: "single",
                        url: "eventos/meus-tickets",
                        protected: true
                    },
                    {
                        id: "my-donations",
                        title: "navigation.profile.my-donations.label",
                        translate: "navigation.profile.my-donations.label",
                        type: "single",
                        url: "doacoes/minhas-doacoes",
                        protected: true
                    },
                    {
                        id: "my-ads",
                        title: "navigation.profile.my-ads.title",
                        translate: "navigation.profile.my-ads.label",
                        type: "single",
                        protected: true,
                        url: "anuncios-e-cupons/meus-anuncios"
                    },  
                    {
                        id: "my-resumes",
                        title: "navigation.profile.my-resume.title",
                        translate: "navigation.profile.my-resume.label",
                        type: "single",
                        protected: true,
                        url: "curriculos/meus-curriculos"
                    },        
                    {
                        id: "logout",
                        title: "navigation.profile.logout.label",
                        translate: "navigation.profile.logout.label",
                        type: "logout",
                        protected: true
                    }
                ]
            }
        ]
    }
};

export const COMPONENTS = {
    0: {
        id: 0,
        whitelabelId: 0,
        whitelabel: 'suaigreja2',
        components: {
            header: {
                topbar: true,
                findUs: true,
                radio: true,
                isMega: false,
                breakpoint: 1240,
                hasMenuContainer: false,
                hasTopbarLogo: false,
                hasSelectChurch: true,
                hasLogin: true,
                entry: {
                    title: "",
                    subtitle: "",
                    backgroundBlendMode: "normal",
                    show: true,
                    backgroundImage: "./assets/suaigreja2/images/background.jpg",
                    img: "./assets/suaigreja2/images/logo-big.png"
                },
                socialMedia: [
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/facebook.svg",
                        alt: "facebook"
                    },
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/instagram.svg",
                        alt: "instagram"
                    },
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/youtube.svg",
                        alt: "youtube"
                    },
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/spotify.svg",
                        alt: "spotify"
                    },
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/soundcloud.svg",
                        alt: "soundcloud"
                    },
                    {
                        link: null,
                        image: "./assets/suaigreja2/images/twitter.svg",
                        alt: "twitter"
                    }
                ]
            },
            footer: {
                whatsapp: false,
                type: "column",
                logo: "./assets/suaigreja2/images/logo.png",
                navigation: [
                    {
                        group: [
                            {
                                id: "preaches",
                                title: "navigation.preaches.title",
                                translate: "navigation.preaches.label",
                                url: "/palavras" 
                            },
                            {
                                id: "news",
                                title: "navigation.news.title",
                                translate: "navigation.news.label",
                                url: "/noticias"
                            },
                            {
                                id: "reading-plans",
                                title: "navigation.reading-plans.title",
                                translate: "navigation.reading-plans.label",
                                url: "/planos-de-leitura"
                            },
                            {
                                id: "live",
                                title: "navigation.live.title",
                                translate: "navigation.live.label",
                                url: "/ao-vivo"
                            }
                        ]
                    },
                    {
                        group: [
                            {
                                id: "events",
                                title: "navigation.events.title",
                                translate: "navigation.events.label",
                                url: "/eventos"
                            },
                            {
                                id: "small-groups",
                                title: "navigation.small-groups.title",
                                translate: "navigation.small-groups.label",
                                url: "/grupos"
                            },
                            {
                                id: "subscriptions",
                                title: "navigation.subscriptions.title",
                                translate: "navigation.subscriptions.label",
                                url: "/assinaturas"
                            },
                            {
                                id: "pray-request",
                                title: "navigation.pray-request.title",
                                translate: "navigation.pray-request.label",
                                url: "/pedidos-de-oracao"
                            }                 
                        ]
                    },
                    {
                        group: [
                            {
                                id: "business",
                                title: "navigation.business.title",
                                translate: "navigation.business.label",
                                url: "/anuncios-e-cupons"
                            },
                            {
                                id: "resume",
                                title: "navigation.resume.title",
                                translate: "navigation.resume.label",
                                url: "/curriculos"
                            },
                            {
                                id: "contact",
                                title: "navigation.contact-us.title",
                                translate: "navigation.contact-us.label",
                                url: "/fale-conosco"
                            },
                            {
                                id: "find-us",
                                title: "navigation.find-us.title",
                                translate: "navigation.find-us.label",
                                url: "/onde-nos-encontrar"
                            }
                        ]
                    }
                ],
                socialMedia: [
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/facebook.svg",
                        alt: "facebook"
                    },
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/instagram.svg",
                        alt: "instagram"
                    },
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/youtube.svg",
                        alt: "youtube"
                    },
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/spotify.svg",
                        alt: "spotify"
                    },
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/soundcloud.svg",
                        alt: "sundcloud"
                    },
                    {
                        link: "",
                        image: "./assets/suaigreja2/images/twitter.svg",
                        alt: "twitter"
                    }
                ]
            },
            banner: {
                type: "none"
            },
            home: {
                banner : {
                    show: true,
                    order: 0,
                    direction: "horizontal",
                    slidesPerView: 1,
                    keyboard: true,
                    mousewheel: false,
                    scrollbar: false,
                    navigation: false,
                    grabCursor: true,
                    type: "bullets",
                    el: ".swiper-pagination"
                },
                aboutUs : {
                    show: true,
                    order: 1,
                    type: "social",
                    img1: "./assets/suaigreja2/images/about-us.jpg"
                },
                register: {
                    show: true,
                    order: 2,
                    type: "register-background",
                    img: "./assets/suaigreja2/images/register-bg.jpg"
                },
                preaches: {
                    show: true,
                    order: 3,
                    type: "one-alt",
                    hideText: true,
                    limit: 3
                },
                events: {
                    show: true,
                    order: 4,
                    type: "events-row",
                    limit: 3,
                    hideText: true
                },
                donations:  {
                    show: true,
                    order: 5,
                    type: "donations-background",
                    img1: "./assets/suaigreja2/images/donations-bg.jpg"
                }, 
                news: {
                    show: true,
                    order: 6,
                    type: "news-column",
                    limit: 4,
                    hideDescription: true,
                    showCategory: true,
                    showDate: true,
                    hideSummary: true
                },
                readingPlans: {
                    show: true,
                    order: 7,
                    type: "reading-card",
                    limit: 3
                },
                getApp: {
                    show: true,
                    order: 8,
                    type: "get-app-icons",
                    android_link: "https://play.google.com/store/apps/details?id=br.com.inchurch.sitedaigreja",
                    ios_link: "/",
                    android_img: "./assets/suaigreja2/images/download-android.png",
                    ios_img: "./assets/suaigreja2/images/download-ios.png",
                    img1: "./assets/suaigreja2/images/get-app.png"
                }, 
                business: {
                    show: true,
                    order: 1,
                    type: "business-column"
                },
                video: {
                    show: true
                },
                findUs: {
                    show: true
                },
                live:{
                    show: true,
                    type: "live",                
                    showTitle: false,
                    order: 7
                },
                servicesSection:{
                    show: true
                }, 
                testimonials:{
                    show: true
                },        
                extraComponents: []
            }  
        }
    }
};



export function findAllWhitelabels(): Whitelabel[] {
    return Object.values(WHITELABELS);
}


export function findNavigationByWhitelabel(whitelabelId) {
    return Object.values(NAVIGATIONS).filter(nav => nav.whitelabelId == whitelabelId);
} 


export function findComponentsByWhitelabel(whitelabelId) {
    return Object.values(COMPONENTS).filter(comp => comp.whitelabelId == whitelabelId);
}


