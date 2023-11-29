import s from "./style.module.css";
import { Logo } from "../Logo/Logo";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className={`row w-100 ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/noteManagerApp/")}
          title="Notomatic"
          subtitle="Gere tes notes"
          image={logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/noteManagerApp/note/new/")}>
          Add Note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
