import {InView} from "react-intersection-observer";

const Intersection = ({children,setInview}) => {
    return (
        <InView onChange={setInview}>
            {children}
        </InView>
    );
};

export default Intersection;
