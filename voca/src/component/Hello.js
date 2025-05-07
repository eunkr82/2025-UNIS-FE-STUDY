// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

import World from "./World";

export default function Hello () {
    return (
        <div>
            <h1 style={{
                color:"f00",
                borderRight: "12px solid #000",
                marginBottom: "50px",
                opacity: 0.5,

            }}>Hello</h1>
            <World />
            <World />
        </div>
    );
};