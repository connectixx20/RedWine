import { useEffect, useState } from "react"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import { motion } from "framer-motion"
import { FormProvider, useForm } from "react-hook-form"
import { GiCancel } from "react-icons/gi"
import { useDispatch } from "react-redux"
import { setShowRegister } from "../../../redux/slices/util"
import { toast, ToastContainer } from "react-toast"
import axios from "axios"

const APIENDPOINT=process.env.NODE_ENV==="development" ? "http://localhost:4000" : "https://redwineapi1.herokuapp.com"

const Register = () => {
    const totalStep = 3
    const [formStep, setFormStep] = useState(0)
    const methods = useForm({ mode: "all" })

    const dispatch = useDispatch()


    useEffect(() => {

    }, [dispatch])
    const onNextHandler = async(data) => {
        if (formStep === totalStep - 1) {
            axios.post(`${APIENDPOINT}/influencer`,data).then(()=>{
                toast.success("Form Submitted, We Will Get in touch with you.")
            }).catch(()=>{
                toast.error("Error Occured")
            })
            
            setTimeout(()=>{
                dispatch(setShowRegister(false))
            },2000)

        } else if (methods.getValues("handle")?.instagram === '' && methods.getValues("handle")?.youtube === '') {
            methods.setError("handle.instagram", { type: 'required' })
            methods.setError("handle.youtube", { type: 'required' })
        } else {

            methods.clearErrors("handle")
            setFormStep(item => item + 1)
        }
    }

    function showForm(step) {
        switch (step) {
            case 0:
                return <First />
            case 1:
                return <Second />
            case 2:
                return <Third />
            default:
                return <First />
        }
    }

    return (
        <>
        <ToastContainer delay={2000} position="top-right"  />
            <motion.div className="redwine__register" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} onClick={e=>e.stopPropagation()}>
                <motion.div className="redwine__register-cancel" whileTap={{ scale: .97 }} onClick={() => dispatch(setShowRegister(false))}>
                    <GiCancel size={30} color="#961313" />
                </motion.div>
                <div className="redwine__register-title">
                    <h1>Influencer Registration</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <FormProvider {...methods}>
                    <form className="redwine__register-content" onSubmit={methods.handleSubmit(onNextHandler)}>
                        {showForm(formStep)}
                        <div className="redwine__register-submit">
                            {
                                formStep !== 0 && (
                                    <motion.button type="button" className="prev" style={{ marginRight: "1.5rem" }} onClick={() => setFormStep(item => item - 1)} whileTap={{ scale: .97 }}>
                                        <h3>Prev</h3>
                                    </motion.button>
                                )
                            }
                            {
                                formStep === totalStep - 1 ? (
                                    <motion.button className="next" type="submit" whileTap={{ scale: 0.97 }}>
                                        <h3>Submit</h3>
                                    </motion.button>
                                ) : (

                                    <motion.button className="next" type="submit" whileTap={{ scale: 0.97 }}>
                                        <h3>Next</h3>
                                    </motion.button>

                                )
                            }
                        </div>
                    </form>
                </FormProvider>
            </motion.div>

        </>
    )
}

export default Register