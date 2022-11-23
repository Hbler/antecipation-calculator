import { useCheckboxGroup, useForm, useInput } from "lx-react-form";

import Form from ".";
import Btn from "../buttons";
import Input from "../input";

export default function CalculatorForm() {
  const amount = useInput({
    name: "amount",
    customMask: {
      expressions: [
        { regex: /\D/g, replace: "" },
        { regex: /^(\d{1,11})$/g, replace: "R$$ $&" },
      ],
    },
  });

  const installments = useInput({
    name: "installments",
  });

  const mdr = useInput({
    name: "mdr",
  });

  const days = useCheckboxGroup({
    initialValue: ["15"],
    name: "days",
    min: 1,
    max: 4,
  });

  const calculatorForm = useForm({
    clearFields: true,
    formFields: [amount, installments, mdr, days],
    submitCallback: (formData) => {
      const { amount, installments, mdr, days } = formData;

      const cleanAmount = amount.replace(/\D/g, "");
      const convertDays = days.map((n: string) => +n);

      console.log(+cleanAmount, +installments, +mdr, convertDays);
    },
  });

  return (
    <>
      <h2>Simular Antecipação</h2>
      <Form callback={calculatorForm.handleSubmit}>
        <Input
          label="Informe o valor da venda"
          placeholder=""
          type="text"
          maxLength={14}
          name="amount"
          required
          field={amount}
          errors={amount.error}
        />

        <Input
          label="Em quantas parcelas"
          placeholder="Máximo de 12 parcelas"
          type="number"
          name="installments"
          max={12}
          required
          field={installments}
          errors={installments.error}
        />

        <Input
          label="Informe o percentual de MDR"
          placeholder=""
          type="number"
          name="mdr"
          required
          field={mdr}
          errors={mdr.error}
        />

        <div className="checkboxes">
          <Input
            label="Calcular 15 dias"
            placeholder=""
            type="checkbox"
            name="mdr"
            value="15"
            field={days}
            errors={days.error}
            checked="15"
          />
          <Input
            label="Calcular 30 dias"
            placeholder=""
            type="checkbox"
            name="mdr"
            value="30"
            field={days}
            errors={days.error}
            checked="30"
          />
          <Input
            label="Calcular 60 dias"
            placeholder=""
            type="checkbox"
            name="mdr"
            value="60"
            field={days}
            errors={days.error}
            checked="60"
          />
          <Input
            label="Calcular 90 dias"
            placeholder=""
            type="checkbox"
            name="mdr"
            value="90"
            field={days}
            errors={days.error}
            checked="90"
          />
        </div>

        <Btn color="purple" type="submit">
          Calcular
        </Btn>
      </Form>
    </>
  );
}
