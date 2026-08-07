"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

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

// ---------------------------------------------------------------------------
// Form fields
// ---------------------------------------------------------------------------

function RequestProjectForm({ onSubmitted }: { onSubmitted: () => void }) {
    const [startDate, setStartDate] = React.useState<Date | undefined>()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            projectType: formData.get("projectType"),
            budget: formData.get("budget"),
            startDate,
            details: formData.get("details"),
        }

        // TODO: wire this up to your actual submission endpoint.
        console.log("Project request submitted:", payload)

        onSubmitted()
    }

    return (
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
    )
}

// ---------------------------------------------------------------------------
// Drawer — used for every screen size. Responsiveness is handled purely
// with Tailwind breakpoints on DrawerContent (full-width bottom sheet on
// mobile, a centered/rounded panel on larger screens), no JS media-query
// hook involved.
// ---------------------------------------------------------------------------

const TRIGGER_CLASSNAME =
    "px-5 py-2 shadow font-extrabold bg-linear-to-br from-blue-500 to-indigo-500 text-white text-sm rounded-xl"

export function RequestProjectModal() {
    const [open, setOpen] = React.useState(false)

    const  isMobile  = useIsMobile();

    const handleSubmitted = () => setOpen(false)

    return (
        <Drawer swipeDirection={isMobile ? "down" : "right"} open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
                <span className={TRIGGER_CLASSNAME}>
                    Request Project
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
                        <RequestProjectForm onSubmitted={handleSubmitted} />
                    </div>

                    <DrawerFooter className="flex-row gap-2 md:px-0 pt-7 md:pt-4 sm:flex-row-reverse justify-between">
                        <Button type="submit" form="request-project-form" className="flex-1 py-5 font-bold rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 sm:flex-none">
                            Submit request
                        </Button>
                        <DrawerClose className={" min-w-24 rounded-xl border-2"}>
                                Cancel
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}