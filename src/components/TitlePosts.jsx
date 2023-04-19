export const TitlePosts = ({ title }) => {
	return (
		<div className='rounded-md'>
			<div className='flex items-center justify-between border-b py-4 px-3'>
				<div className='flex h-11 items-center'>
					<h2 className='text-md xl:text-lg font-semibold'>{title}</h2>
				</div>
			</div>
		</div>
	);
};
