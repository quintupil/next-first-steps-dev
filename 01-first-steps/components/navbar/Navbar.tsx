//Server Component: Si no existe declaración 'use client' entonces es un Server Component 

//Se pueden hacer cosas de este estilo, esperar 2 segundo para que se renderize el componente 
/*const temporalAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(true);
        }, 2000);
    });
}*/
export const Navbar = async() => {
    
    //await temporalAsync();
    //console.log('Navbar rendered');

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <span>Home</span>   
        <div className='flex flex-1'></div>
        <a className="mr-2" href="/pricing">Pricing</a>
        <a className="mr-2" href="/contact">Contact</a> 
        <a className="mr-2" href="/about">About</a>
    </nav>
  )
}
