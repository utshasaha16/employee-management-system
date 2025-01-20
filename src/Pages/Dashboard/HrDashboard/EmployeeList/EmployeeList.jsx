import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import useUserData from "../../../../Hooks/useUserData";

const EmployeeList = () => {
 const [userData] = useUserData();
 console.log(userData);
  
  
  const TABLE_HEAD = ["Name", "Email", "Varified", "Bank Account", "Salary", "", ""];
  // const TABLE_ROWS = [
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  //     name: "John Michael",
  //     email: "john@creative-tim.com",
  //     job: "Manager",
  //     org: "Organization",
  //     online: true,
  //     date: "23/04/18",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  //     name: "Alexa Liras",
  //     email: "alexa@creative-tim.com",
  //     job: "Programator",
  //     org: "Developer",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  //     name: "Laurent Perrier",
  //     email: "laurent@creative-tim.com",
  //     job: "Executive",
  //     org: "Projects",
  //     online: false,
  //     date: "19/09/17",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  //     name: "Michael Levi",
  //     email: "michael@creative-tim.com",
  //     job: "Programator",
  //     org: "Developer",
  //     online: true,
  //     date: "24/12/08",
  //   },
  //   {
  //     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
  //     name: "Richard Gran",
  //     email: "richard@creative-tim.com",
  //     job: "Manager",
  //     org: "Executive",
  //     online: false,
  //     date: "04/10/21",
  //   },
  // ];

  return (
    <Card className="h-full w-full p-3">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Employee list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all employees
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(
              ({ name, email, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                     100
                    </td>
                    <td className={classes}>
                      <button className="px-2 rounded-sm py-1 bg-blue-gray-700 text-white">
                        pay
                      </button>
                    </td>
                    <td className={classes}>
                      <button className="px-2 py-1 rounded-sm bg-blue-gray-700 text-white">
                        Details
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default EmployeeList;
