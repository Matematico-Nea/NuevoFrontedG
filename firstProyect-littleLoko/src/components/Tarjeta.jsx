import reactLogo from '../assets/react.svg';

function Tarjeta() {
    return (
        <>
            <article className='tarjeta'>
                <img src={reactLogo} alt='react logo' /> 
                    <h2> those are React</h2>
                    <p>This is a simple card with a React logo and a title.</p>
            </article>
    
        </>)


}
export default Tarjeta;