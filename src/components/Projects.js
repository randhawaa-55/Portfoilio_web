// Projects.js

import myimg from './calcute.PNG';
import myimg1 from './Todo.PNG';
import myimg2 from './crpto.PNG';
export default function Projects() {
	return (
		<section id="projects"
			className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-indigo-500 font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-indigo-300 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
						className="w-full h-full">
						<img src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
							15 Puzzle Game
						</a>
					</h2>
					<p>
						15 puzzle game is basically a tile-based game in which there are 16 tiles
						out of which 1 tile is left empty and the remaining tiles are filled with
						numbers from 1 to 15 in random order. The user has to arrange all the tiles
						in numerical order with the rule that they can only move the tile that is
						a direct neighbor of the empty tile.
					</p>
				</div>
			</div>
			<div className="p-10 bg-indigo-300 flex flex-col justify-center items-center gap-5 
							lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href="https://example.com/calculator-project"
						className="w-full h-full">
						<img src={myimg}
							alt="Calculator Project"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href="https://example.com/calculator-project">
							Calculator
						</a>
					</h2>
					<p>
						This is a simple calculator built with React that supports basic arithmetic operations.
					</p>
				</div>
			</div>
			<div className="p-10 bg-indigo-300 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href="https://example.com/todolist-project"
						className="w-full h-full">
						<img src={myimg1}
							alt="Todo List Project"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href="https://example.com/todolist-project">
							Todo List
						</a>
					</h2>
					<p>
						A todo list application built with React to help you keep track of your tasks.
					</p>
				</div>
			</div>
			<div className="p-10 bg-indigo-300 flex flex-col justify-center items-center gap-5 
							lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href="https://example.com/crypto-price-update-project"
						className="w-full h-full">
						<img src={myimg2}
							alt="Crypto Currency Price Update Project"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href="https://example.com/crypto-price-update-project">
							Crypto Currency Price Update
						</a>
					</h2>
					<p>
						A React project that fetches and displays the latest cryptocurrency prices from an API.
					</p>
				</div>
			</div>
		</section>
	);
}
