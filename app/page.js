import Hero from "@/components/HeroSection/Hero";
import Timer from "@/components/Timer/Timer";


export default function Home() {
	return (
		<main className="">
				<section className="flex flex-col justify-center items-center">
					<Hero />
					<h1 className="absolute text-box font-young text-[2.7rem] sm:text-5xl md:text-6xl lg:text-9xl">
						TECHVERSE 2.0
					</h1>
				</section>
				<Timer />
		</main>
	);
}
