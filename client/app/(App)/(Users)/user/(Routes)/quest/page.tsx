import QuestCard from "@/app/_components/Card/QuestCard";
import Footer from "@/app/_components/Footer";
import React from "react";

export default function Quest() {
	return (
		<div className="w-full h-full my-5 overflow-scroll">
			<h1 className="text-4xl font-semibold text-center uppercase">
				Quests
			</h1>
			<div className=" my-7 space-y-8">
				{[
					{
						img: "/moon-noun/moon-full.png",
						name: "Taco Head",
						desc: "Introducing Moon Boi, the adventurous and friendly mascot of CrossMint! 🌙🚀 Moon Boi is here to take you on an exciting journey through the world of NFTs, making it easier and more fun than ever to explore and collect digital treasures.",
						sponsors: "/crossmit.jpg",
					},
					{
						img: "/wolf-noun/wolf-full.png",
						name: "The Wolf",
						desc: "Introducing The Wolf of All Streets, AAVE's fearless and friendly mascot! 🐺💎 This savvy wolf is here to guide you through the exciting world of decentralized finance (DeFi) on AAVE. Whether you're a seasoned DeFi enthusiast or just starting your journey, The Wolf of All Streets has got your back!",
						sponsors: "/aave.jpg",
					},
				].map((item, index) => (
					<QuestCard
						key={index}
						img={item.img}
						desc={item.desc}
						name={item.name}
						sponsors={item.sponsors}
					/>
				))}
			</div>
			<Footer className="" />
		</div>
	);
}
