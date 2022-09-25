import { useFormContext } from "react-hook-form"

const Third = () => {
    const { register,formState:{errors} } = useFormContext()
    
    return (
        <>
            <div className="brand item">
                <div className="title">
                    <h3>Brands You&apos;ve Worked With Previously</h3>
                </div>
                <input type="text" placeholder='Type NA, if none' {...register("prevbrand", { required: true })} />
                {
                    errors?.brand?.type==="required" && (
                        <p className="error">Field required</p>
                    )
                }
            </div>
            <div className="contact item">
                <div className="title">
                    <h3>Your Contact Number</h3>
                </div>
                <input type="text" placeholder="Your Phone No" {...register("phone", { required: true })} />
                {
                    errors?.phone?.type==="required" && (
                        <p className="error">Field required</p>
                    )
                }
            </div>
            <div className="email item">
                <div className="title">
                    <h3>Your Email ID</h3>
                </div>
                <input type="email" placeholder="Your Email Address"  {...register("email", { required: true })} />
                {
                    errors?.email?.type==="required" && (
                        <p className="error">Field required</p>
                    )
                }
            </div>
        </>
    )
}

export default Third