import { Driver } from "@/types";
import { getOrdinal } from "@/utils";

type Props = {
  driver: Driver;
  position: string;
};

function DriverListItem(props: Props) {
  const { driver, position } = props;
  const driverName = `${driver.givenName} ${driver.familyName}`;
  return (
    <div className="space-y-2">
      <h1 className="text-lg font-medium">{driverName}</h1>
      <p>Date of Birth: {driver.dateOfBirth}</p>
      <p>Nationality: {driver.nationality}</p>
      <p>Position: {getOrdinal(parseInt(position))}</p>
      {/* cannot find team in the API response */}
      <p>
        Bio: &nbsp;
        <a
          href={driver.url}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          {driver.url}
        </a>
      </p>
    </div>
  );
}

export default DriverListItem;
