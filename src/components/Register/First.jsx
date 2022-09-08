import { Tooltip, IconButton } from "@mui/material"
import Image from "next/image"
import { FaInfoCircle } from "react-icons/fa"
import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react"

const platformList = [
    {
        id: 0,
        name: "Instagram",
        icon: "/icon/instagram.png"
    },
    {
        id: 1,
        name: "Facebook",
        icon: "/icon/facebook.png"
    },
    {
        id: 2,
        name: "Youtube",
        icon: "/icon/youtube.png"
    },
    {
        id: 3,
        name: "Twitter",
        icon: "/icon/twitter.png"
    },
    {
        id: 4,
        name: "Snapchat",
        icon: "/icon/snapchat.png"
    },
    {
        id: 5,
        name: "LinkedIn",
        icon: "/icon/linkedin.png"
    },
]

const reasonList = [
    {
        id: 0,
        title: "Access to Brand Campaings",
        content: "Bringing your brands that your audience appreciates"
    },
    {
        id: 1,
        title: "Guidance for growth",
        content: "helping you with deciding what exactly your followers are looking for"
    },
]

const First = () => {
    const { register, formState: { errors }, setValue, getValues } = useFormContext()

    const [selectedPlatform, setSelectedPlatform] = useState(getValues("platform") ? getValues("platform") : [])
    const [reason, setReason] = useState(getValues("reason") ? getValues("reason") : [])



    const reasonSelectHandler = (item) => {

        const isItemAlreadyExists = reason.find((obj) => obj?.id === item?.id)
        if (isItemAlreadyExists) {
            setReason(reason.filter(obj => obj.id !== item.id))
        } else {
            setReason((obj) => [...obj, { id: item.id, title: item.title, content: item.content }])
        }

    }


    function isPlatformItemExist(id, arr) {
        const index = arr.find((item) => item.id === id)

        if (index) {
            return true
        } else {
            return false
        }
    }

    const platformSelectHandler = ({ id, name }) => {
        const isItemAlreadyExists = selectedPlatform.find((item) => item?.id === id)
        if (isItemAlreadyExists) {
            setSelectedPlatform(item => (item.filter((obj) => obj.id !== id)))
        } else {
            setSelectedPlatform([...selectedPlatform, { id, name }])

        }

    }


    useEffect(() => {
        setValue("platform", selectedPlatform)
        setValue("reason", reason)
    }, [selectedPlatform, reason])


    return (
        <>
            <div className="name item">
                <h3>Full Name</h3>
                <input type="text" placeholder="Your Full Name" {...register("name", { required: true })} />
                {
                    errors?.name?.type === "required" && (
                        <p className="error">Please Fill this field</p>
                    )
                }
            </div>
            <div className="platform item">
                <div className="title" {...register("platform", { required: true })}>
                    <h3>Select Influencer Marketing Platforms</h3>
                </div>
                <div className="content">
                    {
                        platformList.map((item) => (
                            <div className={`content__item ${isPlatformItemExist(item.id, selectedPlatform) ? "active" : "false"}`} onClick={() => platformSelectHandler({ id: item.id, name: item.name })} key={item.name}>
                                <Image src={item.icon} loading="eager" width={40} height={40} objectFit="contain" />
                            </div>
                        ))
                    }
                </div>
                {
                    errors?.platform?.type === "required" && (
                        <p className="error">Please Fill this field</p>
                    )
                }
            </div>
            <div className="reason item">
                <div className="title" {...register("reason", { required: true })}>
                    <h3>What Brings You Here ?</h3>
                </div>
                <div className="content">
                    {
                        reasonList.map((item) => (
                            <div className={`content__item ${isPlatformItemExist(item.id, reason) ? "active" : ""}`} key={item.title} onClick={() => reasonSelectHandler(item)}>
                                <div className="dot" />
                                <p>
                                    <Tooltip title={item.content} placement="top">
                                        <IconButton>
                                            <FaInfoCircle color="green" size={15} />
                                        </IconButton>
                                    </Tooltip>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
                {
                    errors?.reason?.type === "required" && (
                        <p className="error">Please Fill this field</p>
                    )
                }
            </div>
        </>
    )
}

export default First