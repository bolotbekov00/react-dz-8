import ImgSlider from "./components/pages/main/ImgSlider";
const App = () => {
    const slides = [
        { url: "http://localhost:3000/mainImg/img1.jpg", title: "beach" },
        { url: "http://localhost:3000/mainImg/img2.jpg", title: "boat" },
        { url: "http://localhost:3000/mainImg/img3.jpg", title: "forest" },
    ];

    return (
        <div>
            <div className="containerStyles">
                <ImgSlider slides={slides} />
            </div>
        </div>
    );
};

export default App;
