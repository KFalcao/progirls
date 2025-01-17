import Link from "next/link";
import './style.css';


const Button = () => {
    return(
        <Link href="/contato">
        <button className="junteSe">Junte-se</button>
    </Link>
    )
}
export default Button;