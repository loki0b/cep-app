import type { Address } from "types"

function UserOutput({street, neighborhood, city, state}: Address) {
    const userAddress: string = `${street}, ${neighborhood}, ${city} - ${state}`;

    return (
        <div>
            <h1>Address</h1>
            <p>{userAddress}</p>
        </div>
    );
}

export default UserOutput;