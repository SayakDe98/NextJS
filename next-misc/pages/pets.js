// import Image from "next/image";
import img from "../public/1.jpg";

const PetsPage = () => {
    return (
        <div>
            <img src = {img} placeholder = 'blur' alt = 'pet' width = '700' height = '350' />
            {
                ['1','2','4','5'].map(path => {
                    return (
                        <div key = {path}>
                            <img src={`/${path}.jpg`} alt = 'pet' width = '700' height = '350'/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PetsPage;