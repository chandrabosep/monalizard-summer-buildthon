import Image from "next/image";
import React from "react";

const CharacterCard = () => {
	return (
		<div className="w-[45vw] border my-2 border-black flex rounded-xl overflow-hidden ">
			<section className="relative w-[48%] flex flex-col items-center overflow-hidden border p-2">
				<Image
					src="/quest-hen.png"
					alt="hen-quest"
					width={1024}
					height={1024}
					className="rounded-xl my-auto"
				/>
				<button className="flex justify-center items-center space-x-3 text-sm bg-black text-[#EFB359] uppercase rounded-b-xl h-fit w-full py-1 px-2 ">
					<Image
						src="/chat-dashboard.svg"
						alt="chat-pic"
						width={40}
						height={40}
						className="w-6 h-6"
					/>
					<h2>Go To Chat</h2>
				</button>
			</section>
			<section className="w-[52%] flex flex-col justify-around items-center py-3 px-2">
				<div className="h-[70%] flex flex-col justify-around items-center">
					<h2 className="text-2xl font-semibold">El Pollo loco</h2>
					<div className="flex justify-between space-x-2">
						<section className="flex justify-center items-center space-x-2">
							<Image
								src="/puzzle.svg"
								alt="chat-pic"
								width={40}
								height={40}
								className="w-4 h-4"
							/>
							<h2 className="font-semibold text-lg">15 Pieces</h2>
						</section>
						<section className="flex justify-center items-center space-x-2">
							<Image
								src="/participants.svg"
								alt="chat-pic"
								width={40}
								height={40}
								className="w-4 h-4"
							/>
							<h2 className="font-semibold text-lg">
								7 questers
							</h2>
						</section>
					</div>
					<section className="flex justify-center items-center space-x-1">
						<Image
							src="/bounty.svg"
							alt="chat-pic"
							width={40}
							height={40}
							className="w-6 h-6"
						/>
						<h2 className="font-semibold text-lg">
							Achieved on 13/06/2024
						</h2>
					</section>
				</div>
			</section>
		</div>
	);
};

export default CharacterCard;
