import React from "react";

const Tables = (props) => {
  return (
    <table className="w-full">
      <thead className="bg-white border-b">
        <tr>
          {props.header.map((hItem, idx) => (
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {hItem.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            DT-20210901-001
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            2022-09-01
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            김진배
          </td>
        </tr>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            2
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            DT-20210901-002
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            2022-09-01
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            유한준
          </td>
        </tr>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            3
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            DT-20210901-003
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            2022-09-01
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            창고
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tables;
