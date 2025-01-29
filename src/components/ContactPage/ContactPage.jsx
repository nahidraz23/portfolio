"use client";
import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = data => {

        const templateParams = {
            from_name: data.email,
            to_name: data.name,
            message: data.message
        }

        emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, templateParams, {
            publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
        })
            .then(
                (response) => {
                    toast.success('Email send successfully')
                },
                (err) => {
                    toast.error('Email not send')
                },
            );
    }

    return (
        <div className="pt-28">
            <div className="">
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>Contacts</p>
                <p className='text-white mt-4'>Who am i?</p>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-4 md:gap-0 md:mt-6">
                <div>
                    <p className="md:w-2/3 text-left mt-4 md:mt-0">
                        I am open to exploring new opportunities that align with my skills and interests. Please feel free to reach out if you have any questions or requests.
                    </p>
                </div>
                <div className="border-2 p-4 space-y-3">
                    <div>
                        <p className="text-white font-semibold">
                            Message here
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaLinkedin></FaLinkedin>
                        <Link target="_blank" href={"https://www.linkedin.com/in/nahidraz23/"}>
                            <p className="hover:text-primary-purple">nahidraz23</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaDiscord></FaDiscord>
                        <p className="hover:text-primary-purple">nahidraz23</p>
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-0">
                <div>
                    <p className="text-center text-3xl font-semibold my-6"><span className="text-white border-primary-purple border-b-2 ">Send me an email</span></p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4 grid grid-cols-1 justify-items-center">
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <div>
                                        <label htmlFor="name" className="text-white font-semibold">Your Name</label>
                                    </div>
                                    <div>
                                        <input required {...register("name")} className="border-2 w-[408px] md:w-[419px]"></input>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>
                                        <label htmlFor="email" className="text-white font-semibold">Your Email</label>
                                    </div>
                                    <div>
                                        <input required {...register("email")} className="border-2 w-[408px] md:w-[419px]"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div>
                                    <label htmlFor="message" className="text-white font-semibold">Message</label>
                                </div>
                                <div>
                                    <textarea required {...register("message")} cols={40} rows={10} className="resize-none border-2 max-w-full"></textarea>
                                </div>
                            </div>
                            <input type="submit" className="border-2 md:w-[419px] border-primary-purple px-2 py-1 cursor-pointer hover:border-white hover:scale-90 hover:text-white hover:font-semibold" />
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ContactPage;