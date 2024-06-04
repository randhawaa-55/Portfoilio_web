// Hero.js
import Myimg from './pngwing.com.png';
export default function Hero() {
	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
		<div>
			<h4 className="text-center text-xl font-bold">
				Hi and welcome to
			</h4>
			<h2 className="text-center text-indigo-600 text-5xl font-bold">
			My Portfolio Website
			</h2>
		</div>
		<p className="text-center">
			I am Software Engineer and Programmer...
		</p>
		</div>
		<div className="flex-1">
      <img
        src={Myimg}
        alt="Hello"
        className="w-full h-full bg-cover"
      />
    </div>
	</section>
	);
}
