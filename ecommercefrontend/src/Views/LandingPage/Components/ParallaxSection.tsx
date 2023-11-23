import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <section
    className="flex flex-col w-full bg-cover bg-fixed bg-center flex justify-center items-center"
    style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80")'
      }}>
    <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
        Why Choose Us?
    </h1>

    <span className="text-center font-bold  text-white/90">
    <section className="  leading-6 text-blue-900 mb-20">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    

    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-24 lg:grid-cols-4">
      <div className="relative rounded-xl border-t-4 border-indigo-500 bg-white bg-opacity-30 shadow">
        <div className="flex flex-col items-center py-10">
          <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 text-white">
            

            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <span className="mt-3 font-medium capitalize font-custom text-white">Wide Selection</span>
          <p className="mt-3  text-center text-white   font-custom">Find Anything You want From big brands like Nike, Yeezy, Puma Etc...</p>
        </div>
      </div>

      <div className="relative rounded-xl border-t-4 border-indigo-500 bg-opacity-30  bg-white shadow">
        <div className="flex flex-col items-center py-10">
          <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 text-white">
            
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <span className="mt-3 font-medium capitalize font-custom text-white ">Easy</span>
          <p className="mt-3 text-center text-white   font-custom">Easy Selecton, Fast Delivery, Wide Selection we have all</p>
        </div>
      </div>

      <div className="relative rounded-xl border-t-4 border-indigo-500 bg-opacity-30 bg-white shadow">
        <div className="flex flex-col items-center py-10">
          <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 text-white">
            
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <span className="mt-3 font-medium capitalize font-custom text-white">Cheap</span>
          <p className="mt-3 text-center text-white   font-custom">Compared to other stores Shuuz have significantly lower prices</p>
        </div>
      </div>
      <div className="relative rounded-xl border-t-4 border-indigo-500 bg-opacity-30 bg-white shadow">
        <div className="flex flex-col items-center py-10">
          <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 text-white">
            
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </div>
          <span className="mt-3 font-medium capitalize font-custom text-white">Happier Customers</span>
          <p className="mt-3 text-center text-white   font-custom">According to our customers 98% of our users are satisfied. Join them today!</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </span>
</section>
  );
}
