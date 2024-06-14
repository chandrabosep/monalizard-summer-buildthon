import Image from "next/image";
import React from "react";

const CharacterCard = () => {
	return (
		<div className="w-fit border my-2 border-black flex rounded-xl overflow-hidden ">
			<section className="relative w-fit flex flex-col items-center overflow-hidden border-r p-2">
				<Image
					src="/moon-full.png"
					alt="hen-quest"
					width={1024}
					height={1024}
					className="rounded-t-xl my-auto w-64"
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
			<section className="w-fit h-full p-4">
				<div className="h-[15rem] flex flex-col justify-between gap-y-3">
					<div className="flex flex-col gap-y-3">
						<h2 className="text-2xl font-semibold">Moon Boi</h2>
						<div className="flex justify-between space-x-2">
							<section className="flex justify-center items-center space-x-2">
								<Image
									src="/puzzle.svg"
									alt="chat-pic"
									width={40}
									height={40}
									className="w-4 h-4"
								/>
								<h2 className="font-semibold text-lg">
									5 Pieces
								</h2>
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
						<section className="flex items-center space-x-1">
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
					<div className="h-60 w-fit flex flex-col items-center p-2">
						<button className="flex justify-center items-center space-x-3 text-sm bg-black text-[#EFB359] uppercase rounded-t-xl h-fit w-full py-1 px-2 ">
							<Image
								src="/tick-dashboard.svg"
								alt="chat-pic"
								width={40}
								height={40}
								className="w-6 h-6"
							/>
							<h2>Sponsored by</h2>
						</button>
						<Image
							src="/crossmit.jpg"
							alt="ques-sponsor"
							width={250}
							height={250}
							className="h-20 rounded-b-xl"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CharacterCard;
