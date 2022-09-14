import Image from "next/image"
import {BsQuestionCircle} from "react-icons/bs"
import {BiCheckCircle} from "react-icons/bi"


const contentItem = [
    {
        id: 0,
        name: "SOCIAL MEDIA MANAGEMENT",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663147645/Redwine/Email_campaign-bro_ewmqzx.png",
        content: "vital component to using virtual entertainment stages for brand advancements is to guarantee that the substance that is pushed across is effective in passing on the message, fascinating to the crowd, and comprises of something beyond a source of inspiration. <br /><br /> We trust in making intelligent substance that stays with the crowd, adds worth and keeps them snared. We go above and beyond in making it look tastefully engaging too in light of the fact that that is one element that ought not be compromised upon. Remembering this, we handle the different virtual entertainment stages for brands and assist in making on the web personas that guarantee the sort of criticism you with deciding to accomplish."
    },
    {
        id: 1,
        name: "CONTENT PRODUCTION",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663147645/Redwine/Video_files-amico_sr4zmb.png",
        content: "Content production is the process of developing and creating visual or written assets, such as videos, eBooks, blog posts, whitepapers, or infographics. <br /></br /> To establish the foundation for successful content ideation, creation, distribution, and management, a content agency collaborates with businesses and other marketing-focused agencies. A content agency makes sure that your ideal communications make sense and are relevant to your target audience from beginning to end. <br /> <br /> Social media content production is the art of creating content for your social media channels. This content can consist of images, videos, copy, graphics and more."
    },
    {
        id: 2,
        name: "CONTENT CREATION ",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663147645/Redwine/Wall_post-amico_aenlrk.png",
        content: "In-house video production, editing and configuration group delivering customized imaginative resources upgraded for use on social, paid media, digital and then some !"
    },
    {
        id: 3,
        name: "BRAND BUILDING ",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663147645/Redwine/Social_ideas-bro_fzhuqc.png",
        content: "Brand building is the process that implies using direct advertising campaigns to boost brand awareness, promote a specific product, establish connections and provide value to the target audience. It increases customer satisfaction, customer loyalty, and brand recognition."
    },
    {
        id: 4,
        name: "Brand Production ",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663162852/Redwine/Manufacturing_Process-bro_omas4e.png",
        content: "Manufacturing branding is the process of projecting an image to customers of what your company stands for, and why it makes the products it does. This is not just a matter of explaining what you do. It’s about letting your customers know how passionate you are about making the finest quality products in your market."
    },
    {
        id: 5,
        name: "Grow Customer Recognition ",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663162852/Redwine/Customer_relationship_management-bro_f1itwz.png",
        content: "Become a strong manufacturing brand in your industry and you might well become synonymous with it. <br /><br /> That means that your brand becomes the number one thing that comes to mind when consumers think about the kind of product you sell."
    },
    {
        id: 6,
        name: "ONLINE REPUTATION MANAGEMENT SERVICES",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663162852/Redwine/Friendly_handshake-rafiki_abfp6u.png",
        content: "With our internet based standing administration, we attempt to keep up with your image name. We construct a computerized public Picture of your organization and paint your organization with positive client encounters. We advance positive audits through various channels and assemble trust and validity among with the clients. We utilize pertinent substance and catchphrases can improve the standing of your business."
    },
    {
        id: 7,
        name: "Digital Marketing Services",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663162853/Redwine/Ambassador-bro_llr9ou.png",
        content: "At Redwine Digital, we think it’s critical to comprehend your fundamental business model and how you define a successful company in order to provide digital marketing services that are specifically catered to your goals. We believe that the right strategy is the first step in any successful digital marketing campaign, and we will work with you to develop, test, and implement the strategy. <br /><br /> The whole range of digital marketing solutions are offered by digital marketing services in India. Our test model for branding an internet business achieves the ideal harmony between originality, practical implementation, and transparent online and offline communication. We recommend an integrated approach to digital marketing to provide your company the flexibility it needs to thrive in the cutthroat online marketplace of today."
    },
    {
        id: 8,
        name: "Digital Marketing ",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663162853/Redwine/Digital_lifestyle-bro_amooun.png",
        content: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel. Essentially, if a marketing campaign involves digital communication, it’s digital marketing. <br /><br /> There are as many specializations within digital marketing as there are ways of interacting using digital media. Here are a few key examples. Search engine optimization Search engine optimization, or SEO, is technically a marketing tool rather than a form of marketing in itself. The Balance defines it as “the art and science of making web pages attractive to search engines.” The “art and science” part of SEO is what’s most important. SEO is a science because it requires you to research and weigh different contributing factors to achieve the highest possible ranking. Today, the most important elements to consider when optimizing a web page include: Quality of content Level of user engagement Mobile-friendliness Number and quality of inbound links The strategic use of these factors makes SEO a science, but the unpredictability involved makes it an art."
    },
    {
        id: 9,
        name: "Search Engine Optimization",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663163609/Redwine/SEO-rafiki_niv9mb.png",
        content: "We accept Web optimization is vital for each brand from a drawn out manageable development viewpoint. A brilliant innovation structure, key substance and an exceptional effort technique = Web optimization Achievement. Our group of Search engine optimization specialists assist you with arriving"
    },
    {
        id: 10,
        name: "Creative Campaigns & Social Media Management",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663163609/Redwine/Marketing-cuate_oiuggu.png",
        content: "We assist you with building areas of strength for an and online impression on friendly channels. A compelling correspondence methodology combined with paid promoting assists us with accomplishing objectives like buzz creation, client commitment, lead age, web based business transformations and more."
    },
    {
        id: 11,
        name: "Digital Content Production",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663163609/Redwine/Video_files-cuate_y5p07x.png",
        content: "Wise successful narrating – is the substance that ‘works’. We determine buyer bits of knowledge premise research papers, reviews and previous encounters to make a compelling correspondence (as web journals, recordings, bullet point articles, text, illustrations, movement recordings, AR and sound substance, and so forth) among brands and clients."
    },
    {
        id: 12,
        name: "Strategy – Brand / Campaign / Content / Media",
        img: "https://res.cloudinary.com/redwine/image/upload/v1663163610/Redwine/Meeting-pana_ts5ppn.png",
        content: "We comprehend your objective market, contest and your item/administration contributions to convey areas of strength for a term system for you. We articulate a definite guide for our clients that adjusts them and their accomplices to the 10,000 foot view."
    },
]
const quesItem=[
    {
        id:0,
        content:"Are higher rankings of any value if people don’t recognize your brand?"
    },
    {
        id:1,
        content:"Do people mention yours as a great brand when compared to your major competitors?"
    },
    {
        id:2,
        content:"Are you promoting keywords in the domain name or promoting the brand story (as powerful brands such as Nike and Starbucks do so well)?"
    },
    {
        id:3,
        content:"Are people searching for the brand name on Google?"
    },
]

const tipsItem=[
    {
        id:0,
        name:"Research your target audience and your competitors."
    },
    {
        id:1,
        name:"Pick your focus and personality."
    },
    {
        id:2,
        name:"Choose your business name."
    },
    {
        id:3,
        name:"Write your slogan."
    },
    {
        id:4,
        name:"Choose the look of your brand (colors and font)."
    },
    {
        id:5,
        name:"Design your logo."
    },
    {
        id:6,
        name:"Apply your branding across your business and evolve it as you grow."
    },
]

const Social = () => {
    return (
        <div className="redwine__service-digital" id='social'>
            <div className="title">
                <h1>Digital Marketing</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque totam natus laudantium iusto quidem dicta magni eaque illo eius vel</p>
            </div>
            <div className="content">
                {
                    contentItem.slice(0,4).map((item) => (
                        <div className={`content__item ${(item.id + 1) % 2 === 0 ? "reverse" : ""}`} key={item.id}>
                            <div className="left">
                                <Image src={item.img} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="right">
                                <div className="right__title">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="right__content" dangerouslySetInnerHTML={{ __html: item.content }}> 
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="content__ques">
                    <div className="content__ques-title">
                        <h2>As a company you need to ask yourself:</h2>
                    </div>
                    <div className="content__ques-grid">
                        {
                            quesItem.map((item)=>(
                                <div className="item" key={item.id}>
                                    <BsQuestionCircle color="#961313" size={20} />
                                    <h3>{item.content}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="content__ques-title" style={{marginTop:"4rem"}}>
                        <h2>How to Build a Brand:</h2>
                    </div>
                    <div className="content__ques-grid">
                        {
                            tipsItem.map((item)=>(
                                <div className="item" key={item.id}>
                                    <BiCheckCircle color="green" size={20} />
                                    <h3>{item.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {
                    contentItem.slice(4).map((item) => (
                        <div className={`content__item ${(item.id + 1) % 2 !== 0 ? "reverse" : ""}`} key={item.id}>
                            <div className="left">
                                <Image src={item.img} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="right">
                                <div className="right__title">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="right__content" dangerouslySetInnerHTML={{ __html: item.content }}> 
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Social