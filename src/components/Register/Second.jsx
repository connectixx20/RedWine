import { TextField, InputAdornment } from "@mui/material"
import Image from "next/image"
import FollowerCount from "./FollowerCount"
import { Checkbox } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react"

const genreList = [
    {
        id: 0,
        title: "Fashion & Beauty",
        value: "fashion"
    },
    {
        id: 1,
        title: "Entertainment & Comedy",
        value: "entertainment"
    },
    {
        id: 2,
        title: "Travel & Lifestyle",
        value: "travel"
    },
    {
        id: 3,
        title: "Technology",
        value: "technology"
    },
    {
        id: 4,
        title: "Motivational",
        value: "motivational"
    },
    {
        id: 5,
        title: "Gaming",
        value: "gaming"
    },
    {
        id: 6,
        title: "Sports & fitness",
        value: "sport"
    },
    {
        id: 7,
        title: "Business & Finance",
        value: "business"
    },
    {
        id: 8,
        title: "Dance & Music",
        value: "dance"
    },
    {
        id: 9,
        title: "Food",
        value: "food"
    },
]

const Second = () => {
    const { register, formState: { errors }, setValue, getValues } = useFormContext()
    const [genre, setGenre] = useState( getValues("genre") ? getValues("genre") : [])

    useEffect(() => {
        if (genre) {
            setValue("genre", genre)
        }
    }, [genre])

    const onGenreHandler = (data) => {
        if (genre.includes(data)) {
            const index = genre.indexOf(data)
            genre.splice(index, 1)
            setGenre(item => (item.filter((item) => item !== data)))
        } else {
            setGenre(item => ([...item, data]))
        }
    }

    function isElemExist(elem) {
        if (genre.includes(elem)){
            return true
        }
        else{
            return false
        }

    }
    
    
    return (
        <>
            <div className="handle item">
                <div className="title">
                    <h3>Link to Your Key Channels/Handles</h3>
                </div>
                <div className="content">
                    <div className="content__item">
                        <TextField
                            id="input-with-icon-textfield"
                            fullWidth
                            placeholder="Your Instragram ID"
                            {...register("handle.instagram")}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image src={"/icon/instagram.png"} width={35} height={35} objectFit="contain" />
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                        />
                    </div>
                    <div className="content__item">
                        <TextField
                            id="input-with-icon-textfield"
                            fullWidth
                            placeholder="Your Youtube ID"
                            {...register("handle.youtube")}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Image src={"/icon/youtube.png"} width={35} height={35} objectFit="contain" />
                                    </InputAdornment>
                                ),
                            }}

                            variant="filled"
                        />
                    </div>
                </div>
                {
                    (errors?.handle?.instagram?.type === "required" || errors?.handle?.youtube?.type === "required") && (
                        <p className="error">Atleast One Field Required</p>
                    )
                }
            </div>
            <div className="follower item">
                <div className="title" {...register("follower", { required: true })}>
                    <h3>Follower / Subcriber Count</h3>
                </div>
                <div className="content">
                    <FollowerCount />
                </div>
                {
                    errors?.follower?.type === "required" && (
                        <div className="error">Please choose</div>
                    )
                }
            </div>
            <div className="genre item">
                <div className="title" {...register("genre", { required: true })}>
                    <h3>Genre</h3>
                </div>
                <div className="content">

                    {
                        genreList.map((item) => (
                            <div className="content__item" key={item.id}>
                                <Checkbox aria-label={item.title} onChange={() => onGenreHandler(item.value)} defaultChecked={isElemExist(item.value)} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    errors?.genre?.type === "required" && (
                        <div className="error">Please Select Atleast One</div>
                    )
                }
            </div>
        </>
    )
}

export default Second