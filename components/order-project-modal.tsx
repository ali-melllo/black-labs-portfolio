"use client";

import * as React from "react";
import { DollarSignIcon, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import { toast } from "./ui/toast";
import { formatDate } from "date-fns";

const TRIGGER_CLASSNAME =
    "text-sm md:text-base w-6/12 font-bold text-white rounded-xl flex gap-2 hover:scale-105 transition-all duration-300 justify-center items-center h-10  bg-linear-to-br from-blue-400 to-blue-600  shadow-xl";

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function OrderProjectModal({ project }: { project: string }) {
    const [open, setOpen] = React.useState(false);
    const [emailLoading, setEmailLoading] = React.useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setEmailLoading(true);

        try {
            await emailjs.send(
                EMAIL_SERVICE_ID || "",
                EMAIL_TEMPLATE_ID || "",
                {
                    user_name: formData.get("name"),
                    user_email: formData.get("email"),
                    company_name: formData.get("company") || "Not provided",
                    to_email: "blacklabsx@gmail.com",
                    time: `${formatDate(new Date(), "PPP")}`,
                    budget: "Not provided",
                    project_type: project || "Not Provided",
                    details: "User Selected From Templates For the Project" + project,
                },
                EMAIL_PUBLIC_KEY
            );

            setEmailLoading(false);
            toast.add({
                title: "Message Sent Successfully",
                description: "We'll get back to you as soon as possible.",
            });
            setOpen(false);
        } catch (err) {
            console.error(err);
            setEmailLoading(false);
            toast.add({
                title: "Message Failed",
                description: "Something went wrong. Please try again later.",
            });
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={TRIGGER_CLASSNAME}>
                <DollarSignIcon size={15} />
                <span >Order Template</span>
            </DialogTrigger>

            <DialogContent className="sm:max-w-106.25 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl font-bold">
                <DialogHeader>
                    <DialogTitle className="text-xl font-extrabold">Get in Touch</DialogTitle>
                    <DialogDescription>
                        Have a question or want to discuss a project? Drop us a message and we’ll reply shortly.
                    </DialogDescription>
                </DialogHeader>

                <form id="contact-form" onSubmit={handleSubmit} className="grid gap-5 py-4">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full name</Label>
                            <Input
                                className="py-5"
                                id="name"
                                name="name"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                className="py-5"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="jane@company.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="company">Company (optional)</Label>
                            <Input
                                className="py-5"
                                id="company"
                                name="company"
                                placeholder="Acme Inc."
                            />
                        </div>
                    </div>
                </form>

                <DialogFooter className="flex-row gap-2 sm:flex-row-reverse w-full justify-between!">
                    <Button
                        disabled={emailLoading}
                        type="submit"
                        form="contact-form"
                        className="min-w-24 md:min-w-40 text-white py-5 font-bold flex justify-center items-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 sm:flex-none"
                    >
                        {emailLoading ? <Loader className="animate-spin" /> : "Send Message"}
                    </Button>
                    <DialogClose disabled={emailLoading} className="min-w-24 md:min-w-40 rounded-xl border-2">
                        Cancel
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}