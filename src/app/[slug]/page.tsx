import logger from '@/lib/logger';

// server side data fetching
async function getData({ slug }: { slug: string }) {
  return Promise.resolve({
    title: slug,
    description: `This is the ${slug} page`,
  });
}

type Props = {
  params: { slug: string };
};

export default async function Home({ params }: Props) {
  logger(`using slug: ${params.slug}`);
  // our query's result, data, is typed!
  const data = await getData({
    slug: params.slug,
  });
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
