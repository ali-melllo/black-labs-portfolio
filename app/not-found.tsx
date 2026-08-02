import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { HomeIcon, CompassIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			<Empty>
				<EmptyHeader>
					<EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl">
						404
					</EmptyTitle>
					<EmptyDescription className="md:text-nowrap text-sm md:text-xl text-foreground/80">
						The page you&apos;re looking for might have been <br />
						moved or doesn&apos;t exist.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<div className="flex gap-2">
						<Link href={"/"} className="flex justify-center items-center bg-foreground text-background rounded-xl p-2 px-4 font-bold">
							
								<HomeIcon
								className="size-4 mr-2" data-icon="inline-start" />
								Go Home
							
						</Link>

						<Link className="flex justify-center items-center bg-transparent border rounded-xl p-2 px-4 font-bold" href={"/projects"}>
							
								<CompassIcon 
								className="size-4 mr-2" 
								data-icon="inline-start" />{" "}
								Explore
						
						</Link>
					</div>
				</EmptyContent>
			</Empty>
		</div>
	);
}
