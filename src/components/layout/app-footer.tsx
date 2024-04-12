export default function AppFooter() {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='layout flex flex-col items-center justify-center py-12 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Savantly LLC
        </p>
      </div>
    </footer>
  );
}
