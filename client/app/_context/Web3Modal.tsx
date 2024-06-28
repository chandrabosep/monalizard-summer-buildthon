"use client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { baseSepolia, base } from "viem/chains";
import { useEffect, useState } from "react";

const projectId =
	process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
	"a746bf24d5d472cb460819a4c2756314";

const metadata = {
	name: "Monalizard",
	description: "play and promote",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [base, baseSepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({ children }: { children: React.ReactNode }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true);
	}, []);
	if (!ready) return null;
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
