"use client";

import Footer from "@/app/_components/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { buttonVariants } from "@/app/_components/ui/button";
import {
	prepareWriteContract,
	waitForTransaction,
	writeContract,
} from "wagmi/actions";
import NFTDrop from "@/app/_abis/abi/NFTDrop.json";
import toast from "react-hot-toast";

export default function Dashboard({ params }: { params: { chatid: string } }) {
	const [walletAddress, setWalletAddress] = React.useState("");
	const [data, setData] = useState<any>({});

	useEffect(() => {
		if (params.chatid === "elpolloloco") {
			setData({
				chatTag: "#elpolloloco",
				name: "Unique",
				desc: "Introducing Unique, the coolest unicorn in the crypto universe! 🌟 Unique is Uniswap's friendly and laid-back mascot who loves to go on rides across rainbows and spread good vibes. This rainbow-loving unicorn is here to add a splash of color and fun to your DeFi adventures.",
				image: "/uni-noun/uni-full.png",
				pieces: ["/uni-noun/uni-glasses.png", "/uni-noun/uni-head.png"],
			});
		} else {
			setData({
				chatTag: "#tree-two-one",
				name: "The Wolf",
				desc: "Introducing The Wolf of All Streets, AAVE's fearless and friendly mascot! 🐺💎 This savvy wolf is here to guide you through the exciting world of decentralized finance (DeFi) on AAVE. Whether you're a seasoned DeFi enthusiast or just starting your journey, The Wolf of All Streets has got your back!",
				image: "/wolf-noun/wolf-full.png",
				pieces: [
					"/wolf-noun/wolf-glasses.png",
					"/wolf-noun/wolf-head.png",
					"/wolf-noun/wolf-accesory.png",
				],
			});
		}
	}, [params.chatid]);
	return (
		<div className="w-full h-full my-5 overflow-scroll">
			<div className="flex justify-between my-3">
				<h1 className="text-4xl font-semibold text-center uppercase">
					&quot;{data && data?.name}&quot;
				</h1>
				<button className={buttonVariants({})}>
					<Image
						src="/bounty.svg"
						alt="hero"
						width={40}
						height={40}
						className="w-6 h-6"
					/>

					<h2 className="text-xl font-semibold text-center uppercase px-5">
						$1500 USDC
					</h2>
				</button>
			</div>
			<h2>{data && data.desc}</h2>

			<h2 className="text-2xl font-semibold uppercase px-5 my-5">
				Pieces
			</h2>
			<div className="flex justify-around my-10 ">
				<section className="w-[25%]">
					<Image
						src={data.image && data.image}
						className="w-full rounded-xl"
						height={1024}
						width={1024}
						alt="chicken"
					/>
				</section>
				<section className="flex flex-wrap w-[65%] gap-4">
					{data.pieces &&
						data.pieces.map((item: string) => (
							<Image
								src={item ?? "/moon-noun/moon-background.png"}
								key={item}
								className="w-24 h-24 rounded-xl"
								height={1024}
								width={1024}
								alt=""
							/>
						))}
				</section>
			</div>
			<div>
				<h2 className="text-xl font-semibold text-center uppercase px-5">
					Chat
					<section className="bg-white rounded-xl py-4 my-5 flex flex-col justify-end ">
						<section className="w-[95%] border-2 flex justify-end px-3 mx-auto h-10 rounded-xl my-auto items-center">
							<Image
								src="/send.svg"
								className="w-5 h-5"
								width="40"
								height="40"
								alt="send"
							/>
						</section>
					</section>
				</h2>
			</div>
			<Footer />
		</div>
	);
}
