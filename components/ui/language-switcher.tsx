"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const languages = [
    { flag: "🇺🇸", name: "English" },
    { flag: "🇮🇷", name: "فارسی" },
    { flag: "🇫🇷", name: "Français" },
    { flag: "🇩🇪", name: "Deutsch" },
    { flag: "🇯🇵", name: "日本語" },
];

export function LanguageSwitcher() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button className="bg-background hover:bg-background text-foreground"> <Globe className="size-5" /></Button>}>
                Open
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuGroup>

                    {languages.map((language) => (
                        <DropdownMenuItem
                            key={language.name}
                            className="cursor-pointer gap-3"
                        >

                            <span className="text-lg">{language.flag}</span>
                            <span>{language.name}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}