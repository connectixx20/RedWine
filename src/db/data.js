export const quickLinks = [
    {
        name: "Home",
        url: ""
    },
    {
        name: "About",
        url: "about"
    },
    {
        name: "Influencer",
        url: "influencer"
    },
    {
        name: "Contact Us",
        url: "contact"
    },
    {
        name: "Services",
        url: "services"
    },
]
 export const influencerLinks = [
    {
        name: "Instagram",
        url: "instagram"
    },
    {
        name: "Facebook",
        url: "facebook"
    },
    {
        name: "Linkedin",
        url: "linkedin"
    },
    {
        name: "Youtube",
        url: "youtube"
    },
]
export const serviceLinks = [
    {
        name: "Social Media Marketing",
        url: "social"
    },
    {
        name: "Youtube Marketing",
        url: "youtube"
    },
    {
        name: "Software Development",
        url: "software"
    },
]

export const links = [
    {
        id: 0,
        name: "About",
        redirect: "about"
    },
    {
        id: 1,
        name: "Influencer",
        redirect: "influencer",
        isSubmenu: true,
        className: "submenu1",
        subLink: [
            {
                mame: "Linkedin",
                redirect: "influencer/linkedin"
            },
            {
                mame: "Facebook",
                redirect: "influencer/facebook"
            },
            {
                mame: "Instagram",
                redirect: "influencer/instagram"
            },
            {
                mame: "Youtube",
                redirect: "influencer/youtube"
            },
        ]
    },
    {
        id: 2,
        name: "Contact",
        redirect: "contact"
    },
    // {
    //     id: 3,
    //     name: "Register",
    //     redirect: "register"
    // },
    {
        id: 3,
        name: "Services",
        redirect: "Services",
        isSubmenu: true,
        className: "submenu2",
        subLink: [
            {
                mame: "Social Media Marketing",
                redirect: "services/social"
            },
            {
                mame: "Youtube Marketing",
                redirect: "services/youtube"
            },
            {
                mame: "Software Development",
                redirect: "services/software"
            },

        ]
    },
]