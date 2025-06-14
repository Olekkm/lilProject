import Input from "./Input.jsx";
import { useCallback, useState } from "react";
import Select from "./Select.jsx";
import CheckBox from "./CheckBox.jsx";
import Button from "./Button.jsx";
import { Controller, useForm } from "react-hook-form";

export default function RequestForm() {
  const [cities, setCities] = useState([]);
  function getCities() {}
  const [sizes, setSizes] = useState([]);
  function getSizes() {}

  const options = [
    { id: 1, name: "qeqe" },
    { id: 2, name: "ewqeweqe" },
  ];
  const { handleSubmit, control, watch } = useForm({
    mode: "onBlur",
  });
  const isOrg = watch("isOrg");

  const handleChange = useCallback(function handleChange(value, func, name) {
    func((prev) => ({ ...prev, [name]: value }));
  }, []);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    organization: "",
  });

  return (
    <form
      style={{ marginTop: "4rem" }}
      className="classicFrame"
      onSubmit={handleSubmit(console.log)}
    >
      <div className="basePairDiv">
        <Controller
          name="CityFrom"
          control={control}
          rules={{ required: "Это обязательное поле" }}
          render={({ field }) => (
            <Select
              {...field}
              label="Откуда"
              options={[
                { id: 1, name: "qeqe" },
                { id: 2, name: "ewqeweqe" },
              ]}
            />
          )}
        ></Controller>
        <Controller
          name="CityTo"
          control={control}
          rules={{ required: "Это обязательное поле" }}
          render={({ field }) => (
            <Select {...field} label="Куда" options={options} />
          )}
        ></Controller>
      </div>
      <div key="2" className="basePairDiv" style={{ marginTop: "2rem" }}>
        <Controller
          name="isOrg"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <CheckBox label={"Юридическое отправление"} {...field} />
          )}
        ></Controller>

        {isOrg && (
          <Controller
            name="INN"
            control={control}
            rules={{ required: true }}
            defaultValue={""}
            render={({ field }) => (
              <Input label={"ИНН"} placeholder={"000000000000"} {...field} />
            )}
          />
        )}
      </div>
      <div key="3" className="basePairDiv" style={{ marginTop: "2rem" }}>
        <Controller
          name="Size"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select label="Размер посылки" options={options} {...field} />
          )}
        />
        <Controller
          name="Weight"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field }) => (
            <Input label={"Вес посылки"} placeholder={"кг"} {...field} />
          )}
        />
      </div>
      <div key="4" className="basePairDiv" style={{ marginTop: "2rem" }}>
        <Controller
          name="isFragile"
          control={control}
          defaultValue={false}
          render={({ field }) => <CheckBox label={"Хрупкое"} {...field} />}
        />

        <Controller
          name="isMessages"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <CheckBox label={"Дополнительное уведомление"} {...field} />
          )}
        />
      </div>
      <div key="5" className="basePairDiv" style={{ marginTop: "2rem" }}>
        <Controller
          name="Phone"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field }) => (
            <Input
              id={"phone"}
              placeholder={"+71112223344"}
              label={"Номер телефона"}
              {...field}
            />
          )}
        />
        <Controller
          name="Name"
          control={control}
          rules={{ required: true }}
          defaultValue={""}
          render={({ field }) => (
            <Input
              placeholder={"Иванов Иван Иванович"}
              label={"ФИО"}
              {...field}
            />
          )}
        />
      </div>
      <Button type="submit" value={"Отправить"} style={{ marginTop: "2rem" }} />
    </form>
  );
}
