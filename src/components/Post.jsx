import {TitlePosts} from './TitlePosts'

export const Post = ({ title, postImage }) => {
	return (
		<div className='rounded-xl mt-2 shadow-xl border'>
			<TitlePosts title={title} />
      <div className='m-auto p-3'>
				<img
					src={postImage}
					alt='Post'
					className='w-4/5 m-auto rounded-lg bg-blue-100'
				/>
			</div>
		</div>
	);
};
