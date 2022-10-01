import Image from "next/image"

const contentItem = [
    {
        id: 0,
        name: "Search Engine Promotion",
        content: "In the sense of ranking your website in the top 10 results on search engines, REDWINE DIGITAL has perfected the art of website promotion. <br /> You may receive full details on the procedures we use for website optimization by taking a look at our SEO Process page. With the help of our website promotion services, clients can be confident that their websites will receive high-quality traffic, enhancing their online visibility. One of the top organisations in India for website promotion, we serve both Indian and international clients.",
        img: "https://res.cloudinary.com/redwine/image/upload/v1664613800/Redwine/Mobile_browsers-pana_db7yjb.png"
    },
    {
        id: 1,
        name: "Social Media Optimization (SMO)",
        content: "An inventive strategy for reaching the right target audiences is to promote your website on social media platforms. Social media platforms assist you in understanding your prospects and eventually turning them into clients. The use of social media in brand building and brand promotion methods is also highly beneficial.",
        img: "https://res.cloudinary.com/redwine/image/upload/v1664613800/Redwine/Search-amico_hnov4y.png"
    },
    {
        id: 2,
        name: "Social Media Optimization (SMO)",
        content: "Website design is no longer regarded as a part-time endeavour for any company. <br /> A well-designed website with engaging content can help you boost sales, enhance brand recognition, and provide higher customer satisfaction. <br /> Today, every business or group needs a website. A well-designed website is essential since it conveys the authority and position of the business. A well-designed website can also assist businesses in lowering their cost of sales. This is achievable because websites are among the most reasonable, cost-effective, and accessible marketing tools, making them accessible to even tiny businesses.",
        img: "https://res.cloudinary.com/redwine/image/upload/v1664613799/Redwine/Website_Creator-cuate_ecdoxy.png"
    },
]

const Software = () => {

    return (
        <div className="redwine__service-software" id="software">
            <div className="title">
                <div className="title__text">
                    <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664613435/Redwine/app-development_bamvji.png"} width={50} height={50} />
                    <h1>Website Development</h1>
                </div>
                <p>We provide our clients with the following website promotion services.</p>
            </div>
            <div className="content">
                {
                    contentItem.map((item) => (
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
                <div className="content__item1">
                    <h2>How should I approach rebuilding my website?</h2>
                    <h4>You already have a website, but you want to update it to include new features, easier navigation, faster downloads, a better design, fresher content, flash animation, and other cutting-edge technologies. However, you must realize that website redesigning involves more technical know-how and comprehension of the issue than just developing a new website. This is important to know before making a final decision on any web redesign firm.</h4>
                    <h4>REDWINE DIGITAL is well-versed in SEO (web promotion), and we offer the redesign site the most advantages from your previous web URLs. Even though you had a fantastic website that seemed like a winner a few years ago, it can now appear drab, stale, and worn out. The ability to reposition a company’s brand or corporate image, reflect the growth the company has achieved, redo all the content, and have more high-quality text matter on the new site rather than outdated content are additional reasons why all growing organisations should think about redesigning their existing site. </h4>
                </div>
                <div className="content__item">
                    <div className="left">
                        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1664614101/Redwine/Website_designer-amico_pilwcg.png"} width={500} height={500} objectFit="contain" />
                    </div>
                    <div className="right">
                        <div className="right__title">
                            <h2>WE OFFER PROFESSIONAL SERVICES FOR WEB DESIGN</h2>
                        </div>
                        <div className="right__content">
                            Our website design services may assist in making your vision and goals a reality, whether you are looking for a straightforward WordPress website to do business online or a more sophisticated eCommerce website. To help you grow your business online, we can offer the best web design and development services. We provide services for developing websites like:
                            <br />
                            <br />
                            <h4>1.	WordPress Development  </h4>
                            <h4>2.	Responsive Web Design</h4>
                            <h4>3.	ECommerce </h4>
                            <h4>4.	Graphic Design </h4>
                            <h4>5.	SEO Backed Web Design </h4>
                            <h4>6.	Web Design And Development Process </h4>
                            <h4>7.	Marketing To Support Your Web Design</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Software