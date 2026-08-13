"use client"

import * as React from "react"
import { format, formatDate } from "date-fns"
import { CalendarIcon, Loader } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"
import { toast } from "./toast"
import emailjs from "@emailjs/browser";

const PROJECT_TYPES = [
    { value: "website", label: "Website" },
    { value: "web-app", label: "Web Application" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "branding", label: "Branding & Design" },
    { value: "other", label: "Other" },
]

const BUDGET_RANGES = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 – $15,000" },
    { value: "15k-40k", label: "$15,000 – $40,000" },
    { value: "40k-plus", label: "$40,000+" },
]

const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RequestProjectModal({ TRIGGER_CLASSNAME, TEXT, ICON }: { TRIGGER_CLASSNAME: string, TEXT: string, ICON?: any }) {

    const [open, setOpen] = React.useState(false)

    const isMobile = useIsMobile();

    const [startDate, setStartDate] = React.useState<Date | undefined>()
    const [emailLoading, setEmailLoading] = React.useState<boolean>(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        setEmailLoading(true);

        try {
            await emailjs.send(
                EMAIL_SERVICE_ID || "",
                EMAIL_TEMPLATE_ID || "",
                {
                    user_name: formData.get("name"),
                    to_email: "blacklabsx@gmail.com",
                    time: `${formatDate(startDate || new Date(), "PPP")}`,
                    user_email: formData.get("email"),
                    budget: formData.get("budget"),
                    project_type: formData.get("projectType"),
                    company_name: formData.get("company"),
                    details: formData.get("details"),
                },
                EMAIL_PUBLIC_KEY
            );

            setEmailLoading(false);
            toast.add({
                title: "Project Request Submitted Successfully",
                description: "We Will reach You very Soon By Your Email provided in the form"

            })
            setOpen(false);
        } catch (err) {
            console.log(err)
            setEmailLoading(false);
            toast.add({
                title: "Project Request Failed",
                description: "Your Project Submission Failed Due to a Unknown error , please try again"

            })
        }
    }

    return (
        <Drawer swipeDirection={isMobile ? "down" : "right"} open={open} onOpenChange={setOpen}>
            <DrawerTrigger className={"flex justify-center items-center"}>
                <span className={TRIGGER_CLASSNAME}>
                    {ICON && ICON}
                    {TEXT}
                </span>
            </DrawerTrigger>

            <DrawerContent className="md:rounded-r-none min-h-dvh! p-5 m-0 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-xl font-bold">
                <div className="mx-auto w-full">
                    <DrawerHeader className="text-left pl-0 pb-10">
                        <p className="text-xl font-extrabold">Request a project</p>
                        <DrawerDescription>
                            Tell us about what you&apos;re looking to build and we&apos;ll get back to you shortly.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div>
                        <form
                            id="request-project-form"
                            onSubmit={handleSubmit}
                            className="grid gap-5 px-4 md:px-0"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full name</Label>
                                    <Input className="py-5" id="name" name="name" placeholder="Jane Doe" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input className="py-5" id="email" name="email" type="email" placeholder="jane@company.com" required />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="company">Company (optional)</Label>
                                <Input className="py-5" id="company" name="company" placeholder="Acme Inc." />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="projectType">Project type</Label>
                                    <Select name="projectType" required>
                                        <SelectTrigger id="projectType" className="w-full py-5">
                                            <SelectValue placeholder="Select a type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PROJECT_TYPES.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="budget">Budget</Label>
                                    <Select name="budget">
                                        <SelectTrigger id="budget" className="w-full py-5">
                                            <SelectValue placeholder="Select a range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {BUDGET_RANGES.map((range) => (
                                                <SelectItem key={range.value} value={range.value}>
                                                    {range.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="startDate">
                                    <CalendarIcon className="size-5" />

                                    Preferred start date
                                </Label>
                                <Popover>
                                    <PopoverTrigger className={"flex items-center justify-center! bg-amber-"}>
                                        <span
                                            id="startDate"
                                            className={cn(
                                                "w-full font-normal border border-dashed border-muted-foreground/50 mt-2 rounded-2xl py-3",
                                                !startDate && "text-muted-foreground",
                                            )}
                                        >
                                            {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={startDate}
                                            onSelect={setStartDate}
                                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                        //   initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="details">Project details</Label>
                                <Textarea
                                    id="details"
                                    name="details"
                                    placeholder="Tell us a bit about what you're looking to build..."
                                    className="min-h-28 resize-none"
                                />
                            </div>
                        </form>
                    </div>

                    <DrawerFooter className="flex-row gap-2 md:px-0 pt-7 md:pt-4 sm:flex-row-reverse justify-between">
                        <Button
                            disabled={emailLoading}
                            type="submit"
                            form="request-project-form"
                            className=" min-w-24 md:min-w-40 text-white py-5 font-bold flex justify-center items-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 sm:flex-none"
                        >
                            {emailLoading ? <Loader className="animate-spin" /> : "Submit request"}
                        </Button>
                        <DrawerClose disabled={emailLoading} className={"min-w-24 md:min-w-40 rounded-xl border-2"}>
                            Cancel
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}