
import headerphoto from '/src/assets/headerphoto.jpg';

//Landing page header
//contains image, logo(present on every page & routes back to landing page onClick)
//
function Header() {

    return (
    <>
    <div className='bg-yellow rounded-b-lg flex'>
        <div className='flex-column p-10 px-15'>
            <p className='font-inter bold text-32 mb-4'>Have you Ever Struggled to Communicate Your Full Potential?</p>
            <p className='font-inter semibold text-24 mb-4'>At EmpowerMe, we understand the challenges you face when it comes to
            fully showcasing your potential. Our mission is to empower you by
            identifying and harnessing your transferable skills, helping you overcome
            that feeling of self-doubt.  Let's collaborate to unlock and effectively
            communicate your unique talents.</p>
        </div>
    </div>
    <div className= 'flex'>
    <img className='bg-yellow h-48 w-48 rounded-full' src={headerphoto} alt="close up of woman with hands over her face"/>
    </div>
    
    </>
    )
}

export default Header;