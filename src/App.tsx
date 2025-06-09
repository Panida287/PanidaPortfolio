import Introduction from './components/Introduction.tsx';

export default function App() {
	return <div>
		<h1 className="w-full flex justify-center items-center text-pink text-2xl font-bold">
			<span className="pr-2">Panida</span>
			<span className="text-white">Paethanom</span>
		</h1>
		<Introduction/>
	</div>;
}