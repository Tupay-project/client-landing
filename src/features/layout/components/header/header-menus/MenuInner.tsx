import { useIntl } from "react-intl";
import { MenuItem } from "./MenuItem";

export function MenuInner() {
  const intl = useIntl();
  return (
    <>
      <MenuItem
        title={intl.formatMessage({ id: "Inicio" })}
        to="/dashboard"
      />
      <MenuItem title="Salidas" to="/Salidas" />
      <MenuItem title="Ingresos" to="/Ingresos" />
      <MenuItem title="Targetas" to="/Targetas" />
      <MenuItem title="Dispersion USDT" to="/usdt-dispersion" />
      <MenuItem title="Detail" to="/Detail" />
    </>
  );
}
