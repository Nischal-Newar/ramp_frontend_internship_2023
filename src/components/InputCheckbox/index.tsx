import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  /* 
    Task 2: The input tag should be inside the label to enable the checkbox feature.
  */
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(!checked)}
        />
      </label>
    </div>
  )
}
