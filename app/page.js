import Hero from "@/components/Home/Hero";
import Timer from "@/components/Timer/Timer";

export default function Home() {
	return (
		<main className="h-screen w-screen">
			<div className="flex flex-col justify-center items-center">
				<Hero />
				<h1 className="absolute text-box font-young text-4xl sm:text-5xl md:text-6xl lg:text-9xl">
					TECHVERSE 2.O
				</h1>
			</div>
			<Timer />
		</main>
	);
}
