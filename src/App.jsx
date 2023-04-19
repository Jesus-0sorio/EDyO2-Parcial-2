import { Post } from './components/Post';
import { usePosts } from './hooks/usePosts';

function App() {
	const { posts } = usePosts();

	return (
		<>
			<div className='h-16 pt-2 border-gray-300 shadow-md mb-3 text-center border-b'>
				<h1 className='text-4xl'>Los postesitos</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-6'>
				{posts ? (
					posts.map((post) => {
						return (
							<Post
								key={post.id}
								title={post.title}
								postImage={post.postImage}
							/>
						);
					})
				) : (
					<h1 className='text-4xl mt-52 text-center w-screen mx-auto'>Cargando...</h1>
				)}
			</div>
		</>
	);
}

export default App;
