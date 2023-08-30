import {Link,useParams} from 'react-router-dom';

const Myhook7=()=>{
    let {city,edu,year}=useParams();
    
    return(
        <section>
            <h1>How to use react useParams()</h1>
            <p>The useParams() use to receive value from browser url</p>
            <p>Example : http://www.xyz.com/profile/Ganesh/30/MCA/Bangalore</p>

            <p>
                <Link to="/hook7/Mumbai/BCA/2016" className='four'>User 1</Link>
                <Link to="/hook7/Pune/MCA/2017" className='four'>User 2</Link>
                <Link to="/hook7/Delhi/BTech/2018" className='four'>User 3</Link>
                <Link to="/hook7/Chennai/MTech/2015" className='four'>User 4</Link>
            </p>

            <h3>Your city is : {city}</h3>
            <h3>Your education is : {edu}</h3>
            <h3>Your passing year is : {year}</h3>
        </section>
    )
}
export default Myhook7;