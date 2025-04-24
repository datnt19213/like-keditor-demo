import React from "react";

import {useNavigate} from "react-router";

import {HyperText} from "@/components/magicui/hyper-text";
import {InteractiveHoverButton} from "@/components/magicui/interactive-hover-button";
import {VelocityScroll} from "@/components/magicui/scroll-based-velocity";
import {TextAnimate} from "@/components/magicui/text-animate";
import {TypingAnimation} from "@/components/magicui/typing-animation";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="h-[calc(100vh-91.94px)] w-screen flex gap-6 justify-start px-4 lg:px-6 lg:justify-between flex-col pt-32 pb-8 max-w-[1200px] mx-auto">
			<HyperText>Welcome !</HyperText>
			<div className="flex flex-col gap-4 lg:gap-24">
				<div className="flex flex-col gap-3">
					<TypingAnimation>What is it?</TypingAnimation>
					<div className="max-w-[700px] w-full flex flex-col gap-2  ">
						<TextAnimate animation="fadeIn" by="line" as="p">
							{`A powerful and intuitive React layout system that adapts to your needs.\nBuilt with flexibility in mind, offering seamless resizing capabilities.\nPerfect for creating dynamic, responsive interfaces with collapsible sections.`}
						</TextAnimate>
					</div>
				</div>
				<InteractiveHoverButton
					onClick={() => navigate("/examples")}
					className="h-10 lg:h-[80px] w-fit text-lg lg:text-xl px-12"
				>
					Explore Examples
				</InteractiveHoverButton>
			</div>
			<div className="relative mt-32 flex w-full flex-col items-center justify-center overflow-hidden">
				<VelocityScroll>React Smart Layout</VelocityScroll>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</div>
	);
};

export default Home;
