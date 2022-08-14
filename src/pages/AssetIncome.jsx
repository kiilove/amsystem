import moment from "moment";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import AutoCompleteCombo from "../components/AutoCompleteCombo";

const category = [
  { id: 1, title: "데스크탑", code: "desktop" },
  { id: 2, title: "노트북", code: "notebook" },
  { id: 3, title: "모니터", code: "monitor" },
  { id: 4, title: "프린터", code: "printer" },
  { id: 5, title: "서버", code: "server" },
];

const AssetIncome = () => {
  const [inputs, setInputs] = useState({ incomePrice: 0 });
  const priceRef = useRef("");

  const handlePrice = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      incomePrice: value.replaceAll(",", ""),
    });
  };
  useEffect(() => {
    return () => {
      console.log(inputs);
    };
  }, [inputs]);

  return (
    <div id="Container" className="flex w-full space-10 flex-col p-4">
      <div className="flex flex-auto w-full h-full min-h-full bg-white rounded-md shadow-md p-5 flex-col">
        <div className="flex justify-start items-center w-full mb-5 ">
          <h1 className="text-sm font-semibold text-gray-700">자산입고</h1>
        </div>
        <div className="flex w-full h-full flex-col align-top p-10 space-y-3">
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                종류
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <div className="flex w-5/6">
                <select name="category" id="category">
                  {category.map((item, idx) => (
                    <option value={item.code} id={idx}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-1/5 justify-end">
                <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                  추가
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                관리번호
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="text"
                value={inputs.manageCode}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    manageCode: e.target.value.toUpperCase(),
                  });
                }}
              />
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                모델명
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="text"
                className="text"
                value={inputs.modelCode}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    modelCode: e.target.value.toUpperCase(),
                  });
                }}
              />
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                SN
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="text"
                className="text"
                value={inputs.sn}
                onChange={(e) => {
                  setInputs({ ...inputs, sn: e.target.value.toUpperCase() });
                }}
              />
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                취득가격
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="text"
                value={new Intl.NumberFormat().format(inputs.incomePrice)}
                onFocus={(e) => {
                  e.target.select();
                }}
                onChange={(e) => {
                  handlePrice(e);
                }}
                style={{ textAlign: "right", padding: "10px" }}
              />
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                취득일자
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="date"
                defaultValue={moment().format("YYYY-MM-DD")}
                value={inputs.incomeDate}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    incomeDate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex h-10">
            <div className="flex bg-gray-100 w-1/5 justify-end mr-3 h-10 items-center">
              <span className="flex mr-3 font-semibold text-base text-gray-500">
                취득경로
              </span>
            </div>
            <div className="flex bg-white w-4/5">
              <input
                type="text"
                className="text"
                value={inputs.partner}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    partner: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end p-10 space-x-5">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            저장
          </button>
          <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetIncome;
