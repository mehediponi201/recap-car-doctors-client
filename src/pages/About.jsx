import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-4 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-4">
                <h3 className='text-2xl font-bold text-orange-600'>About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <p className="py-3">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
                    </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;