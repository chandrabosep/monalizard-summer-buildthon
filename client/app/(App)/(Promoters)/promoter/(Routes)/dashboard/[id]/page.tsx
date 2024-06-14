"use client";

import Footer from "@/app/_components/Footer";
import React from "react";
import Image from "next/image";
import { buttonVariants } from "@/app/_components/ui/button";
import {
	prepareWriteContract,
	waitForTransaction,
	writeContract,
} from "wagmi/actions";
import NFTDrop from "@/app/_abis/abi/NFTDrop.json";
import toast from "react-hot-toast";

export default function Dashboard({ params }: { params: { id: string } }) {
	const [walletAddress, setWalletAddress] = React.useState("");
	const quests: {
		img: string;
	}[] = [
		{ img: "/wolf-noun/wolf-glasses.png" },
		{ img: "/wolf-noun/wolf-head.png" },
		{ img: "/wolf-noun/wolf-accesory.png" },
	];
	return (
		<div className="w-full h-full my-5 overflow-scroll">
			<div className="flex justify-between my-3">
				<h1 className="text-4xl font-semibold text-center uppercase">
					&quot;The Wolf&quot;
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
			<h2>
				{`Introducing The Wolf of All Streets, AAVE's fearless and
				friendly mascot! 🐺💎 This savvy wolf is here to guide you
				through the exciting world of decentralized finance (DeFi) on
				AAVE. Whether you're a seasoned DeFi enthusiast or just starting
				your journey, The Wolf of All Streets has got your back!`}
			</h2>

			<h2 className="text-2xl font-semibold uppercase px-5 my-5">
				Pieces
			</h2>
			<div className="flex justify-around my-10 ">
				<section className="w-[25%]">
					<Image
						src={"/wolf-noun/wolf-full.png"}
						className="w-full rounded-xl"
						height={1024}
						width={1024}
						alt="chicken"
					/>
				</section>
				<section className="flex flex-wrap w-[65%] gap-4">
					{quests.map((quest) => (
						<Image
							src={quest.img}
							key={quest.img}
							className="w-24 h-24 rounded-xl"
							height={1024}
							width={1024}
							alt="dw"
						/>
					))}
				</section>
			</div>
			<section className="flex justify-around my-5">
				<div className="flex justify-center items-center">
					<section className="flex border bg-[#200F00] justify-center items-center space-x-2 p-3 rounded-l-xl">
						<Image
							src="/wallet.svg"
							alt="hero"
							width={40}
							height={40}
							className="w-6 h-6"
						/>
						<h2 className="text-[#EFB359] ">Wallet Address</h2>
					</section>
					<input
						placeholder="0x3423423"
						value={walletAddress}
						className="bg-white border border-[#200F00] text-[#EFB359] py-3 px-1 rounded-r-xl outline-none w-[50%]"
						type="string"
						onChange={(e) => setWalletAddress(e.target.value)}
					/>
				</div>
				<div className="flex justify-center items-center">
					<button
						onClick={async () => {
							toast.loading("Sending", {
								id: "uploading",
							});
							const { request } = await prepareWriteContract({
								address: NFTDrop.address as `0x${string}`,
								abi: NFTDrop.abi,
								functionName: "mintTaskCompletionNFT",
								args: [walletAddress],
							});
							const { hash } = await writeContract(request);
							await waitForTransaction({ hash })
								.then(() =>
									console.log("transaction confirmed")
								)
								.catch((error) => {
									toast.dismiss("uploading");
									console.log("error", error);
								});
							toast.dismiss("uploading");
							toast.success("Transaction confirmed");
						}}
						className="flex border bg-[#200F00] justify-center items-center space-x-2 p-3 rounded-xl"
					>
						<Image
							src="/timer.svg"
							alt="hero"
							width={40}
							height={40}
							className="w-6 h-6"
						/>
						<h2 className="text-[#EFB359] ">Airdrop Piece</h2>
					</button>
				</div>
			</section>
			<Footer />
		</div>
	);
}
