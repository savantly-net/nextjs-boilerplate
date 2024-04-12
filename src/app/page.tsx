// server side data fetching
async function getData() {
  return Promise.resolve({
    title: 'Home',
    description: 'This is the home page',
  });
}

export default async function Home() {
  // our query's result, data, is typed!
  const data = await getData();
  const { title, description } = data;

  return (
    <div className='h-full'>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <h1 className='text-4xl font-bold'>{title}</h1>

          <p className='text-lg mt-4'>{description}</p>
        </div>
      </section>
    </div>
  );
}
