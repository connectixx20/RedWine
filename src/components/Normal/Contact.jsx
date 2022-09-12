import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useForm } from "react-hook-form"

const Contact = () => {
    const { winWidth } = useSelector((state) => state.util)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmitHandler = (data) => {
        
    }


    function isRequiredError(name) {
        if (errors[name]?.type === "required")
            return <p className='error'>Field Can&apos;t be Empty</p>
        else
            return null

    }


    return (
        <div className="redwine__contact">
            <div className="redwine__contact-upper">

            </div>
            <div className="outer">
                <form className="redwine__contact-form" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="title">
                        <Image src={"https://res.cloudinary.com/redwine/image/upload/v1662973727/5359861_oa4rhq.png"} width={winWidth < 600 ? 80 : 100} height={winWidth < 600 ? 80 : 100} objectFit="contain" />
                        <h1>Say Hello!</h1>
                    </div>
                    <div className="content">
                        <div className="content__row">
                            <div className="name item">
                                <p>Your Name*</p>
                                <input type="text" placeholder='Jhon Doe' {...register("name", { required: true })} />
                                {isRequiredError("name")}
                            </div>
                            <div className="email item">
                                <p>Your Name*</p>
                                <input type="email" placeholder='you@example.com' {...register("email", { required: true })} />
                                {isRequiredError("email")}
                            </div>
                        </div>
                        <div className="content__row">
                            <div className="company item">
                                <p>Phone No*</p>
                                <input type="number" placeholder='+91-xxxxx-xxxxx' {...register("phone", { required: true })} />
                                {isRequiredError("phone")}
                            </div>
                            <div className="state item">
                                <p>State*</p>
                                <input type="text" placeholder='Maharashtra' {...register("state", { required: true })} />
                                {isRequiredError("state")}
                            </div>
                        </div>
                        <div className="content__message item">
                            <p>Your Message*</p>
                            <textarea style={{ resize: "none", width: "100%" }} placeholder='Type your message...' rows="10" {...register("message", { required: true })} />
                            {isRequiredError("message")}
                        </div>
                        <div className="content__policy">
                            <p>By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your data to third parties</p>
                        </div>
                    </div>
                    <div className="outer__shell">
                        <motion.button className="submit" type="submit" whileTap={{ scale: .97 }}>
                            <h3>Submit</h3>
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact