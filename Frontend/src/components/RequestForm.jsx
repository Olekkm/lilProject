import Input from "./Input.jsx";
import Select from "./Select.jsx";
import CheckBox from "./CheckBox.jsx";
import Button from "./Button.jsx";
import { Controller, useForm } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import IdModal from "./idModal.jsx";

export default function RequestForm() {
  const [cities, setCities] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [modalSettings, setModalSettings] = useState({
    isModalOpen: false,
    id: -1,
  });

  useEffect(() => {
    (async function getData() {
      const cities = await fetch(`/api/info/cities`);
      setCities(await cities.json());
      const sizes = await fetch(`/api/info/sizes`);
      setSizes(await sizes.json());
    })();
    return;
  }, []);

  const { handleSubmit, control, watch, reset } = useForm({
    mode: "onBlur",
  });
  const isOrg = watch("isOrg");

  const sendRequest = useCallback(
    async function (data) {
      const answer = await (
        await fetch(`/api/request/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
          }),
        })
      ).json();
      console.log(answer);
      if (answer) {
        setModalSettings({
          isModalOpen: true,
          id: answer,
        });
        reset();
      }
    },
    [reset]
  );

  return (
    <form
      style={{ marginTop: "4rem" }}
      className="classicFrame"
      onSubmit={handleSubmit(sendRequest)}
    >
      <IdModal
        open={modalSettings.isModalOpen}
        id={modalSettings.id}
        onClick={() =>
          setModalSettings((prev) => ({ ...prev, isModalOpen: false }))
        }
      />

      <div className="basePairDiv">
        <Controller
          name="CityFrom"
          control={control}
          rules={{ required: "Это обязательное поле" }}
          render={({ field }) => (
            <Select {...field} label="Откуда" options={cities} />
          )}
        ></Controller>
        <Controller
          name="CityTo"
          control={control}
          rules={{ required: "Это обязательное поле" }}
          render={({ field }) => (
            <Select {...field} label="Куда" options={cities} />
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
            <Select label="Размер посылки" options={sizes} {...field} />
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
