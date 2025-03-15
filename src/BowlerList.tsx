import { useEffect, useState } from "react";
import { bowler } from "./types/Bowler";

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch("https://localhost:44361/api/Bowler");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []);

  return (
    <>
      <h1>Bowler List</h1>
      <table>
        <thead>
          <tr>
            <th>Bowler Last Name</th>
            <th>Bowler First Name</th>
            <th>Bowler Middle Initial</th>
            <th>Bowler Address</th>
            <th>Bowler City</th>
            <th>Bowler State</th>
            <th>Bowler Zip</th>
            <th>Bowler Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
function fetchBowler() {
  throw new Error("Function not implemented.");
}
