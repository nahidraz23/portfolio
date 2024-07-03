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
        formState: { errors },
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
        <div>
            <div>
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>Contacts</p>
                <p className='text-white mt-4'>Who am i?</p>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-0 md:mt-12">
                <div>
                    <p className="md:w-2/3">
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
                        <Link href={"https://www.linkedin.com/in/nahidraz23/"}>
                            <p className="hover:text-primary-purple">nahidraz23</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaDiscord></FaDiscord>
                        <p className="hover:text-primary-purple">nahidraz23</p>
                    </div>
                </div>
            </div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4 flex flex-col items-center">
                        <div className="flex  gap-4">
                            <div className="flex flex-col gap-1">
                                <div>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div>
                                    <input {...register("name")} className="border-2 bg-none"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div>
                                    <input {...register("email")} className="border-2"></input>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div>
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                                <textarea {...register("message")} cols={48} rows={10} className="resize-none border-2"></textarea>
                            </div>
                        </div>
                        <input type="submit" className="border-2 border-primary-purple px-2 py-1 cursor-pointer hover:border-white hover:scale-90" />
                    </div>
                </form>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ContactPage;