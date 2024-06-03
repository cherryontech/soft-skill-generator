
import headerphoto from '/src/assets/headerphoto.jpg';

//Landing page header
//contains image, logo(present on every page & routes back to landing page onClick)

function Header() {

    return (
    <>
    <section className='xl:flex'>
        <div className= 'flex bg-yellow justify-center xl:order-last'>
            <img className='h-40 w-40 md:h-48 md:w-48 rounded-full xl:mr-40 xl:mt-10' src={headerphoto} alt="close up of woman with hands over her face"/>
        </div>
        <div className='bg-yellow rounded-b-lg flex md:px-24 xl:px-0 xl:flex-1'>
            <div className='flex-column p-10 px-15 xl:pl-40 xl:pr-12'>
                <h2 className='text-2xl md:text-3xl xl:text-5xl xl:leading-72 xl:w-50 md:leading-10 font-semibold mb-4 text-center xl:text-left'>Have you ever struggled to communicate your full potential?</h2>
                <p className='text-xs md:text-lg mb-4 text-center xl:text-left'>At EmpowerMe, we understand the challenges you face when it comes to
                fully showcasing your potential. Our mission is to empower you by
                identifying and harnessing your transferable skills, helping you overcome
                that feeling of self-doubt.  Let's collaborate to unlock and effectively
                communicate your unique talents.</p>
            </div>
        </div>
    </section>
    
    </>
    )
}

export default Header;