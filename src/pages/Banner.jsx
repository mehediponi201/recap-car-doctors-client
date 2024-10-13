import img1 from '../assets/images/banner/1.jpg';
import img2 from '../assets/images/banner/2.jpg';
import img3 from '../assets/images/banner/3.jpg';
import img4 from '../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1}
                    className="w-full" />
                <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full pl-8 grid items-center">
                    <div className='text-white w-3/4 space-y-6'>
                        <h3 className='text-7xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>Here, each & every customer can purchase any types of machine product very cheap price.</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2}
                    className="w-full" />
                <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full pl-8 grid items-center">
                    <div className='text-white w-3/4 space-y-6'>
                        <h3 className='text-7xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>Here, each & every customer can purchase any types of machine product very cheap price.</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3}
                    className="w-full" />
                <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full pl-8 grid items-center">
                    <div className='text-white w-3/4 space-y-6'>
                        <h3 className='text-7xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>Here, each & every customer can purchase any types of machine product very cheap price.</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4}
                    className="w-full" />
                <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full pl-8 grid items-center">
                    <div className='text-white w-3/4 space-y-6'>
                        <h3 className='text-7xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>Here, each & every customer can purchase any types of machine product very cheap price.</p>
                        <button className="btn btn-error">Discover More</button>
                        <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;